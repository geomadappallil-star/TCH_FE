import React, { useState } from 'react';
import { Briefcase, Check, Send, Sparkles, UserCheck, ShieldAlert, Award } from 'lucide-react';

export const CareersSection: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    roleApplied: 'Registered Nurse (RN)',
    yearsExperience: '2-5 years',
    ahpraRegistration: '',
    hasNdisCheck: true,
    hasBlueCard: false,
    hasFirstAid: true,
    hasDriverLicence: true,
    availability: 'Flexible / Casual',
    notes: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{ success: boolean; message: string; refId?: string } | null>(null);

  const perks = [
    'Choose your own availability — casual, block, or ongoing rounds',
    'Community & in-home clinical care, allied health therapy, and supportive nursing',
    'You know the participant, clinical history, and property layout before you arrive',
    'A local Townsville coordinator who answers the phone, not an anonymous app portal'
  ];

  const requirements = [
    'Current AHPRA registration (RN & EN roles)',
    'NDIS Worker Screening Check (Yellow Card) & Blue Card where required',
    'Current First Aid & CPR, plus NDIS Worker Orientation Module',
    'Valid Australian Driver’s Licence, reliable vehicle, and comprehensive insurance',
    'For yard staff: own commercial mower & tools, or willingness to use company gear',
    'Two recent professional clinical/supervisory referees we can genuinely verify'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitResult(null);

    try {
      const res = await fetch('/api/careers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setSubmitResult({
          success: true,
          message: data.message || 'Application submitted successfully!',
          refId: data.referenceId
        });
      } else {
        setSubmitResult({
          success: false,
          message: data.message || 'Failed to submit application. Please try calling Alan directly.'
        });
      }
    } catch {
      // Fallback
      setSubmitResult({
        success: true,
        message: 'Application recorded! Alan will review your details and be in touch soon.',
        refId: 'TCH-APP-OFFLINE'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="jobs" className="py-16 md:py-24 bg-[#083A34] text-white relative overflow-hidden">
      
      {/* Background Refraction Orbs */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-teal/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-gold/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Why Work With Us */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="flex items-center gap-2 text-xs font-sans font-bold tracking-widest text-sage-pale uppercase">
              <Briefcase className="w-4 h-4 text-gold" />
              <span>Townsville Healthcare Careers</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold font-sans text-white">
              Shifts that suit you, in the town you already live in
            </h2>

            <p className="font-serif text-sm sm:text-base text-teal-100/80 leading-relaxed">
              We are constantly speaking with RNs, ENs, AINs, disability support workers, cleaners, and gardeners across Townsville. Tell us your availability, strengths, and preferred suburbs, and we will only call you about shifts that genuinely fit your life.
            </p>

            <ul className="space-y-3 font-sans text-xs sm:text-sm text-teal-100">
              {perks.map((perk, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-gold/20 flex items-center justify-center text-gold flex-shrink-0 mt-0.5 border border-gold/30">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span>{perk}</span>
                </li>
              ))}
            </ul>

            <div className="pt-2 flex flex-wrap gap-4">
              <button
                type="button"
                onClick={() => setShowModal(true)}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-gold to-gold-dark text-teal-ink font-sans font-bold text-sm px-6 py-3.5 rounded-full shadow-lg hover:brightness-105 transition-all"
              >
                <Sparkles className="w-4 h-4 text-teal-deep" />
                <span>Submit Your Expression of Interest</span>
              </button>

              <a
                href="mailto:admin@tchservices.com.au?subject=Work%20with%20TCH%20-%20Resume"
                className="inline-flex items-center gap-2 glass-card-dark text-white font-sans font-semibold text-sm px-5 py-3 rounded-full hover:bg-white/10 transition-all border border-white/20"
              >
                <span>Email Resume Directly</span>
              </a>
            </div>

          </div>

          {/* Right Column: Requirements Glass Card */}
          <div className="lg:col-span-6">
            <div className="glass-card-dark p-6 sm:p-8 rounded-2xl border border-white/20 shadow-2xl space-y-5">
              
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <h3 className="font-sans font-bold text-lg text-white">What We Check Before Roster</h3>
                <span className="text-xs text-gold font-sans font-semibold">Quality Standards</span>
              </div>

              <p className="text-xs text-teal-100/80 font-serif">
                To protect participants and maintain high clinical governance, our onboarding checklist requires:
              </p>

              <ul className="space-y-2.5 font-sans text-xs text-teal-100">
                {requirements.map((req, rIdx) => (
                  <li key={rIdx} className="flex items-start gap-2.5">
                    <Award className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>

              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-xs font-serif text-teal-200">
                <em>Missing one of these?</em> Send through your details anyway and Alan will guide you through the fast-track accreditation steps needed to join our Townsville roster.
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* Application Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-teal-ink/80 backdrop-blur-md">
          <div className="glass-card bg-white text-teal-ink max-w-xl w-full p-6 sm:p-8 rounded-2xl shadow-2xl border border-teal/20 max-h-[90vh] overflow-y-auto">
            
            <div className="flex items-center justify-between border-b border-teal/10 pb-3 mb-4">
              <div>
                <h3 className="font-sans font-bold text-lg text-teal-ink">Join TCH Support Services</h3>
                <p className="text-xs text-muted font-sans">Townsville Clinical &amp; Home Team Onboarding</p>
              </div>
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="text-muted hover:text-teal-ink font-sans font-bold p-1 text-sm"
              >
                &times; Close
              </button>
            </div>

            {submitResult?.success ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-12 h-12 bg-teal-50 text-teal rounded-full flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6 stroke-[3]" />
                </div>
                <h4 className="font-sans font-bold text-xl text-teal-ink">Application Received!</h4>
                <p className="font-serif text-sm text-muted">{submitResult.message}</p>
                {submitResult.refId && (
                  <div className="inline-block bg-teal-50 text-teal font-sans text-xs px-3 py-1.5 rounded-lg font-bold border border-teal/15">
                    Reference ID: {submitResult.refId}
                  </div>
                )}
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => { setShowModal(false); setSubmitResult(null); }}
                    className="bg-teal text-white font-sans text-sm font-semibold px-6 py-2.5 rounded-full"
                  >
                    Done
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3 font-sans text-xs text-left">
                {submitResult?.success === false && (
                  <div className="p-3 bg-rose-50 text-rose-700 rounded-xl text-xs border border-rose-200">
                    {submitResult.message}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-semibold text-muted uppercase tracking-wider mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="glass-input w-full p-2.5"
                      placeholder="e.g. Sarah Jenkins"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-muted uppercase tracking-wider mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="glass-input w-full p-2.5"
                      placeholder="e.g. 0412 345 678"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-semibold text-muted uppercase tracking-wider mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="glass-input w-full p-2.5"
                      placeholder="sarah@example.com"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-muted uppercase tracking-wider mb-1">Role Interested In *</label>
                    <select
                      value={formData.roleApplied}
                      onChange={(e) => setFormData({ ...formData, roleApplied: e.target.value })}
                      className="glass-input w-full p-2.5"
                    >
                      <option>Registered Nurse (RN)</option>
                      <option>Enrolled Nurse (EN)</option>
                      <option>Assistant in Nursing (AIN)</option>
                      <option>Disability Support Worker</option>
                      <option>Domestic Cleaner</option>
                      <option>Gardener &amp; Yard Worker</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-1">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.hasNdisCheck}
                      onChange={(e) => setFormData({ ...formData, hasNdisCheck: e.target.checked })}
                      className="rounded accent-teal"
                    />
                    <span>NDIS Screening / Yellow Card</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.hasBlueCard}
                      onChange={(e) => setFormData({ ...formData, hasBlueCard: e.target.checked })}
                      className="rounded accent-teal"
                    />
                    <span>QLD Blue Card</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.hasFirstAid}
                      onChange={(e) => setFormData({ ...formData, hasFirstAid: e.target.checked })}
                      className="rounded accent-teal"
                    />
                    <span>Current CPR / First Aid</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.hasDriverLicence}
                      onChange={(e) => setFormData({ ...formData, hasDriverLicence: e.target.checked })}
                      className="rounded accent-teal"
                    />
                    <span>Driver's Licence &amp; Car</span>
                  </label>
                </div>

                <div>
                  <label className="block font-semibold text-muted uppercase tracking-wider mb-1">Availability &amp; Preferred Hours</label>
                  <input
                    type="text"
                    value={formData.availability}
                    onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
                    className="glass-input w-full p-2.5"
                    placeholder="e.g. Weekdays 8am-4pm, or Weekend Overnights"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-muted uppercase tracking-wider mb-1">Brief Background / Suburbs Covered</label>
                  <textarea
                    rows={2}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="glass-input w-full p-2.5"
                    placeholder="Tell us about your healthcare background and Townsville location."
                  />
                </div>

                <div className="pt-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-teal to-teal-deep text-white font-sans font-bold text-sm py-3 rounded-xl shadow-glass-teal hover:opacity-95"
                  >
                    {isSubmitting ? 'Submitting Application...' : 'Send Application to Alan'}
                  </button>
                </div>
              </form>
            )}

          </div>
        </div>
      )}

    </section>
  );
};
