import React from 'react';
import { ShieldCheck, CheckCircle2, FileText, MapPin, ArrowRight } from 'lucide-react';

export const NdisSection: React.FC = () => {
  const fundingTypes = [
    {
      title: 'Plan-Managed NDIS',
      badge: 'Direct Invoicing',
      desc: 'We invoice your plan manager directly. Zero out-of-pocket payments and nothing for you to claim back.'
    },
    {
      title: 'Self-Managed NDIS',
      badge: 'Full Choice',
      desc: 'Clear itemized tax invoices with NDIS line items for fast 24h reimbursement via the NDIA myplace portal.'
    },
    {
      title: 'Home Care Packages (HCP)',
      badge: 'Aged Care & Private',
      desc: 'Delivered in partnership with your approved package provider, or private top-up care when packages fall short.'
    }
  ];

  const suburbs = [
    'Townsville City', 'Kirwan', 'Thuringowa', 'Burdell', 'Douglas', 
    'Annandale', 'Bushland Beach', 'Kelso', 'Ingham', 'Charters Towers'
  ];

  return (
    <section id="ndis" className="py-14 bg-[#EFECE4]/50 border-y border-[#2D6A5D]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#2D6A5D] block mb-1">
            Funding Pathways &amp; Coverage
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#163932]">
            Self-Managed &amp; Plan-Managed NDIS Welcome
          </h2>
          <p className="text-sm text-gray-600 mt-2">
            Complete freedom to choose your local nurses, therapists, and home support workers with zero paperwork delays.
          </p>
        </div>

        {/* 3 Compact Funding Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {fundingTypes.map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-[#2D6A5D]/20 shadow-sm flex flex-col justify-between">
              <div>
                <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#2D6A5D]/10 text-[#2D6A5D] mb-3">
                  {item.badge}
                </span>
                <h3 className="font-bold text-base text-[#163932] mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-gray-100 flex items-center gap-1.5 text-xs font-semibold text-[#2D6A5D]">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Zero Hidden Fees</span>
              </div>
            </div>
          ))}
        </div>

        {/* Suburb Coverage Strip */}
        <div className="bg-white p-5 rounded-2xl border border-[#2D6A5D]/15 flex flex-col md:flex-row items-center justify-between gap-4 shadow-sm">
          <div className="flex items-center gap-2.5 text-xs text-[#163932] font-semibold">
            <MapPin className="w-4 h-4 text-[#D4A359] flex-shrink-0" />
            <span>Regular daily routes across North Queensland:</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {suburbs.map((sub, i) => (
              <span key={i} className="px-2.5 py-1 rounded-lg bg-[#F8F7F3] border border-gray-200 text-xs text-gray-700 font-medium">
                {sub}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
