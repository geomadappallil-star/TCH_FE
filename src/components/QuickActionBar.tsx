import React from 'react';
import { Phone, CalendarPlus } from 'lucide-react';

export const QuickActionBar: React.FC = () => {
  return (
    <div className="fixed bottom-3 inset-x-3 z-40 lg:hidden">
      <div className="bg-[#FAF8F5]/95 backdrop-blur-2xl p-2.5 rounded-2xl border border-[#164E43]/20 shadow-2xl flex items-center justify-between gap-2.5">
        
        <a
          href="tel:0431430905"
          className="btn-press flex-1 inline-flex items-center justify-center gap-2 bg-[#164E43] text-white font-sans font-bold text-xs sm:text-sm py-3 px-3 rounded-xl shadow-md active:scale-95 transition-all"
        >
          <Phone className="w-4 h-4 text-[#E5B56A]" />
          <span>Call: 0431 430 905</span>
        </a>

        <a
          href="#top"
          className="btn-press flex-1 inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-[#0E352D] font-sans font-bold text-xs sm:text-sm py-3 px-3 rounded-xl border border-gray-200 active:scale-95 transition-all shadow-sm"
        >
          <CalendarPlus className="w-4 h-4 text-[#164E43]" />
          <span>Request Callback</span>
        </a>

      </div>
    </div>
  );
};
