import React from 'react';
import { ShieldCheck, CheckCircle2, FileText, MapPin, Sparkles } from 'lucide-react';

export const NdisSection: React.FC = () => {
  const fundingTypes = [
    {
      title: 'Plan-Managed NDIS',
      badge: 'Direct Invoicing',
      badgeStyle: 'bg-[#164E43]/10 text-[#164E43] border-[#164E43]/20',
      desc: 'We invoice your plan manager directly. Zero out-of-pocket payments and nothing for you to claim back.'
    },
    {
      title: 'Self-Managed NDIS',
      badge: 'Full Choice',
      badgeStyle: 'bg-[#FAF3E7] text-[#9E6C1F] border-[#E8D1A7]',
      desc: 'Clear itemized tax invoices with NDIS line items for fast 24h reimbursement via the NDIA myplace portal.'
    },
    {
      title: 'VHC (Veterans\' Home Care)',
      badge: 'DVA & Veterans',
      badgeStyle: 'bg-[#EFF5F0] text-[#3D6348] border-[#CFE0D3]',
      desc: 'Gardening, yard care, and domestic cleaning supports approved for eligible veterans and families.'
    },
    {
      title: 'Private & Home Care (HCP)',
      badge: 'Private & Aged Care',
      badgeStyle: 'bg-blue-50 text-blue-800 border-blue-200',
      desc: 'Direct self-funded support or in partnership with your approved Home Care Package provider.'
    }
  ];

  const suburbs = [
    'Townsville City', 'Kirwan', 'Thuringowa', 'Burdell', 'Douglas', 
    'Annandale', 'Bushland Beach', 'Kelso', 'Ingham', 'Charters Towers'
  ];

  return (
    <section id="ndis" className="scroll-mt-20 py-20 sm:py-24 relative overflow-hidden bg-[#F2EFE8] text-[#182823] border-y border-[#164E43]/10">
      
      {/* Subtle Pattern */}
      <div className="absolute inset-0 pattern-grid-light opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#164E43]/10 text-[#164E43] text-xs font-bold uppercase tracking-wider mb-3.5 border border-[#164E43]/15">
            <ShieldCheck className="w-3.5 h-3.5 text-[#D4A359]" />
            <span>Funding Pathways &amp; Coverage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0E352D] tracking-tight">
            Private, NDIS, HCP &amp; VHC Welcome
          </h2>
          <p className="text-base text-gray-600 mt-3 max-w-xl mx-auto leading-relaxed">
            Complete freedom to choose your local nurses, therapists, gardening and cleaning teams with zero paperwork delays.
          </p>
        </div>

        {/* 4 Compact Funding Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {fundingTypes.map((item, idx) => (
            <div 
              key={idx} 
              className="care-card p-6 sm:p-7 flex flex-col justify-between"
            >
              <div>
                <span className={`inline-block px-3 py-1 rounded-full text-[11px] font-bold border mb-4 ${item.badgeStyle}`}>
                  {item.badge}
                </span>
                <h3 className="font-bold text-lg text-[#0E352D] mb-2.5">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-2 text-xs font-semibold text-[#164E43]">
                <CheckCircle2 className="w-4 h-4 text-[#D4A359]" />
                <span>Zero Hidden Fees</span>
              </div>
            </div>
          ))}
        </div>

        {/* Suburb Coverage Strip with Smooth Cyclic Rotation */}
        <div className="bg-white p-5 sm:p-6 rounded-2xl border border-[#164E43]/15 flex flex-col lg:flex-row items-center justify-between gap-5 shadow-sm overflow-hidden">
          <div className="flex items-center gap-3 text-sm text-[#0E352D] font-bold flex-shrink-0">
            <div className="w-9 h-9 rounded-xl bg-[#D4A359]/20 flex items-center justify-center text-[#9E6C1F] flex-shrink-0">
              <MapPin className="w-5 h-5 text-[#B38135]" />
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
                  className="px-3.5 py-1.5 rounded-lg bg-[#FAF8F5] border border-gray-200 text-xs text-[#0E352D] font-semibold hover:border-[#164E43]/40 hover:bg-white whitespace-nowrap transition-colors flex items-center gap-1.5 shadow-xs"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4A359] flex-shrink-0" />
                  <span>{sub}</span>
                </span>
              ))}

              {/* Second Set of Suburbs for Seamless Infinite Cyclic Rotation */}
              {suburbs.map((sub, i) => (
                <span 
                  key={`cycle-2-${i}`} 
                  className="px-3.5 py-1.5 rounded-lg bg-[#FAF8F5] border border-gray-200 text-xs text-[#0E352D] font-semibold hover:border-[#164E43]/40 hover:bg-white whitespace-nowrap transition-colors flex items-center gap-1.5 shadow-xs"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4A359] flex-shrink-0" />
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
