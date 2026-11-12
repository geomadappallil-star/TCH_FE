import React from 'react';
import { ShieldCheck, CheckCircle2, FileText, MapPin, Sparkles } from 'lucide-react';

export const NdisSection: React.FC = () => {
  const fundingTypes = [
    {
      title: 'Plan-Managed NDIS',
      badge: 'Direct Invoicing',
      badgeClass: 'color-accent',
      desc: 'We invoice your plan manager directly. Zero out-of-pocket payments and nothing for you to claim back.'
    },
    {
      title: 'Self-Managed NDIS',
      badge: 'Full Choice',
      badgeClass: 'color-secondary',
      desc: 'Clear itemized tax invoices with NDIS line items for fast reimbursement via the NDIA myplace portal.'
    },
    {
      title: 'VHC (Veterans\' Home Care)',
      badge: 'DVA & Veterans',
      badgeClass: 'color-coral',
      desc: 'Gardening, yard care, and domestic cleaning supports approved for eligible veterans and families.'
    },
    {
      title: 'Private & Home Care (HCP)',
      badge: 'Private & Aged Care',
      badgeClass: 'color-blue',
      desc: 'Direct self-funded support or in partnership with your approved Home Care Package provider.'
    }
  ];

  const suburbs = [
    'Townsville City', 'Kirwan', 'Thuringowa', 'Burdell', 'Douglas', 
    'Annandale', 'Bushland Beach', 'Kelso', 'Ayr', 'Ingham', 'Charters Towers', 'Mareeba', 'Mount Isa'
  ];

  return (
    <section id="ndis" className="scroll-mt-20 py-20 sm:py-24 relative overflow-hidden bg-[#FAF3EA] text-[#2B2822] border-y border-[#0B4F51]/10">
      
      {/* Decorative Blobs */}
      <div className="absolute top-10 right-10 w-96 h-96 rounded-full bg-[#F9B835]/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-[#94C08E]/15 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 fadeInFromBottom">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#0B4F51]/15 text-[#0B4F51] text-xs font-bold uppercase tracking-wider mb-3.5 shadow-xs">
            <ShieldCheck className="w-3.5 h-3.5 text-[#F9B835]" />
            <span>Funding Pathways &amp; Coverage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0B4F51] tracking-tight">
            Private, NDIS, HCP &amp; VHC Welcome
          </h2>
          <p className="text-base text-gray-700 mt-3 max-w-xl mx-auto leading-relaxed font-sans">
            Complete freedom to choose your local nurses, therapists, gardening and cleaning teams with zero paperwork delays.
          </p>
        </div>

        {/* 4 Compact Funding Columns (ATS Styling) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {fundingTypes.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-white border-2 border-[#0B4F51]/15 p-6 sm:p-7 rounded-3xl flex flex-col justify-between shadow-sm hover:shadow-md hover:border-[#F9B835] transition-all group"
            >
              <div>
                <span className={`${item.badgeClass} text-[11px] font-bold mb-4 inline-block`}>
                  {item.badge}
                </span>
                <h3 className="font-bold text-lg text-[#0B4F51] mb-2.5 tracking-tight group-hover:text-[#073B3C]">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-sans">
                  {item.desc}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-2 text-xs font-semibold text-[#0B4F51]">
                <CheckCircle2 className="w-4 h-4 text-[#94C08E]" />
                <span>Zero Hidden Fees</span>
              </div>
            </div>
          ))}
        </div>

        {/* Suburb Coverage Strip with Smooth Cyclic Rotation */}
        <div className="bg-white p-5 sm:p-6 rounded-3xl border-2 border-[#0B4F51]/15 flex flex-col lg:flex-row items-center justify-between gap-5 shadow-sm overflow-hidden">
          <div className="flex items-center gap-3 text-sm text-[#0B4F51] font-bold flex-shrink-0">
            <div className="w-9 h-9 rounded-2xl bg-[#0B4F51]/10 flex items-center justify-center text-[#0B4F51] flex-shrink-0">
              <MapPin className="w-5 h-5 text-[#0B4F51]" />
            </div>
            <span>Regular daily routes across North Queensland:</span>
          </div>

          {/* Cyclic Rotating Carousel / Marquee Track */}
          <div className="relative w-full lg:max-w-2xl overflow-hidden py-1">
            {/* Soft Edge Fade Gradients for Seamless Look */}
            <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-12 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-12 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

            <div className="animate-cyclic flex items-center gap-2.5">
              {/* First Set of Suburbs */}
              {suburbs.map((sub, i) => (
                <span 
                  key={`cycle-1-${i}`} 
                  className="px-3.5 py-1.5 rounded-full bg-[#FAF3EA] border border-[#0B4F51]/15 text-xs text-[#0B4F51] font-semibold hover:border-[#F9B835] hover:bg-white whitespace-nowrap transition-colors flex items-center gap-1.5 shadow-xs"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F9B835] flex-shrink-0" />
                  <span>{sub}</span>
                </span>
              ))}

              {/* Second Set of Suburbs for Seamless Infinite Cyclic Rotation */}
              {suburbs.map((sub, i) => (
                <span 
                  key={`cycle-2-${i}`} 
                  className="px-3.5 py-1.5 rounded-full bg-[#FAF3EA] border border-[#0B4F51]/15 text-xs text-[#0B4F51] font-semibold hover:border-[#F9B835] hover:bg-white whitespace-nowrap transition-colors flex items-center gap-1.5 shadow-xs"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F9B835] flex-shrink-0" />
                  <span>{sub}</span>
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
