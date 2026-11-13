import React, { useState } from 'react';
import { MapPin, Sparkles } from 'lucide-react';

interface TownPin {
  id: string;
  name: string;
  region: string;
  x: number; // percentage
  y: number; // percentage
  highlight?: boolean;
}

export const MapNorthQueensland: React.FC = () => {
  const [selectedTown, setSelectedTown] = useState<string | null>(null);

  const towns: TownPin[] = [
    { id: 'townsville', name: 'Townsville', region: 'Headquarters & Surrounds', x: 68, y: 52, highlight: true },
    { id: 'ayr', name: 'Ayr', region: 'Burdekin Region', x: 74, y: 64 },
    { id: 'ingham', name: 'Ingham', region: 'Hinchinbrook Region', x: 65, y: 41 },
    { id: 'charters-towers', name: 'Charters Towers', region: 'Historic Goldfields', x: 57, y: 62 },
    { id: 'mareeba', name: 'Mareeba', region: 'Atherton Tablelands', x: 55, y: 22 },
    { id: 'mount-isa', name: 'Mount Isa', region: 'North West Queensland', x: 18, y: 56 },
  ];

  return (
    <div className="relative w-full h-[380px] sm:h-[440px] md:h-[480px] bg-[#E9F3F1] border-2 border-dashed border-[#0B5563]/40 rounded-3xl p-4 sm:p-6 overflow-hidden flex flex-col justify-between shadow-inner">
      {/* Background Graphic: Styled Coastal & Inland Geography */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-40"
        viewBox="0 0 500 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Coral Sea Water Tint */}
        <path
          d="M320,0 C360,70 380,140 400,220 C420,300 450,340 500,400 L500,0 Z"
          fill="#C8E6E2"
          opacity="0.6"
        />
        {/* Stylized Coastline */}
        <path
          d="M260,0 Q320,100 340,160 Q360,220 375,270 Q390,320 440,400"
          stroke="#0B5563"
          strokeWidth="3"
          strokeDasharray="6 4"
        />
        {/* Route Connecting Lines */}
        <path
          d="M100,230 L280,250 L340,210 L370,255"
          stroke="#F4A62A"
          strokeWidth="2.5"
          strokeDasharray="4 4"
          opacity="0.8"
        />
        <path
          d="M275,90 L325,165 L340,210"
          stroke="#F4A62A"
          strokeWidth="2.5"
          strokeDasharray="4 4"
          opacity="0.8"
        />
      </svg>

      {/* Header Badge */}
      <div className="relative z-10 flex items-center justify-between">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-[#0B5563]/20 shadow-sm text-xs font-bold text-[#0A3D47]">
          <Sparkles className="w-3.5 h-3.5 text-[#F4A62A]" />
          <span>Map of North Queensland</span>
        </div>
        <span className="text-[11px] font-semibold text-[#0B5563]/80 bg-white/70 px-2.5 py-1 rounded-md">
          6 Regional Service Hubs
        </span>
      </div>

      {/* Pins Layer */}
      <div className="relative flex-1 w-full my-2">
        {towns.map((town) => {
          const isSelected = selectedTown === town.id;
          return (
            <div
              key={town.id}
              style={{ left: `${town.x}%`, top: `${town.y}%` }}
              className="absolute -translate-x-1/2 -translate-y-1/2 z-20 group cursor-pointer"
              onClick={() => setSelectedTown(isSelected ? null : town.id)}
              onMouseEnter={() => setSelectedTown(town.id)}
              onMouseLeave={() => setSelectedTown(null)}
            >
              {/* Pulse animation for Townsville HQ */}
              {town.highlight && (
                <span className="absolute -inset-2 rounded-full bg-[#F4A62A]/40 animate-ping pointer-events-none" />
              )}

              {/* Pin Icon */}
              <div
                className={`relative flex items-center justify-center rounded-full transition-all duration-300 shadow-md ${
                  town.highlight
                    ? 'w-10 h-10 bg-[#F4A62A] text-[#1E2B30] ring-4 ring-white'
                    : isSelected
                    ? 'w-9 h-9 bg-[#0A3D47] text-white ring-2 ring-white scale-110'
                    : 'w-7 h-7 bg-white text-[#0B5563] border-2 border-[#0B5563] hover:scale-110'
                }`}
              >
                <MapPin className={`${town.highlight ? 'w-5 h-5' : 'w-4 h-4'} fill-current`} />
              </div>

              {/* Town Label Pill */}
              <div
                className={`absolute left-1/2 -translate-x-1/2 top-full mt-1.5 whitespace-nowrap px-2.5 py-1 rounded-full text-xs font-bold transition-all duration-200 pointer-events-none shadow-sm ${
                  town.highlight || isSelected
                    ? 'bg-[#0A3D47] text-white ring-1 ring-white/50 z-30'
                    : 'bg-white/95 text-[#1E2B30] border border-[#0B5563]/20'
                }`}
              >
                {town.name}
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer Legend */}
      <div className="relative z-10 bg-white/90 backdrop-blur-sm p-3 rounded-2xl border border-[#0B5563]/15 text-xs text-[#1E2B30] flex flex-col sm:flex-row items-center justify-between gap-2 shadow-sm">
        <span className="font-semibold text-[#0A3D47]">
          {selectedTown
            ? `Selected: ${towns.find((t) => t.id === selectedTown)?.name} (${towns.find((t) => t.id === selectedTown)?.region})`
            : 'Pins on Townsville, Ayr, Ingham, Charters Towers, Mareeba and Mount Isa'}
        </span>
        <span className="text-[11px] text-[#0B5563] font-bold">
          Local workers live &amp; work in each community
        </span>
      </div>
    </div>
  );
};
