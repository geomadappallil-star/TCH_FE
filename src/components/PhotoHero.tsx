import React, { useState } from 'react';
import { 
  Phone, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Stethoscope,
  Activity,
  Home,
  Building2,
  Send, 
  Clock,
  Sparkles
} from 'lucide-react';
import { submitQuickCallback } from '../services/enquiryService.js';

export const PhotoHero: React.FC = () => {
  // Quick callback form state
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    suburb: '',
    service: 'Clinical nursing care',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{ success: boolean; message: string; refId?: string } | null>(null);

  const handleCallbackSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFeedback(null);

    const result = await submitQuickCallback(formData);
    setFeedback({
      success: result.success,
      message: result.message,
      refId: result.referenceId
    });

    if (result.success) {
      setFormData({
        name: '',
        phone: '',
        email: '',
        suburb: '',
        service: 'Clinical nursing care',
        message: ''
      });
    }
    setIsSubmitting(false);
  };

  const coreBullets = [
    {
      icon: Stethoscope,
      title: 'Clinical Nursing',
      detail: 'AHPRA verified RNs for wound care, injections, PEG feeding & health vitals'
    },
    {
      icon: Activity,
      title: 'Allied Health Therapies',
      detail: 'Occupational therapy, physio assessments & NDIS justification reports'
    },
    {
      icon: Home,
      title: 'Home & Yard Maintenance',
      detail: 'Slip-free path cleaning, lawn mowing & domestic hygiene to prevent falls'
    },
    {
      icon: Building2,
      title: '4 Accessible Units Available',
      detail: 'Cool Besser block units with air-con, ramp access & glass showers in Townsville'
    }
  ];

  return (
    <section className="relative min-h-[82vh] flex items-center py-12 md:py-20 overflow-hidden">
      
      {/* Background Photo Banner with Soothing Gradient Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat -z-20 transition-transform duration-700 scale-105"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=1920&q=85')`
        }}
      ></div>

      {/* Soothing Eucalyptus Overlay (Deep on text side, soft on photo side) */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#163932]/95 via-[#163932]/85 to-[#163932]/45 md:to-transparent -z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#163932]/80 via-transparent to-transparent -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* Top Eyebrow Chip */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-xs font-sans font-semibold text-white mb-6 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-gold animate-pulse"></span>
          <span>Townsville · Ingham · Charters Towers NDIS &amp; Healthcare</span>
        </div>

        {/* Hero 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Crisp Bullet-Focused Information */}
          <div className="lg:col-span-7 space-y-6 text-white">
            
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold font-sans tracking-tight leading-[1.15]">
                Compassionate clinical care and everyday living,{' '}
                <span className="text-gold font-serif italic">at your doorstep.</span>
              </h1>
              <p className="text-sm sm:text-base text-teal-100/90 font-serif mt-3 max-w-xl">
                Locally based in Townsville. Supporting self-managed and plan-managed participants with personalized clinical care and independent home living.
              </p>
            </div>

            {/* 4 Crisp Highlight Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
              {coreBullets.map((b, idx) => {
                const IconComponent = b.icon;
                return (
                  <div 
                    key={idx}
                    className="p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 hover:bg-white/15 transition-all"
                  >
                    <div className="flex items-center gap-2.5 mb-1">
                      <div className="w-6 h-6 rounded-lg bg-gold/20 flex items-center justify-center text-gold flex-shrink-0">
                        <IconComponent className="w-3.5 h-3.5" />
                      </div>
                      <h4 className="font-sans font-bold text-xs sm:text-sm text-white">
                        {b.title}
                      </h4>
                    </div>
                    <p className="text-[11px] sm:text-xs text-teal-100/80 font-serif leading-relaxed">
                      {b.detail}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="tel:0431430905"
                className="inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-gold to-gold-dark text-teal-ink font-sans font-bold text-sm sm:text-base px-6 py-3.5 rounded-full shadow-lg hover:brightness-105 hover:-translate-y-0.5 transition-all"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Call Alan: 0431 430 905</span>
              </a>

              <a
                href="#housing"
                className="inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/25 text-white font-sans font-semibold text-sm sm:text-base px-5 py-3.5 rounded-full hover:-translate-y-0.5 transition-all"
              >
                <span>View 4 Available Units</span>
                <ArrowRight className="w-4 h-4 text-gold" />
              </a>
            </div>

            {/* Trust Footer line */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-sans text-teal-200/90 pt-1">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-gold" /> AHPRA Registered
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-gold" /> NDIS Self &amp; Plan-Managed
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-gold" /> No National Call Centers
              </span>
            </div>

          </div>

          {/* Right Column: Frosted Glass Callback Card */}
          <div className="lg:col-span-5">
            <div className="glass-card p-6 sm:p-7 border border-white/80 shadow-2xl rounded-3xl">
              
              <div className="flex items-center justify-between border-b border-teal/10 pb-3 mb-4">
                <div>
                  <h3 className="font-sans font-bold text-base text-teal-ink">
                    Quick Callback Request
                  </h3>
                  <p className="font-serif text-xs text-muted">
                    Alan responds directly to all enquiries
                  </p>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-gold/15 text-gold-dark text-[11px] font-sans font-bold border border-gold/30">
                  Fast Response
                </span>
              </div>

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

              <form onSubmit={handleCallbackSubmit} className="space-y-3 font-sans text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-muted font-bold uppercase tracking-wider mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Full name"
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
                    <label className="block text-muted font-bold uppercase tracking-wider mb-1">Email *</label>
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
                    <option>Allied health (OT, Physio, Psych)</option>
                    <option>Housing &amp; accommodation (4 Units Available)</option>
                    <option>NDIS everyday supports &amp; personal care</option>
                    <option>Gardening or yard work</option>
                    <option>House cleaning</option>
                    <option>Combined supports</option>
                  </select>
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

              <div className="mt-3 pt-3 border-t border-teal/10 flex items-center justify-between text-[11px] font-sans text-muted">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-teal" /> Mon–Sat 7am–7pm
                </span>
                <a href="tel:0431430905" className="font-bold text-teal hover:underline">
                  0431 430 905
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
