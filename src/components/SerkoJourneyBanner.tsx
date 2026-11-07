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
        className="group relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#0E352D] via-[#164E43] to-[#0E352D] p-8 sm:p-12 text-white shadow-2xl cursor-pointer border border-[#D4A359]/30 hover:border-[#D4A359] transition-all duration-500 hover:scale-[1.01]"
      >
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 pattern-grid-dark opacity-20 pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-radial-gradient from-[#D4A359]/20 via-transparent to-transparent pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#E5B56A] uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Next Chapter · 0{currentPageIndex + 1} of 0{totalPages}</span>
            </div>
            
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white group-hover:text-[#E5B56A] transition-colors leading-tight">
              {nextPageTitle}
            </h3>

            <p className="text-xs sm:text-sm text-teal-100/80 max-w-xl font-normal leading-relaxed">
              {nextPageSubtitle}
            </p>
          </div>

          <div className="flex items-center gap-4 flex-shrink-0">
            <button
              type="button"
              className="btn-press inline-flex items-center gap-3 bg-[#D4A359] group-hover:bg-[#C28F42] text-[#09221C] font-bold text-sm sm:text-base px-7 py-4 rounded-full shadow-lg transition-all"
            >
              <span>Explore Next Page</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
            </button>
          </div>
        </div>

        {/* Bottom sweep line */}
        <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#E5B56A] to-transparent opacity-40 group-hover:opacity-100 transition-opacity" />
      </div>
    </div>
  );
};
