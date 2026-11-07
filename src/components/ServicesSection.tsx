import React from 'react';
import { 
  Stethoscope, 
  Activity, 
  Home, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Clock,
  Sparkles,
  Phone
} from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const servicePillars = [
    {
      id: 'nursing',
      icon: Stethoscope,
      image: './images/service-nursing.jpg',
      imageAlt: 'Clinical nurse consultation and healthcare support in Townsville',
      accentTag: 'Clinical Nursing & Assessments',
      iconBg: 'bg-[#164E43]/10 text-[#164E43]',
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

  return (
    <section id="services" className="scroll-mt-20 py-20 md:py-28 bg-[#FAF8F5] relative overflow-hidden">
      
      {/* Background Atmosphere Wash */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none opacity-15 mix-blend-multiply"
        style={{
          backgroundImage: `url('./images/yard-care-bg.jpg')`
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#FAF8F5]/95 via-[#FAF8F5]/85 to-[#F2EFE8]/95 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
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
        </div>

        {/* Zig-Zag Alternating Showcase Rows */}
        <div className="space-y-16 sm:space-y-24">
          {servicePillars.map((pillar, index) => {
            const Icon = pillar.icon;
            // Alternating mode: Even index (0, 2) -> Left Content, Right Image; Odd index (1) -> Left Image, Right Content
            const isReversed = index % 2 !== 0;

            return (
              <div 
                key={pillar.id}
                className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-14 ${
                  isReversed ? 'lg:flex-row-reverse' : ''
                }`}
              >
                
                {/* 1. Content Section */}
                <div className="w-full lg:w-1/2 space-y-5">
                  
                  {/* Icon & Badge Header */}
                  <div className="flex items-center gap-3">
                    <div className={`w-13 h-13 sm:w-14 sm:h-14 rounded-2xl ${pillar.iconBg} flex items-center justify-center shadow-sm flex-shrink-0`}>
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
                    </div>
                    <div>
                      <span className={`inline-block px-3 py-0.5 rounded-full text-xs font-bold border ${pillar.badgeBg}`}>
                        {pillar.badge}
                      </span>
                      <span className="block text-[11px] uppercase tracking-wider font-semibold text-gray-500 mt-0.5">
                        {pillar.accentTag}
                      </span>
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#0E352D] tracking-tight">
                      {pillar.title}
                    </h3>
                    <p className="text-sm sm:text-base font-semibold text-[#164E43] mt-1.5">
                      {pillar.tagline}
                    </p>
                  </div>

                  {/* Crisp Bullets */}
                  <ul className="space-y-3 pt-1">
                    {pillar.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-[#182823]">
                        <CheckCircle2 className="w-5 h-5 text-[#164E43] flex-shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Action Bar */}
                  <div className="pt-4 flex flex-wrap items-center gap-4 border-t border-gray-200">
                    <a
                      href="#top"
                      className="inline-flex items-center gap-2 bg-[#164E43] hover:bg-[#0E352D] text-white font-bold text-sm px-6 py-3 rounded-full shadow-md transition-colors"
                    >
                      <span>{pillar.cta}</span>
                      <ArrowRight className="w-4 h-4 text-[#D4A359]" />
                    </a>
                    <a
                      href="tel:0431430905"
                      className="text-xs sm:text-sm font-semibold text-gray-600 hover:text-[#0E352D] flex items-center gap-1.5 transition-colors"
                    >
                      <Phone className="w-4 h-4 text-[#164E43]" />
                      <span>Direct: 0431 430 905</span>
                    </a>
                  </div>

                </div>

                {/* 2. Corresponding Image Section */}
                <div className="w-full lg:w-1/2">
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white aspect-[16/11]">
                    <img 
                      src={pillar.image} 
                      alt={pillar.imageAlt}
                      className="w-full h-full object-cover" 
                    />
                    
                    {/* Subtle Gradient & Bottom Glass Badge on the Image */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs">
                      <span className="bg-black/50 backdrop-blur-md px-3.5 py-1.5 rounded-full font-bold border border-white/20">
                        {pillar.badge}
                      </span>
                      <span className="text-white/90 font-medium hidden sm:inline-block drop-shadow">
                        Townsville &amp; North QLD
                      </span>
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
