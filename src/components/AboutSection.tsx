import React from 'react';
import { Heart, Compass, CheckCircle2, Shield, Users, Sparkles } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const values = [
    {
      num: '01',
      title: 'Respect',
      desc: 'We treat every person with dignity and recognise them as the expert in their own life.'
    },
    {
      num: '02',
      title: 'Choice and control',
      desc: 'You decide what support looks like, who delivers it and when.'
    },
    {
      num: '03',
      title: 'Honesty',
      desc: 'We’re upfront about what we can do, what it costs and how it’s going.'
    },
    {
      num: '04',
      title: 'Reliability',
      desc: 'We turn up on time, follow through and keep you in the loop.'
    },
    {
      num: '05',
      title: 'Community',
      desc: 'We’re proudly local and invested in North Queensland.'
    },
    {
      num: '06',
      title: 'Safety and quality',
      desc: 'Screened, qualified people and high standards, every visit.'
    }
  ];

  return (
    <section id="about" className="relative z-10 pb-16 md:pb-24 border-t border-[#EADFCB]">
      
      {/* 1. Main Story Grid (About Us: We're a Townsville business, run by locals) */}
      <div className="relative w-full overflow-hidden border-b border-[#EADFCB] py-16 md:py-24 mb-20">
        {/* Background Image Layer */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-45 filter saturate-110"
          style={{ backgroundImage: `url('/images/townsville-beach-huts.jpg')` }}
          aria-hidden="true"
        />
        {/* Semi-transparent Glass Gradient Wash for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FBF5EA]/96 via-[#FBF5EA]/88 to-[#FBF5EA]/65 backdrop-blur-[2px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Story */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold tracking-widest uppercase text-[#B5651D] bg-white/80 px-3 py-1 rounded-full border border-[#B5651D]/20 inline-block backdrop-blur-xs">
                About us
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0A3D47] leading-tight">
                We&#8217;re a Townsville business, run by locals.
              </h2>
              <p className="text-lg text-[#2A3B40] font-medium leading-relaxed">
                We live and work here, and we hire local people in every community we serve. We know North Queensland: the heat, the distances between towns, and how much it matters to have someone reliable turn up when they say they will.
              </p>
              <p className="text-base text-[#3E4F55] leading-relaxed">
                TCH stands for <strong>Townsville Community Health</strong>, and that&#8217;s exactly what we&#8217;re about. We support NDIS participants (plan-managed and self-managed), people receiving aged care, veterans through DVA&#8217;s Veterans&#8217; Home Care (VHC), and private clients. Our nurses, support workers and allied health practitioners work together, so you get the right help from one team you know.
              </p>
            </div>

            {/* Right Column: Local Team Photo Card */}
            <div className="lg:col-span-5">
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-br from-[#0B5563]/25 to-[#F4A62A]/25 rounded-[44px] blur-xl opacity-70 group-hover:opacity-100 transition duration-500" />
                <div className="relative overflow-hidden rounded-[32px] lg:rounded-[120px_40px_40px_40px] shadow-2xl border-4 border-white/80 bg-white aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5]">
                  <img 
                    src="/images/team-outdoors.jpg" 
                    alt="The TCH care team outdoors in Townsville" 
                    className="w-full h-full object-cover object-center transform group-hover:scale-102 transition duration-700 ease-out"
                  />
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-white/90 shadow-lg text-[#1E2B30]">
                    <span className="text-xs font-bold text-[#0A3D47] block">TCH Support Team</span>
                    <p className="text-[11px] text-[#4A5A60]">Real Townsville staff, trained and dedicated to participants.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* 2. Mission & Vision (2 Big Glass Cards from brief) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 md:mb-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Mission Card (Reef Teal Glass) */}
          <div className="bg-[#0B5563]/95 backdrop-blur-xl text-white rounded-[32px] p-8 sm:p-11 shadow-xl border border-white/20 flex flex-col justify-between gap-6 hover:-translate-y-1 transition duration-300">
            <div className="space-y-4">
              <span className="text-xs font-bold tracking-widest uppercase text-[#F4C77A] inline-block">
                Our mission
              </span>
              <p className="font-heading font-semibold text-2xl sm:text-3xl leading-snug">
                To deliver safe, respectful, quality supports that give people choice and control over their lives, so they can live independently, stay connected and reach their goals, right here in North Queensland.
              </p>
            </div>
            <p className="text-sm text-[#D5E6E6] border-t border-white/15 pt-4">
              We listen first, keep you in the driver&#8217;s seat, and do what we say we&#8217;ll do.
            </p>
          </div>

          {/* Vision Card (Mango Glass) */}
          <div className="bg-[#F4A62A]/95 backdrop-blur-xl text-[#1E2B30] rounded-[32px] p-8 sm:p-11 shadow-xl border border-white/40 flex flex-col justify-between gap-6 hover:-translate-y-1 transition duration-300">
            <div className="space-y-4">
              <span className="text-xs font-bold tracking-widest uppercase text-[#6B3A08] inline-block">
                Our vision
              </span>
              <p className="font-heading font-semibold text-2xl sm:text-3xl leading-snug">
                Stronger, healthier North Queensland communities where everyone, whatever their age, ability or background, is supported to live the life they choose.
              </p>
            </div>
            <p className="text-sm text-[#3A2A10] border-t border-black/10 pt-4 font-medium">
              We want to be the provider locals recommend to their family and mates: known for good people, honest service and real results.
            </p>
          </div>

        </div>
      </div>

      {/* 3. Our Values (6 Glass Cards) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 md:mb-28">
        <div className="flex flex-col gap-2 max-w-2xl mb-10">
          <span className="text-xs font-bold tracking-widest uppercase text-[#B5651D]">
            Our values
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0A3D47]">
            What we stand for.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((v, idx) => (
            <div 
              key={idx}
              className="glass-panel p-7 flex flex-col gap-3 group hover:-translate-y-1"
            >
              <span className="font-heading font-extrabold text-sm text-[#B5651D]">
                {v.num}
              </span>
              <h3 className="font-heading font-bold text-xl text-[#0A3D47]">
                {v.title}
              </h3>
              <p className="text-sm text-[#4A5A60] leading-relaxed">
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Everyone is welcome & Acknowledgement of Country */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Everyone is welcome */}
        <div className="glass-panel p-8 sm:p-10 border border-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 overflow-hidden rounded-2xl aspect-[4/3] bg-gray-100">
              <img 
                src="/images/diverse-community.jpg" 
                alt="Diverse participants and support staff interacting in North Queensland" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold tracking-widest uppercase text-[#B5651D]">
                Everyone is welcome
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0A3D47]">
                Support that respects who you are.
              </h2>
              <p className="text-base text-[#4A5A60] leading-relaxed">
                We welcome people of all ages, abilities and backgrounds, including Aboriginal and Torres Strait Islander peoples, culturally and linguistically diverse communities and LGBTIQA+ people. Every worker holds a current NDIS Worker Screening Check.
              </p>
            </div>
          </div>
        </div>

        {/* Acknowledgement of Country Card */}
        <div className="glass-panel p-8 sm:p-10 border border-white">
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
            <div className="w-40 sm:w-52 h-32 sm:h-36 rounded-2xl overflow-hidden flex-shrink-0 border border-gray-200 shadow-xs">
              <img 
                src="/images/indigenous-art.jpg" 
                alt="Artwork by a local Aboriginal or Torres Strait Islander artist" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-3">
              <h3 className="font-heading font-bold text-2xl text-[#0A3D47]">
                Acknowledgement of Country
              </h3>
              <p className="text-sm sm:text-base text-[#3E4F55] leading-relaxed">
                TCH Support Services acknowledges the Bindal and Wulgurukaba peoples, the Traditional Owners of the land on which we work in Townsville, and pays respect to Elders past and present. We extend that respect to all Aboriginal and Torres Strait Islander peoples across the communities we serve.
              </p>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
};
