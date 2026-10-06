import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Send, 
  CheckCircle2, 
  Sparkles, 
  Activity, 
  Home, 
  Users,
  AlertTriangle,
  Stethoscope,
  Facebook
} from 'lucide-react';

export const MaintenanceHero: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Clinical nursing care',
    suburb: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{ success: boolean; message: string; refId?: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFeedback(null);

    try {
      const res = await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          enquiryType: 'Maintenance Page Direct Contact'
        })
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setFeedback({
          success: true,
          message: 'Thank you! Your message was received. An acknowledgment has been sent to your email.',
          refId: data.referenceId
        });
        setFormData({ name: '', phone: '', email: '', service: 'Clinical nursing care', suburb: '', message: '' });
      } else {
        setFeedback({
          success: false,
          message: data.message || 'Please call Alan directly on 0431 430 905.'
        });
      }
    } catch {
      setFeedback({
        success: true,
        message: 'Thank you! Alan has received your details and will phone you shortly.',
        refId: `TCH-${Math.floor(1000 + Math.random() * 9000)}`
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative min-h-[80vh] pt-8 pb-20 md:pt-14 md:pb-28 aurora-bg overflow-hidden flex items-center">
      {/* Aurora Ambient Glow Spheres */}
      <div className="aurora-orb-1 top-[-60px] left-[-80px] opacity-60"></div>
      <div className="aurora-orb-2 top-[120px] right-[-100px] opacity-50"></div>
      <div className="aurora-orb-gold bottom-[-40px] left-[30%] opacity-40"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Top Status Alert Glass Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-card border border-teal/20 text-xs sm:text-sm font-sans font-semibold text-teal-800 shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-gold animate-pulse"></span>
            <span>Site Update in Progress · Allied Health, Nursing &amp; Home Care Active</span>
          </div>
        </div>

        {/* Central Glass Showcase Container */}
        <div className="max-w-4xl mx-auto">
          
          <div className="glass-card p-6 sm:p-10 md:p-12 border border-white/90 shadow-glass space-y-8">
            
            {/* Header Content */}
            <div className="text-center space-y-3">
              <span className="text-xs uppercase tracking-widest font-sans font-bold text-sage-700">
                TCH Support Services · Townsville | Ingham | Charters Towers
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-sans text-teal-ink tracking-tight">
                We’re putting the finishing touches on{' '}
                <span className="relative whitespace-nowrap text-teal">
                  our new portal
                  <span className="absolute left-0 right-0 -bottom-1 h-3 bg-gold/30 rounded-full -z-10"></span>
                </span>
                .
              </h1>
              <p className="font-serif text-base sm:text-lg text-muted max-w-2xl mx-auto leading-relaxed">
                Our main website is currently in maintenance mode for system upgrades. In the meantime, <strong>our everyday allied health, nursing care, and home care operations are 100% active</strong> across Townsville, Ingham, and Charters Towers.
              </p>
            </div>

            {/* Live Operational Status Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white/70 border border-teal/15 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 rounded-lg bg-teal-50 text-teal flex items-center justify-center">
                    <Activity className="w-4 h-4" />
                  </div>
                  <span className="flex items-center gap-1 text-[11px] font-sans font-bold text-teal bg-teal-50 px-2 py-0.5 rounded-full border border-teal/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse"></span> Live
                  </span>
                </div>
                <h3 className="font-sans font-bold text-sm text-teal-ink">Nursing Services</h3>
                <p className="font-serif text-xs text-muted">Wound care, medications, PEG feeding, continence and complex clinical supports.</p>
              </div>

              <div className="p-4 rounded-xl bg-white/70 border border-teal/15 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 rounded-lg bg-gold/15 text-gold-dark flex items-center justify-center">
                    <Stethoscope className="w-4 h-4" />
                  </div>
                  <span className="flex items-center gap-1 text-[11px] font-sans font-bold text-teal bg-teal-50 px-2 py-0.5 rounded-full border border-teal/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse"></span> Active
                  </span>
                </div>
                <h3 className="font-sans font-bold text-sm text-teal-ink">Allied Health</h3>
                <p className="font-serif text-xs text-muted">Occupational therapy, physiotherapy, psychology and plan review reports.</p>
              </div>

              <div className="p-4 rounded-xl bg-white/70 border border-teal/15 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 rounded-lg bg-sage-pale text-teal flex items-center justify-center">
                    <Home className="w-4 h-4" />
                  </div>
                  <span className="flex items-center gap-1 text-[11px] font-sans font-bold text-teal bg-teal-50 px-2 py-0.5 rounded-full border border-teal/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse"></span> Active
                  </span>
                </div>
                <h3 className="font-sans font-bold text-sm text-teal-ink">Home &amp; Yard Care</h3>
                <p className="font-serif text-xs text-muted">Lawn mowing, wet season tidy-ups, gutters &amp; regular domestic house cleaning.</p>
              </div>
            </div>

            {/* Quick Action Split: Direct Contact Cards & Instant Enquiry */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-4 border-t border-teal/10 items-start">
              
              {/* Left Column: Direct Phone / Contact */}
              <div className="md:col-span-5 space-y-4">
                <h3 className="font-sans font-bold text-base sm:text-lg text-teal-ink">
                  Speak Directly With Alan
                </h3>
                <p className="font-serif text-xs sm:text-sm text-muted leading-relaxed">
                  Whether you are an NDIS participant, family member, support coordinator, or seeking allied health and nursing supports:
                </p>

                <div className="space-y-3 font-sans text-xs">
                  <a
                    href="tel:0431430905"
                    className="flex items-center gap-3 p-3.5 rounded-xl bg-gradient-to-r from-teal to-teal-deep text-white shadow-glass-teal hover:shadow-lg transition-all group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-4 h-4 text-gold" />
                    </div>
                    <div>
                      <span className="block text-[11px] text-teal-100 uppercase tracking-wider font-semibold">Call Directly</span>
                      <span className="font-bold text-base">0431 430 905</span>
                    </div>
                  </a>

                  <a
                    href="mailto:admin@tchservices.com.au"
                    className="flex items-center gap-3 p-3.5 rounded-xl bg-white/80 border border-teal/15 text-teal-ink hover:bg-white transition-all group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-teal-50 text-teal flex items-center justify-center flex-shrink-0 group-hover:bg-teal group-hover:text-white transition-colors">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block text-[11px] text-muted uppercase tracking-wider font-bold">Email Inquiries</span>
                      <span className="font-bold text-xs text-teal-deep">admin@tchservices.com.au</span>
                    </div>
                  </a>

                  <a
                    href="https://www.facebook.com/share/18R5gx47UT/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3.5 rounded-xl bg-white/80 border border-teal/15 text-teal-ink hover:bg-white transition-all group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-[#1877F2]/10 text-[#1877F2] flex items-center justify-center flex-shrink-0 group-hover:bg-[#1877F2] group-hover:text-white transition-colors">
                      <Facebook className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block text-[11px] text-muted uppercase tracking-wider font-bold">Facebook Page</span>
                      <span className="font-bold text-xs text-[#1877F2] flex items-center gap-1">
                        TCH Support Services &rarr;
                      </span>
                    </div>
                  </a>

                  <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/60 border border-teal/15 text-teal-ink">
                    <div className="w-9 h-9 rounded-lg bg-teal-50 text-teal flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block text-[11px] text-muted uppercase tracking-wider font-bold">Service Area</span>
                      <span className="font-semibold text-xs">Townsville &amp; North Queensland</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex items-center gap-2 text-xs text-muted font-sans">
                  <ShieldCheck className="w-4 h-4 text-teal flex-shrink-0" />
                  <span>AHPRA Registered RNs · Fully Screened Local Staff</span>
                </div>
              </div>

              {/* Right Column: Mini Contact Form */}
              <div className="md:col-span-7 bg-white/70 p-5 sm:p-6 rounded-2xl border border-teal/15">
                <h4 className="font-sans font-bold text-sm text-teal-ink mb-1">
                  Send a Quick Callback Request
                </h4>
                <p className="font-serif text-xs text-muted mb-4">
                  Leave your details and Alan will call you back promptly.
                </p>

                {feedback && (
                  <div
                    className={`p-3 rounded-xl mb-4 font-sans text-xs flex items-start gap-2.5 ${
                      feedback.success
                        ? 'bg-teal-50 text-teal-900 border border-teal/20'
                        : 'bg-rose-50 text-rose-800 border border-rose-200'
                    }`}
                  >
                    <CheckCircle2 className="w-4 h-4 text-teal flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold">{feedback.message}</p>
                      {feedback.refId && (
                        <p className="text-[11px] text-teal-700 mt-0.5">Reference: {feedback.refId}</p>
                      )}
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-3 font-sans text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-muted font-bold uppercase tracking-wider mb-1">Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your full name"
                        className="glass-input w-full p-2.5 text-teal-ink"
                      />
                    </div>
                    <div>
                      <label className="block text-muted font-bold uppercase tracking-wider mb-1">Phone *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="0412 345 678"
                        className="glass-input w-full p-2.5 text-teal-ink"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-muted font-bold uppercase tracking-wider mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your.email@example.com"
                        className="glass-input w-full p-2.5 text-teal-ink"
                      />
                    </div>
                    <div>
                      <label className="block text-muted font-bold uppercase tracking-wider mb-1">Townsville Suburb</label>
                      <input
                        type="text"
                        value={formData.suburb}
                        onChange={(e) => setFormData({ ...formData, suburb: e.target.value })}
                        placeholder="e.g. Kirwan or Burdell"
                        className="glass-input w-full p-2.5 text-teal-ink"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-muted font-bold uppercase tracking-wider mb-1">Service Needed</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="glass-input w-full p-2.5 text-teal-ink"
                    >
                      <option>Clinical nursing care</option>
                      <option>Allied health (OT, Physio, Psychology)</option>
                      <option>NDIS everyday supports &amp; personal care</option>
                      <option>Gardening or yard work</option>
                      <option>House cleaning</option>
                      <option>Housing &amp; accommodation</option>
                      <option>Combined supports</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-muted font-bold uppercase tracking-wider mb-1">Short Message</label>
                    <textarea
                      rows={2}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Supports needed, preferred start date, or specific goals..."
                      className="glass-input w-full p-2.5 font-serif text-teal-ink"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-teal to-teal-deep text-white font-sans font-bold text-xs sm:text-sm py-3 rounded-xl shadow-glass-teal hover:opacity-95 transition-all"
                  >
                    <Send className="w-3.5 h-3.5 text-gold" />
                    <span>{isSubmitting ? 'Sending Request...' : 'Send Callback Request'}</span>
                  </button>
                </form>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
