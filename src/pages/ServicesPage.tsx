import React from 'react';
import { 
  Heart, 
  Stethoscope, 
  Sparkles, 
  Home as HomeIcon, 
  TreePine, 
  Clock, 
  Key, 
  ExternalLink,
  MapPin,
  CheckCircle2
} from 'lucide-react';
import { MapNorthQueensland } from '../components/MapNorthQueensland.js';
import { CommonCtaBanner } from '../components/CommonCtaBanner.js';

interface ServicesPageProps {
  onNavigate: (pageId: string) => void;
  onOpenUnitModal: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate, onOpenUnitModal }) => {
  const SPLOSE_FCA_URL = 'https://tchservices.splose.com/public-form/2c733ea1-1b3a-41d5-87d7-98ba320cd4f8';

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
      {/* 1. HEADER & JUMP PILLS */}
      <section className="pt-8 sm:pt-12 md:pt-16 pb-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <span className="text-xs sm:text-sm font-heading font-extrabold tracking-widest uppercase text-[#0B5563] block mb-2">
          OUR SERVICES
        </span>
        <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#0A3D47] tracking-tight max-w-4xl mx-auto leading-[1.1]">
          Help at home and in the community, from people who get it.
        </h1>
        <p className="text-base sm:text-lg text-[#1E2B30]/85 max-w-2xl mx-auto mt-4 font-sans leading-relaxed">
          Whatever support you need, our local team can help you live safely, comfortably and independently.
        </p>

        {/* Quick Jump Anchor Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mt-8">
          <button
            onClick={() => scrollToSection('ndis-section')}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#0B5563]/20 shadow-xs hover:border-[#F4A62A] text-xs sm:text-sm font-bold text-[#0A3D47] transition-all"
          >
            <Heart className="w-4 h-4 text-[#0B5563]" />
            <span>NDIS Supports</span>
          </button>

          <button
            onClick={() => scrollToSection('allied-section')}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#0B5563]/20 shadow-xs hover:border-[#F4A62A] text-xs sm:text-sm font-bold text-[#0A3D47] transition-all"
          >
            <Stethoscope className="w-4 h-4 text-[#F4A62A]" />
            <span>Allied Health</span>
          </button>

          <button
            onClick={() => scrollToSection('nursing-section')}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#0B5563]/20 shadow-xs hover:border-[#F4A62A] text-xs sm:text-sm font-bold text-[#0A3D47] transition-all"
          >
            <Sparkles className="w-4 h-4 text-[#0B5563]" />
            <span>Nursing</span>
          </button>

          <button
            onClick={() => scrollToSection('cleaning-section')}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#0B5563]/20 shadow-xs hover:border-[#F4A62A] text-xs sm:text-sm font-bold text-[#0A3D47] transition-all"
          >
            <HomeIcon className="w-4 h-4 text-[#2D3359]" />
            <span>Domestic &amp; Cleaning</span>
          </button>

          <button
            onClick={() => scrollToSection('gardening-section')}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#0B5563]/20 shadow-xs hover:border-[#F4A62A] text-xs sm:text-sm font-bold text-[#0A3D47] transition-all"
          >
            <TreePine className="w-4 h-4 text-[#0B5563]" />
            <span>Gardening</span>
          </button>

          <button
            onClick={() => scrollToSection('service-areas')}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#0B5563]/20 shadow-xs hover:border-[#F4A62A] text-xs sm:text-sm font-bold text-[#0A3D47] transition-all"
          >
            <MapPin className="w-4 h-4 text-[#F4A62A]" />
            <span>Service Areas</span>
          </button>
        </div>
      </section>

      {/* 2. SERVICE 1: NDIS SUPPORTS */}
      <section id="ndis-section" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#0B5563]/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="w-12 h-12 rounded-2xl bg-[#E3EFF1] text-[#0B5563] flex items-center justify-center shadow-xs">
              <Heart className="w-6 h-6 stroke-[2.2]" />
            </div>

            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#0A3D47]">
              NDIS Supports
            </h2>

            <p className="text-base sm:text-lg text-[#1E2B30]/90 leading-relaxed font-sans">
              We help NDIS participants use their plan the way they choose. Our support workers get to know you, your routines and your goals, and work alongside you to build skills and confidence.
            </p>

            <ul className="space-y-3 font-sans text-sm sm:text-base text-[#1E2B30]/90">
              <li className="flex items-start gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#0B5563] mt-2 flex-shrink-0" />
                <span><strong>Personal care:</strong> showering, dressing, grooming and daily routines, delivered with dignity</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#0B5563] mt-2 flex-shrink-0" />
                <span><strong>Community access:</strong> appointments, shopping, social outings, sport, work or study</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#0B5563] mt-2 flex-shrink-0" />
                <span><strong>Daily living support:</strong> meal preparation, household tasks and independent living skills</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#0B5563] mt-2 flex-shrink-0" />
                <span><strong>Housing and accommodation supports:</strong> help to find, set up and keep a home, including our own rental units in Townsville</span>
              </li>
            </ul>

            {/* Funding info box */}
            <div className="p-5 rounded-2xl bg-white border border-[#0B5563]/15 shadow-xs space-y-2 text-sm font-sans">
              <h4 className="font-heading font-bold text-base text-[#0A3D47]">
                NDIS and funding
              </h4>
              <p className="text-[#1E2B30]/85 leading-relaxed">
                We work with <strong>plan-managed</strong> and <strong>self-managed</strong> NDIS participants. Plan-managed? We invoice your plan manager directly. Self-managing? We send you clear, itemised statements. We also support aged care clients, veterans through DVA’s Veterans’ Home Care (VHC), and private clients.
              </p>
              <p className="text-xs font-semibold text-[#0B5563]">
                Not sure how your funding works? Give us a call and we’ll walk you through it.
              </p>
            </div>

            {/* Mango Accommodation Banner */}
            <div className="bg-[#F4A62A] rounded-2xl p-5 text-[#1E2B30] flex flex-col sm:flex-row items-center justify-between gap-4 shadow-md">
              <div className="flex items-center gap-3.5">
                <Key className="w-7 h-7 flex-shrink-0 text-[#0A3D47]" />
                <div>
                  <h4 className="font-heading font-bold text-lg leading-tight">
                    Accommodation available now
                  </h4>
                  <p className="text-xs font-semibold text-[#1E2B30]/85">
                    1 and 2-bedroom units in Townsville.
                  </p>
                </div>
              </div>
              <button
                onClick={onOpenUnitModal}
                className="btn-teal whitespace-nowrap text-xs sm:text-sm py-2.5 px-6 min-h-[44px]"
              >
                <span>Enquire about units</span>
              </button>
            </div>
          </div>

          {/* Right Photo */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl overflow-hidden border-2 border-dashed border-[#0B5563]/30 shadow-lg bg-white p-2">
              <img
                src="/images/service-community-ndis.jpg"
                alt="Young adult with disability out in the community with a TCH worker at a Townsville beach cafe"
                className="w-full h-[360px] sm:h-[440px] object-cover rounded-2xl"
                onError={(e) => {
                  e.currentTarget.src = '/images/hero-bg.jpg';
                }}
              />
              <div className="p-3 text-xs text-[#0A3D47] font-semibold text-center">
                Community Access: Active, in control, enjoying life in North Queensland.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SERVICE 2: ALLIED HEALTH SERVICES */}
      <section id="allied-section" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#0B5563]/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Photo */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="rounded-3xl overflow-hidden border-2 border-dashed border-[#0B5563]/30 shadow-lg bg-white p-2">
              <img
                src="/images/service-allied-home.jpg"
                alt="Occupational Therapist working with a client in a sunlit home kitchen"
                className="w-full h-[360px] sm:h-[440px] object-cover rounded-2xl"
                onError={(e) => {
                  e.currentTarget.src = '/images/service-allied-health.jpg';
                }}
              />
              <div className="p-3 text-xs text-[#0A3D47] font-semibold text-center">
                Allied Health: Functional capacity building in your familiar home environment.
              </div>
            </div>
          </div>

          {/* Right Text */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            <div className="w-12 h-12 rounded-2xl bg-[#FDF3E3] text-[#F4A62A] flex items-center justify-center shadow-xs">
              <Stethoscope className="w-6 h-6 stroke-[2.2]" />
            </div>

            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#0A3D47]">
              Allied Health Services
            </h2>

            <p className="text-base sm:text-lg text-[#1E2B30]/90 leading-relaxed font-sans">
              Our qualified allied health practitioners come to you, at home or in the community, to help you build capacity and reach your goals.
            </p>

            <ul className="space-y-3 font-sans text-sm sm:text-base text-[#1E2B30]/90">
              <li className="flex items-start gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#F4A62A] mt-2 flex-shrink-0" />
                <span><strong>Occupational therapy:</strong> Functional Capacity Assessments, home modifications, equipment and assistive technology</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#F4A62A] mt-2 flex-shrink-0" />
                <span><strong>Physiotherapy:</strong> mobility, strength, balance, falls prevention and recovery</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#F4A62A] mt-2 flex-shrink-0" />
                <span><strong>Speech pathology:</strong> communication, speech, language and safe swallowing</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#F4A62A] mt-2 flex-shrink-0" />
                <span><strong>Dietetics:</strong> nutrition advice and meal planning</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#F4A62A] mt-2 flex-shrink-0" />
                <span><strong>Exercise physiology:</strong> tailored exercise programs for fitness and function</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#F4A62A] mt-2 flex-shrink-0" />
                <span><strong>Psychology and counselling:</strong> emotional wellbeing, mental health and coping strategies</span>
              </li>
            </ul>

            <p className="text-xs text-[#1E2B30]/75 italic font-sans">
              All practitioners are qualified, registered where required, and hold a current NDIS Worker Screening Check. Available to NDIS participants and private clients.
            </p>

            {/* Mango FCA Banner */}
            <div className="bg-[#F4A62A] rounded-2xl p-5 text-[#1E2B30] flex flex-col sm:flex-row items-center justify-between gap-4 shadow-md">
              <div className="flex items-center gap-3.5">
                <Clock className="w-7 h-7 flex-shrink-0 text-[#0A3D47]" />
                <div>
                  <h4 className="font-heading font-bold text-lg leading-tight">
                    Functional Capacity Assessments in 2 weeks
                  </h4>
                  <p className="text-xs font-semibold text-[#1E2B30]/85">
                    No long waits. Local OTs.
                  </p>
                </div>
              </div>
              <a
                href={SPLOSE_FCA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-teal whitespace-nowrap text-xs sm:text-sm py-2.5 px-6 min-h-[44px] inline-flex items-center gap-1.5"
              >
                <span>Book an FCA</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SERVICE 3: NURSING SERVICES */}
      <section id="nursing-section" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#0B5563]/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="w-12 h-12 rounded-2xl bg-[#E8F3E6] text-[#0B5563] flex items-center justify-center shadow-xs">
              <Sparkles className="w-6 h-6 stroke-[2.2]" />
            </div>

            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#0A3D47]">
              Nursing Services
            </h2>

            <p className="text-base sm:text-lg text-[#1E2B30]/90 leading-relaxed font-sans">
              Our qualified nurses provide professional clinical care in the comfort of your own home, helping you stay well and avoid unnecessary hospital visits.
            </p>

            <ul className="space-y-3 font-sans text-sm sm:text-base text-[#1E2B30]/90">
              <li className="flex items-start gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#0B5563] mt-2 flex-shrink-0" />
                <span>Medication management and administration</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#0B5563] mt-2 flex-shrink-0" />
                <span>Wound care and dressings</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#0B5563] mt-2 flex-shrink-0" />
                <span>Diabetes management and blood glucose monitoring</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#0B5563] mt-2 flex-shrink-0" />
                <span>Continence and catheter care</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#0B5563] mt-2 flex-shrink-0" />
                <span>Post-hospital and post-surgery care</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#0B5563] mt-2 flex-shrink-0" />
                <span>Health monitoring and clinical assessments</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#0B5563] mt-2 flex-shrink-0" />
                <span>Support for complex and chronic health needs</span>
              </li>
            </ul>

            <div className="p-4 rounded-2xl bg-white border border-[#0B5563]/15 text-xs sm:text-sm text-[#0A3D47] font-semibold">
              We work closely with your GP, specialists and support team so your care is coordinated and consistent.
            </div>
          </div>

          {/* Right Photo */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl overflow-hidden border-2 border-dashed border-[#0B5563]/30 shadow-lg bg-white p-2">
              <img
                src="/images/service-nurse-visit.jpg"
                alt="TCH nurse checking blood pressure at a client's home"
                className="w-full h-[360px] sm:h-[440px] object-cover rounded-2xl"
                onError={(e) => {
                  e.currentTarget.src = '/images/service-nursing.jpg';
                }}
              />
              <div className="p-3 text-xs text-[#0A3D47] font-semibold text-center">
                Clinical In-Home Nursing: Warm, relaxed, highly qualified care.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SERVICE 4: DOMESTIC AND CLEANING SERVICES */}
      <section id="cleaning-section" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#0B5563]/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Photo */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="rounded-3xl overflow-hidden border-2 border-dashed border-[#0B5563]/30 shadow-lg bg-white p-2">
              <img
                src="/images/service-cleaner-kitchen.jpg"
                alt="TCH worker cleaning a bright kitchen in a Queensland home"
                className="w-full h-[360px] sm:h-[440px] object-cover rounded-2xl"
                onError={(e) => {
                  e.currentTarget.src = '/images/service-yard-cleaning.jpg';
                }}
              />
              <div className="p-3 text-xs text-[#0A3D47] font-semibold text-center">
                General Domestic Cleaning: Safe, fresh, comfortable homes.
              </div>
            </div>
          </div>

          {/* Right Text */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            <div className="w-12 h-12 rounded-2xl bg-[#EAEFF8] text-[#2D3359] flex items-center justify-center shadow-xs">
              <HomeIcon className="w-6 h-6 stroke-[2.2]" />
            </div>

            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#0A3D47]">
              Domestic and Cleaning Services
            </h2>

            <p className="text-base sm:text-lg text-[#1E2B30]/90 leading-relaxed font-sans">
              A clean, tidy home makes everyday life safer and more comfortable. Our friendly, reliable cleaners provide regular or as-needed general cleaning.
            </p>

            <ul className="space-y-3 font-sans text-sm sm:text-base text-[#1E2B30]/90">
              <li className="flex items-start gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#0B5563] mt-2 flex-shrink-0" />
                <span>Vacuuming, mopping and dusting</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#0B5563] mt-2 flex-shrink-0" />
                <span>Kitchen and bathroom cleaning</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#0B5563] mt-2 flex-shrink-0" />
                <span>Laundry, ironing and changing bed linen</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#0B5563] mt-2 flex-shrink-0" />
                <span>Tidying living areas and taking out the rubbish</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#0B5563] mt-2 flex-shrink-0" />
                <span>External window cleaning at ground level</span>
              </li>
            </ul>

            <div className="p-4 rounded-2xl bg-white border border-[#0B5563]/15 text-xs sm:text-sm text-[#0A3D47] font-semibold">
              Available under the NDIS, Veterans’ Home Care and to private clients. We provide general cleaning only, not bond or end-of-lease cleaning.
            </div>
          </div>
        </div>
      </section>

      {/* 6. SERVICE 5: GARDENING SERVICES */}
      <section id="gardening-section" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#0B5563]/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="w-12 h-12 rounded-2xl bg-[#E4F3ED] text-[#0B5563] flex items-center justify-center shadow-xs">
              <TreePine className="w-6 h-6 stroke-[2.2]" />
            </div>

            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#0A3D47]">
              Gardening Services
            </h2>

            <p className="text-base sm:text-lg text-[#1E2B30]/90 leading-relaxed font-sans">
              Keep your yard neat, safe and easy to enjoy, even through the wet season. Our gardening team offers regular or one-off maintenance.
            </p>

            <ul className="space-y-3 font-sans text-sm sm:text-base text-[#1E2B30]/90">
              <li className="flex items-start gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#0B5563] mt-2 flex-shrink-0" />
                <span>Lawn mowing</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#0B5563] mt-2 flex-shrink-0" />
                <span>Edging and whipper snipping</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#0B5563] mt-2 flex-shrink-0" />
                <span>Hedge and shrub trimming</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#0B5563] mt-2 flex-shrink-0" />
                <span>Light pruning and chainsaw work up to 4 metres</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#0B5563] mt-2 flex-shrink-0" />
                <span>General yard tidy-ups</span>
              </li>
            </ul>

            <div className="p-4 rounded-2xl bg-white border border-[#0B5563]/15 text-xs sm:text-sm text-[#0A3D47] font-semibold space-y-1">
              <p>Available under the NDIS, Veterans’ Home Care and to private clients.</p>
              <p className="text-[#1E2B30]/75 font-normal">
                For safety we work up to 4 metres high only and don’t do tree lopping. Green waste removal can be arranged at extra cost.
              </p>
            </div>
          </div>

          {/* Right Photo */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl overflow-hidden border-2 border-dashed border-[#0B5563]/30 shadow-lg bg-white p-2">
              <img
                src="/images/service-lawn-mowing.jpg"
                alt="Gardener mowing a green lawn in a tropical yard in North Queensland"
                className="w-full h-[360px] sm:h-[440px] object-cover rounded-2xl"
                onError={(e) => {
                  e.currentTarget.src = '/images/yard-care-bg.jpg';
                }}
              />
              <div className="p-3 text-xs text-[#0A3D47] font-semibold text-center">
                Tropical Yard Maintenance: Rain, hail or shine.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. SERVICE AREAS (with map) */}
      <section id="service-areas" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#0B5563]/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-6">
            <MapNorthQueensland />
          </div>

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
    </div>
  );
};
