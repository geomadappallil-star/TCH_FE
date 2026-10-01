export type PersonaType = 'participant' | 'coordinator' | 'provider' | 'jobseeker';

export interface ServiceDetail {
  id: string;
  title: string;
  category: 'nursing' | 'home' | 'staffing';
  description: string;
  iconName: string;
  badge?: string;
  highlights: string[];
}

export interface SuburbGroup {
  zone: string;
  description: string;
  suburbs: string[];
  travelPolicy: string;
}

export interface EnquiryPayload {
  name: string;
  phone: string;
  email?: string;
  suburb?: string;
  enquiryType: string;
  service: string;
  message: string;
  fundingType?: string;
}

export interface ShiftRequestPayload {
  providerName: string;
  contactPerson: string;
  phone: string;
  email: string;
  roleRequired: string;
  shiftDate: string;
  shiftTimes: string;
  locationSuburb: string;
  notes?: string;
  urgency: 'routine' | 'urgent_24h' | 'emergency_sameday';
}
