import React, { useState, useRef } from 'react';
import { 
  HeartHandshake, 
  Activity, 
  Stethoscope, 
  Sparkles, 
  Trees, 
  CheckCircle2, 
  ArrowRight, 
  Phone, 
  ExternalLink, 
  AlertCircle,
  Calendar,
  ShieldCheck,
  Check
} from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('allied-health');
  const [hoveredBullet, setHoveredBullet] = useState<{ [key: string]: number | null }>({});

  const services = [
    {
      id: 'ndis-supports',
      num: '01',
      title: 'NDIS Supports',
      shortTitle: 'NDIS Supports',
      tagline: 'Personal care, community access & daily living support',
      badge: 'Core & Capacity Building',
      badgeClass: 'color-accent',
      icon: HeartHandshake,
      image: './images/service-nursing.jpg',
      imageAlt: 'NDIS participant support in Townsville community',
      description: 'Flexible, respectful assistance that puts you in the driver\'s seat. We match you with support workers who share your interests and respect your routines.',
      bullets: [
        'Personal care: showering, dressing, grooming and hygiene',
        'Community access: shopping, social outings, appointments, sports and hobbies',
        'Daily living support: meal prep, light chores and building daily life skills',
        'Support at home and in the community: one-on-one help tailored to your goals',
        'Housing support: living in our 1 or 2-bedroom units in Townsville with supports arranged'
      ],
      notice: null,
      ctaLabel: 'Enquire About NDIS Supports',
      ctaHref: '#referral',
      isSplose: false
    },
    {
      id: 'allied-health',
      num: '02',
      title: 'Allied Health Services',
      shortTitle: 'Allied Health & FCAs',
      tagline: 'Occupational therapy, physio, speech & comprehensive FCA reports',
      badge: 'FCA Reports in 2 Weeks',
      badgeClass: 'color-secondary',
      icon: Activity,
      image: './images/service-allied-health.jpg',
      imageAlt: 'Allied Health occupational therapy consultation in North Queensland',
      description: 'Quality clinical care with minimal wait times. Our Allied Health team provides comprehensive assessments, therapy plans, and fast-track Functional Capacity Assessments (FCAs).',
      bullets: [
        'Functional Capacity Assessments (FCAs) completed in just 2 weeks',
        'Occupational Therapy (OT): daily living assessments, assistive tech, sensory profiles & home safety',
        'Physiotherapy: mobility, balance, strength, pain management & active fall prevention',
        'Speech Pathology: communication, swallowing, speech and language therapy',
        'Dietetics: nutrition plans, chronic disease dietary management & feeding supports',
        'Exercise Physiology (EP): tailored exercise programs for health & physical capacity',
        'Psychology: mental health, cognitive and behavioural assessments & therapy'
      ],
      notice: 'Fast-Track FCA Guarantee: Completed and delivered in 2 weeks via our encrypted Splose clinical portal.',
      ctaLabel: 'Book 2-Week FCA via Splose',
      ctaHref: 'https://tchservices.splose.com/public-form/2c733ea1-1b3a-41d5-87d7-98ba320cd4f8',
      isSplose: true
    },
    {
      id: 'nursing',
      num: '03',
      title: 'Nursing Services',
      shortTitle: 'Clinical Nursing',
      tagline: 'In-home clinical care from qualified AHPRA registered nurses',
      badge: 'AHPRA Registered RNs',
      badgeClass: 'color-rose',
      icon: Stethoscope,
      image: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=1200&q=80',
      imageAlt: 'Registered clinical nurse providing medication and health care',
      description: 'Professional, compassionate clinical nursing in the comfort of your own home, liaising closely with your GP, medical specialists, and hospital discharge planners.',
      bullets: [
        'Medication management, administration and subcutaneous injections',
        'Complex wound care, surgical dressings and chronic wound management',
        'Diabetes management, blood glucose monitoring and insulin administration',
        'Continence assessments and urinary catheter management (IDC, SPC)',
        'Post-hospital transition support and clinical discharge recovery care',
        'Chronic disease management, vital signs monitoring and health reviews',
        'Coordination with your GP, specialists and family care team'
      ],
      notice: null,
      ctaLabel: 'Book Clinical Nursing Review',
      ctaHref: '#referral',
      isSplose: false
    },
    {
      id: 'cleaning',
      num: '04',
      title: 'Domestic and Cleaning Services',
      shortTitle: 'House Cleaning',
      tagline: 'Available for Private, NDIS, and VHC (Veterans\' Home Care)',
      badge: 'General Cleaning Only',
      badgeClass: 'color-coral',
      icon: Sparkles,
      image: './images/service-yard-cleaning.jpg',
      imageAlt: 'Townsville domestic home cleaning and sanitation',
      description: 'A clean, tidy, fresh home makes life easier. Our domestic cleaning team takes care of everyday housekeeping so you can focus on what matters to you.',
      bullets: [
        'General domestic cleaning (vacuuming, mopping, dusting, surface wipe-down)',
        'Kitchen and bathroom cleaning and sanitising',
        'Bed linen changes and laundry support',
        'Interior tidy-up and light household organisation',
        'Window cleaning (ground floor, accessible windows only)',
        'Flexible scheduling: weekly, fortnightly or one-off visits'
      ],
      notice: 'General domestic cleaning only. Please note: we do NOT offer bond cleans.',
      ctaLabel: 'Schedule Cleaning Service',
      ctaHref: '#referral',
      isSplose: false
    },
    {
      id: 'gardening',
      num: '05',
      title: 'Gardening Services',
      shortTitle: 'Yard & Gardening',
      tagline: 'Available for Private, NDIS, and VHC (Veterans\' Home Care)',
      badge: 'Up to 4m · Lawn & Yard',
      badgeClass: 'color-blue',
      icon: Trees,
      image: './images/yard-care-bg.jpg',
      imageAlt: 'Tropical garden maintenance and lawn mowing in Townsville',
      description: 'Keep your outdoor spaces safe, tidy, and looking great all year round with dependable tropical yard care and mowing.',
      bullets: [
        'Lawn mowing and edging (front, back and footpaths)',
        'Weed control, garden bed maintenance and hand weeding',
        'Hedging and trimming (up to 4 metres only)',
        'Pruning shrubs, small trees and bushes (up to 4 metres only)',
        'Yard tidy-ups and green waste clearing',
        'Regular scheduled maintenance (weekly, fortnightly, monthly)'
      ],
      notice: 'Heights: Pruning & hedging up to 4 metres only. No tree lopping or removal. Green waste disposal: Bin must be provided on site or council tip vouchers supplied.',
      ctaLabel: 'Book Yard & Garden Care',
      ctaHref: '#referral',
      isSplose: false
    }
  ];

  const currentService = services.find(s => s.id === activeTab) || services[0];
  const IconComponent = currentService.icon;

  return (
    <section id="services" className="scroll-mt-20 py-20 md:py-28 bg-[#FFF3E2] relative overflow-hidden border-b border-[#0B4F51]/10">
      
      {/* Decorative ATS Organic Blobs */}
      <div className="absolute top-10 right-10 w-96 h-96 rounded-full bg-[#94C08E]/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-[#F9B835]/15 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 fadeInFromBottom">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#0B4F51]/15 text-[#0B4F51] text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#F9B835]" />
            <span>Our 5 Core Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight text-[#0B4F51] leading-tight">
            Comprehensive local healthcare, <br className="hidden sm:inline" />
            <span className="color-secondary">nursing &amp; home supports.</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-700 mt-4 font-normal leading-relaxed font-sans">
            From 2-week FCA assessment reports and clinical nursing to independent living units, housekeeping, and yard care across Private, NDIS, and VHC in North Queensland.
          </p>

          {/* Interactive ATS Category Navigator Pills */}
          <div className="mt-8 flex flex-wrap items-center gap-2.5">
            {services.map((s) => {
              const isSelected = activeTab === s.id;
              const TabIcon = s.icon;
              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setActiveTab(s.id)}
                  className={`ats-button text-xs sm:text-sm font-bold transition-all duration-300 flex items-center gap-2 ${
                    isSelected
                      ? 'bg-[#0B4F51] text-white shadow-md scale-105 border border-[#0B4F51]'
                      : 'bg-white text-gray-700 border border-[#0B4F51]/15 hover:border-[#0B4F51]/40 hover:bg-[#FAF3EA]'
                  }`}
                >
                  <TabIcon className={`w-4 h-4 ${isSelected ? 'text-[#F9B835]' : 'text-[#0B4F51]'}`} />
                  <span className="font-mono text-[11px] opacity-75">{s.num}</span>
                  <span>{s.shortTitle}</span>
                  {s.id === 'allied-health' && (
                    <span className="ml-1 px-2 py-0.5 rounded-full bg-[#F9B835] text-[#2B2822] text-[10px] font-bold">
                      2 Wks
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* ============================================================== */}
        {/* INTERACTIVE SHOWCASE STAGE */}
        {/* ============================================================== */}
        <div className="bg-white rounded-3xl border-2 border-[#0B4F51]/15 shadow-xl p-6 sm:p-10 lg:p-12 relative overflow-hidden transition-all duration-500">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-5">
              
              {/* Badge & Pill Tag */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#0B4F51]/10 flex items-center justify-center text-[#0B4F51] flex-shrink-0">
                  <IconComponent className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className={`${currentService.badgeClass} text-xs font-bold`}>
                      {currentService.badge}
                    </span>
                    <span className="text-[11px] font-mono font-bold text-[#0B4F51]">
                      {currentService.num} / 05
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0B4F51] mt-1">
                    {currentService.title}
                  </h3>
                </div>
              </div>

              {/* Tagline & Narrative */}
              <div>
                <p className="text-sm sm:text-base font-semibold text-[#EC7E38]">
                  {currentService.tagline}
                </p>
                <p className="text-xs sm:text-sm text-gray-700 mt-2 leading-relaxed font-sans">
                  {currentService.description}
                </p>
              </div>

              {/* Special Note / Notice Banner */}
              {currentService.notice && (
                <div className="p-3.5 rounded-2xl bg-[#FFF3E2] border border-[#F9B835]/40 text-xs text-[#0B4F51] flex items-start gap-2.5 font-medium leading-relaxed">
                  <AlertCircle className="w-4 h-4 text-[#EC7E38] flex-shrink-0 mt-0.5" />
                  <span>{currentService.notice}</span>
                </div>
              )}

              {/* Interactive Bullets */}
              <div className="space-y-2 pt-1">
                {currentService.bullets.map((bullet, idx) => {
                  const isHovered = hoveredBullet[currentService.id] === idx;
                  return (
                    <div 
                      key={idx}
                      onMouseEnter={() => setHoveredBullet({ ...hoveredBullet, [currentService.id]: idx })}
                      onMouseLeave={() => setHoveredBullet({ ...hoveredBullet, [currentService.id]: null })}
                      className={`p-3 rounded-2xl transition-all duration-200 flex items-start gap-3 border ${
                        isHovered 
                          ? 'bg-[#0B4F51]/10 border-[#0B4F51]/30 translate-x-1 shadow-xs' 
                          : 'bg-[#FAF3EA]/80 border-transparent text-gray-800 hover:bg-[#FAF3EA]'
                      }`}
                    >
                      <CheckCircle2 className={`w-4 h-4 flex-shrink-0 mt-0.5 transition-colors ${
                        isHovered ? 'text-[#0B4F51]' : 'text-[#94C08E]'
                      }`} />
                      <span className="text-xs sm:text-sm font-medium leading-relaxed font-sans">
                        {bullet}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-3 border-t border-gray-100">
                {currentService.isSplose ? (
                  <a
                    href={currentService.ctaHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ats-button bg-[#94C08E] hover:bg-[#a6d1a0] text-[#184013] border border-[#184013]/20 shadow-md font-bold text-xs sm:text-sm"
                  >
                    <span>{currentService.ctaLabel}</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                ) : (
                  <a
                    href={currentService.ctaHref}
                    className="ats-button bg-[#0B4F51] hover:bg-[#073B3C] text-white shadow-md font-bold text-xs sm:text-sm"
                  >
                    <span>{currentService.ctaLabel}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                )}

                <a
                  href="tel:0431430905"
                  className="ats-button bg-white hover:bg-gray-50 text-[#0B4F51] border border-[#0B4F51]/20 font-bold text-xs sm:text-sm"
                >
                  <Phone className="w-4 h-4 text-[#EC7E38]" />
                  <span>Call 0431 430 905</span>
                </a>
              </div>

            </div>

            {/* Right Image Column */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-[#0B4F51]/15 aspect-[4/3] group">
                <img 
                  src={currentService.image} 
                  alt={currentService.imageAlt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />

                {/* Top Badge */}
                <div className="absolute top-4 right-4">
                  <span className="px-3.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[#F9B835] text-xs font-bold border border-white/20 shadow-sm flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F9B835] animate-ping" />
                    <span>North Queensland</span>
                  </span>
                </div>

                {/* Bottom Overlay Title */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className={`${currentService.badgeClass} text-[11px] font-bold mb-1.5 inline-block`}>
                    {currentService.badge}
                  </span>
                  <h4 className="text-base sm:text-lg font-bold text-white drop-shadow leading-tight">
                    {currentService.title}
                  </h4>
                  <p className="text-xs text-white/90 drop-shadow line-clamp-1 mt-0.5">
                    Townsville · Ayr · Ingham · Charters Towers · Mareeba · Mount Isa
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

