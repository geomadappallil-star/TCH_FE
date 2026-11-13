import React from 'react';
import { 
  ArrowRight, 
  MapPin, 
  Clock, 
  Key, 
  Heart, 
  Stethoscope, 
  Sparkles, 
  CheckCircle2, 
  ShieldCheck, 
  Users, 
  Building2, 
  CreditCard, 
  MessageSquare,
  Home as HomeIcon,
  TreePine,
  Check
} from 'lucide-react';
import { MapNorthQueensland } from '../components/MapNorthQueensland.js';
import { CommonCtaBanner } from '../components/CommonCtaBanner.js';

interface HomePageProps {
  onNavigate: (pageId: string) => void;
  onOpenUnitModal: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenUnitModal }) => {
  const SPLOSE_FCA_URL = 'https://tchservices.splose.com/public-form/2c733ea1-1b3a-41d5-87d7-98ba320cd4f8';

  const services = [
    {
      title: 'NDIS Supports',
      icon: Heart,
      iconBg: 'bg-[#E3EFF1] text-[#0B5563]',
      desc: 'Personal care, community access, daily living and accommodation support.',
      serviceId: 'ndis'
    },
    {
      title: 'Allied Health',
      icon: Stethoscope,
      iconBg: 'bg-[#FDF3E3] text-[#F4A62A]',
      desc: 'OT, physio, speech, dietetics, exercise physiology, psychology and counselling.',
      serviceId: 'allied'
    },
    {
      title: 'Nursing',
      icon: Sparkles,
      iconBg: 'bg-[#E8F3E6] text-[#0B5563]',
      desc: 'In-home clinical care from qualified, caring nurses.',
      serviceId: 'nursing'
    },
    {
      title: 'Domestic & Cleaning',
      icon: HomeIcon,
      iconBg: 'bg-[#EAEFF8] text-[#2D3359]',
      desc: 'Regular or as-needed general cleaning to keep home safe and tidy.',
      serviceId: 'cleaning'
    },
    {
      title: 'Gardening',
      icon: TreePine,
      iconBg: 'bg-[#E4F3ED] text-[#0B5563]',
      desc: 'Mowing, edging, trimming and yard tidy-ups, rain, hail or shine.',
      serviceId: 'gardening'
    }
  ];

  const whyChooseItems = [
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
      icon: Building2,
      title: 'One provider, many services',
      desc: 'Nursing, support work, allied health, housing and home help in one place.'
    },
    {
      icon: CreditCard,
      title: 'Flexible funding',
      desc: 'NDIS (plan-managed and self-managed), aged care, VHC and private clients.'
    },
    {
      icon: ShieldCheck,
      title: 'Screened and qualified',
      desc: 'Every worker holds a current NDIS Worker Screening Check.'
    },
    {
      icon: MessageSquare,
      title: 'Easy to deal with',
      desc: 'Clear service agreements, quick replies and a team that knows your name.'
    }
  ];

  const serviceAreas = [
    { name: 'Townsville', subtitle: 'Townsville and surrounding suburbs' },
    { name: 'Ayr', subtitle: 'Burdekin region' },
    { name: 'Ingham', subtitle: 'Hinchinbrook region' },
    { name: 'Charters Towers', subtitle: 'Charters Towers and surrounds' },
    { name: 'Mareeba', subtitle: 'Atherton Tablelands' },
    { name: 'Mount Isa', subtitle: 'North West Queensland' },
  ];

  return (
    <div className="bg-[#FBF5EA] min-h-screen font-sans">
      {/* 1. HERO SECTION */}
      <section className="pt-8 sm:pt-12 md:pt-16 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            {/* Top Local Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#0B5563]/25 shadow-sm text-xs sm:text-sm font-bold text-[#0A3D47]">
              <MapPin className="w-4 h-4 text-[#F4A62A] fill-[#F4A62A]" />
              <span>Townsville based · North Queensland proud</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#0A3D47] tracking-tight leading-[1.08]">
              Locals looking <br className="hidden sm:inline" />after locals.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#1E2B30]/90 leading-relaxed max-w-2xl font-sans">
              TCH Support Services (Townsville Community Health) helps NDIS participants, older Australians, veterans and private clients across North Queensland live well at home and stay connected to their community.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <button
                onClick={() => onNavigate('referral')}
                className="btn-mango group"
              >
                <span>Make a referral</span>
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => onNavigate('services')}
                className="btn-outline-dark"
              >
                <span>Explore our services</span>
              </button>
            </div>

            {/* Trust Badges */}
            <div className="pt-4 flex flex-wrap items-center gap-2.5 sm:gap-3 text-xs sm:text-sm font-semibold text-[#0A3D47]">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/80 border border-[#0B5563]/20 shadow-xs">
                <Check className="w-4 h-4 text-emerald-600 stroke-[3]" />
                <span>NDIS Worker Screened</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/80 border border-[#0B5563]/20 shadow-xs">
                <Check className="w-4 h-4 text-emerald-600 stroke-[3]" />
                <span>Plan &amp; self-managed NDIS</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/80 border border-[#0B5563]/20 shadow-xs">
                <Heart className="w-4 h-4 text-[#F4A62A] fill-[#F4A62A]" />
                <span>Aged care · VHC · Private</span>
              </div>
            </div>
          </div>

          {/* Right Photo Column */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden border-2 border-dashed border-[#0B5563]/30 shadow-xl bg-white p-2">
              <img
                src="/images/hero-veranda.jpg"
                alt="TCH support worker and client laughing together on a Queenslander veranda in Townsville"
                className="w-full h-[360px] sm:h-[440px] object-cover rounded-2xl"
                onError={(e) => {
                  e.currentTarget.src = '/images/hero-bg.jpg';
                }}
              />
              <div className="absolute bottom-4 left-4 right-4 bg-[#0A3D47]/85 backdrop-blur-md text-white p-3 rounded-xl text-xs font-medium border border-white/20">
                <span className="font-bold text-[#F4A62A] block">Townsville, North Queensland</span>
                Locals supporting locals at home and in the community.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. HIGHLIGHT BANNER (Mango Card) */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto my-6 sm:my-10">
        <div className="bg-[#F4A62A] rounded-3xl p-6 sm:p-8 lg:p-10 shadow-lg text-[#1E2B30]">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-center">
            {/* Feature 1: Functional Capacity Assessments */}
            <div className="md:col-span-5 flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white/90 text-[#0A3D47] flex items-center justify-center flex-shrink-0 shadow-sm">
                <Clock className="w-6 h-6 stroke-[2.5]" />
              </div>
              <div>
                <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-[#1E2B30] leading-tight">
                  Functional Capacity Assessments in just 2 weeks.
                </h3>
                <p className="text-sm font-semibold text-[#1E2B30]/85 mt-1">
                  No long waits. Local OTs, fast reports.
                </p>
              </div>
            </div>

            {/* Feature 2: Accommodation */}
            <div className="md:col-span-4 flex items-start gap-4 border-t md:border-t-0 md:border-l border-[#1E2B30]/15 pt-4 md:pt-0 md:pl-6">
              <div className="w-12 h-12 rounded-2xl bg-white/90 text-[#0A3D47] flex items-center justify-center flex-shrink-0 shadow-sm">
                <Key className="w-6 h-6 stroke-[2.5]" />
              </div>
              <div>
                <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-[#1E2B30] leading-tight">
                  Accommodation available now.
                </h3>
                <p className="text-sm font-semibold text-[#1E2B30]/85 mt-1">
                  1 and 2-bedroom units in Townsville.
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="md:col-span-3 flex flex-col gap-3 justify-center items-stretch sm:items-end">
              <a
                href={SPLOSE_FCA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-teal w-full text-center"
              >
                <span>Book now</span>
              </a>

              <button
                onClick={onOpenUnitModal}
                className="btn-white w-full text-center"
              >
                <span>Enquire about units</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR SERVICES SECTION */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <span className="text-xs sm:text-sm font-heading font-extrabold tracking-widest uppercase text-[#0B5563] block mb-2">
            OUR SERVICES
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#0A3D47] tracking-tight">
            Whatever support you need, we’ve got you covered.
          </h2>
        </div>

        {/* 5 Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {services.map((svc) => {
            const Icon = svc.icon;
            return (
              <div
                key={svc.title}
                className="bg-white rounded-3xl p-6 border border-[#0B5563]/15 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5"
              >
                <div className="space-y-4">
                  <div className={`w-12 h-12 rounded-2xl ${svc.iconBg} flex items-center justify-center shadow-xs transition-transform group-hover:scale-110`}>
                    <Icon className="w-6 h-6 stroke-[2.2]" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-[#0A3D47] leading-snug">
                    {svc.title}
                  </h3>
                  <p className="text-sm text-[#1E2B30]/80 leading-relaxed font-sans">
                    {svc.desc}
                  </p>
                </div>

                <div className="pt-6">
                  <button
                    onClick={() => onNavigate('services')}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0B5563] group-hover:text-[#F4A62A] transition-colors"
                  >
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. WHY CHOOSE TCH SECTION */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white/70 rounded-3xl border border-[#0B5563]/10 my-8 shadow-xs">
        <div className="max-w-3xl mb-10 sm:mb-12">
          <span className="text-xs sm:text-sm font-heading font-extrabold tracking-widest uppercase text-[#0B5563] block mb-2">
            WHY CHOOSE TCH
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#0A3D47] tracking-tight">
            Real people. Real local. Turning up when we say we will.
          </h2>
        </div>

        {/* 6 Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChooseItems.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-[#E9F3F1] text-[#0B5563] flex items-center justify-center flex-shrink-0 shadow-xs">
                  <Icon className="w-5 h-5 stroke-[2.2]" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-heading font-bold text-lg sm:text-xl text-[#0A3D47]">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#1E2B30]/80 leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. SERVICE AREAS SECTION */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Interactive Map */}
          <div className="lg:col-span-6">
            <MapNorthQueensland />
          </div>

          {/* Right Column: Copy & 6 Region Cards */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs sm:text-sm font-heading font-extrabold tracking-widest uppercase text-[#0B5563] block mb-2">
                SERVICE AREAS
              </span>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#0A3D47] tracking-tight leading-tight">
                From the coast to the Tablelands and out to the North West.
              </h2>
            </div>

            <p className="text-base text-[#1E2B30]/85 leading-relaxed font-sans">
              Based in Townsville, we hire local people in each area we serve, so your support worker lives in your community, knows your town and can be there when you need them.
            </p>

            {/* 6 Town Cards (2 cols x 3 rows) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {serviceAreas.map((area) => (
                <div
                  key={area.name}
                  className="bg-white p-4 rounded-2xl border border-[#0B5563]/15 shadow-xs flex items-start gap-3 hover:border-[#F4A62A] transition-colors"
                >
                  <MapPin className="w-5 h-5 text-[#F4A62A] flex-shrink-0 mt-0.5 fill-[#F4A62A]/20" />
                  <div>
                    <h4 className="font-heading font-bold text-base text-[#0A3D47]">
                      {area.name}
                    </h4>
                    <p className="text-xs text-[#1E2B30]/75 font-sans mt-0.5">
                      {area.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2 text-xs sm:text-sm text-[#1E2B30]/80 italic">
              Service availability can vary by location, so get in touch to confirm what we can offer in your area. Outside these areas? Give us a call anyway.
            </div>
          </div>
        </div>
      </section>

      {/* 6. COMMON CTA BANNER */}
      <CommonCtaBanner />
    </div>
  );
};
