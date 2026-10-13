import React, { useState } from 'react';
import { Phone, Mail, Globe, MapPin, Send, CheckCircle2, Clock, ShieldCheck, Facebook } from 'lucide-react';
import { EnquiryPayload } from '../types.js';
import { submitEnquiry } from '../services/enquiryService.js';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<EnquiryPayload>({
    name: '',
    phone: '',
    email: '',
    suburb: '',
    enquiryType: 'A participant or family member',
    service: 'Nursing care',
    fundingType: 'Plan Managed',
    message: ''
  });

  const [submitting, setSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{
    success: boolean;
    message: string;
    referenceId?: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setFeedback(null);

    try {
      const result = await submitEnquiry(formData);
      setFeedback({
        success: result.success,
        message: result.message,
        referenceId: result.referenceId
      });

      if (result.success) {
        setFormData({
          name: '',
          phone: '',
          email: '',
          suburb: '',
          enquiryType: 'A participant or family member',
          service: 'Nursing care',
          fundingType: 'Plan Managed',
          message: ''
        });
      }
    } catch {
      setFeedback({
        success: false,
        message: 'There was an issue processing your enquiry. Please give Alan a call on 0431 430 905.'
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-[#EFEDE4]/80 relative overflow-hidden">
      
      {/* Subtle Aurora orb */}
      <div className="aurora-orb-1 -top-10 -right-10 opacity-40"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          
          {/* Left Column: Team info & Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            <div>
              <div className="flex items-center gap-2 text-xs font-sans font-bold tracking-widest text-sage-700 uppercase mb-2">
                <span className="w-6 h-0.5 bg-gold"></span>
                <span>Get in Touch</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold font-sans text-teal-ink">
                Talk to a real person today
              </h2>
              <p className="font-serif text-sm sm:text-base text-muted mt-2">
                Ring during business hours and Alan will pick up. Outside hours, leave a message or send this enquiry and we’ll respond the next working day.
              </p>
            </div>

            {/* Quote Card from Alan Jomon */}
            <div className="glass-card p-6 border-l-4 border-l-gold border-white/90 shadow-glass">
              <blockquote className="font-serif text-sm sm:text-base text-teal-ink italic leading-relaxed">
                "Families here shouldn't wait on a provider down south to work out whether they can staff a shift in Kirwan. We live here. If we say we'll be there Tuesday morning, we're there Tuesday morning."
              </blockquote>
              <footer className="mt-3 pt-3 border-t border-teal/10 font-sans">
                <b className="block text-teal-ink font-bold text-sm">Alan Jomon</b>
                <span className="text-xs text-muted">Manager – Service Delivery, TCH Support Services</span>
              </footer>
            </div>

            {/* Direct Contact Links */}
            <div className="space-y-3 font-sans text-sm">
              <a
                href="tel:0431430905"
                className="flex items-center gap-3 p-3.5 rounded-xl glass-card hover:bg-white/90 border border-teal/15 transition-all text-teal-ink group"
              >
                <div className="w-9 h-9 rounded-lg bg-teal-50 text-teal flex items-center justify-center flex-shrink-0 group-hover:bg-teal group-hover:text-white transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-wider text-muted font-bold">Direct Line</span>
                  <span className="font-bold text-base text-teal-deep">0431 430 905</span>
                </div>
              </a>

              <a
                href="mailto:admin@tchservices.com.au"
                className="flex items-center gap-3 p-3.5 rounded-xl glass-card hover:bg-white/90 border border-teal/15 transition-all text-teal-ink group"
              >
                <div className="w-9 h-9 rounded-lg bg-teal-50 text-teal flex items-center justify-center flex-shrink-0 group-hover:bg-teal group-hover:text-white transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-wider text-muted font-bold">Email Address</span>
                  <span className="font-bold text-sm text-teal-deep">admin@tchservices.com.au</span>
                </div>
              </a>

              <a
                href="https://www.facebook.com/share/18R5gx47UT/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3.5 rounded-xl glass-card hover:bg-white/90 border border-teal/15 transition-all text-teal-ink group"
              >
                <div className="w-9 h-9 rounded-lg bg-[#1877F2]/10 text-[#1877F2] flex items-center justify-center flex-shrink-0 group-hover:bg-[#1877F2] group-hover:text-white transition-colors">
                  <Facebook className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-wider text-muted font-bold">Facebook Page</span>
                  <span className="font-bold text-sm text-[#1877F2] flex items-center gap-1">
                    TCH Support Services &rarr;
                  </span>
                </div>
              </a>

              <div className="flex items-center gap-3 p-3.5 rounded-xl glass-card border border-teal/15 text-teal-ink">
                <div className="w-9 h-9 rounded-lg bg-teal-50 text-teal flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-wider text-muted font-bold">Operating Base</span>
                  <span className="font-semibold text-sm">Townsville, Servicing North Queensland</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Intake Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-6 sm:p-10 rounded-3xl border border-gray-200 shadow-xl text-[#192B27]">
              
              <div className="border-b border-gray-200 pb-4 mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-[#163932]">
                  Send an Enquiry or Referral
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">
                  Tell us a bit about your situation, the supports required, and your timeline.
                </p>
              </div>

              {feedback && (
                <div
                  className={`p-4 rounded-xl mb-6 text-xs sm:text-sm flex items-start gap-3 ${
                    feedback.success
                      ? 'bg-emerald-50 text-emerald-900 border border-emerald-300'
                      : 'bg-rose-50 text-rose-800 border border-rose-300'
                  }`}
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold">{feedback.message}</p>
                    {feedback.referenceId && (
                      <p className="text-xs mt-1 text-emerald-700">
                        Reference ID: <span className="font-mono font-bold">{feedback.referenceId}</span>
                      </p>
                    )}
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-gray-700 uppercase tracking-wider text-xs mb-1.5">
                      I am getting in touch as:
                    </label>
                    <select
                      value={formData.enquiryType}
                      onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value })}
                      className="w-full p-3 rounded-xl border border-gray-300 focus:border-[#2D6A5D] focus:ring-2 focus:ring-[#2D6A5D]/20 text-[#163932] bg-white font-medium outline-none transition-all"
                    >
                      <option>A participant or family member</option>
                      <option>A support coordinator or plan manager</option>
                      <option>A healthcare provider needing clinical support</option>
                      <option>Someone after gardening or cleaning</option>
                      <option>A healthcare worker looking for shifts</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-bold text-gray-700 uppercase tracking-wider text-xs mb-1.5">
                      Service of Interest:
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full p-3 rounded-xl border border-gray-300 focus:border-[#2D6A5D] focus:ring-2 focus:ring-[#2D6A5D]/20 text-[#163932] bg-white font-medium outline-none transition-all"
                    >
                      <option>Clinical nursing care</option>
                      <option>Allied health (OT, Physio)</option>
                      <option>NDIS everyday supports &amp; personal care</option>
                      <option>Housing &amp; accommodation (4 Units)</option>
                      <option>Gardening &amp; yard maintenance</option>
                      <option>Domestic house cleaning</option>
                      <option>Combined nursing + home care</option>
                      <option>Not sure yet (need advice)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block font-bold text-gray-700 uppercase tracking-wider text-xs mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. David Miller"
                      className="w-full p-3 rounded-xl border border-gray-300 focus:border-[#2D6A5D] focus:ring-2 focus:ring-[#2D6A5D]/20 text-[#163932] bg-white font-medium outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-gray-700 uppercase tracking-wider text-xs mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="0412 345 678"
                      className="w-full p-3 rounded-xl border border-gray-300 focus:border-[#2D6A5D] focus:ring-2 focus:ring-[#2D6A5D]/20 text-[#163932] bg-white font-medium outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-gray-700 uppercase tracking-wider text-xs mb-1.5">
                      Townsville Suburb
                    </label>
                    <input
                      type="text"
                      value={formData.suburb}
                      onChange={(e) => setFormData({ ...formData, suburb: e.target.value })}
                      placeholder="e.g. Kirwan or Burdell"
                      className="w-full p-3 rounded-xl border border-gray-300 focus:border-[#2D6A5D] focus:ring-2 focus:ring-[#2D6A5D]/20 text-[#163932] bg-white font-medium outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-gray-700 uppercase tracking-wider text-xs mb-1.5">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="david@example.com"
                      className="w-full p-3 rounded-xl border border-gray-300 focus:border-[#2D6A5D] focus:ring-2 focus:ring-[#2D6A5D]/20 text-[#163932] bg-white font-medium outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-gray-700 uppercase tracking-wider text-xs mb-1.5">
                      Funding Arrangement
                    </label>
                    <select
                      value={formData.fundingType}
                      onChange={(e) => setFormData({ ...formData, fundingType: e.target.value })}
                      className="w-full p-3 rounded-xl border border-gray-300 focus:border-[#2D6A5D] focus:ring-2 focus:ring-[#2D6A5D]/20 text-[#163932] bg-white font-medium outline-none transition-all"
                    >
                      <option>Plan Managed (NDIS)</option>
                      <option>Self Managed (NDIS)</option>
                      <option>Home Care Package (HCP)</option>
                      <option>NDIA Managed</option>
                      <option>Private / Self-Funded</option>
                      <option>Registered Provider Subcontract</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-gray-700 uppercase tracking-wider text-xs mb-1.5">
                    How can we assist you?
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about the supports needed, preferred days, or specific clinical care requirements..."
                    className="w-full p-3 rounded-xl border border-gray-300 focus:border-[#2D6A5D] focus:ring-2 focus:ring-[#2D6A5D]/20 text-[#163932] bg-white font-medium outline-none transition-all"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#2D6A5D] hover:bg-[#204E44] text-white font-bold text-base py-3.5 px-6 rounded-xl shadow-md hover:shadow-lg transition-all"
                  >
                    <Send className="w-4 h-4 text-[#D4A359]" />
                    <span>{submitting ? 'Submitting Enquiry...' : 'Send Enquiry to Alan'}</span>
                  </button>
                </div>

                <div className="flex items-center justify-between text-xs text-muted font-sans pt-1">
                  <span>Prefer to talk directly? Call <a href="tel:0431430905" className="text-teal font-bold underline">0431 430 905</a></span>
                  <span className="hidden sm:inline">Strict confidentiality guaranteed.</span>
                </div>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
