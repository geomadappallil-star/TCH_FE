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
  Sparkles, 
  Calendar, 
  ShieldCheck 
} from 'lucide-react';
import { submitQuickCallback } from '../services/enquiryService.js';

interface PhotoHeroProps {
  onNavigate?: (pageId: string) => void;
}

export const PhotoHero: React.FC<PhotoHeroProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    suburb: 'Townsville',
    service: 'Allied Health / FCA Report (2 Weeks)',
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
        suburb: 'Townsville',
        service: 'Allied Health / FCA Report (2 Weeks)',
        message: ''
      });
    }
    setIsSubmitting(false);
  };

  const coreBullets = [
    {
      icon: FileText,
      title: 'FCA in 2 Weeks',
      badge: 'color-accent',
      detail: 'Fast Functional Capacity Assessments by certified OTs.'
    },
    {
      icon: Building2,
      title: '1 & 2-Bed Units',
      badge: 'color-secondary',
      detail: 'Move-in ready rental units in Townsville available now.'
    },
    {
      icon: Stethoscope,
      title: 'Nursing & Therapies',
      badge: 'color-blue',
      detail: 'Clinical nursing, Physio, Speech, Dietetics, EP & Psychology.'
    },
    {
      icon: Sparkles,
      title: 'Domestic & Garden',
      badge: 'color-rose',
      detail: 'Mowing, trimming up to 4m, and general cleaning (NDIS/VHC/Private).'
    }
  ];

  const handleReferralScroll = () => {
    const el = document.getElementById('referral');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else if (onNavigate) {
      onNavigate('home');
      setTimeout(() => {
        const target = document.getElementById('referral');
        if (target) target.scrollIntoView({ behavior: 'smooth' });
      }, 350);
    }
  };

  return (
    <section className="relative min-h-[85vh] flex items-center py-12 md:py-20 overflow-hidden bg-gradient-to-b from-[#FFF3E2] via-[#FAF3EA] to-[#FFF3E2] text-[#2B2822]">
      
      {/* 1. Transparent Care Video Loop with Poster Fallback */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=1920&q=85"
        className="absolute inset-0 w-full h-full object-cover opacity-15 pointer-events-none mix-blend-multiply filter brightness-95"
        aria-hidden="true"
      >
        <source src="https://assets.mixkit.co/videos/preview/mixkit-nurse-measuring-the-blood-pressure-of-an-elderly-woman-42611-large.mp4" type="video/mp4" />
      </video>

      {/* Decorative ATS-style Organic Shapes */}
      <div className="absolute top-10 right-10 w-96 h-96 rounded-full bg-[#F9B835]/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-[#94C08E]/20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* Top Eyebrow Chip */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#0B4F51]/15 text-xs font-semibold text-[#0B4F51] mb-6 shadow-sm fadeInFromTop">
          <span className="w-2 h-2 rounded-full bg-[#F9B835] animate-pulse"></span>
          <span>Townsville · Ayr · Ingham · Charters Towers · Mareeba · Mount Isa</span>
        </div>

        {/* Hero 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: ATS Organic Pill Headline & Narrative */}
          <div className="lg:col-span-7 space-y-6 fadeInFromLeft">
            
            <div>
              <div className="text-xs uppercase font-bold tracking-widest text-[#EC7E38] mb-2">
                Townsville Community Health · North Queensland
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold tracking-tight leading-[1.18] text-[#0B4F51]">
                Locals looking after <br className="hidden sm:inline" />
                <span className="color-secondary">locals.</span>
              </h1>
              <p className="text-base sm:text-lg text-gray-700 mt-4 max-w-2xl font-normal leading-relaxed">
                TCH Support Services (Townsville Community Health) is a locally owned and operated support provider based in Townsville. We help NDIS participants, older Australians, veterans and private clients across North Queensland live well at home and stay connected to their community.
              </p>
            </div>

            {/* ATS Pill Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                type="button"
                onClick={handleReferralScroll}
                className="ats-button bg-[#EF85AA] hover:bg-[#f29ab7] text-[#590925] border border-[#590925]/20 shadow-md"
              >
                <span>Make a Referral</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="https://tchservices.splose.com/public-form/2c733ea1-1b3a-41d5-87d7-98ba320cd4f8"
                target="_blank"
                rel="noopener noreferrer"
                className="ats-button bg-[#94C08E] hover:bg-[#a6d1a0] text-[#184013] border border-[#184013]/20 shadow-md"
              >
                <Calendar className="w-4 h-4" />
                <span>Book 2-Week FCA (Splose)</span>
              </a>

              {onNavigate && (
                <button
                  type="button"
                  onClick={() => onNavigate('units')}
                  className="ats-button bg-white hover:bg-gray-50 text-[#0B4F51] border border-[#0B4F51]/20 shadow-sm"
                >
                  <Building2 className="w-4 h-4 text-[#EC7E38]" />
                  <span>Enquire About Units</span>
                </button>
              )}
            </div>

            {/* 4 Crisp Highlight Bullets with ATS Colored Pill Accents */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {coreBullets.map((b, idx) => {
                const IconComponent = b.icon;
                return (
                  <div 
                    key={idx} 
                    className="p-4 rounded-2xl bg-white border border-[#0B4F51]/15 hover:border-[#0B4F51]/30 transition-all shadow-sm hover:shadow-md group"
                  >
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <div className="flex items-center gap-2">
                        <IconComponent className="w-4 h-4 text-[#0B4F51] group-hover:scale-110 transition-transform" />
                        <h4 className="font-bold text-sm text-[#0B4F51]">{b.title}</h4>
                      </div>
                      <span className={`${b.badge} text-[10px] font-bold`}>
                        Active
                      </span>
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed pl-6">
                      {b.detail}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Credibility Footer Bar */}
            <div className="flex flex-wrap items-center gap-4 pt-1 text-xs text-gray-700">
              <span className="flex items-center gap-1.5 font-medium">
                <ShieldCheck className="w-4 h-4 text-[#0B4F51]" /> Current NDIS Worker Screening
              </span>
              <span className="text-gray-400">•</span>
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#94C08E]" /> Plan-Managed &amp; Self-Managed
              </span>
              <span className="text-gray-400">•</span>
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#94C08E]" /> DVA VHC &amp; Private
              </span>
            </div>

          </div>

          {/* Right Column: Direct Fast-Callback Box with ATS Styling */}
          <div className="lg:col-span-5 fadeInFromRight">
            <div className="bg-white text-[#2B2822] rounded-3xl p-6 sm:p-7 shadow-xl border-2 border-[#0B4F51]/15 relative">
              
              <div className="mb-4">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#0B4F51]/10 text-[#0B4F51] text-[11px] font-bold uppercase tracking-wider mb-1.5">
                  <Sparkles className="w-3 h-3 text-[#F9B835]" /> Direct Local Response
                </div>
                <h3 className="text-xl font-bold text-[#0B4F51] tracking-tight">
                  Request a Prompt Callback
                </h3>
                <p className="text-xs text-gray-600 mt-1">
                  Have questions or need local care across North Queensland? Alan responds directly.
                </p>
              </div>

              {feedback && (
                <div className={`p-3.5 rounded-xl text-xs mb-4 ${
                  feedback.success 
                    ? 'bg-emerald-50 border border-emerald-300 text-emerald-900' 
                    : 'bg-red-50 border border-red-300 text-red-900'
                }`}>
                  <p className="font-bold">{feedback.message}</p>
                  {feedback.refId && (
                    <p className="text-[11px] text-emerald-700 mt-0.5">Reference ID: <strong>{feedback.refId}</strong></p>
                  )}
                </div>
              )}

              <form onSubmit={handleCallbackSubmit} className="space-y-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Full name or Coordinator name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="tactile-input w-full px-3.5 py-2.5 text-xs sm:text-sm bg-gray-50 focus:bg-white"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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
                      Town / Suburb *
                    </label>
                    <select
                      value={formData.suburb}
                      onChange={(e) => setFormData({ ...formData, suburb: e.target.value })}
                      className="tactile-input w-full px-3.5 py-2.5 text-xs sm:text-sm bg-gray-50 focus:bg-white"
                    >
                      <option>Townsville</option>
                      <option>Ayr (Burdekin)</option>
                      <option>Ingham (Hinchinbrook)</option>
                      <option>Charters Towers</option>
                      <option>Mareeba (Tablelands)</option>
                      <option>Mount Isa</option>
                      <option>Other North QLD</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Service Required *
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="tactile-input w-full px-3.5 py-2.5 text-xs sm:text-sm bg-gray-50 focus:bg-white"
                  >
                    <option>Allied Health / FCA Report (2 Weeks)</option>
                    <option>1 &amp; 2-Bedroom Units (Available Now)</option>
                    <option>NDIS Supports (Personal Care &amp; Community Access)</option>
                    <option>Nursing Services (Wound, Diabetes, Clinical)</option>
                    <option>Gardening Services (Mowing, Edging, Pruning)</option>
                    <option>Domestic and Cleaning Services</option>
                    <option>Veterans' Home Care (VHC) / Private</option>
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#0B4F51] hover:bg-[#073B3C] text-white font-bold text-sm py-3 rounded-full shadow-md hover:shadow-lg transition-all"
                >
                  <Send className="w-4 h-4 text-[#F9B835]" />
                  <span>{isSubmitting ? 'Sending Request...' : 'Send Callback Request'}</span>
                </button>
              </form>

              <div className="mt-3.5 pt-3 border-t border-gray-200 flex items-center justify-between text-[11px] text-gray-600">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#0B4F51]" /> Mon–Sat 7am–7pm
                </span>
                <a href="tel:0431430905" className="font-bold text-[#0B4F51] hover:underline">
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
