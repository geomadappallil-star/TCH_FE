import React, { useState } from 'react';
import { 
  Stethoscope, 
  Heart, 
  Clock, 
  ExternalLink, 
  Send, 
  CheckCircle2, 
  AlertCircle,
  Check
} from 'lucide-react';
import { submitEnquiry } from '../services/enquiryService.js';
import { CommonCtaBanner } from '../components/CommonCtaBanner.js';

export const ReferralPage: React.FC = () => {
  const SPLOSE_FCA_URL = 'https://tchservices.splose.com/public-form/2c733ea1-1b3a-41d5-87d7-98ba320cd4f8';

  const [formData, setFormData] = useState({
    referrerName: '',
    organisation: '',
    email: '',
    phone: '',
    clientName: '',
    clientSuburb: '',
    fundingType: 'NDIS plan-managed',
    services: [] as string[],
    notes: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{ success: boolean; message: string; refId?: string } | null>(null);

  const availableServices = [
    'NDIS supports',
    'Nursing',
    'Domestic & cleaning',
    'Gardening',
    'Accommodation',
    'Other'
  ];

  const handleServiceToggle = (svc: string) => {
    setFormData(prev => {
      const exists = prev.services.includes(svc);
      return {
        ...prev,
        services: exists
          ? prev.services.filter(s => s !== svc)
          : [...prev.services, svc]
      };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFeedback(null);

    try {
      const fullMessage = [
        `[REFERRAL SUBMISSION]`,
        `Referrer: ${formData.referrerName} (${formData.organisation || 'Independent'})`,
        `Client: ${formData.clientName} (Town/Suburb: ${formData.clientSuburb || 'Not specified'})`,
        `Funding: ${formData.fundingType}`,
        `Services Requested: ${formData.services.join(', ') || 'None specified'}`,
        `Notes / Support Goals: ${formData.notes || 'None provided'}`
      ].join('\n');

      const result = await submitEnquiry({
        name: formData.referrerName,
        email: formData.email,
        phone: formData.phone,
        suburb: formData.clientSuburb || 'Townsville',
        enquiryType: 'referral',
        service: formData.services.length > 0 ? formData.services.join(', ') : 'General Referral',
        fundingType: formData.fundingType,
        message: fullMessage
      });

      if (result.success) {
        setFeedback({
          success: true,
          message: 'Referral received successfully. Our intake coordinator will review this and contact you within 24-48 business hours.',
          refId: result.referenceId || `REF-${Math.floor(100000 + Math.random() * 900000)}`
        });
        setFormData({
          referrerName: '',
          organisation: '',
          email: '',
          phone: '',
          clientName: '',
          clientSuburb: '',
          fundingType: 'NDIS plan-managed',
          services: [],
          notes: ''
        });
      } else {
        setFeedback({
          success: false,
          message: result.message || 'Failed to submit referral online. Please call 0431 430 905 or email admin@tchservices.com.au directly.'
        });
      }
    } catch (err: any) {
      setFeedback({
        success: false,
        message: 'A network error occurred. Please call our coordinator on 0431 430 905 or email admin@tchservices.com.au.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#FBF5EA] min-h-screen font-sans">
      {/* 1. HEADER */}
      <section className="pt-8 sm:pt-12 md:pt-16 pb-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <span className="text-xs sm:text-sm font-heading font-extrabold tracking-widest uppercase text-[#0B5563] block mb-2">
          MAKE A REFERRAL
        </span>
        <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#0A3D47] tracking-tight max-w-4xl mx-auto leading-[1.1]">
          Refer someone to TCH. It only takes a few minutes.
        </h1>
        <p className="text-base sm:text-lg text-[#1E2B30]/85 max-w-3xl mx-auto mt-4 font-sans leading-relaxed">
          Support coordinators, plan managers, health professionals, families and participants are all welcome to refer. Choose the form that fits below and we’ll be in touch quickly.
        </p>
      </section>

      {/* 2. TWO OPTIONS SIDE BY SIDE */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* OPTION 1: ALLIED HEALTH REFERRAL (Splose) */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-[#0B5563]/15 shadow-sm space-y-6">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#E3EFF1] text-[#0B5563] text-xs font-bold">
              Option 1
            </div>

            <div className="w-12 h-12 rounded-2xl bg-[#FDF3E3] text-[#F4A62A] flex items-center justify-center shadow-xs">
              <Stethoscope className="w-6 h-6 stroke-[2.2]" />
            </div>

            <div className="space-y-3">
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#0A3D47]">
                Allied health referral
              </h2>
              <p className="text-sm sm:text-base text-[#1E2B30]/85 leading-relaxed font-sans">
                For occupational therapy (including Functional Capacity Assessments), physiotherapy, speech pathology, dietetics, exercise physiology, psychology and counselling.
              </p>
            </div>

            {/* 2-Week FCA Notice Pill */}
            <div className="p-4 rounded-2xl bg-[#FBF5EA] border border-[#F4A62A]/40 flex items-center gap-3 text-xs sm:text-sm text-[#0A3D47] font-semibold">
              <Clock className="w-5 h-5 text-[#F4A62A] flex-shrink-0" />
              <span>Functional Capacity Assessments in just 2 weeks</span>
            </div>

            {/* CTA Button */}
            <div>
              <a
                href={SPLOSE_FCA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-teal w-full text-center inline-flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <span>Open allied health referral form</span>
                <ExternalLink className="w-4 h-4 ml-1" />
              </a>
              <p className="text-xs text-[#1E2B30]/65 text-center mt-2.5">
                Opens our secure referral form in a new tab.
              </p>
            </div>
          </div>

          {/* OPTION 2: ALL OTHER REFERRALS (In-app Form) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-[#0B5563]/15 shadow-sm space-y-6">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#FDEFD6] text-[#B87208] text-xs font-bold">
              Option 2
            </div>

            <div className="w-12 h-12 rounded-2xl bg-[#E3EFF1] text-[#0B5563] flex items-center justify-center shadow-xs">
              <Heart className="w-6 h-6 stroke-[2.2]" />
            </div>

            <div className="space-y-2">
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#0A3D47]">
                All other referrals
              </h2>
              <p className="text-sm sm:text-base text-[#1E2B30]/85 font-sans leading-relaxed">
                For NDIS supports, nursing, domestic and cleaning, gardening and accommodation.
              </p>
            </div>

            {/* Success Feedback Banner */}
            {feedback && (
              <div
                className={`p-5 rounded-2xl text-sm font-sans flex items-start gap-3.5 ${
                  feedback.success
                    ? 'bg-emerald-50 border border-emerald-200 text-emerald-900'
                    : 'bg-red-50 border border-red-200 text-red-900'
                }`}
              >
                {feedback.success ? (
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                ) : (
                  <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                )}
                <div className="space-y-1">
                  <p className="font-bold">
                    {feedback.success ? 'Referral Submitted Successfully!' : 'Submission Error'}
                  </p>
                  <p className="text-xs sm:text-sm leading-relaxed">{feedback.message}</p>
                  {feedback.refId && (
                    <p className="text-xs font-mono font-bold text-emerald-700 pt-1">
                      Reference ID: {feedback.refId}
                    </p>
                  )}
                </div>
              </div>
            )}

            {/* Option 2 In-App Form */}
            <form onSubmit={handleSubmit} className="space-y-4 font-sans text-sm">
              {/* Row 1: Your name | Organisation (if any) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0A3D47] mb-1">
                    Your name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.referrerName}
                    onChange={(e) => setFormData({ ...formData, referrerName: e.target.value })}
                    placeholder="e.g. Sarah Smith"
                    className="w-full form-control-48"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0A3D47] mb-1">
                    Organisation (if any)
                  </label>
                  <input
                    type="text"
                    value={formData.organisation}
                    onChange={(e) => setFormData({ ...formData, organisation: e.target.value })}
                    placeholder="e.g. North QLD Coordination"
                    className="w-full form-control-48"
                  />
                </div>
              </div>

              {/* Row 2: Email | Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0A3D47] mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="sarah@example.com"
                    className="w-full form-control-48"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0A3D47] mb-1">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="0400 000 000"
                    className="w-full form-control-48"
                  />
                </div>
              </div>

              {/* Row 3: Client name | Client suburb or town */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0A3D47] mb-1">
                    Client name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.clientName}
                    onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                    placeholder="e.g. John Doe"
                    className="w-full form-control-48"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0A3D47] mb-1">
                    Client suburb or town *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.clientSuburb}
                    onChange={(e) => setFormData({ ...formData, clientSuburb: e.target.value })}
                    placeholder="e.g. Townsville, Ayr, Ingham..."
                    className="w-full form-control-48"
                  />
                </div>
              </div>

              {/* Row 4: Funding type */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#0A3D47] mb-1">
                  Funding type
                </label>
                <select
                  value={formData.fundingType}
                  onChange={(e) => setFormData({ ...formData, fundingType: e.target.value })}
                  className="w-full form-control-48"
                >
                  <option value="NDIS plan-managed">NDIS plan-managed</option>
                  <option value="NDIS self-managed">NDIS self-managed</option>
                  <option value="Aged care / HCP">Aged care</option>
                  <option value="Veterans' Home Care (VHC)">Veterans’ Home Care (VHC)</option>
                  <option value="Private client">Private client</option>
                  <option value="Unsure / Need Advice">Unsure / Need Advice</option>
                </select>
              </div>

              {/* Row 5: Services needed (Checkboxes) */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#0A3D47] mb-2">
                  Services needed
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {availableServices.map((svc) => {
                    const checked = formData.services.includes(svc);
                    return (
                      <label
                        key={svc}
                        onClick={() => handleServiceToggle(svc)}
                        className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all ${
                          checked
                            ? 'bg-[#0B5563]/10 border-[#0B5563] text-[#0A3D47] font-bold'
                            : 'bg-white border-[#D9CEBA] text-[#1E2B30] hover:bg-black/5'
                        }`}
                      >
                        <div
                          className={`w-5 h-5 rounded-md flex items-center justify-center transition-colors ${
                            checked ? 'bg-[#0B5563] text-white' : 'border-2 border-gray-400'
                          }`}
                        >
                          {checked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                        </div>
                        <span className="text-sm select-none">{svc}</span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Row 6: Anything else we should know? */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#0A3D47] mb-1">
                  Anything else we should know?
                </label>
                <textarea
                  rows={4}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Goals, support needs, preferred days..."
                  className="w-full rounded-2xl border border-[#D9CEBA] bg-white p-3.5 text-sm focus:outline-none focus:border-[#0B5563]"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-mango w-full text-center group"
                >
                  <span>{isSubmitting ? 'Sending Referral...' : 'Send referral'}</span>
                  <Send className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};
