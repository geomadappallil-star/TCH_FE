import React, { useState } from 'react';
import { 
  ArrowRight, 
  MapPin, 
  ShieldCheck, 
  Heart, 
  Wallet, 
  Clock, 
  Home, 
  Stethoscope, 
  Sparkles, 
  Trees, 
  UserCheck, 
  Users, 
  Building, 
  CheckCircle2, 
  Phone,
  CalendarCheck,
  ExternalLink
} from 'lucide-react';
import { InteractiveNorthQldMap } from './InteractiveNorthQldMap';

const SPLOSE_FCA_URL = 'https://tchservices.splose.com/public-form/2c733ea1-1b3a-41d5-87d7-98ba320cd4f8';

export const HomeHero: React.FC = () => {
  const [selectedHub, setSelectedHub] = useState<string>('townsville');
  const serviceCards = [
    {
      id: 'ndis',
      icon: Heart,
      title: 'NDIS Supports',
      desc: 'Personal care, community access, daily living and accommodation support.',
      href: '#ndis'
    },
    {
      id: 'allied',
      icon: Stethoscope,
      title: 'Allied Health',
      desc: 'OT, physio, speech, dietetics, exercise physiology, psychology and counselling.',
      href: '#allied'
    },
    {
      id: 'nursing',
      icon: ShieldCheck,
      title: 'Nursing',
      desc: 'In-home clinical care from qualified, caring registered nurses.',
      href: '#nursing'
    },
    {
      id: 'cleaning',
      icon: Sparkles,
      title: 'Domestic & Cleaning',
      desc: 'Regular or as-needed general cleaning to keep home safe and tidy.',
      href: '#cleaning'
    },
    {
      id: 'gardening',
      icon: Trees,
      title: 'Gardening',
      desc: 'Mowing, edging, trimming and yard tidy-ups, rain, hail or shine.',
      href: '#gardening'
    }
  ];

  const whyChooseUs = [
    {
      icon: MapPin,
      title: 'Local team',
      desc: 'Based in Townsville, working across Ayr, Ingham, Charters Towers, Mareeba and Mount Isa.'
    },
    {
      icon: Users,
      title: 'Local workers',
      desc: 'We hire people who live in the areas we serve, so your worker knows your town.'
    },
    {
      icon: Building,
      title: 'One provider, many services',
      desc: 'Nursing, support work, allied health, housing and home help all under one roof.'
    },
    {
      icon: Wallet,
      title: 'Flexible funding',
      desc: 'NDIS (plan-managed and self-managed), aged care, VHC and private clients.'
    },
    {
      icon: UserCheck,
      title: 'Screened and qualified',
      desc: 'Every single worker holds a current NDIS Worker Screening Check.'
    },
    {
      icon: CheckCircle2,
      title: 'Easy to deal with',
      desc: 'Clear service agreements, quick replies and a warm team that knows your name.'
    }
  ];

  const serviceAreas = [
    { id: 'townsville', name: 'Townsville', sub: 'Townsville and surrounding suburbs' },
    { id: 'ayr', name: 'Ayr', sub: 'Burdekin region' },
    { id: 'ingham', name: 'Ingham', sub: 'Hinchinbrook region' },
    { id: 'charters-towers', name: 'Charters Towers', sub: 'Charters Towers and surrounds' },
    { id: 'mareeba', name: 'Mareeba', sub: 'Atherton Tablelands' },
    { id: 'mount-isa', name: 'Mount Isa', sub: 'North West Queensland' },
  ];

  const handleSmoothJump = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative z-10 pt-8 md:pt-14 pb-20 overflow-hidden">
      
      {/* Background Video Layer for Hero */}
      <div className="absolute inset-0 h-[840px] lg:h-[760px] overflow-hidden pointer-events-none z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/sorinvision-elderly-care.png"
          className="w-full h-full object-cover object-center opacity-80 filter saturate-115 brightness-95"
        >
          <source src="/videos/tch-hero-care.mp4" type="video/mp4" />
        </video>
        {/* Transparent gradient on left, progressively increasing opacity to the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FBF5EA]/35 to-[#FBF5EA]/90" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#FBF5EA]" />
      </div>

      {/* 1. Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 md:mb-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column Text */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Eyebrow Chip */}
            <span className="glass-chip inline-flex items-center gap-2 text-[#0A3D47]">
              <MapPin className="w-4 h-4 text-[#B5651D]" />
              <span className="font-bold text-xs sm:text-sm">Townsville based · North Queensland proud</span>
            </span>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0A3D47] leading-[1.1] drop-shadow-xs">
              Locals looking after locals.
            </h1>

            {/* Lead Copy */}
            <p className="text-lg sm:text-xl text-[#1E2B30] font-medium leading-relaxed max-w-2xl">
              TCH Support Services (Townsville Community Health) helps NDIS participants, older Australians, veterans and private clients across North Queensland live well at home and stay connected to their community.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a 
                href="#referral"
                onClick={(e) => handleSmoothJump(e, '#referral')}
                className="btn-base btn-mango text-base px-7 py-3.5 shadow-lg group"
              >
                <span>Make a referral</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>

              <a 
                href="#services"
                onClick={(e) => handleSmoothJump(e, '#services')}
                className="btn-base btn-ghost text-base px-6 py-3.5"
              >
                <span>Explore our services</span>
              </a>
            </div>

            {/* Trust Chips */}
            <div className="flex flex-wrap gap-2.5 pt-4">
              <span className="glass-chip text-xs font-bold text-[#0B5563]">
                <ShieldCheck className="w-4 h-4 text-[#0B5563]" /> NDIS Worker Screened
              </span>
              <span className="glass-chip text-xs font-bold text-[#0B5563]">
                <Wallet className="w-4 h-4 text-[#0B5563]" /> Plan &amp; self-managed NDIS
              </span>
              <span className="glass-chip text-xs font-bold text-[#0B5563]">
                <Heart className="w-4 h-4 text-[#0B5563]" /> Aged care · VHC · Private
              </span>
            </div>

          </div>

          {/* Right Column: High-Res Glassy Photo Card */}
          <div className="lg:col-span-5">
            <div className="relative group">
              {/* Backing Mango/Teal Glow */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#0B5563]/20 via-[#F4A62A]/20 to-transparent rounded-[48px] blur-xl opacity-75 group-hover:opacity-100 transition duration-500" />
              
              <div className="relative overflow-hidden rounded-[32px] lg:rounded-[40px_40px_40px_120px] shadow-2xl border-4 border-white/80 bg-white aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5]">
                <img 
                  src="/images/sorinvision-elderly-care.png" 
                  alt="TCH elderly care and compassionate support in North Queensland" 
                  className="w-full h-full object-cover object-center transform group-hover:scale-102 transition duration-700 ease-out"
                />
                
                {/* Floating Glass Stamp Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-white/90 shadow-lg text-[#1E2B30]">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#F4A62A]/20 flex items-center justify-center text-[#B5651D] flex-shrink-0">
                      <Heart className="w-5 h-5 text-[#B5651D]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-[#0A3D47]">Real North Queensland Care</h4>
                      <p className="text-xs text-[#4A5A60]">Compassionate support at home, delivered by local staff.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* 2. Highlight Banner (Mango Bar from client brief) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 md:mb-28">
        <div className="bg-[#F4A62A] rounded-[32px] p-8 sm:p-10 md:p-12 shadow-xl border border-white/40 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Highlight 1: 2-Week FCA */}
          <div className="lg:col-span-4 flex items-start sm:items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-[#FFF6E6] flex items-center justify-center text-[#0A3D47] flex-shrink-0 shadow-xs">
              <Clock className="w-7 h-7 text-[#0A3D47]" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-xl md:text-2xl text-[#1E2B30] leading-snug">
                Functional Capacity Assessments in just 2 weeks.
              </h3>
              <p className="text-sm font-semibold text-[#3A2A10] mt-0.5">
                No long waits. Local OTs, fast reports.
              </p>
            </div>
          </div>

          {/* Highlight 2: Units Ready */}
          <div className="lg:col-span-4 flex items-start sm:items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-[#FFF6E6] flex items-center justify-center text-[#0A3D47] flex-shrink-0 shadow-xs">
              <Home className="w-7 h-7 text-[#0A3D47]" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-xl md:text-2xl text-[#1E2B30] leading-snug">
                Accommodation available now.
              </h3>
              <p className="text-sm font-semibold text-[#3A2A10] mt-0.5">
                1 and 2-bedroom units in Townsville.
              </p>
            </div>
          </div>

          {/* Highlight 3: Action Buttons */}
          <div className="lg:col-span-4 flex flex-wrap gap-3 justify-start lg:justify-end">
            <a 
              href={SPLOSE_FCA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-base btn-teal text-sm sm:text-base px-6 py-3 shadow-md flex items-center gap-2 group"
            >
              <span>Book FCA now</span>
              <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </a>

            <a 
              href="#accommodation"
              onClick={(e) => handleSmoothJump(e, '#accommodation')}
              className="btn-base btn-white text-sm sm:text-base px-5 py-3 shadow-md"
            >
              <span>Enquire about units</span>
            </a>
          </div>

        </div>
      </div>

      {/* 3. Services Overview Grid (5 Cards) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 md:mb-28">
        <div className="flex flex-col gap-3 max-w-2xl mb-10">
          <span className="text-xs font-bold tracking-widest uppercase text-[#B5651D]">
            Our services
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0A3D47]">
            Whatever support you need, we&#8217;ve got you covered.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {serviceCards.map((s) => {
            const Icon = s.icon;
            return (
              <a
                key={s.id}
                href={s.href}
                onClick={(e) => handleSmoothJump(e, s.href)}
                className="glass-panel p-6 flex flex-col gap-4 text-[#1E2B30] no-underline group hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#E3F1F1] flex items-center justify-center text-[#0B5563] flex-shrink-0 group-hover:bg-[#0B5563] group-hover:text-white transition-colors duration-300">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="font-heading font-bold text-xl text-[#0A3D47]">
                  {s.title}
                </h3>
                <p className="text-sm text-[#4A5A60] leading-relaxed flex-grow">
                  {s.desc}
                </p>
                <span className="font-bold text-sm text-[#0B5563] flex items-center gap-1.5 mt-auto pt-2 group-hover:gap-2.5 transition-all">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 text-[#0B5563]" />
                </span>
              </a>
            );
          })}
        </div>
      </div>

      {/* 4. Why Choose TCH (6 Card Grid with Background Image) */}
      <div className="relative w-full overflow-hidden border-y border-[#EADFCB] py-16 md:py-24 mb-20">
        {/* Background Image Layer */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-35 filter saturate-110"
          style={{ backgroundImage: `url('/images/why-choose-community.jpg')` }}
          aria-hidden="true"
        />
        {/* Semi-transparent Glass Gradient Wash for crystal clear contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FBF5EA]/92 via-[#FBF5EA]/85 to-[#FBF5EA]/75" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#FBF5EA] via-transparent to-[#FBF5EA]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col gap-3 max-w-2xl mb-12">
            <span className="text-xs font-bold tracking-widest uppercase text-[#B5651D]">
              Why choose TCH
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0A3D47]">
              Real people. Real local. Turning up when we say we will.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {whyChooseUs.map((w, idx) => {
              const Icon = w.icon;
              return (
                <div 
                  key={idx} 
                  className="flex gap-4 items-start p-5 sm:p-6 rounded-2xl bg-white/85 backdrop-blur-md border border-white/90 shadow-sm hover:bg-white/95 hover:shadow-md hover:-translate-y-0.5 transition-all"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#FFF1DA] flex items-center justify-center text-[#B5651D] flex-shrink-0 shadow-xs">
                    <Icon className="w-7 h-7" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-heading font-bold text-xl text-[#0A3D47]">
                      {w.title}
                    </h3>
                    <p className="text-sm text-[#4A5A60] leading-relaxed">
                      {w.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>

      {/* 5. Service Areas Map & Region Cards */}
      <div id="areas" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Interactive North QLD Vector Map */}
          <div className="lg:col-span-6">
            <InteractiveNorthQldMap
              selectedHubId={selectedHub}
              onSelectHub={setSelectedHub}
            />
          </div>

          {/* Right Column: Copy & Interactive Suburb Cards */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold tracking-widest uppercase text-[#B5651D]">
                Service areas
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A3D47]">
                From the coast to the Tablelands and out to the North West.
              </h2>
              <p className="text-base text-[#4A5A60] leading-relaxed">
                Based in Townsville, we hire local people in each area we serve, so your support worker lives in your community, knows your town and can be there when you need them.
              </p>
            </div>

            {/* 6 Region Grid with interactive synchronization */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {serviceAreas.map((area) => {
                const isSelected = area.id === selectedHub;
                return (
                  <button 
                    key={area.id}
                    type="button"
                    onClick={() => setSelectedHub(area.id)}
                    className={`flex items-center gap-3.5 p-3.5 rounded-2xl text-left transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#E3F1F1] border-2 border-[#0B5563] shadow-md -translate-y-0.5'
                        : 'bg-white/80 hover:bg-white backdrop-blur-md border border-white hover:border-[#0B5563]/30 shadow-xs'
                    }`}
                  >
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
                      isSelected ? 'bg-[#0B5563] text-[#F4A62A]' : 'bg-[#FFF1DA] text-[#B5651D]'
                    }`}>
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h4 className="font-bold text-base text-[#0A3D47] leading-tight">
                          {area.name}
                        </h4>
                        {isSelected && (
                          <span className="inline-block w-2 h-2 rounded-full bg-[#F4A62A] animate-pulse" />
                        )}
                      </div>
                      <span className="text-xs text-[#4A5A60]">
                        {area.sub}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            <p className="text-xs text-[#4A5A60] pt-1">
              Service availability can vary by location, so get in touch to confirm what we can offer in your area. Outside these areas? Give us a call anyway.
            </p>
          </div>

        </div>
      </div>

    </section>
  );
};
