import React, { useState } from 'react';
import { 
  Phone, 
  ArrowRight, 
  CheckCircle2, 
  Stethoscope,
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
      num: '01',
      icon: FileText,
      tag: '2-Week Turnaround',
      title: 'FCA Reports in 2 Weeks',
      detail: 'Functional Capacity Assessment (FCA) reports available in 2 weeks. Fast turnaround by certified OTs.'
    },
    {
      num: '02',
      icon: Building2,
      tag: 'Move-in Ready',
      title: '1 & 2-Bed Units Immediate',
      detail: 'One-bedroom and two-bedroom units available immediately for independent living in Townsville.'
    },
    {
      num: '03',
      icon: Sparkles,
      tag: 'Private · NDIS · VHC',
      title: 'Gardening & Cleaning Services',
      detail: 'Lawn mowing, yard care & housekeeping available for Private, NDIS, and VHC (Veterans\' Home Care).'
    },
    {
      num: '04',
      icon: Stethoscope,
      tag: 'AHPRA RNs',
      title: 'Nursing & Allied Health',
      detail: 'Nurse reviews for aged care & clinical assessments. Allied health services including OT, Physio & Counselling.'
    }
  ];

  return (
    <section className="relative min-h-[85vh] flex items-center py-12 md:py-20 lg:py-24 overflow-hidden bg-[#163932] text-white">
      
      {/* 1. Crystal-Clear Ultra-HD Background Photo */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none"
        style={{
          backgroundImage: `url('./images/clinical-care.jpg')`
        }}
      />
      
      {/* 2. Signature Eucalyptus Green Wash with High Contrast */}
      <div className="absolute inset-0 bg-[#163932]/60 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#163932]/95 via-[#163932]/75 via-55% to-[#163932]/30 lg:to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#163932]/85 via-transparent to-[#163932]/35 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* Dynamic Continuous Horizontal Scrolling Ticker (Right-to-Left / Left-to-Right) */}
        <div className="relative inline-flex items-center max-w-full sm:max-w-xl h-10 rounded-full bg-white/[0.09] backdrop-blur-md border border-white/20 px-3 overflow-hidden mb-6 shadow-sm group">
          <div className="flex items-center gap-2 pr-3 border-r border-white/20 flex-shrink-0 z-20 bg-[#163932]/90 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#D4A359] animate-pulse"></span>
            <span className="text-[10px] uppercase font-bold tracking-wider text-[#E5B56A]">Verified</span>
          </div>

          {/* Left & Right subtle edge fade masks */}
          <div className="absolute left-20 top-0 bottom-0 w-6 bg-gradient-to-r from-[#163932] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#163932] to-transparent z-10 pointer-events-none" />

          {/* Scrolling Ticker Track */}
          <div className="overflow-hidden pl-3 py-1 flex items-center">
            <div className="animate-ticker-rtl flex items-center gap-8 whitespace-nowrap text-xs font-semibold text-emerald-100 cursor-default">
              <span className="flex items-center gap-3">
                <span>Townsville · Ingham · Charters Towers | Private, NDIS &amp; VHC Approved</span>
                <span className="text-[#D4A359]">✦</span>
              </span>
              <span className="flex items-center gap-3">
                <span>Townsville · Ingham · Charters Towers | Private, NDIS &amp; VHC Approved</span>
                <span className="text-[#D4A359]">✦</span>
              </span>
              <span className="flex items-center gap-3">
                <span>Townsville · Ingham · Charters Towers | Private, NDIS &amp; VHC Approved</span>
                <span className="text-[#D4A359]">✦</span>
              </span>
              <span className="flex items-center gap-3">
                <span>Townsville · Ingham · Charters Towers | Private, NDIS &amp; VHC Approved</span>
                <span className="text-[#D4A359]">✦</span>
              </span>
            </div>
          </div>
        </div>

        {/* Hero 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Completely Box-Free Editorial Layout */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Main Headline */}
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-bold tracking-tight leading-[1.12] text-white">
                Compassionate clinical care and everyday living,{' '}
                <span className="font-serif italic font-normal text-[#E5B56A] block mt-1">at your doorstep.</span>
              </h1>
              <p className="text-base sm:text-lg text-teal-100/90 mt-4 max-w-xl font-normal leading-relaxed">
                Locally owned and based in Townsville. Supporting self-managed, plan-managed NDIS, private, and VHC participants with prompt clinical nursing, 2-week FCA reports, and independent living.
              </p>
            </div>

            {/* ============================================================== */}
            {/* COMPLETELY BOX-FREE EDITORIAL SPECIFICATION MATRIX */}
            {/* Zero card containers, zero glass borders - open architectural typography */}
            {/* ============================================================== */}
            <div className="pt-4 border-t border-white/20">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5">
                {coreBullets.map((b, idx) => {
                  const Icon = b.icon;
                  return (
                    <div key={idx} className="group space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] font-mono font-bold text-[#E5B56A] tracking-wider">
                          {b.num}
                        </span>
                        <span className="text-[10px] uppercase font-bold tracking-wider text-teal-200/80">
                          / {b.tag}
                        </span>
                      </div>
                      
                      <div className="flex items-start gap-2.5 pt-0.5">
                        <div className="w-6 h-6 rounded-md bg-[#D4A359]/20 border border-[#D4A359]/30 flex items-center justify-center text-[#E5B56A] flex-shrink-0 mt-0.5">
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                        <h3 className="font-bold text-sm sm:text-base text-white group-hover:text-[#E5B56A] transition-colors leading-snug">
                          {b.title}
                        </h3>
                      </div>
                      
                      <p className="text-xs text-teal-100/80 leading-relaxed font-normal pl-8">
                        {b.detail}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="tel:0431430905"
                className="btn-press inline-flex items-center justify-center gap-2.5 bg-[#D4A359] hover:bg-[#C28F42] text-[#0D2E27] font-bold text-sm sm:text-base px-6 py-3.5 rounded-full shadow-lg shadow-[#D4A359]/20 transition-colors"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-[#0D2E27]" />
                <span>Call Alan: 0431 430 905</span>
              </a>

              <a
                href="#units"
                className="inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/30 text-white font-semibold text-sm sm:text-base px-5 py-3.5 rounded-full transition-colors"
              >
                <span>View 1 &amp; 2-Bed Units</span>
                <ArrowRight className="w-4 h-4 text-[#E5B56A]" />
              </a>
            </div>

            {/* Trust Footer line with verified badges */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-teal-200/90 pt-2 border-t border-white/15">
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#E5B56A]" /> 2-Week FCA Reports
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#E5B56A]" /> 1 &amp; 2 Bed Units Ready
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#E5B56A]" /> Private, NDIS &amp; VHC
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#E5B56A]" /> Nurse Aged Care Reviews
              </span>
            </div>

          </div>

          {/* Right Column: Architectural Intake Desk Console (No AI Box) */}
          <div className="lg:col-span-5">
            <div className="bg-[#FCFAF7] border border-[#E2DBD0] p-6 sm:p-7 shadow-xl rounded-2xl text-[#182823] relative">
              
              {/* Form Editorial Header */}
              <div className="border-b border-[#E8E2D7] pb-3.5 mb-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-widest font-bold text-[#164E43]">
                    Direct Intake Desk
                  </span>
                  <span className="text-[11px] font-bold text-[#B38135] bg-[#FAF3E7] border border-[#E8D1A7] px-2.5 py-0.5 rounded-md">
                    Fast Response
                  </span>
                </div>
                <h3 className="font-bold text-xl text-[#0E352D] mt-1 tracking-tight">
                  Quick Callback Request
                </h3>
                <p className="text-xs text-stone-600 mt-0.5 flex items-center gap-1.5 font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  <span>Alan responds directly to all enquiries</span>
                </p>
              </div>

              {feedback && (
                <div
                  className={`p-3.5 rounded-xl mb-4 text-xs flex items-start gap-2.5 ${
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

              <form onSubmit={handleCallbackSubmit} className="space-y-3.5 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-stone-700 mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Full name"
                      className="w-full px-3 py-2.5 rounded-lg border border-[#DCD6CA] bg-white text-stone-900 placeholder-stone-400 font-medium text-xs focus:border-[#164E43] focus:ring-1 focus:ring-[#164E43] outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-stone-700 mb-1">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="0412 345 678"
                      className="w-full px-3 py-2.5 rounded-lg border border-[#DCD6CA] bg-white text-stone-900 placeholder-stone-400 font-medium text-xs focus:border-[#164E43] focus:ring-1 focus:ring-[#164E43] outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-stone-700 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your.email@example.com"
                      className="w-full px-3 py-2.5 rounded-lg border border-[#DCD6CA] bg-white text-stone-900 placeholder-stone-400 font-medium text-xs focus:border-[#164E43] focus:ring-1 focus:ring-[#164E43] outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-stone-700 mb-1">
                      Townsville Suburb
                    </label>
                    <input
                      type="text"
                      value={formData.suburb}
                      onChange={(e) => setFormData({ ...formData, suburb: e.target.value })}
                      placeholder="e.g. Kirwan or Burdell"
                      className="w-full px-3 py-2.5 rounded-lg border border-[#DCD6CA] bg-white text-stone-900 placeholder-stone-400 font-medium text-xs focus:border-[#164E43] focus:ring-1 focus:ring-[#164E43] outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-stone-700 mb-1">
                    Service Needed
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-lg border border-[#DCD6CA] bg-white text-stone-900 font-medium text-xs focus:border-[#164E43] focus:ring-1 focus:ring-[#164E43] outline-none transition-colors"
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
                  className="btn-press w-full inline-flex items-center justify-center gap-2 bg-[#164E43] hover:bg-[#0E352D] text-white font-bold text-xs sm:text-sm py-3.5 rounded-xl shadow-md transition-colors"
                >
                  <Send className="w-4 h-4 text-[#E5B56A]" />
                  <span>{isSubmitting ? 'Sending Request...' : 'Send Callback Request'}</span>
                </button>
              </form>

              <div className="mt-4 pt-3 border-t border-[#E8E2D7] flex items-center justify-between text-[11px] text-stone-500">
                <span className="flex items-center gap-1.5 font-medium">
                  <Clock className="w-3.5 h-3.5 text-[#164E43]" /> Mon–Sat 7am–7pm
                </span>
                <span className="font-semibold text-[#164E43]">
                  Direct: 0431 430 905
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
