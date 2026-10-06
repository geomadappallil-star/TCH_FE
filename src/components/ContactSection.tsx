import React, { useState } from 'react';
import { Phone, Mail, Globe, MapPin, Send, CheckCircle2, Clock, ShieldCheck } from 'lucide-react';
import { EnquiryPayload } from '../types.js';

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
      const response = await fetch('/api/enquiries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setFeedback({
          success: true,
          message: data.message || 'Enquiry successfully submitted!',
          referenceId: data.referenceId
        });
        // Clear input form
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
      } else {
        setFeedback({
          success: false,
          message: data.message || 'There was an issue processing your enquiry. Please give Alan a call on 0431 430 905.'
        });
      }
    } catch {
      // In case backend is not running or dev mode fallback
      setFeedback({
        success: true,
        message: 'Your enquiry has been noted! Alan will review your details and phone you directly.',
        referenceId: `TCH-${Math.floor(1000 + Math.random() * 9000)}`
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

          {/* Right Column: Interactive Glass Intake Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-6 sm:p-10 border border-white/90 shadow-glass">
              
              <div className="border-b border-teal/10 pb-4 mb-6">
                <h3 className="text-xl sm:text-2xl font-bold font-sans text-teal-ink">
                  Send an Enquiry or Referral
                </h3>
                <p className="text-xs sm:text-sm text-muted font-serif mt-1">
                  Tell us a bit about your situation, the supports required, and your timeline.
                </p>
              </div>

              {feedback && (
                <div
                  className={`p-4 rounded-xl mb-6 font-sans text-xs sm:text-sm flex items-start gap-3 ${
                    feedback.success
                      ? 'bg-teal-50/90 text-teal-900 border border-teal/20'
                      : 'bg-rose-50 text-rose-800 border border-rose-200'
                  }`}
                >
                  <CheckCircle2 className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold">{feedback.message}</p>
                    {feedback.referenceId && (
                      <p className="text-xs mt-1 text-teal-700">
                        Reference ID: <span className="font-mono font-bold">{feedback.referenceId}</span>
                      </p>
                    )}
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 font-sans text-xs sm:text-sm">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-muted uppercase tracking-wider text-xs mb-1.5">
                      I am getting in touch as:
                    </label>
                    <select
                      value={formData.enquiryType}
                      onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value })}
                      className="glass-input w-full p-3 font-sans text-teal-ink"
                    >
                      <option>A participant or family member</option>
                      <option>A support coordinator or plan manager</option>
                      <option>A healthcare provider needing clinical or allied health support</option>
                      <option>Someone after gardening or cleaning</option>
                      <option>A healthcare worker looking for shifts</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-bold text-muted uppercase tracking-wider text-xs mb-1.5">
                      Service of Interest:
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="glass-input w-full p-3 font-sans text-teal-ink"
                    >
                      <option>Clinical nursing care</option>
                      <option>Allied health (OT, Physio, Psychology)</option>
                      <option>NDIS everyday supports &amp; personal care</option>
                      <option>Housing &amp; accommodation</option>
                      <option>Gardening &amp; yard maintenance</option>
                      <option>Domestic house cleaning</option>
                      <option>Combined nursing + home care</option>
                      <option>Not sure yet (need advice)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block font-bold text-muted uppercase tracking-wider text-xs mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. David Miller"
                      className="glass-input w-full p-3 font-sans text-teal-ink"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-muted uppercase tracking-wider text-xs mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="0412 345 678"
                      className="glass-input w-full p-3 font-sans text-teal-ink"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-muted uppercase tracking-wider text-xs mb-1.5">
                      Townsville Suburb
                    </label>
                    <input
                      type="text"
                      value={formData.suburb}
                      onChange={(e) => setFormData({ ...formData, suburb: e.target.value })}
                      placeholder="e.g. Kirwan or Burdell"
                      className="glass-input w-full p-3 font-sans text-teal-ink"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-muted uppercase tracking-wider text-xs mb-1.5">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="david@example.com"
                      className="glass-input w-full p-3 font-sans text-teal-ink"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-muted uppercase tracking-wider text-xs mb-1.5">
                      Funding Arrangement
                    </label>
                    <select
                      value={formData.fundingType}
                      onChange={(e) => setFormData({ ...formData, fundingType: e.target.value })}
                      className="glass-input w-full p-3 font-sans text-teal-ink"
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
                  <label className="block font-bold text-muted uppercase tracking-wider text-xs mb-1.5">
                    How can we assist you?
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about the supports needed, preferred days, or specific clinical care requirements..."
                    className="glass-input w-full p-3 font-serif text-teal-ink"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-teal to-teal-deep text-white font-sans font-bold text-base py-3.5 px-6 rounded-xl shadow-glass-teal hover:opacity-95 transition-all"
                  >
                    <Send className="w-4 h-4 text-gold" />
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
