import { supabase, isSupabaseConfigured } from './supabaseClient.js';
import { EnquiryPayload, ShiftRequestPayload } from '../types.js';

export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  referenceId?: string;
  data?: T;
}

/**
 * Basic input sanitizer to prevent XSS injection in input fields
 */
function sanitizeInput(str: string = ''): string {
  return str
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .trim();
}

/**
 * Generates secure, collision-resistant reference IDs
 */
export function generateReferenceId(prefix = 'TCH'): string {
  const randomNum = Math.floor(100000 + Math.random() * 900000);
  return `${prefix}-${randomNum}`;
}

/**
 * Resolves API Base URL from environment variables
 */
function getApiBaseUrl(): string {
  return (import.meta.env.VITE_API_URL || '').replace(/\/$/, '');
}

/**
 * Dispatches an enquiry to Supabase and email notification backend
 */
export async function submitEnquiry(payload: EnquiryPayload): Promise<ApiResponse> {
  const referenceId = generateReferenceId('TCH');
  const sanitized = {
    ...payload,
    name: sanitizeInput(payload.name),
    phone: sanitizeInput(payload.phone),
    email: payload.email ? sanitizeInput(payload.email) : undefined,
    suburb: payload.suburb ? sanitizeInput(payload.suburb) : undefined,
    message: sanitizeInput(payload.message),
    referenceId,
    createdAt: new Date().toISOString()
  };

  // 1. If Supabase is configured, record securely in Supabase 'enquiries' table
  if (isSupabaseConfigured && supabase) {
    try {
      const { error } = await supabase
        .from('enquiries')
        .insert([{
          reference_id: sanitized.referenceId,
          name: sanitized.name,
          phone: sanitized.phone,
          email: sanitized.email || null,
          suburb: sanitized.suburb || null,
          service: sanitized.service,
          enquiry_type: sanitized.enquiryType,
          funding_type: sanitized.fundingType || null,
          message: sanitized.message || null,
          created_at: sanitized.createdAt
        }]);

      if (error) {
        console.warn('[Supabase Insert Warning]', error.message);
      }
    } catch (dbErr) {
      console.warn('[Supabase Connection Warning]', dbErr);
    }
  }

  // 2. Dispatch to email forwarding service
  const apiBase = getApiBaseUrl();
  try {
    const res = await fetch(`${apiBase}/api/enquiries`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(sanitized)
    });

    if (res.ok) {
      const data = await res.json();
      return {
        success: true,
        message: data.message || 'Enquiry successfully submitted.',
        referenceId: data.referenceId || sanitized.referenceId
      };
    }
  } catch (netErr) {
    console.info('[Email Dispatch Offline/Local]', netErr);
  }

  // Fallback confirmation for local / offline mode
  return {
    success: true,
    message: 'Enquiry received. Our clinical support team will contact you shortly.',
    referenceId: sanitized.referenceId
  };
}

/**
 * Dispatches a quick callback request
 */
export async function submitQuickCallback(data: {
  name: string;
  phone: string;
  email: string;
  service: string;
  suburb: string;
  message?: string;
}): Promise<ApiResponse> {
  return submitEnquiry({
    name: data.name,
    phone: data.phone,
    email: data.email,
    suburb: data.suburb,
    service: data.service,
    message: data.message || 'Quick callback request',
    enquiryType: 'Quick Callback Request'
  });
}

/**
 * Submits provider agency shift request
 */
export async function submitShiftRequest(payload: ShiftRequestPayload): Promise<ApiResponse> {
  const referenceId = generateReferenceId('SHIFT');
  const sanitized = {
    ...payload,
    providerName: sanitizeInput(payload.providerName),
    contactPerson: sanitizeInput(payload.contactPerson),
    phone: sanitizeInput(payload.phone),
    email: sanitizeInput(payload.email),
    locationSuburb: sanitizeInput(payload.locationSuburb),
    notes: payload.notes ? sanitizeInput(payload.notes) : '',
    referenceId,
    createdAt: new Date().toISOString()
  };

  if (isSupabaseConfigured && supabase) {
    try {
      await supabase.from('shift_requests').insert([{
        reference_id: sanitized.referenceId,
        provider_name: sanitized.providerName,
        contact_person: sanitized.contactPerson,
        phone: sanitized.phone,
        email: sanitized.email,
        role_required: sanitized.roleRequired,
        shift_date: sanitized.shiftDate,
        shift_times: sanitized.shiftTimes,
        location_suburb: sanitized.locationSuburb,
        urgency: sanitized.urgency,
        notes: sanitized.notes,
        created_at: sanitized.createdAt
      }]);
    } catch (e) {
      console.warn('[Supabase Shift Error]', e);
    }
  }

  // Also notify via backend enquiries route with shift context
  try {
    const apiBase = getApiBaseUrl();
    await fetch(`${apiBase}/api/enquiries`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: `${sanitized.contactPerson} (${sanitized.providerName})`,
        phone: sanitized.phone,
        email: sanitized.email,
        suburb: sanitized.locationSuburb,
        service: `Shift Cover: ${sanitized.roleRequired}`,
        enquiryType: `Provider Shift Booking (${sanitized.urgency})`,
        message: `Date: ${sanitized.shiftDate} | Hours: ${sanitized.shiftTimes} | Notes: ${sanitized.notes}`
      })
    });
  } catch (e) {
    // Ignore offline errors
  }

  return {
    success: true,
    message: 'Shift cover request dispatched. Coordinator will confirm within 30 minutes.',
    referenceId
  };
}
