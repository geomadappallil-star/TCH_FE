import React from 'react';
import { 
  Heart, 
  Stethoscope, 
  ShieldCheck, 
  Sparkles, 
  Trees, 
  Clock, 
  Home, 
  ExternalLink, 
  Mail, 
  Phone,
  ArrowRight
} from 'lucide-react';

const SPLOSE_FCA_URL = 'https://tchservices.splose.com/public-form/2c733ea1-1b3a-41d5-87d7-98ba320cd4f8';

export const ServicesDetailSection: React.FC = () => {
  const jumpChips = [
    { label: 'NDIS Supports', href: '#ndis', icon: Heart },
    { label: 'Allied Health', href: '#allied', icon: Stethoscope },
    { label: 'Nursing', href: '#nursing', icon: ShieldCheck },
    { label: 'Domestic & Cleaning', href: '#cleaning', icon: Sparkles },
    { label: 'Gardening', href: '#gardening', icon: Trees },
    { label: 'Service Areas', href: '#areas', icon: Home },
  ];

  const handleSmoothJump = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="relative z-10 py-16 md:py-24 border-t border-[#EADFCB]">
      
      {/* 1. Services Header & Jump Chips */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center flex flex-col items-center">
        <span className="text-xs font-bold tracking-widest uppercase text-[#B5651D] mb-2">
          Our services
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0A3D47] max-w-3xl leading-tight">
          Help at home and in the community, from people who get it.
        </h2>
        <p className="text-lg text-[#3E4F55] mt-3 max-w-2xl leading-relaxed">
          Whatever support you need, our local team can help you live safely, comfortably and independently.
        </p>

        {/* Jump Navigation Chips */}
        <div className="flex flex-wrap gap-2.5 justify-center mt-6">
          {jumpChips.map((chip, idx) => {
            const Icon = chip.icon;
            return (
              <a
                key={idx}
                href={chip.href}
                onClick={(e) => handleSmoothJump(e, chip.href)}
                className="glass-chip text-sm font-bold text-[#0A3D47] hover:bg-[#0B5563] hover:text-white transition-all shadow-xs"
              >
                <Icon className="w-4 h-4 text-[#F4A62A]" />
                <span>{chip.label}</span>
              </a>
            );
          })}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* ========================================================
            2. NDIS Supports (#ndis) with Background Banner Video
            ======================================================== */}
        <div id="ndis" className="relative rounded-[36px] overflow-hidden border-2 border-white/70 shadow-2xl p-6 sm:p-10 lg:p-12 scroll-mt-24">
          
          {/* Background Banner Video Layer */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            <video
              autoPlay
              loop
              muted
              playsInline
              poster="/images/ndis-video-frame.jpg"
              className="w-full h-full object-cover object-center opacity-85 filter saturate-110 brightness-95"
            >
              <source src="/videos/ndis-banner-care.mp4" type="video/mp4" />
            </video>
            {/* Soft Frosted Glass Gradient Wash for crystal clear text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#FBF5EA]/96 via-[#FBF5EA]/88 to-[#FBF5EA]/55 backdrop-blur-[2px]" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#FBF5EA]/40 via-transparent to-[#FBF5EA]/60" />
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="w-14 h-14 rounded-2xl bg-[#0B5563] text-white flex items-center justify-center shadow-md">
                <Heart className="w-7 h-7 text-[#F4A62A]" />
              </div>
              <h3 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#0A3D47]">
                NDIS Supports
              </h3>
              <p className="text-lg text-[#2A3B40] font-medium leading-relaxed">
                We help NDIS participants use their plan the way they choose. Our support workers get to know you, your routines and your goals, and work alongside you to build skills and confidence.
              </p>

              <ul className="tick-list text-[#1E2B30] font-medium">
                <li><strong>Personal care:</strong> showering, dressing, grooming and daily routines, delivered with dignity</li>
                <li><strong>Community access:</strong> appointments, shopping, social outings, sport, work or study</li>
                <li><strong>Daily living support:</strong> meal preparation, household tasks and independent living skills</li>
                <li><strong>Housing and accommodation supports:</strong> help to find, set up and keep a home, including our own rental units in Townsville</li>
              </ul>

              {/* Funding Info Card */}
              <div id="accommodation" className="p-6 rounded-2xl bg-white/85 backdrop-blur-md border border-white shadow-sm space-y-2 text-sm text-[#1E2B30]">
                <h4 className="font-bold text-base text-[#0A3D47]">NDIS and funding</h4>
                <p className="text-[#4A5A60]">
                  We work with <strong>plan-managed</strong> and <strong>self-managed</strong> NDIS participants. Plan-managed? We invoice your plan manager directly. Self-managing? We send you clear, itemised statements. We also support aged care clients, veterans through DVA’s Veterans’ Home Care (VHC), and private clients.
                </p>
                <p className="font-bold text-[#0A3D47]">
                  Not sure how your funding works? Give us a call and we’ll walk you through it.
                </p>
              </div>

              {/* Accommodation Available Banner */}
              <div className="bg-[#F4A62A] rounded-2xl p-5 sm:p-6 shadow-md flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3.5 text-[#1E2B30]">
                  <Home className="w-7 h-7 text-[#0A3D47] flex-shrink-0" />
                  <div>
                    <h5 className="font-bold text-base text-[#0A3D47]">Accommodation available now</h5>
                    <p className="text-xs font-semibold text-[#3A2A10]">1 and 2-bedroom independent units ready in Townsville.</p>
                  </div>
                </div>
                <a 
                  href="mailto:admin@tchservices.com.au?subject=Enquiry%20about%20Townsville%20Accommodation%20Units"
                  className="btn-base btn-teal text-xs sm:text-sm px-4 py-2.5 shadow-sm"
                >
                  Enquire about units
                </a>
              </div>

            </div>

            {/* Right Photo */}
            <div className="lg:col-span-5">
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-br from-[#0B5563]/25 to-[#F4A62A]/25 rounded-[44px] blur-xl opacity-70 group-hover:opacity-100 transition duration-500" />
                <div className="relative overflow-hidden rounded-[32px] lg:rounded-[40px_120px_40px_40px] shadow-2xl border-4 border-white/80 bg-white aspect-[4/3] lg:aspect-[4/5]">
                  <img 
                    src="/images/service-community-ndis.jpg" 
                    alt="Young adult participant out actively in the community with a TCH worker" 
                    className="w-full h-full object-cover transform group-hover:scale-102 transition duration-700 ease-out"
                  />
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-white/90 shadow-lg text-[#1E2B30]">
                    <span className="text-xs font-bold text-[#0A3D47] block">Local Support Workers</span>
                    <p className="text-[11px] text-[#4A5A60]">Compassionate, screened workers dedicated to participant goals.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ========================================================
            3. Allied Health Services (#allied) with Background Banner Video
            ======================================================== */}
        <div id="allied" className="relative rounded-[36px] overflow-hidden border-2 border-white/70 shadow-2xl p-6 sm:p-10 lg:p-12 scroll-mt-24">
          
          {/* Background Banner Video Layer */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            <video
              autoPlay
              loop
              muted
              playsInline
              poster="/images/allied-video-frame.jpg"
              className="w-full h-full object-cover object-center opacity-85 filter saturate-110 brightness-95"
            >
              <source src="/videos/allied-banner-care.mp4" type="video/mp4" />
            </video>
            {/* Soft Frosted Glass Gradient Wash for crystal clear text readability */}
            <div className="absolute inset-0 bg-gradient-to-l from-[#FBF5EA]/96 via-[#FBF5EA]/88 to-[#FBF5EA]/55 backdrop-blur-[2px]" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#FBF5EA]/40 via-transparent to-[#FBF5EA]/60" />
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Photo */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-bl from-[#0B5563]/25 to-[#F4A62A]/25 rounded-[44px] blur-xl opacity-70 group-hover:opacity-100 transition duration-500" />
                <div className="relative overflow-hidden rounded-[32px] lg:rounded-[120px_40px_40px_40px] shadow-2xl border-4 border-white/80 bg-white aspect-[4/3] lg:aspect-[4/5]">
                  <img 
                    src="/images/service-allied-home.jpg" 
                    alt="Physio or occupational therapist working with client at home in Townsville" 
                    className="w-full h-full object-cover transform group-hover:scale-102 transition duration-700 ease-out"
                  />
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-white/90 shadow-lg text-[#1E2B30]">
                    <span className="text-xs font-bold text-[#0A3D47] block">Certified Therapists</span>
                    <p className="text-[11px] text-[#4A5A60]">In-home OT, physiotherapy and capacity building assessments.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
              <div className="w-14 h-14 rounded-2xl bg-[#0B5563] text-white flex items-center justify-center shadow-md">
                <Stethoscope className="w-7 h-7 text-[#F4A62A]" />
              </div>
              <h3 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#0A3D47]">
                Allied Health Services
              </h3>
              <p className="text-lg text-[#2A3B40] font-medium leading-relaxed">
                Our qualified allied health practitioners come to you, at home or in the community, to help you build capacity and reach your goals.
              </p>

              <ul className="tick-list text-[#1E2B30] font-medium">
                <li><strong>Occupational therapy:</strong> Functional Capacity Assessments (FCA), home modifications, equipment and assistive technology</li>
                <li><strong>Physiotherapy:</strong> mobility, strength, balance, falls prevention and recovery</li>
                <li><strong>Speech pathology:</strong> communication, speech, language and safe swallowing</li>
                <li><strong>Dietetics:</strong> nutrition advice and meal planning</li>
                <li><strong>Exercise physiology:</strong> tailored exercise programs for fitness and function</li>
                <li><strong>Psychology and counselling:</strong> emotional wellbeing, mental health and coping strategies</li>
              </ul>

              <p className="text-xs text-[#4A5A60]">
                All practitioners are qualified, registered where required, and hold a current NDIS Worker Screening Check. Available to NDIS participants and private clients.
              </p>

              {/* 2-Week FCA Banner with Splose Link */}
              <div className="bg-[#F4A62A] rounded-2xl p-5 sm:p-6 shadow-md flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3.5 text-[#1E2B30]">
                  <Clock className="w-7 h-7 text-[#0A3D47] flex-shrink-0" />
                  <div>
                    <h5 className="font-bold text-base text-[#0A3D47]">Functional Capacity Assessments in 2 weeks</h5>
                    <p className="text-xs font-semibold text-[#3A2A10]">No long waits. Local certified OTs, fast report delivery.</p>
                  </div>
                </div>
                <a 
                  href={SPLOSE_FCA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-base btn-teal text-xs sm:text-sm px-5 py-2.5 shadow-sm flex items-center gap-2 group"
                >
                  <span>Book an FCA</span>
                  <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>

            </div>

          </div>
        </div>

        {/* ========================================================
            4. Nursing Services (#nursing) with Background Banner Video
            ======================================================== */}
        <div id="nursing" className="relative rounded-[36px] overflow-hidden border-2 border-white/70 shadow-2xl p-6 sm:p-10 lg:p-12 scroll-mt-24">
          
          {/* Background Banner Video Layer */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            <video
              autoPlay
              loop
              muted
              playsInline
              poster="/images/nursing-video-frame.jpg"
              className="w-full h-full object-cover object-center opacity-85 filter saturate-110 brightness-95"
            >
              <source src="/videos/nursing-banner-care.mp4" type="video/mp4" />
            </video>
            {/* Soft Frosted Glass Gradient Wash for crystal clear text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#FBF5EA]/96 via-[#FBF5EA]/88 to-[#FBF5EA]/55 backdrop-blur-[2px]" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#FBF5EA]/40 via-transparent to-[#FBF5EA]/60" />
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="w-14 h-14 rounded-2xl bg-[#0B5563] text-white flex items-center justify-center shadow-md">
                <ShieldCheck className="w-7 h-7 text-[#F4A62A]" />
              </div>
              <h3 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#0A3D47]">
                Nursing Services
              </h3>
              <p className="text-lg text-[#2A3B40] font-medium leading-relaxed">
                Our qualified nurses provide professional clinical care in the comfort of your own home, helping you stay well and avoid unnecessary hospital visits.
              </p>

              <ul className="tick-list text-[#1E2B30] font-medium">
                <li>Medication management and administration</li>
                <li>Wound care and sterile dressings</li>
                <li>Diabetes management and blood glucose monitoring</li>
                <li>Continence and catheter care</li>
                <li>Post-hospital and post-surgery care</li>
                <li>Health monitoring and clinical assessments</li>
                <li>Support for complex and chronic health needs</li>
              </ul>

              <p className="text-xs text-[#4A5A60] pt-1">
                We work closely with your GP, specialists and support team so your care is coordinated and consistent.
              </p>
            </div>

            {/* Right Photo */}
            <div className="lg:col-span-5">
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-br from-[#0B5563]/25 to-[#F4A62A]/25 rounded-[44px] blur-xl opacity-70 group-hover:opacity-100 transition duration-500" />
                <div className="relative overflow-hidden rounded-[32px] lg:rounded-[40px_120px_40px_40px] shadow-2xl border-4 border-white/80 bg-white aspect-[4/3] lg:aspect-[4/5]">
                  <img 
                    src="/images/service-nurse-visit.jpg" 
                    alt="TCH nurse checking blood pressure at a client's home in Townsville" 
                    className="w-full h-full object-cover transform group-hover:scale-102 transition duration-700 ease-out"
                  />
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-white/90 shadow-lg text-[#1E2B30]">
                    <span className="text-xs font-bold text-[#0A3D47] block">Registered Clinical Nurses</span>
                    <p className="text-[11px] text-[#4A5A60]">In-home wound management, vital checks and clinical administration.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ========================================================
            5. Domestic & Cleaning Services (#cleaning) with Background Banner Video
            ======================================================== */}
        <div id="cleaning" className="relative rounded-[36px] overflow-hidden border-2 border-white/70 shadow-2xl p-6 sm:p-10 lg:p-12 scroll-mt-24">
          
          {/* Background Banner Video Layer */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            <video
              autoPlay
              loop
              muted
              playsInline
              poster="/images/cleaning-video-frame.jpg"
              className="w-full h-full object-cover object-center opacity-85 filter saturate-110 brightness-95"
            >
              <source src="/videos/cleaning-banner-care.mp4" type="video/mp4" />
            </video>
            {/* Soft Frosted Glass Gradient Wash for crystal clear text readability */}
            <div className="absolute inset-0 bg-gradient-to-l from-[#FBF5EA]/96 via-[#FBF5EA]/88 to-[#FBF5EA]/55 backdrop-blur-[2px]" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#FBF5EA]/40 via-transparent to-[#FBF5EA]/60" />
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Photo */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-bl from-[#0B5563]/25 to-[#F4A62A]/25 rounded-[44px] blur-xl opacity-70 group-hover:opacity-100 transition duration-500" />
                <div className="relative overflow-hidden rounded-[32px] lg:rounded-[120px_40px_40px_40px] shadow-2xl border-4 border-white/80 bg-white aspect-[4/3] lg:aspect-[4/5]">
                  <img 
                    src="/images/service-cleaner-kitchen.jpg" 
                    alt="TCH cleaner maintaining a bright, tidy Queensland kitchen" 
                    className="w-full h-full object-cover transform group-hover:scale-102 transition duration-700 ease-out"
                  />
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-white/90 shadow-lg text-[#1E2B30]">
                    <span className="text-xs font-bold text-[#0A3D47] block">Reliable Domestic Care</span>
                    <p className="text-[11px] text-[#4A5A60]">Regular general cleaning, washing and living space maintenance.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
              <div className="w-14 h-14 rounded-2xl bg-[#0B5563] text-white flex items-center justify-center shadow-md">
                <Sparkles className="w-7 h-7 text-[#F4A62A]" />
              </div>
              <h3 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#0A3D47]">
                Domestic and Cleaning Services
              </h3>
              <p className="text-lg text-[#2A3B40] font-medium leading-relaxed">
                A clean, tidy home makes everyday life safer and more comfortable. Our friendly, reliable cleaners provide regular or as-needed general cleaning.
              </p>

              <ul className="tick-list text-[#1E2B30] font-medium">
                <li>Vacuuming, mopping and dusting</li>
                <li>Kitchen and bathroom cleaning</li>
                <li>Laundry, ironing and changing bed linen</li>
                <li>Tidying living areas and taking out the rubbish</li>
                <li>External window cleaning at ground level</li>
              </ul>

              <p className="text-xs text-[#4A5A60] pt-1">
                Available under the NDIS, Veterans’ Home Care (VHC) and to private clients. We provide general cleaning only, not bond or end-of-lease cleaning.
              </p>
            </div>

          </div>
        </div>

        {/* ========================================================
            6. Gardening Services (#gardening)
            ======================================================== */}
        <div id="gardening" className="pt-8 border-t border-[#EADFCB]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="w-14 h-14 rounded-2xl bg-[#E3F1F1] flex items-center justify-center text-[#0B5563]">
                <Trees className="w-7 h-7" />
              </div>
              <h3 className="font-heading font-extrabold text-3xl sm:text-4xl text-[#0A3D47]">
                Gardening Services
              </h3>
              <p className="text-lg text-[#3E4F55] leading-relaxed">
                Keep your yard neat, safe and easy to enjoy, even through the wet season. Our gardening team offers regular or one-off maintenance.
              </p>

              <ul className="tick-list text-[#1E2B30]">
                <li>Lawn mowing</li>
                <li>Edging and whipper snipping</li>
                <li>Hedge and shrub trimming</li>
                <li>Light pruning and chainsaw work up to 4 metres</li>
                <li>General yard tidy-ups</li>
              </ul>

              <p className="text-xs text-[#4A5A60]">
                Available under the NDIS, Veterans’ Home Care (VHC) and to private clients. For safety we work up to 4 metres high only and don’t do tree lopping. Green waste removal can be arranged at extra cost.
              </p>
            </div>

            {/* Right Photo */}
            <div className="lg:col-span-5">
              <div className="overflow-hidden rounded-3xl shadow-xl border-4 border-white aspect-[4/3] lg:aspect-[4/5] bg-gray-100">
                <img 
                  src="/images/service-lawn-mowing.jpg" 
                  alt="Mowing a green tropical lawn in North Queensland" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>

      </div>

    </section>
  );
};
