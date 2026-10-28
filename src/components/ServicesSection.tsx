import React from 'react';
import { 
  Stethoscope, 
  Activity, 
  Home, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Clock,
  Pill,
  Syringe,
  ClipboardList,
  Sparkles,
  Phone
} from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const servicePillars = [
    {
      id: 'nursing',
      icon: Stethoscope,
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
    <section id="services" className="scroll-mt-20 py-16 md:py-24 bg-[#F8F7F3] relative overflow-hidden">
      
      {/* Background Banner with Soft In-Home Care Photo */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10 pointer-events-none mix-blend-multiply"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1920&q=80')`
        }}
      />
      
      {/* Soft Alabaster Wash Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F8F7F3] via-[#F8F7F3]/95 to-[#EFECE4]/90 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2D6A5D]/10 text-[#2D6A5D] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#D4A359]" />
            <span>Our Core Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#163932] leading-tight">
            High-standard clinical care, allied health and home supports.
          </h2>
          <p className="text-base sm:text-lg text-[#3A5049] mt-3 font-normal leading-relaxed">
            From 2-week FCA assessment reports and nurse aged care reviews to gardening and cleaning across Private, NDIS, and VHC, we deliver reliable local care in North Queensland.
          </p>
        </div>

        {/* 3 Prominent Service Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {servicePillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={pillar.id}
                className="bg-white rounded-3xl p-7 sm:p-8 border-2 border-[#2D6A5D]/15 shadow-sm hover:shadow-xl hover:border-[#2D6A5D]/30 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Icon & Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-14 h-14 rounded-2xl bg-[#2D6A5D]/10 flex items-center justify-center text-[#2D6A5D]">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-[#EFECE4] text-[#163932] text-xs font-bold border border-[#2D6A5D]/20">
                      {pillar.badge}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-2xl font-bold text-[#163932] mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-sm font-medium text-[#2D6A5D] mb-6">
                    {pillar.tagline}
                  </p>

                  {/* Crisp Bullets */}
                  <ul className="space-y-3 mb-8">
                    {pillar.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm text-[#192B27]">
                        <CheckCircle2 className="w-4 h-4 text-[#2D6A5D] flex-shrink-0 mt-0.5" />
                        <span className="leading-snug">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card CTA */}
                <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
                  <a
                    href="#top"
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#2D6A5D] hover:text-[#163932] group"
                  >
                    <span>{pillar.cta}</span>
                    <ArrowRight className="w-4 h-4 text-[#D4A359] group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a
                    href="tel:0431430905"
                    className="text-xs font-semibold text-gray-500 hover:text-[#163932] flex items-center gap-1"
                  >
                    <Phone className="w-3 h-3 text-[#2D6A5D]" />
                    <span>0431 430 905</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Clinical Assurance Strip */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-[#2D6A5D]/15 flex flex-col md:flex-row items-center justify-between gap-4 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#D4A359]/20 flex items-center justify-center text-[#8C631B] flex-shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-[#163932] text-sm">Need urgent nurse visit or discharge cover?</h4>
              <p className="text-xs text-gray-600">Townsville University Hospital transitions arranged within 24–48 hours.</p>
            </div>
          </div>
          <a
            href="tel:0431430905"
            className="inline-flex items-center gap-2 bg-[#2D6A5D] hover:bg-[#204E44] text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-full transition-all flex-shrink-0"
          >
            <span>Call Alan Direct: 0431 430 905</span>
          </a>
        </div>

      </div>
    </section>
  );
};
