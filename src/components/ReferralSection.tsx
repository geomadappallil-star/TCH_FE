import React, { useState } from 'react';
import { 
  Stethoscope, 
  Heart, 
  Clock, 
  ExternalLink, 
  ArrowRight, 
  CheckCircle2, 
  AlertCircle,
  Building2,
  Mail,
  Phone
} from 'lucide-react';
import { submitEnquiry } from '../services/enquiryService.js';

const SPLOSE_FCA_URL = 'https://tchservices.splose.com/public-form/2c733ea1-1b3a-41d5-87d7-98ba320cd4f8';

export const ReferralSection: React.FC = () => {
  // Option 2 Form State
  const [formData, setFormData] = useState({
    referrerName: '',
    organisation: '',
    email: '',
    phone: '',
    clientName: '',
    suburb: '',
    fundingType: 'NDIS plan-managed',
    services: {
      ndis: false,
      nursing: false,
      cleaning: false,
      gardening: false,
      accommodation: false,
      other: false,
    },
    notes: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleCheckboxChange = (serviceKey: keyof typeof formData.services) => {
    setFormData(prev => ({
      ...prev,
      services: {
        ...prev.services,
        [serviceKey]: !prev.services[serviceKey]
      }
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!formData.referrerName || !formData.phone || !formData.clientName) {
      setErrorMessage('Please provide your name, phone number, and the client’s name.');
      return;
    }

    setIsSubmitting(true);

    try {
      const selectedServices = Object.entries(formData.services)
        .filter(([_, checked]) => checked)
        .map(([key]) => {
          switch (key) {
            case 'ndis': return 'NDIS Supports';
            case 'nursing': return 'Nursing';
            case 'cleaning': return 'Domestic & Cleaning';
            case 'gardening': return 'Gardening';
            case 'accommodation': return 'Accommodation';
            default: return 'Other';
          }
        });

      const messageContent = [
        `Referrer: ${formData.referrerName} (${formData.organisation || 'Independent'})`,
        `Referrer Contact: ${formData.email} | ${formData.phone}`,
        `Client: ${formData.clientName} (${formData.suburb || 'Townsville'})`,
        `Funding: ${formData.fundingType}`,
        `Selected Services: ${selectedServices.length > 0 ? selectedServices.join(', ') : 'Not specified'}`,
        `Notes / Goals: ${formData.notes || 'None provided'}`
      ].join('\n');

      const res = await submitEnquiry({
        name: `${formData.clientName} (Ref: ${formData.referrerName})`,
        phone: formData.phone,
        email: formData.email,
        suburb: formData.suburb || 'Townsville',
        service: selectedServices.length > 0 ? selectedServices.join(', ') : 'General Referral',
        fundingType: formData.fundingType,
        enquiryType: 'Referral Form Intake',
        message: messageContent
      });

      if (res.success) {
        setSubmitSuccess(res.referenceId || 'REF-CONFIRMED');
        setFormData({
          referrerName: '',
          organisation: '',
          email: '',
          phone: '',
          clientName: '',
          suburb: '',
          fundingType: 'NDIS plan-managed',
          services: {
            ndis: false,
            nursing: false,
            cleaning: false,
            gardening: false,
            accommodation: false,
            other: false,
          },
          notes: '',
        });
      } else {
        setErrorMessage('Could not process referral right now. Please call 0431 430 905 directly.');
      }
    } catch (err) {
      setErrorMessage('Connection error. Please call 0431 430 905 or email admin@tchservices.com.au.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="referral" className="relative z-10 py-16 md:py-24 border-t border-[#EADFCB]">
      
      {/* 1. Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14 text-center flex flex-col items-center">
        <span className="text-xs font-bold tracking-widest uppercase text-[#B5651D] mb-2">
          Make a referral
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0A3D47] max-w-3xl leading-tight">
          Refer someone to TCH. It only takes a few minutes.
        </h2>
        <p className="text-lg text-[#3E4F55] mt-3 max-w-2xl leading-relaxed">
          Support coordinators, plan managers, health professionals, families and participants are all welcome to refer. Choose the form that fits below and we&#8217;ll be in touch quickly.
        </p>
      </div>

      {/* 2. Side-by-Side Options */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* ========================================================
              OPTION 1: Allied Health Referral (Splose Form Link)
              ======================================================== */}
          <div className="lg:col-span-5 glass-panel p-6 sm:p-8 border-t-8 border-t-[#0B5563] space-y-6">
            
            <div className="flex items-center justify-between">
              <span className="px-3.5 py-1 rounded-full bg-[#E3F1F1] text-[#0B5563] text-xs font-bold uppercase tracking-wider">
                Option 1
              </span>
              <span className="text-xs font-semibold text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-emerald-600" /> Fast Intake
              </span>
            </div>

            <div className="w-14 h-14 rounded-2xl bg-[#E3F1F1] flex items-center justify-center text-[#0B5563]">
              <Stethoscope className="w-7 h-7" />
            </div>

            <div className="space-y-2">
              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#0A3D47]">
                Allied health referral
              </h3>
              <p className="text-sm sm:text-base text-[#4A5A60] leading-relaxed">
                For occupational therapy (including Functional Capacity Assessments), physiotherapy, speech pathology, dietetics, exercise physiology, psychology and counselling.
              </p>
            </div>

            {/* 2-Week FCA Badge */}
            <div className="bg-[#FFF1DA] rounded-2xl p-4 flex items-center gap-3.5 border border-[#F4A62A]/30">
              <Clock className="w-6 h-6 text-[#B5651D] flex-shrink-0" />
              <span className="font-bold text-sm text-[#3A2A10]">
                Functional Capacity Assessments in just 2 weeks
              </span>
            </div>

            {/* Open Splose Button */}
            <a
              href={SPLOSE_FCA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-base btn-teal w-full justify-center text-sm sm:text-base py-3.5 shadow-md flex items-center gap-2 group"
            >
              <span>Open allied health referral form</span>
              <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </a>

            <p className="text-xs text-[#4A5A60] text-center">
              Opens our secure referral form in a new tab.
            </p>

            <div className="pt-4 border-t border-gray-200 text-xs text-gray-500 space-y-1">
              <p>✓ Instant confirmation upon submit</p>
              <p>✓ Directly received by TCH Allied Health clinical lead</p>
            </div>

          </div>

          {/* ========================================================
              OPTION 2: All Other Referrals (Interactive Form)
              ======================================================== */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-8 border-t-8 border-t-[#F4A62A] space-y-6">
            
            <div className="flex items-center justify-between">
              <span className="px-3.5 py-1 rounded-full bg-[#FFF1DA] text-[#8C631B] text-xs font-bold uppercase tracking-wider">
                Option 2
              </span>
              <span className="text-xs font-semibold text-gray-500">
                Direct TCH Coordinator Intake
              </span>
            </div>

            <div className="w-14 h-14 rounded-2xl bg-[#FFF1DA] flex items-center justify-center text-[#B5651D]">
              <Heart className="w-7 h-7" />
            </div>

            <div className="space-y-1">
              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#0A3D47]">
                All other referrals
              </h3>
              <p className="text-sm sm:text-base text-[#4A5A60] leading-relaxed">
                For NDIS supports, nursing, domestic and cleaning, gardening and accommodation.
              </p>
            </div>

            {/* Success Notification */}
            {submitSuccess ? (
              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 space-y-3 animate-fadeIn">
                <div className="flex items-center gap-2 text-emerald-700 font-bold text-lg">
                  <CheckCircle2 className="w-6 h-6" />
                  <span>Referral Dispatched Successfully</span>
                </div>
                <p className="text-sm">
                  Thank you. Your referral has been logged with reference code <strong>{submitSuccess}</strong> and sent to <strong>admin@tchservices.com.au</strong>. Our clinical coordinator will reach out shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitSuccess(null)}
                  className="btn-base btn-teal text-xs px-4 py-2 mt-2"
                >
                  Submit another referral
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-left">
                
                {errorMessage && (
                  <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Referrer Details Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <label className="text-xs font-bold text-[#0A3D47] flex flex-col gap-1.5">
                    Your name *
                    <input
                      type="text"
                      required
                      value={formData.referrerName}
                      onChange={(e) => setFormData({ ...formData, referrerName: e.target.value })}
                      placeholder="e.g. Sarah Jenkins"
                      className="glass-input text-sm"
                    />
                  </label>

                  <label className="text-xs font-bold text-[#0A3D47] flex flex-col gap-1.5">
                    Organisation (if any)
                    <input
                      type="text"
                      value={formData.organisation}
                      onChange={(e) => setFormData({ ...formData, organisation: e.target.value })}
                      placeholder="e.g. North QLD Support Services"
                      className="glass-input text-sm"
                    />
                  </label>
                </div>

                {/* Contact Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <label className="text-xs font-bold text-[#0A3D47] flex flex-col gap-1.5">
                    Email address
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. coordinator@domain.com"
                      className="glass-input text-sm"
                    />
                  </label>

                  <label className="text-xs font-bold text-[#0A3D47] flex flex-col gap-1.5">
                    Phone number *
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 0400 123 456"
                      className="glass-input text-sm"
                    />
                  </label>
                </div>

                {/* Client Details Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                  <label className="text-xs font-bold text-[#0A3D47] flex flex-col gap-1.5 sm:col-span-1">
                    Client name *
                    <input
                      type="text"
                      required
                      value={formData.clientName}
                      onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                      placeholder="e.g. Michael Smith"
                      className="glass-input text-sm"
                    />
                  </label>

                  <label className="text-xs font-bold text-[#0A3D47] flex flex-col gap-1.5 sm:col-span-1">
                    Client suburb or town
                    <input
                      type="text"
                      value={formData.suburb}
                      onChange={(e) => setFormData({ ...formData, suburb: e.target.value })}
                      placeholder="e.g. Townsville, Cairns, Mackay"
                      className="glass-input text-sm"
                    />
                  </label>

                  <label className="text-xs font-bold text-[#0A3D47] flex flex-col gap-1.5 sm:col-span-1">
                    Funding type
                    <select
                      value={formData.fundingType}
                      onChange={(e) => setFormData({ ...formData, fundingType: e.target.value })}
                      className="glass-input text-sm bg-white"
                    >
                      <option>NDIS plan-managed</option>
                      <option>NDIS self-managed</option>
                      <option>Aged care</option>
                      <option>Veterans’ Home Care (VHC)</option>
                      <option>Private</option>
                    </select>
                  </label>
                </div>

                {/* Services Needed Checkboxes */}
                <fieldset className="pt-2">
                  <legend className="text-xs font-bold text-[#0A3D47] mb-2 block">
                    Services needed (select all that apply)
                  </legend>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                    {[
                      { key: 'ndis', label: 'NDIS supports' },
                      { key: 'nursing', label: 'Nursing' },
                      { key: 'cleaning', label: 'Domestic & cleaning' },
                      { key: 'gardening', label: 'Gardening' },
                      { key: 'accommodation', label: 'Accommodation' },
                      { key: 'other', label: 'Other' },
                    ].map((item) => (
                      <label 
                        key={item.key}
                        className="flex items-center gap-2 p-2.5 rounded-xl border border-gray-200/80 bg-white/70 hover:bg-white text-xs font-bold text-[#1E2B30] cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={formData.services[item.key as keyof typeof formData.services]}
                          onChange={() => handleCheckboxChange(item.key as keyof typeof formData.services)}
                          className="w-4 h-4 accent-[#0B5563] rounded cursor-pointer"
                        />
                        <span>{item.label}</span>
                      </label>
                    ))}
                  </div>
                </fieldset>

                {/* Notes Textarea */}
                <label className="text-xs font-bold text-[#0A3D47] flex flex-col gap-1.5 pt-1">
                  Anything else we should know?
                  <textarea
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Goals, support needs, preferred days..."
                    className="glass-input text-sm resize-none"
                  />
                </label>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-base btn-mango text-sm sm:text-base px-6 py-3.5 shadow-md flex items-center gap-2 group disabled:opacity-60"
                >
                  <span>{isSubmitting ? 'Sending Referral...' : 'Send referral'}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </button>

              </form>
            )}

          </div>

        </div>
      </div>

    </section>
  );
};
