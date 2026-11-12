import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface SerkoJourneyBannerProps {
  currentPageIndex: number;
  totalPages: number;
  nextPageId: string;
  nextPageTitle: string;
  nextPageSubtitle: string;
  onNavigate: (pageId: string) => void;
}

export const SerkoJourneyBanner: React.FC<SerkoJourneyBannerProps> = ({
  currentPageIndex,
  totalPages,
  nextPageId,
  nextPageTitle,
  nextPageSubtitle,
  onNavigate,
}) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <div 
        onClick={() => onNavigate(nextPageId)}
        className="group relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#0B4F51] via-[#073B3C] to-[#042627] p-8 sm:p-12 text-white shadow-2xl cursor-pointer border-2 border-[#F9B835]/30 hover:border-[#F9B835] transition-all duration-500 hover:scale-[1.01]"
      >
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 pattern-grid-dark opacity-20 pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-radial-gradient from-[#F9B835]/20 via-transparent to-transparent pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#F9B835] uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Next Chapter · 0{currentPageIndex + 1} of 0{totalPages}</span>
            </div>
            
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white group-hover:text-[#F9B835] transition-colors leading-tight">
              {nextPageTitle}
            </h3>

            <p className="text-xs sm:text-sm text-teal-100/90 max-w-xl font-normal leading-relaxed font-sans">
              {nextPageSubtitle}
            </p>
          </div>

          <div className="flex items-center gap-4 flex-shrink-0">
            <button
              type="button"
              className="ats-button inline-flex items-center gap-3 bg-[#F9B835] group-hover:bg-[#ffc657] text-[#2B2822] font-bold text-sm sm:text-base px-8 py-4 shadow-lg transition-all"
            >
              <span>Explore Next Page</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
            </button>
          </div>
        </div>

        {/* Bottom sweep line */}
        <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#F9B835] to-transparent opacity-40 group-hover:opacity-100 transition-opacity" />
      </div>
    </div>
  );
};
