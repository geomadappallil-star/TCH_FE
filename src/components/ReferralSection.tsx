import React, { useState } from 'react';
import { 
  FileText, 
  ExternalLink, 
  CheckCircle2, 
  Send, 
  Clock, 
  Sparkles, 
  Phone, 
  Mail, 
  Building2, 
  Stethoscope, 
  Heart, 
  ShieldCheck,
  UserCheck,
  Check
} from 'lucide-react';
import { submitEnquiry } from '../services/enquiryService.js';

export const ReferralSection: React.FC = () => {
  // General referral form state
  const [formData, setFormData] = useState({
    referrerName: '',
    referrerRole: 'Support Coordinator',
    phone: '',
    email: '',
    participantName: '',
    fundingType: 'Plan-Managed NDIS',
    suburb: 'Townsville',
    services: [] as string[],
    notes: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{ success: boolean; message: string; refId?: string } | null>(null);

  const availableServices = [
    'Clinical Nursing Care (Wound, Diabetes, Medication)',
    'NDIS Personal Care & Daily Living Support',
    'Community Access & Social Participation',
    '1 & 2-Bedroom Accommodation Units (Townsville)',
    'Gardening Services (Mowing, Edging, Pruning up to 4m)',
    'Domestic Cleaning Services (General Housekeeping)'
  ];

  const handleServiceToggle = (service: string) => {
    setFormData(prev => {
      const exists = prev.services.includes(service);
      return {
        ...prev,
        services: exists 
          ? prev.services.filter(s => s !== service)
          : [...prev.services, service]
      };
    });
  };

  const handleGeneralSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFeedback(null);

    const fullMessage = `
Referrer: ${formData.referrerName} (${formData.referrerRole})
Participant: ${formData.participantName || 'Not specified'}
Funding: ${formData.fundingType}
Town / Suburb: ${formData.suburb}
Selected Services:
${formData.services.length > 0 ? formData.services.map(s => ` - ${s}`).join('\n') : 'General Inquiry'}

Referral Notes:
${formData.notes || 'None provided'}
    `.trim();

    const result = await submitEnquiry({
      name: formData.referrerName,
      phone: formData.phone,
      email: formData.email,
      suburb: formData.suburb,
      fundingType: formData.fundingType,
      service: formData.services.length > 0 ? formData.services.join(', ') : 'General Support Referral',
      enquiryType: 'Formal Client Referral',
      message: fullMessage
    });

    setFeedback({
      success: result.success,
      message: result.message || 'Referral submitted successfully.',
      refId: result.referenceId
    });

    if (result.success) {
      setFormData({
        referrerName: '',
        referrerRole: 'Support Coordinator',
        phone: '',
        email: '',
        participantName: '',
        fundingType: 'Plan-Managed NDIS',
        suburb: 'Townsville',
        services: [],
        notes: ''
      });
    }
    setIsSubmitting(false);
  };

  return (
    <section id="referral" className="scroll-mt-20 py-20 bg-[#FFF3E2] relative overflow-hidden border-b border-[#0B4F51]/10">
      
      {/* Decorative Blobs */}
      <div className="absolute top-10 right-10 w-96 h-96 rounded-full bg-[#F9B835]/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-[#EF85AA]/15 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 fadeInFromBottom">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#0B4F51]/15 text-[#0B4F51] text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#F9B835]" />
            <span>Dual Referral Pathways</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0B4F51] leading-tight">
            Make a Referral to <br className="hidden sm:inline" />
            <span className="color-secondary">TCH Support Services.</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-700 mt-4 leading-relaxed font-sans">
            Please select the designated referral pathway below for the fastest intake and review.
          </p>
        </div>

        {/* 2-Column Split: Section 1 (Splose Allied Health) & Section 2 (All Other Referrals) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* SECTION 1: Allied Health Services (Splose Intake Portal) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#0B4F51] via-[#073B3C] to-[#042627] text-white rounded-3xl p-8 sm:p-10 shadow-xl border-2 border-[#F9B835]/40 relative overflow-hidden flex flex-col justify-between">
            
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="px-3 py-1 rounded-full bg-[#F9B835]/20 text-[#F9B835] text-xs font-bold uppercase tracking-wider border border-[#F9B835]/40">
                  Section 1 · Dedicated Form
                </span>
                <span className="flex items-center gap-1.5 text-xs text-emerald-200 font-semibold">
                  <Clock className="w-3.5 h-3.5 text-[#F9B835]" /> 2-Week FCA
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                Allied Health Services Referral
              </h3>
              <p className="text-sm text-teal-100 mb-6 leading-relaxed font-sans">
                Direct clinical referral portal for Functional Capacity Assessments (FCAs), therapy plans, and home equipment reviews.
              </p>

              {/* Covered Allied Health Disciplines */}
              <div className="space-y-3 mb-8">
                <div className="p-4 sm:p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15">
                  <h4 className="font-bold text-xs uppercase tracking-wider text-[#F9B835] mb-2.5">
                    Disciplines Included:
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-emerald-50 font-sans">
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#F9B835] flex-shrink-0" />
                      <span>Occupational Therapy (OT)</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#F9B835] flex-shrink-0" />
                      <span>Physiotherapy</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#F9B835] flex-shrink-0" />
                      <span>Speech Pathology</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#F9B835] flex-shrink-0" />
                      <span>Dietetics</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#F9B835] flex-shrink-0" />
                      <span>Exercise Physiology</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#F9B835] flex-shrink-0" />
                      <span>Psychology &amp; Counselling</span>
                    </li>
                  </ul>
                </div>

                <div className="p-4 rounded-2xl bg-black/20 border border-emerald-400/30 text-xs text-teal-100 space-y-1.5 font-sans">
                  <p className="font-bold text-white flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-[#F9B835]" />
                    Fast-Tracked 2-Week Report Guarantee
                  </p>
                  <p>
                    Completed via our encrypted clinical platform (Splose) for direct triage by our senior therapists.
                  </p>
                </div>
              </div>
            </div>

            {/* Splose Action Button */}
            <div className="pt-4 border-t border-teal-700/60">
              <a
                href="https://tchservices.splose.com/public-form/2c733ea1-1b3a-41d5-87d7-98ba320cd4f8"
                target="_blank"
                rel="noopener noreferrer"
                className="ats-button w-full inline-flex items-center justify-center gap-2 py-4 bg-[#F9B835] hover:bg-[#ffc657] text-[#2B2822] font-bold text-sm sm:text-base shadow-lg"
              >
                <span>Open Splose Allied Health Referral</span>
                <ExternalLink className="w-4 h-4 text-[#2B2822]" />
              </a>
              <p className="text-[11px] text-center text-teal-200 mt-2.5 font-sans">
                Opens our official Splose clinical intake form in a new secure window.
              </p>
            </div>

          </div>

          {/* SECTION 2: All Other Referrals (In-App Form to admin@tchservices.com.au) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border-2 border-[#0B4F51]/15 shadow-xl relative">
            
            <div className="flex items-center justify-between mb-4">
              <span className="px-3 py-1 rounded-full bg-[#0B4F51]/10 text-[#0B4F51] text-xs font-bold uppercase tracking-wider">
                Section 2 · All Other Supports
              </span>
              <span className="text-xs text-gray-500 font-medium">
                Direct to Coordinator
              </span>
            </div>

            <h3 className="text-2xl font-bold text-[#0B4F51] mb-1">
              Nursing, Daily Living, Yard &amp; Housing Referral
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 mb-6 font-sans">
              Use this form for clinical nursing care, personal care, 1 &amp; 2-bed units, yard care or house cleaning.
            </p>

            {feedback && (
              <div className={`p-4 rounded-2xl mb-6 text-xs sm:text-sm ${
                feedback.success
                  ? 'bg-emerald-50 border border-emerald-300 text-emerald-900'
                  : 'bg-rose-50 border border-rose-300 text-rose-900'
              }`}>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold">{feedback.message}</p>
                    {feedback.refId && (
                      <p className="text-xs text-emerald-700 mt-1">
                        Tracking Reference ID: <strong>{feedback.refId}</strong> — forwarded directly to admin@tchservices.com.au.
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )}

            <form onSubmit={handleGeneralSubmit} className="space-y-4">
              
              {/* Row 1: Referrer Information */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Your Name (Referrer) *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Coordinator or contact person"
                    value={formData.referrerName}
                    onChange={(e) => setFormData({ ...formData, referrerName: e.target.value })}
                    className="tactile-input w-full px-3.5 py-2.5 text-xs sm:text-sm bg-gray-50 focus:bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Referrer Role / Agency *
                  </label>
                  <select
                    value={formData.referrerRole}
                    onChange={(e) => setFormData({ ...formData, referrerRole: e.target.value })}
                    className="tactile-input w-full px-3.5 py-2.5 text-xs sm:text-sm bg-gray-50 focus:bg-white"
                  >
                    <option>Support Coordinator</option>
                    <option>Plan Manager</option>
                    <option>Hospital Social Worker / Discharge</option>
                    <option>Family Member / Carer</option>
                    <option>Participant (Self-Referral)</option>
                    <option>Private / GP Clinic</option>
                  </select>
                </div>
              </div>

              {/* Row 2: Contact Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="0400 000 000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="tactile-input w-full px-3.5 py-2.5 text-xs sm:text-sm bg-gray-50 focus:bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="coordinator@organisation.com.au"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="tactile-input w-full px-3.5 py-2.5 text-xs sm:text-sm bg-gray-50 focus:bg-white"
                  />
                </div>
              </div>

              {/* Row 3: Participant & Funding */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Participant Name
                  </label>
                  <input
                    type="text"
                    placeholder="Name or initials"
                    value={formData.participantName}
                    onChange={(e) => setFormData({ ...formData, participantName: e.target.value })}
                    className="tactile-input w-full px-3.5 py-2.5 text-xs bg-gray-50 focus:bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Funding Stream *
                  </label>
                  <select
                    value={formData.fundingType}
                    onChange={(e) => setFormData({ ...formData, fundingType: e.target.value })}
                    className="tactile-input w-full px-3.5 py-2.5 text-xs bg-gray-50 focus:bg-white"
                  >
                    <option>Plan-Managed NDIS</option>
                    <option>Self-Managed NDIS</option>
                    <option>Veterans' Home Care (VHC)</option>
                    <option>Aged Care / HCP</option>
                    <option>Private Self-Funded</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Location *
                  </label>
                  <select
                    value={formData.suburb}
                    onChange={(e) => setFormData({ ...formData, suburb: e.target.value })}
                    className="tactile-input w-full px-3.5 py-2.5 text-xs bg-gray-50 focus:bg-white"
                  >
                    <option>Townsville &amp; Suburbs</option>
                    <option>Ayr (Burdekin)</option>
                    <option>Ingham (Hinchinbrook)</option>
                    <option>Charters Towers</option>
                    <option>Mareeba (Tablelands)</option>
                    <option>Mount Isa</option>
                    <option>Other North QLD</option>
                  </select>
                </div>
              </div>

              {/* Services Multi-Select Checkboxes */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-2">
                  Select Supports Needed:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {availableServices.map((svc, idx) => {
                    const checked = formData.services.includes(svc);
                    return (
                      <button
                        type="button"
                        key={idx}
                        onClick={() => handleServiceToggle(svc)}
                        className={`text-left p-3 rounded-2xl border text-xs transition-all flex items-start gap-2.5 ${
                          checked
                            ? 'bg-[#FFF3E2] border-[#F9B835] text-[#0B4F51] font-semibold shadow-xs'
                            : 'bg-white border-gray-200 text-gray-700 hover:border-gray-300'
                        }`}
                      >
                        <div className={`w-4 h-4 rounded-full mt-0.5 flex items-center justify-center border ${
                          checked ? 'bg-[#0B4F51] border-[#0B4F51] text-white' : 'border-gray-400 bg-white'
                        }`}>
                          {checked && <Check className="w-3 h-3 text-white stroke-[3]" />}
                        </div>
                        <span className="leading-tight font-sans">{svc}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Referral Details / Special Requests
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us about the participant's goals, schedules, days required, or specific clinical care plans..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="tactile-input w-full px-3.5 py-2 text-xs bg-gray-50 focus:bg-white"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="ats-button w-full inline-flex items-center justify-center gap-2 py-4 bg-[#0B4F51] hover:bg-[#073B3C] text-white font-bold text-sm sm:text-base shadow-md"
              >
                <Send className="w-4 h-4 text-[#F9B835]" />
                <span>{isSubmitting ? 'Submitting Referral...' : 'Submit General Referral'}</span>
              </button>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-2 font-sans">
                <span>Dispatches directly to: <strong className="text-[#0B4F51]">admin@tchservices.com.au</strong></span>
                <span>Urgent? Call <strong className="text-[#0B4F51]">0431 430 905</strong></span>
              </div>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
};
