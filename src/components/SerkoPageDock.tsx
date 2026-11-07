import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PageInfo {
  id: string;
  name: string;
  shortName: string;
  num: string;
}

interface SerkoPageDockProps {
  currentPageId: string;
  pages: PageInfo[];
  onNavigate: (pageId: string) => void;
}

export const SerkoPageDock: React.FC<SerkoPageDockProps> = ({
  currentPageId,
  pages,
  onNavigate,
}) => {
  const currentIndex = pages.findIndex((p) => p.id === currentPageId);

  const handlePrev = () => {
    const prevIdx = currentIndex > 0 ? currentIndex - 1 : pages.length - 1;
    onNavigate(pages[prevIdx].id);
  };

  const handleNext = () => {
    const nextIdx = currentIndex < pages.length - 1 ? currentIndex + 1 : 0;
    onNavigate(pages[nextIdx].id);
  };

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 hidden sm:flex items-center gap-1.5 p-1.5 rounded-full bg-[#081F1A]/90 backdrop-blur-xl border border-white/20 shadow-2xl text-white">
      {/* Prev button */}
      <button
        type="button"
        onClick={handlePrev}
        className="p-2 rounded-full hover:bg-white/10 text-teal-200 hover:text-white transition-colors focus:outline-none"
        title="Previous Page"
        aria-label="Previous Page"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>

      {/* Page Tabs */}
      <div className="flex items-center gap-1 px-1">
        {pages.map((p, idx) => {
          const isActive = currentPageId === p.id;
          return (
            <button
              key={p.id}
              type="button"
              onClick={() => onNavigate(p.id)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 flex items-center gap-1.5 ${
                isActive
                  ? 'bg-[#D4A359] text-[#09221C] shadow-md font-bold'
                  : 'text-teal-200/80 hover:text-white hover:bg-white/10'
              }`}
            >
              <span className="font-mono text-[10px] opacity-75">{p.num}</span>
              <span className="hidden md:inline">{p.name}</span>
              <span className="md:hidden">{p.shortName}</span>
            </button>
          );
        })}
      </div>

      {/* Next button */}
      <button
        type="button"
        onClick={handleNext}
        className="p-2 rounded-full hover:bg-white/10 text-teal-200 hover:text-white transition-colors focus:outline-none"
        title="Next Page"
        aria-label="Next Page"
      >
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
};
