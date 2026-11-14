import React from 'react';
import { 
  Phone, 
  ArrowRight, 
  ExternalLink, 
  CheckCircle2, 
  Stethoscope, 
  Building2, 
  Clock, 
  FileText, 
  Sparkles 
} from 'lucide-react';

export const PhotoHero: React.FC = () => {
  const SPLOSE_FCA_URL = 'https://tchservices.splose.com/public-form/2c733ea1-1b3a-41d5-87d7-98ba320cd4f8';

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
    <section className="relative min-h-[85vh] flex items-center py-12 md:py-20 overflow-hidden bg-[#163932] text-white">
      
      {/* 1. Transparent Background Video Loop with Poster Fallback */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="./images/hero-veranda.jpg"
        className="absolute inset-0 w-full h-full object-cover opacity-25 pointer-events-none mix-blend-luminosity filter brightness-95"
        aria-hidden="true"
      >
        <source src="https://assets.mixkit.co/videos/preview/mixkit-nurse-measuring-the-blood-pressure-of-an-elderly-woman-42611-large.mp4" type="video/mp4" />
      </video>

      {/* 2. Fallback Transparent Background Banner Photo */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 pointer-events-none mix-blend-multiply"
        style={{
          backgroundImage: `url('./images/hero-veranda.jpg')`
        }}
      />
      
      {/* 3. Deep Eucalyptus Gradient Wash */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#163932] via-[#163932]/95 to-[#163932]/80 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* Top Eyebrow Chip */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-emerald-200 mb-6 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-[#D4A359] animate-pulse"></span>
          <span>Townsville · Cairns · Mackay · Ayr · Ingham · Charters Towers · Mareeba · Mount Isa | Private, NDIS &amp; VHC Approved</span>
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
                <CheckCircle2 className="w-4 h-4 text-[#D4A359]" /> Screened Local Staff
              </span>
            </div>

          </div>

          {/* Right Column: Fast-Track Referral Redirect Console (Replacing Old Callback Form) */}
          <div className="lg:col-span-5">
            <div className="bg-white/95 backdrop-blur-xl p-6 sm:p-7 border border-white shadow-2xl rounded-3xl text-[#192B27] space-y-5">
              
              {/* Header */}
              <div className="flex items-center justify-between border-b border-gray-200 pb-3.5">
                <div>
                  <h3 className="font-bold text-lg sm:text-xl text-[#163932]">
                    Make a Referral
                  </h3>
                  <p className="text-xs text-gray-600 mt-0.5">
                    Fast-track intake for participants, coordinators &amp; doctors
                  </p>
                </div>
                <span className="px-3 py-1 rounded-full bg-[#D4A359]/20 text-[#8C631B] text-xs font-bold border border-[#D4A359]/40">
                  Fast Intake
                </span>
              </div>

              {/* Allied Health & FCA Referral (Splose Form Link) */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#F8F7F3] border border-[#2D6A5D]/20 shadow-xs space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#2D6A5D] uppercase tracking-wider">
                    <Stethoscope className="w-4 h-4 text-[#D4A359]" />
                    <span>Allied Health</span>
                  </div>
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold">
                    <Clock className="w-3 h-3 text-emerald-600" /> 2-Week FCA
                  </span>
                </div>

                <div>
                  <h4 className="font-bold text-sm sm:text-base text-[#163932]">
                    Functional Capacity Assessments (FCA) &amp; Therapies
                  </h4>
                  <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                    OT assessments, physiotherapy, speech pathology, dietetics, exercise physiology, and psychology. Fast reports with no waiting lists.
                  </p>
                </div>

                <a
                  href={SPLOSE_FCA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#D4A359] hover:bg-[#c49245] text-[#163932] font-bold text-sm py-3 px-4 rounded-xl shadow-md hover:shadow-lg transition-all group"
                >
                  <span>Open Allied Health Referral Form</span>
                  <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                <p className="text-[11px] text-gray-500 text-center">
                  Opens our secure online Splose referral portal in a new tab.
                </p>
              </div>

              {/* Direct Help Footer */}
              <div className="pt-2 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-600">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#2D6A5D]" /> Mon–Sat 7am–7pm
                </span>
                <div className="flex items-center gap-3">
                  <span className="text-gray-400">Need help?</span>
                  <a href="tel:0431430905" className="font-bold text-[#163932] hover:text-[#2D6A5D] hover:underline">
                    0431 430 905
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
