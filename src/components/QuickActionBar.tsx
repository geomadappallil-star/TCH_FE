import React from 'react';
import { Phone, CalendarPlus } from 'lucide-react';

export const QuickActionBar: React.FC = () => {
  return (
    <div className="fixed bottom-3 inset-x-3 z-40 lg:hidden">
      <div className="glass-card bg-[#F6F4EE]/90 backdrop-blur-2xl p-2.5 rounded-2xl border border-teal/20 shadow-2xl flex items-center justify-between gap-2.5">
        
        <a
          href="tel:0431430905"
          className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-teal to-teal-deep text-white font-sans font-bold text-xs sm:text-sm py-3 px-3 rounded-xl shadow-glass-teal active:scale-95 transition-all"
        >
          <Phone className="w-4 h-4 text-gold" />
          <span>Call: 0431 430 905</span>
        </a>

        <a
          href="#contact"
          className="flex-1 inline-flex items-center justify-center gap-2 bg-white/90 hover:bg-white text-teal-ink font-sans font-bold text-xs sm:text-sm py-3 px-3 rounded-xl border border-teal/20 active:scale-95 transition-all shadow-sm"
        >
          <CalendarPlus className="w-4 h-4 text-teal" />
          <span>Book or Quote</span>
        </a>

      </div>
    </div>
  );
};
