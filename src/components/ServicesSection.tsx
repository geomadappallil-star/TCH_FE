import React, { useState, useEffect, useRef } from 'react';
import { 
  Stethoscope, 
  Activity, 
  Home, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Phone, 
  Eye, 
  Check,
  ChevronRight
} from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const [activeSectionId, setActiveSectionId] = useState<string>('nursing');
  const [hoveredBullet, setHoveredBullet] = useState<{ [key: string]: number | null }>({});

  const servicePillars = [
    {
      id: 'nursing',
      num: '01',
      icon: Stethoscope,
      image: './images/service-nursing.jpg',
      imageAlt: 'Clinical nurse consultation and healthcare support in Townsville',
      accentTag: 'Clinical Nursing & Assessments',
      iconBg: 'bg-[#164E43]/15 text-[#164E43]',
      badgeBg: 'bg-[#164E43]/10 text-[#164E43] border-[#164E43]/20',
      title: 'Nursing Supports & Care',
      tagline: 'Nurse reviews for aged care, clinical treatments & assessments',
      bullets: [
        'Nurse review for aged care & comprehensive clinical assessments',
        'Complex wound dressings & post-surgical care reviews',
        'Subcutaneous medication administration & injection charts',
        'Enteral feeding management (PEG / NG tube care & hygiene)',
        'Continence assessments & urinary catheter care (IDC / SPC)'
      ],
      badge: 'AHPRA Registered RNs',
      cta: 'Book Nurse Review'
    },
    {
      id: 'allied-health',
      num: '02',
      icon: Activity,
      image: './images/service-allied-health.jpg',
      imageAlt: 'Allied health therapist conducting consultation and assessments',
      accentTag: 'Occupational Therapy & Physio',
      iconBg: 'bg-[#D4A359]/20 text-[#B38135]',
      badgeBg: 'bg-[#FAF3E7] text-[#9E6C1F] border-[#E8D1A7]',
      title: 'Allied Health Services',
      tagline: 'OT, Physio, Counselling & 2-week FCA assessment reports',
      bullets: [
        'FCA reports: Functional Capacity Assessments available in 2 weeks',
        'Occupational Therapy (OT) comprehensive home assessments',
        'Physiotherapy (Physio) mobility plans & active fall prevention',
        'Counselling services & psychosocial emotional well-being',
        'NDIS review justification & multidisciplinary clinical reports'
      ],
      badge: 'FCA Reports in 2 Weeks',
      cta: 'Book Allied Health'
    },
    {
      id: 'home-care',
      num: '03',
      icon: Home,
      image: './images/service-yard-cleaning.jpg',
      imageAlt: 'Tropical Townsville home lawn mowing, garden care, and cleaning',
      accentTag: 'Lawn Care, Gardening & Housekeeping',
      iconBg: 'bg-[#5B8266]/15 text-[#3D6348]',
      badgeBg: 'bg-[#EFF5F0] text-[#3D6348] border-[#CFE0D3]',
      title: 'Gardening & Cleaning Services',
      tagline: 'Available for Private, NDIS, and VHC (Veterans\' Home Care)',
      bullets: [
        'Gardening and cleaning services available private, NDIS & VHC',
        'Fortnightly lawn mowing, whipper snipping & edge clearing',
        'Tropical wet season yard cleanups & palm debris removal',
        'High-pressure washing of slippery mouldy concrete paths',
        'Regular domestic house cleaning, bathroom sanitising & mopping'
      ],
      badge: 'Private · NDIS · VHC',
      cta: 'Schedule Yard / Cleaning'
    }
  ];

  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  // Scroll-triggered viewport detection for Butterflow-style background image transition
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSectionId(entry.target.id);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '-10% 0px -25% 0px'
      }
    );

    Object.values(sectionRefs.current).forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToService = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      setActiveSectionId(id);
    }
  };

  return (
    <section id="services" className="scroll-mt-20 py-20 md:py-28 bg-[#FAF8F5] relative overflow-hidden">
      
      {/* Background Atmosphere Wash */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none opacity-10 mix-blend-multiply"
        style={{
          backgroundImage: `url('./images/yard-care-bg.jpg')`
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#FAF8F5]/95 via-[#FAF8F5]/85 to-[#F2EFE8]/95 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#164E43]/10 text-[#164E43] text-xs font-bold uppercase tracking-wider mb-4 border border-[#164E43]/15">
            <Sparkles className="w-3.5 h-3.5 text-[#D4A359]" />
            <span>Our Core Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-[#0E352D] leading-tight">
            High-standard clinical care, allied health and home supports.
          </h2>
          <p className="text-base sm:text-lg text-[#3E554E] mt-4 font-normal leading-relaxed">
            From 2-week FCA assessment reports and nurse aged care reviews to gardening and cleaning across Private, NDIS, and VHC, we deliver reliable local care in North Queensland.
          </p>

          {/* Butterflow Interactive Service Navigator Ribbon */}
          <div className="mt-8 flex flex-wrap items-center gap-2.5">
            {servicePillars.map((p) => {
              const isSelected = activeSectionId === p.id;
              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => scrollToService(p.id)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 flex items-center gap-2 border ${
                    isSelected
                      ? 'bg-[#164E43] text-[#E5B56A] border-[#164E43] shadow-md -translate-y-0.5'
                      : 'bg-white text-stone-700 border-stone-200 hover:border-[#164E43]/40 hover:bg-[#FAF8F5]'
                  }`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-[#E5B56A] animate-pulse' : 'bg-stone-400'}`} />
                  <span className="font-mono text-[11px] opacity-80">{p.num}</span>
                  <span>{p.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ============================================================== */}
        {/* BUTTERFLOW-STYLE SCROLL-DRIVEN SERVICE STAGES */}
        {/* When scrolled to, images move to the background & text steps forward with rich interactivity */}
        {/* ============================================================== */}
        <div className="space-y-16 sm:space-y-24">
          {servicePillars.map((pillar, index) => {
            const Icon = pillar.icon;
            const isReversed = index % 2 !== 0;
            const isActive = activeSectionId === pillar.id;

            return (
              <div 
                key={pillar.id}
                id={pillar.id}
                ref={(el) => (sectionRefs.current[pillar.id] = el)}
                onMouseEnter={() => setActiveSectionId(pillar.id)}
                className={`relative rounded-3xl overflow-hidden transition-butterflow duration-700 border ${
                  isActive
                    ? 'border-[#164E43]/30 shadow-2xl bg-[#09221C] text-white'
                    : 'border-stone-200/80 shadow-md bg-white text-[#182823]'
                }`}
              >
                
                {/* 1. DYNAMIC BACKGROUND IMAGE LAYER (Transitions to Background on Scroll/Hover) */}
                <div 
                  className={`absolute inset-0 bg-cover bg-center transition-butterflow duration-1000 pointer-events-none ${
                    isActive 
                      ? 'opacity-30 scale-105 filter blur-[0.5px]' 
                      : 'opacity-0 scale-100'
                  }`}
                  style={{
                    backgroundImage: `url('${pillar.image}')`
                  }}
                />

                {/* Ambient Deep Eucalyptus & Gradient Overlay when Active */}
                <div 
                  className={`absolute inset-0 transition-butterflow duration-700 pointer-events-none ${
                    isActive 
                      ? 'bg-gradient-to-r from-[#09221C]/95 via-[#09221C]/85 to-[#09221C]/65' 
                      : 'bg-transparent'
                  }`} 
                />

                {/* 2. FOREGROUND CONTENT & INTERACTIVE COMPOSITION */}
                <div className="relative z-10 p-6 sm:p-10 lg:p-14">
                  <div className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-14 ${
                    isReversed ? 'lg:flex-row-reverse' : ''
                  }`}>
                    
                    {/* Left/Content Column (Becomes richly interactive when in view) */}
                    <div className="w-full lg:w-1/2 space-y-5">
                      
                      {/* Header Badge & Category Tag */}
                      <div className="flex items-center gap-3">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
                          isActive 
                            ? 'bg-[#D4A359]/20 text-[#E5B56A] border border-[#D4A359]/40' 
                            : pillar.iconBg
                        }`}>
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className={`inline-block px-3 py-0.5 rounded-full text-xs font-bold border transition-colors ${
                              isActive 
                                ? 'bg-white/10 text-[#E5B56A] border-[#D4A359]/40' 
                                : pillar.badgeBg
                            }`}>
                              {pillar.badge}
                            </span>
                            <span className={`text-[10px] font-mono font-bold tracking-wider ${
                              isActive ? 'text-[#E5B56A]' : 'text-[#164E43]'
                            }`}>
                              {pillar.num} / 03
                            </span>
                          </div>
                          <span className={`block text-[11px] uppercase tracking-wider font-semibold mt-1 transition-colors ${
                            isActive ? 'text-teal-200/80' : 'text-stone-500'
                          }`}>
                            {pillar.accentTag}
                          </span>
                        </div>
                      </div>

                      {/* Title & Tagline */}
                      <div>
                        <h3 className={`text-2xl sm:text-3xl font-bold tracking-tight transition-colors ${
                          isActive ? 'text-white' : 'text-[#0E352D]'
                        }`}>
                          {pillar.title}
                        </h3>
                        <p className={`text-sm sm:text-base font-semibold mt-1.5 transition-colors ${
                          isActive ? 'text-[#E5B56A]' : 'text-[#164E43]'
                        }`}>
                          {pillar.tagline}
                        </p>
                      </div>

                      {/* Interactive Bullets (Hover or tap illuminates & expands each item) */}
                      <div className="space-y-2.5 pt-2">
                        {pillar.bullets.map((bullet, idx) => {
                          const isBulletHovered = hoveredBullet[pillar.id] === idx;
                          return (
                            <div 
                              key={idx} 
                              onMouseEnter={() => setHoveredBullet({ ...hoveredBullet, [pillar.id]: idx })}
                              onMouseLeave={() => setHoveredBullet({ ...hoveredBullet, [pillar.id]: null })}
                              className={`p-3 rounded-xl transition-butterflow duration-300 flex items-start gap-3 cursor-default border ${
                                isBulletHovered
                                  ? isActive
                                    ? 'bg-white/15 border-[#D4A359]/60 translate-x-2 text-white shadow-md'
                                    : 'bg-[#164E43]/10 border-[#164E43]/30 translate-x-1.5 text-[#0E352D]'
                                  : isActive
                                  ? 'bg-white/[0.04] border-transparent text-teal-100/90 hover:bg-white/[0.08]'
                                  : 'bg-stone-50/80 border-transparent text-stone-800 hover:bg-stone-100/90'
                              }`}
                            >
                              <CheckCircle2 className={`w-5 h-5 flex-shrink-0 mt-0.5 transition-colors ${
                                isBulletHovered
                                  ? 'text-[#E5B56A]'
                                  : isActive
                                  ? 'text-emerald-400'
                                  : 'text-[#164E43]'
                              }`} />
                              <span className="text-xs sm:text-sm leading-relaxed font-medium">
                                {bullet}
                              </span>
                            </div>
                          );
                        })}
                      </div>

                      {/* Action Bar with Butterflow-style arrow glide */}
                      <div className={`pt-4 flex flex-wrap items-center gap-4 border-t transition-colors ${
                        isActive ? 'border-white/15' : 'border-stone-200'
                      }`}>
                        <a
                          href="#top"
                          className={`btn-press group inline-flex items-center gap-2.5 font-bold text-xs sm:text-sm px-6 py-3 rounded-full shadow-md transition-all ${
                            isActive
                              ? 'bg-[#D4A359] hover:bg-[#C28F42] text-[#09221C]'
                              : 'bg-[#164E43] hover:bg-[#0E352D] text-white'
                          }`}
                        >
                          <span>{pillar.cta}</span>
                          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
                        </a>
                        <a
                          href="tel:0431430905"
                          className={`text-xs sm:text-sm font-semibold flex items-center gap-2 transition-colors ${
                            isActive
                              ? 'text-teal-200 hover:text-white'
                              : 'text-stone-600 hover:text-[#0E352D]'
                          }`}
                        >
                          <Phone className={`w-4 h-4 ${isActive ? 'text-[#E5B56A]' : 'text-[#164E43]'}`} />
                          <span>Direct: 0431 430 905</span>
                        </a>
                      </div>

                    </div>

                    {/* Right/Image Column (Showcases high-definition photo alongside ambient transition) */}
                    <div className="w-full lg:w-1/2">
                      <div className={`relative rounded-2xl overflow-hidden transition-butterflow duration-700 shadow-2xl border-2 aspect-[16/11] group/img ${
                        isActive ? 'border-white/30 scale-[1.02]' : 'border-white bg-stone-100'
                      }`}>
                        <img 
                          src={pillar.image} 
                          alt={pillar.imageAlt}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-105" 
                        />
                        
                        {/* Gradient & Live Status Plaque */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />
                        
                        <div className="absolute top-4 right-4">
                          <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[#E5B56A] text-[11px] font-bold border border-white/20 shadow-sm flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#E5B56A] animate-ping" />
                            <span>{isActive ? 'In Focus' : 'Explore'}</span>
                          </span>
                        </div>

                        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs">
                          <span className="bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full font-bold border border-white/20">
                            {pillar.badge}
                          </span>
                          <span className="text-white/90 font-medium hidden sm:inline-block drop-shadow">
                            Townsville &amp; North QLD
                          </span>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
