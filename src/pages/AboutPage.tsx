import React from 'react';
import { CommonCtaBanner } from '../components/CommonCtaBanner.js';
import { ShieldCheck, Sparkles, Heart } from 'lucide-react';

export const AboutPage: React.FC = () => {
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
    <div className="bg-[#FBF5EA] min-h-screen font-sans">
      {/* 1. TOP ABOUT SECTION */}
      <section className="pt-8 sm:pt-12 md:pt-16 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs sm:text-sm font-heading font-extrabold tracking-widest uppercase text-[#0B5563] block">
              ABOUT US
            </span>

            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#0A3D47] tracking-tight leading-[1.1]">
              We’re a Townsville business, run by locals.
            </h1>

            <div className="space-y-4 text-base sm:text-lg text-[#1E2B30]/90 leading-relaxed font-sans">
              <p>
                We live and work here, and we hire local people in every community we serve. We know North Queensland: the heat, the distances between towns, and how much it matters to have someone reliable turn up when they say they will.
              </p>
              <p>
                TCH stands for Townsville Community Health, and that’s exactly what we’re about. We support NDIS participants (plan-managed and self-managed), people receiving aged care, veterans through DVA’s Veterans’ Home Care (VHC), and private clients. Our nurses, support workers and allied health practitioners work together, so you get the right help from one team you know.
              </p>
            </div>
          </div>

          {/* Right Team Photo */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden border-2 border-dashed border-[#0B5563]/30 shadow-xl bg-white p-2">
              <img
                src="/images/team-outdoors.jpg"
                alt="The TCH team in uniform outdoors in Townsville"
                className="w-full h-[360px] sm:h-[440px] object-cover rounded-2xl"
                onError={(e) => {
                  e.currentTarget.src = '/images/hero-bg.jpg';
                }}
              />
              <div className="absolute bottom-4 left-4 right-4 bg-[#0A3D47]/85 backdrop-blur-md text-white p-3 rounded-xl text-xs font-medium border border-white/20">
                <span className="font-bold text-[#F4A62A] block">TCH Team in Townsville</span>
                Real staff, local healthcare professionals you can trust.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MISSION & VISION SPLIT CARDS */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto my-6 sm:my-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Mission Card (Teal #0B5563) */}
          <div className="bg-[#0B5563] text-white rounded-3xl p-8 sm:p-10 shadow-lg flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <span className="text-xs sm:text-sm font-heading font-extrabold tracking-widest uppercase text-emerald-200 block">
                OUR MISSION
              </span>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl leading-snug">
                To deliver safe, respectful, quality supports that give people choice and control over their lives, so they can live independently, stay connected and reach their goals, right here in North Queensland.
              </h2>
            </div>
            <p className="text-emerald-100/90 text-sm sm:text-base border-t border-white/15 pt-4 font-sans">
              We listen first, keep you in the driver’s seat, and do what we say we’ll do.
            </p>
          </div>

          {/* Vision Card (Mango #F4A62A) */}
          <div className="bg-[#F4A62A] text-[#1E2B30] rounded-3xl p-8 sm:p-10 shadow-lg flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <span className="text-xs sm:text-sm font-heading font-extrabold tracking-widest uppercase text-[#1E2B30]/75 block">
                OUR VISION
              </span>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl leading-snug">
                Stronger, healthier North Queensland communities where everyone, whatever their age, ability or background, is supported to live the life they choose.
              </h2>
            </div>
            <p className="text-[#1E2B30]/85 text-sm sm:text-base border-t border-[#1E2B30]/15 pt-4 font-sans font-medium">
              We want to be the provider locals recommend to their family and mates: known for good people, honest service and real results.
            </p>
          </div>
        </div>
      </section>

      {/* 3. OUR VALUES SECTION */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-3xl mb-10 sm:mb-12">
          <span className="text-xs sm:text-sm font-heading font-extrabold tracking-widest uppercase text-[#0B5563] block mb-2">
            OUR VALUES
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#0A3D47] tracking-tight">
            What we stand for.
          </h2>
        </div>

        {/* 6 Numbered Value Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((val) => (
            <div
              key={val.num}
              className="bg-white rounded-3xl p-7 border border-[#0B5563]/15 shadow-sm hover:shadow-lg transition-all duration-200 space-y-3"
            >
              <span className="font-heading font-extrabold text-2xl text-[#0B5563] block">
                {val.num}
              </span>
              <h3 className="font-heading font-bold text-2xl text-[#0A3D47]">
                {val.title}
              </h3>
              <p className="text-sm text-[#1E2B30]/80 leading-relaxed font-sans">
                {val.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. EVERYONE IS WELCOME / INCLUSIVITY */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Photo */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden border-2 border-dashed border-[#0B5563]/30 shadow-xl bg-white p-2">
              <img
                src="/images/diverse-community.jpg"
                alt="Diverse clients and workers in the community"
                className="w-full h-[360px] sm:h-[420px] object-cover rounded-2xl"
                onError={(e) => {
                  e.currentTarget.src = '/images/service-community-ndis.jpg';
                }}
              />
              <div className="absolute bottom-4 left-4 right-4 bg-[#0A3D47]/85 backdrop-blur-md text-white p-3 rounded-xl text-xs font-medium border border-white/20">
                <span className="font-bold text-[#F4A62A] block">Inclusive Community Care</span>
                Welcoming people of all ages, cultures, and identities.
              </div>
            </div>
          </div>

          {/* Copy */}
          <div className="lg:col-span-7 space-y-5 order-1 lg:order-2">
            <span className="text-xs sm:text-sm font-heading font-extrabold tracking-widest uppercase text-[#0B5563] block">
              EVERYONE IS WELCOME
            </span>

            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#0A3D47] tracking-tight leading-tight">
              Support that respects who you are.
            </h2>

            <p className="text-base sm:text-lg text-[#1E2B30]/90 leading-relaxed font-sans">
              We welcome people of all ages, abilities and backgrounds, including Aboriginal and Torres Strait Islander peoples, culturally and linguistically diverse communities and LGBTIQA+ people.
            </p>

            <div className="pt-2 flex items-center gap-3 text-sm font-bold text-[#0A3D47]">
              <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="w-5 h-5 stroke-[2.5]" />
              </div>
              <span>Every worker holds a current NDIS Worker Screening Check.</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. ACKNOWLEDGEMENT OF COUNTRY CARD */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto my-8">
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#0B5563]/15 shadow-sm flex flex-col md:flex-row items-center gap-6 sm:gap-8">
          <div className="flex-shrink-0 w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border border-[#0B5563]/20 shadow-md">
            <img
              src="/images/indigenous-art.jpg"
              alt="Artwork by a local Aboriginal or Torres Strait Islander artist"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-heading font-bold text-xl sm:text-2xl text-[#0A3D47]">
              Acknowledgement of Country
            </h3>
            <p className="text-sm sm:text-base text-[#1E2B30]/85 leading-relaxed font-sans">
              TCH Support Services acknowledges the Bindal and Wulgurukaba peoples, the Traditional Owners of the land on which we work in Townsville, and pays respect to Elders past and present. We extend that respect to all Aboriginal and Torres Strait Islander peoples across the communities we serve.
            </p>
            <p className="text-xs text-[#0B5563] font-semibold italic pt-1">
              Artwork by a local Aboriginal or Torres Strait Islander artist. Commissioned and credited.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
