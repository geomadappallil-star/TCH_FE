import React from 'react';
import { Phone, ArrowRight } from 'lucide-react';

export const QuickActionBar: React.FC = () => {
  const handleReferralClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.querySelector('#referral');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-3 inset-x-3 z-40 lg:hidden">
      <div className="bg-white/90 backdrop-blur-2xl p-2 rounded-2xl border border-white/80 shadow-2xl flex items-center justify-between gap-2">
        
        <a
          href="tel:0431430905"
          className="flex-1 inline-flex items-center justify-center gap-1.5 bg-[#0A3D47] text-white font-bold text-xs sm:text-sm py-3 px-3 rounded-xl shadow-sm active:scale-95 transition-all"
        >
          <Phone className="w-4 h-4 text-[#F4A62A]" />
          <span>0431 430 905</span>
        </a>

        <a
          href="#referral"
          onClick={handleReferralClick}
          className="flex-1 inline-flex items-center justify-center gap-1.5 bg-[#F4A62A] hover:bg-[#E8951A] text-[#1E2B30] font-bold text-xs sm:text-sm py-3 px-3 rounded-xl shadow-sm active:scale-95 transition-all"
        >
          <span>Referral</span>
          <ArrowRight className="w-4 h-4" />
        </a>

      </div>
    </div>
  );
};
