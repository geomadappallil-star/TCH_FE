import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  ArrowRight, 
  CheckCircle2, 
  Stethoscope,
  Building2,
  Send, 
  Clock,
  FileText,
  Sparkles,
  ChevronRight
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

  // Active capability showcase state (Interactive Non-Card UI)
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

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
      shortTitle: 'FCA Reports',
      detail: 'Functional Capacity Assessment (FCA) reports available in 2 weeks. Fast turnaround by certified OTs.',
      accent: 'from-[#D4A359]/30 to-[#E5B56A]/10'
    },
    {
      num: '02',
      icon: Building2,
      tag: 'Move-in Ready',
      title: '1 & 2-Bed Units Immediate',
      shortTitle: 'Move-In Units',
      detail: 'One-bedroom and two-bedroom units available immediately for independent living in Townsville.',
      accent: 'from-emerald-500/25 to-teal-600/10'
    },
    {
      num: '03',
      icon: Sparkles,
      tag: 'Private · NDIS · VHC',
      title: 'Gardening & Cleaning Services',
      shortTitle: 'Yard & Cleaning',
      detail: 'Lawn mowing, yard care & housekeeping available for Private, NDIS, and VHC (Veterans\' Home Care).',
      accent: 'from-amber-500/25 to-yellow-600/10'
    },
    {
      num: '04',
      icon: Stethoscope,
      tag: 'AHPRA RNs',
      title: 'Nursing & Allied Health',
      shortTitle: 'Nursing & Allied',
      detail: 'Nurse reviews for aged care & clinical assessments. Allied health services including OT, Physio & Counselling.',
      accent: 'from-teal-400/25 to-emerald-600/10'
    }
  ];

  // Auto-cycle through the capabilities smoothly (pauses on user interaction)
  useEffect(() => {
  const interval = setInterval(() => {
    setActiveIdx((prev) => (prev + 1) % coreBullets.length);
  }, 3500);

  return () => clearInterval(interval);
}, [coreBullets.length]);

  const activeFeature = coreBullets[activeIdx];
  const ActiveIcon = activeFeature.icon;

  return (
    <section className="relative min-h-[85vh] flex items-center py-12 md:py-20 lg:py-24 overflow-hidden bg-[#163932] text-white">
      
      {/* 1. Crystal-Clear Ultra-HD Background Photo (Sharp deep focus, no blur) */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none"
        style={{
          backgroundImage: `url('./images/clinical-care.jpg')`
        }}
      />
      
      {/* 2. Previous Signature Eucalyptus Green Wash (Image clearly visible & sharp with rich green branding) */}
      <div className="absolute inset-0 bg-[#163932]/60 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#163932]/90 via-[#163932]/70 via-55% to-[#163932]/25 lg:to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#163932]/80 via-transparent to-[#163932]/30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* Top Eyebrow Chip with Human Touch */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-emerald-100 mb-6 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-[#D4A359] animate-pulse"></span>
          <span>Townsville · Ingham · Charters Towers | Private, NDIS &amp; VHC Approved</span>
        </div>

        {/* Hero 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Reimagined Non-Card UI with Interactive Capabilities Spotlight */}
          <div className="lg:col-span-7 space-y-7">
            
            {/* Main Headline */}
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold tracking-tight leading-[1.12] text-white">
                Compassionate clinical care and everyday living,{' '}
                <span className="font-serif italic font-normal text-[#E5B56A] block mt-1">at your doorstep.</span>
              </h1>
              <p className="text-base sm:text-lg text-teal-100/90 mt-4 max-w-xl font-normal leading-relaxed">
                Locally owned and based in Townsville. Supporting self-managed, plan-managed NDIS, private, and VHC participants with prompt clinical nursing, 2-week FCA reports, and independent living.
              </p>
            </div>

            {/* ============================================================== */}
            {/* BRAND-NEW NON-CARD UI: Interactive Capability Showcase Console */}
            {/* Seamless, borderless, architectural layout with animated cues */}
            {/* ============================================================== */}
            <div 
              className="space-y-4 pt-1"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              
             

              {/* 2. Spotlight Showcase Display (No box card — open, ambient, glowing) */}
              <div className="relative rounded-2xl bg-gradient-to-r from-white/[0.08] via-white/[0.04] to-transparent p-5 sm:p-6 border-l-4 border-l-[#D4A359] border-y border-r border-white/10 backdrop-blur-md">
                
                {/* Decorative Sweeping Light Line Accent */}
                <div className="absolute top-0 inset-x-0 h-0.5 sweep-line bg-gradient-to-r from-transparent via-[#E5B56A]/40 to-transparent"></div>

                <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-5">
                  
                  {/* Glowing Animated Icon Orb */}
                  <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl glow-orb bg-gradient-to-br from-[#D4A359]/30 to-[#0A2E27] border border-[#D4A359]/60 flex items-center justify-center text-[#E5B56A] flex-shrink-0 shadow-lg">
                    <ActiveIcon className="w-6 h-6 sm:w-7 sm:h-7" />
                  </div>

                  {/* Content Block */}
                  <div className="flex-1 space-y-1.5">
                    
                    {/* Index & Shimmer Badge */}
                    <div className="flex items-center justify-between gap-3 mb-1">
                      <div className="flex items-center gap-2">
                        
                      </div>
                      
                      {/* Animated Shimmer Pill */}
                      <span className="shimmer-badge px-3 py-0.5 rounded-full text-[11px] font-bold text-white border border-[#D4A359]/50 shadow-sm flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#E5B56A] animate-ping"></span>
                        {activeFeature.tag}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
                      {activeFeature.title}
                    </h3>

                    {/* Detail Description */}
                    <p className="text-sm text-teal-100/90 leading-relaxed pt-0.5">
                      {activeFeature.detail}
                    </p>

                  </div>
                </div>

                {/* Smooth Animated Progress Line */}
                {/* Auto Scrolling Service Indicator */}
<div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-teal-200/80">
 

  
</div>

              </div>

              

            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-1">
              <a
                href="tel:0431430905"
                className="inline-flex items-center justify-center gap-2.5 bg-[#D4A359] hover:bg-[#C28F42] text-[#0D2E27] font-bold text-sm sm:text-base px-6 py-3.5 rounded-full shadow-lg shadow-[#D4A359]/20 transition-colors"
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
            <div className="flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-teal-200/90 pt-1 border-t border-white/10">
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

          {/* Right Column: Handcrafted Direct Care Desk Console */}
          <div className="lg:col-span-5">
            <div className="bg-[#FFFFFF] p-6 sm:p-7 border-t-4 border-[#D4A359] border-x border-b border-gray-200 shadow-2xl rounded-3xl text-[#182823] relative">
              
              {/* Card Header */}
              <div className="flex items-center justify-between border-b border-gray-100 pb-3.5 mb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-base text-[#0E352D]">
                      Quick Callback Request
                    </h3>
                  </div>
                  <p className="text-xs text-gray-500 mt-0.5 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    <span>Alan responds directly to all enquiries</span>
                  </p>
                </div>
                <span className="px-3 py-1 rounded-full bg-[#FAF3E7] text-[#9E6C1F] text-[11px] font-bold border border-[#E8D1A7]">
                  Fast Response
                </span>
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
                    <label className="block text-gray-700 font-bold uppercase tracking-wider mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Full name"
                      className="w-full p-2.5 rounded-xl border border-gray-200 focus:border-[#164E43] focus:ring-2 focus:ring-[#164E43]/15 text-[#182823] bg-[#FAF8F5] font-medium outline-none transition-colors"
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
                      className="w-full p-2.5 rounded-xl border border-gray-200 focus:border-[#164E43] focus:ring-2 focus:ring-[#164E43]/15 text-[#182823] bg-[#FAF8F5] font-medium outline-none transition-colors"
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
                      className="w-full p-2.5 rounded-xl border border-gray-200 focus:border-[#164E43] focus:ring-2 focus:ring-[#164E43]/15 text-[#182823] bg-[#FAF8F5] font-medium outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-bold uppercase tracking-wider mb-1">Townsville Suburb</label>
                    <input
                      type="text"
                      value={formData.suburb}
                      onChange={(e) => setFormData({ ...formData, suburb: e.target.value })}
                      placeholder="e.g. Kirwan or Burdell"
                      className="w-full p-2.5 rounded-xl border border-gray-200 focus:border-[#164E43] focus:ring-2 focus:ring-[#164E43]/15 text-[#182823] bg-[#FAF8F5] font-medium outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-bold uppercase tracking-wider mb-1">Service Needed</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full p-2.5 rounded-xl border border-gray-200 focus:border-[#164E43] focus:ring-2 focus:ring-[#164E43]/15 text-[#182823] bg-[#FAF8F5] font-medium outline-none transition-colors"
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
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#164E43] hover:bg-[#0E352D] text-white font-bold text-sm py-3.5 rounded-xl shadow-md transition-colors"
                >
                  <Send className="w-4 h-4 text-[#E5B56A]" />
                  <span>{isSubmitting ? 'Sending Request...' : 'Send Callback Request'}</span>
                </button>
              </form>

              <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-500">
                <span className="flex items-center gap-1.5 font-medium">
                  <Clock className="w-3.5 h-3.5 text-[#164E43]" /> Mon–Sat 7am–7pm
                </span>
                
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
