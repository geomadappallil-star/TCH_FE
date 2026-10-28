import React, { useState } from 'react';
import { 
  Phone, 
  ArrowRight, 
  CheckCircle2, 
  Stethoscope,
  Activity,
  Home,
  Building2,
  Send, 
  Clock,
  FileText,
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
      icon: FileText,
      title: 'FCA Reports in 2 Weeks',
      detail: 'Functional Capacity Assessment (FCA) reports available in 2 weeks. Fast turnaround by certified OTs.'
    },
    {
      icon: Building2,
      title: '1 & 2-Bed Units Immediate',
      detail: 'One-bedroom and two-bedroom units available immediately for independent living in Townsville.'
    },
    {
      icon: Sparkles,
      title: 'Gardening & Cleaning Services',
      detail: 'Lawn mowing, yard care & housekeeping available for Private, NDIS, and VHC (Veterans\' Home Care).'
    },
    {
      icon: Stethoscope,
      title: 'Nursing & Allied Health',
      detail: 'Nurse reviews for aged care & clinical assessments. Allied health services including OT, Physio & Counselling.'
    }
  ];

  return (
    <section className="relative min-h-[82vh] flex items-center py-12 md:py-20 overflow-hidden bg-[#163932] text-white">
      
      {/* Background Photo Banner with High-Contrast Eucalyptus Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 pointer-events-none mix-blend-luminosity"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=1920&q=85')`
        }}
      />
      
      {/* Gradient Wash */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#163932] via-[#163932]/95 to-[#163932]/80 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* Top Eyebrow Chip */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-emerald-200 mb-6 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-[#D4A359] animate-pulse"></span>
          <span>Townsville · Ingham · Charters Towers | Private, NDIS &amp; VHC Approved</span>
        </div>

        {/* Hero 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Crisp Bullet-Focused Information */}
          <div className="lg:col-span-7 space-y-6">
            
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-bold tracking-tight leading-[1.15] text-white">
                Compassionate clinical care and everyday living,{' '}
                <span className="text-[#D4A359] block mt-1 font-extrabold">at your doorstep.</span>
              </h1>
              <p className="text-sm sm:text-base text-teal-100 mt-3 max-w-xl font-normal leading-relaxed">
                Locally owned and based in Townsville. Supporting self-managed, plan-managed NDIS, private, and VHC participants with prompt clinical nursing, 2-week FCA reports, and independent living.
              </p>
            </div>

            {/* 4 Crisp Highlight Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
              {coreBullets.map((b, idx) => {
                const IconComponent = b.icon;
                return (
                  <div 
                    key={idx}
                    className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/15 transition-all shadow-sm"
                  >
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <div className="w-7 h-7 rounded-lg bg-[#D4A359]/20 flex items-center justify-center text-[#D4A359] flex-shrink-0">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <h4 className="font-bold text-sm text-white">
                        {b.title}
                      </h4>
                    </div>
                    <p className="text-xs text-teal-100/90 leading-relaxed">
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
                className="inline-flex items-center justify-center gap-2.5 bg-[#D4A359] hover:bg-[#c49245] text-[#163932] font-bold text-sm sm:text-base px-6 py-3.5 rounded-full shadow-lg hover:-translate-y-0.5 transition-all"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-[#163932]" />
                <span>Call Alan: 0431 430 905</span>
              </a>

              <a
                href="#units"
                className="inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/30 text-white font-semibold text-sm sm:text-base px-5 py-3.5 rounded-full hover:-translate-y-0.5 transition-all"
              >
                <span>View 1 &amp; 2-Bed Units</span>
                <ArrowRight className="w-4 h-4 text-[#D4A359]" />
              </a>
            </div>

            {/* Trust Footer line */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-teal-200/90 pt-1">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#D4A359]" /> 2-Week FCA Reports
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#D4A359]" /> 1 &amp; 2 Bed Units Ready
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#D4A359]" /> Private, NDIS &amp; VHC
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#D4A359]" /> Nurse Aged Care Reviews
              </span>
            </div>

          </div>

          {/* Right Column: Frosted Glass Callback Card */}
          <div className="lg:col-span-5">
            <div className="bg-white/95 backdrop-blur-xl p-6 sm:p-7 border border-white shadow-2xl rounded-3xl text-[#192B27]">
              
              <div className="flex items-center justify-between border-b border-teal/15 pb-3 mb-4">
                <div>
                  <h3 className="font-bold text-base text-[#163932]">
                    Quick Callback Request
                  </h3>
                  <p className="text-xs text-gray-600 mt-0.5">
                    Alan responds directly to all enquiries
                  </p>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-[#D4A359]/20 text-[#8C631B] text-[11px] font-bold border border-[#D4A359]/40">
                  Fast Response
                </span>
              </div>

              {feedback && (
                <div
                  className={`p-3 rounded-xl mb-4 text-xs flex items-start gap-2.5 ${
                    feedback.success
                      ? 'bg-emerald-50 text-emerald-900 border border-emerald-200'
                      : 'bg-rose-50 text-rose-800 border border-rose-200'
                  }`}
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold">{feedback.message}</p>
                    {feedback.refId && (
                      <p className="text-[11px] text-emerald-700 mt-0.5">Reference: {feedback.refId}</p>
                    )}
                  </div>
                </div>
              )}

              <form onSubmit={handleCallbackSubmit} className="space-y-3 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-gray-700 font-bold uppercase tracking-wider mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Full name"
                      className="w-full p-2.5 rounded-xl border border-gray-300 focus:border-[#2D6A5D] focus:ring-2 focus:ring-[#2D6A5D]/20 text-[#163932] bg-white font-medium outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-bold uppercase tracking-wider mb-1">Phone *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="0412 345 678"
                      className="w-full p-2.5 rounded-xl border border-gray-300 focus:border-[#2D6A5D] focus:ring-2 focus:ring-[#2D6A5D]/20 text-[#163932] bg-white font-medium outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-gray-700 font-bold uppercase tracking-wider mb-1">Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your.email@example.com"
                      className="w-full p-2.5 rounded-xl border border-gray-300 focus:border-[#2D6A5D] focus:ring-2 focus:ring-[#2D6A5D]/20 text-[#163932] bg-white font-medium outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-bold uppercase tracking-wider mb-1">Townsville Suburb</label>
                    <input
                      type="text"
                      value={formData.suburb}
                      onChange={(e) => setFormData({ ...formData, suburb: e.target.value })}
                      placeholder="e.g. Kirwan or Burdell"
                      className="w-full p-2.5 rounded-xl border border-gray-300 focus:border-[#2D6A5D] focus:ring-2 focus:ring-[#2D6A5D]/20 text-[#163932] bg-white font-medium outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-bold uppercase tracking-wider mb-1">Service Needed</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-gray-300 focus:border-[#2D6A5D] focus:ring-2 focus:ring-[#2D6A5D]/20 text-[#163932] bg-white font-medium outline-none transition-all"
                  >
                    <option>FCA Report (Functional Capacity Assessment - 2 Weeks)</option>
                    <option>Allied Health (OT, Physio, Counselling)</option>
                    <option>Nursing Supports &amp; Aged Care Reviews</option>
                    <option>One &amp; Two-Bedroom Units (Immediate Move-In)</option>
                    <option>Gardening &amp; Cleaning (Private, NDIS, VHC)</option>
                    <option>Home and living support with units available for participants to live independently</option>
                    <option>Combined clinical &amp; home supports</option>
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#2D6A5D] hover:bg-[#204E44] text-white font-bold text-sm py-3 rounded-xl shadow-md hover:shadow-lg transition-all"
                >
                  <Send className="w-4 h-4 text-[#D4A359]" />
                  <span>{isSubmitting ? 'Sending Request...' : 'Send Callback Request'}</span>
                </button>
              </form>

              <div className="mt-3.5 pt-3 border-t border-gray-200 flex items-center justify-between text-[11px] text-gray-600">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#2D6A5D]" /> Mon–Sat 7am–7pm
                </span>
                <a href="tel:0431430905" className="font-bold text-[#2D6A5D] hover:underline">
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
