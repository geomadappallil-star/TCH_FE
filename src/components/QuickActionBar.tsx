import React from 'react';
import { Phone, CalendarPlus } from 'lucide-react';

export const QuickActionBar: React.FC = () => {
  return (
    <div className="fixed bottom-3 inset-x-3 z-40 lg:hidden">
      <div className="bg-[#FFF3E2]/95 backdrop-blur-2xl p-2.5 rounded-full border border-[#0B4F51]/20 shadow-2xl flex items-center justify-between gap-2.5">
        
        <a
          href="tel:0431430905"
          className="flex-1 inline-flex items-center justify-center gap-2 bg-[#0B4F51] text-white font-sans font-bold text-xs sm:text-sm py-3 px-3 rounded-full shadow-md active:scale-95 transition-all"
        >
          <Phone className="w-4 h-4 text-[#F9B835]" />
          <span>Call 0431 430 905</span>
        </a>

        <a
          href="#referral"
          className="flex-1 inline-flex items-center justify-center gap-2 bg-[#EF85AA] text-[#590925] font-sans font-bold text-xs sm:text-sm py-3 px-3 rounded-full border border-[#590925]/20 active:scale-95 transition-all shadow-sm"
        >
          <CalendarPlus className="w-4 h-4 text-[#590925]" />
          <span>Make Referral</span>
        </a>

      </div>
    </div>
  );
};
