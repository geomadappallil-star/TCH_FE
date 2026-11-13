import React, { useState } from 'react';
import { MapPin, Phone, CheckCircle2, Navigation, ShieldCheck, ArrowRight } from 'lucide-react';

export interface ServiceArea {
  id: string;
  name: string;
  sub: string;
  x: number; // SVG coordinate
  y: number;
  highlight?: boolean;
  services: string[];
  suburbs: string;
}

export const NORTH_QLD_HUBS: ServiceArea[] = [
  {
    id: 'townsville',
    name: 'Townsville',
    sub: 'Townsville and surrounding suburbs',
    x: 395,
    y: 205,
    highlight: true,
    services: ['Clinical Nursing', '2-Week FCA', 'Allied Health', '1 & 2-Bed Units', 'Cleaning & Gardening'],
    suburbs: 'North Ward, Annandale, Kirwan, Douglas, Kelso & Magnetic Island'
  },
  {
    id: 'ayr',
    name: 'Ayr',
    sub: 'Burdekin region',
    x: 440,
    y: 245,
    services: ['NDIS Supports', 'Personal Care', 'Home Maintenance', 'Community Access'],
    suburbs: 'Ayr, Home Hill, Brandon & Burdekin Delta'
  },
  {
    id: 'ingham',
    name: 'Ingham',
    sub: 'Hinchinbrook region',
    x: 360,
    y: 160,
    services: ['In-Home Care', 'Clinical Nursing', 'Yard Care', 'Daily Living Support'],
    suburbs: 'Ingham, Halifax, Lucinda & Forrest Beach'
  },
  {
    id: 'charters-towers',
    name: 'Charters Towers',
    sub: 'Charters Towers and surrounds',
    x: 315,
    y: 250,
    services: ['Community Access', 'Personal Care', 'Support Workers', 'Domestic Help'],
    suburbs: 'Charters Towers, Columbia, Millchester & rural pastoral properties'
  },
  {
    id: 'mareeba',
    name: 'Mareeba',
    sub: 'Atherton Tablelands',
    x: 300,
    y: 85,
    services: ['Support Workers', 'Daily Living', 'Community Outings', 'In-Home Help'],
    suburbs: 'Mareeba, Kuranda, Atherton & Tablelands region'
  },
  {
    id: 'mount-isa',
    name: 'Mount Isa',
    sub: 'North West Queensland',
    x: 80,
    y: 220,
    services: ['Remote Support Work', 'Personal Care', 'Social Participation', 'Home Living'],
    suburbs: 'Mount Isa, Cloncurry corridor & surrounding outback communities'
  }
];

interface MapProps {
  selectedHubId?: string;
  onSelectHub?: (id: string) => void;
}

export const InteractiveNorthQldMap: React.FC<MapProps> = ({
  selectedHubId = 'townsville',
  onSelectHub
}) => {
  const [activeId, setActiveId] = useState<string>(selectedHubId);

  const currentHub = NORTH_QLD_HUBS.find(h => h.id === (selectedHubId || activeId)) || NORTH_QLD_HUBS[0];

  const handleMarkerClick = (id: string) => {
    setActiveId(id);
    if (onSelectHub) {
      onSelectHub(id);
    }
  };

  return (
    <div className="glass-panel p-5 sm:p-7 border-2 border-[#7FB7B0]/40 bg-[#D6EBE8]/40 shadow-xl flex flex-col justify-between gap-5 overflow-hidden relative">
      
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[#0B5563]/15 pb-3">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-[#0B5563] text-white flex items-center justify-center shadow-xs">
            <Navigation className="w-5 h-5 text-[#F4A62A]" />
          </div>
          <div>
            <h3 className="font-heading font-extrabold text-lg sm:text-xl text-[#0A3D47] leading-tight">
              North Queensland Footprint
            </h3>
            <p className="text-xs text-[#3D6B70] font-semibold">
              Active local care teams stationed across regional Queensland
            </p>
          </div>
        </div>
        <span className="hidden sm:inline-flex px-3 py-1 rounded-full bg-white/80 text-[11px] font-bold text-[#0B5563] border border-teal-200">
          Interactive Map
        </span>
      </div>

      {/* Interactive SVG Vector Map of North QLD */}
      <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] bg-[#CBE5E1]/60 rounded-2xl overflow-hidden border border-[#A5CECA] shadow-inner">
        
        {/* Ocean Waves Pattern */}
        <div 
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#0B5563 0.75px, transparent 0.75px)`,
            backgroundSize: '16px 16px'
          }}
        />

        <svg
          viewBox="0 0 520 360"
          className="w-full h-full select-none"
          aria-label="Interactive map of North Queensland service hubs"
        >
          <defs>
            {/* Filter for glowing markers */}
            <filter id="map-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#0A3D47" floodOpacity="0.25" />
            </filter>
            <filter id="pin-glow" x="-30%" y="-30%" width="160%" height="160%">
              <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#F4A62A" floodOpacity="0.5" />
            </filter>
          </defs>

          {/* Queensland Continental Landmass Silhouette */}
          <path
            d="
              M 0,360 
              L 0,60 
              Q 50,60 120,70 
              Q 200,85 240,65
              Q 260,20 280,0
              L 330,0
              Q 325,45 330,80
              Q 340,115 365,145
              Q 380,175 400,200
              Q 425,225 450,250
              Q 470,270 480,310
              Q 490,340 520,360
              Z
            "
            fill="#F6F0E4"
            stroke="#9ECBC6"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />

          {/* Coral Sea / Pacific Ocean Label */}
          <text x="440" y="70" fill="#3D6B70" fontSize="11" fontWeight="700" letterSpacing="1.5" opacity="0.6">
            CORAL SEA
          </text>
          <text x="430" y="85" fill="#3D6B70" fontSize="9" fontWeight="600" letterSpacing="1" opacity="0.5">
            Great Barrier Reef
          </text>

          {/* Outback Label */}
          <text x="35" y="320" fill="#8FA89B" fontSize="11" fontWeight="700" letterSpacing="1.5" opacity="0.6">
            NORTH WEST OUTBACK
          </text>

          {/* Route Connection Networks from Townsville Hub */}
          {/* Flinders Highway: Townsville -> Charters Towers -> Mount Isa */}
          <path
            d="M 395,205 L 315,250 L 80,220"
            fill="none"
            stroke="#F4A62A"
            strokeWidth="2.5"
            strokeDasharray="4 4"
            opacity="0.8"
          />
          {/* Bruce Highway North: Townsville -> Ingham -> Mareeba */}
          <path
            d="M 395,205 L 360,160 L 300,85"
            fill="none"
            stroke="#0B5563"
            strokeWidth="2"
            strokeDasharray="4 4"
            opacity="0.75"
          />
          {/* Bruce Highway South: Townsville -> Ayr */}
          <path
            d="M 395,205 L 440,245"
            fill="none"
            stroke="#0B5563"
            strokeWidth="2"
            strokeDasharray="4 4"
            opacity="0.75"
          />

          {/* Hub Markers */}
          {NORTH_QLD_HUBS.map((hub) => {
            const isSelected = hub.id === currentHub.id;
            return (
              <g
                key={hub.id}
                transform={`translate(${hub.x}, ${hub.y})`}
                className="cursor-pointer transition-all duration-300"
                onClick={() => handleMarkerClick(hub.id)}
              >
                {/* Pulsing ring for active or HQ pin */}
                {(isSelected || hub.highlight) && (
                  <circle
                    r={isSelected ? 18 : 14}
                    fill={isSelected ? '#F4A62A' : '#0B5563'}
                    opacity={isSelected ? 0.35 : 0.2}
                    className="animate-ping"
                  />
                )}

                {/* Outer shadow aura */}
                <circle
                  r={isSelected ? 14 : 10}
                  fill={isSelected ? '#F4A62A' : '#0B5563'}
                  opacity={isSelected ? 0.3 : 0.15}
                />

                {/* Core Marker Pin */}
                <circle
                  r={isSelected ? 9 : 6.5}
                  fill={isSelected ? '#F4A62A' : (hub.highlight ? '#0B5563' : '#0A3D47')}
                  stroke="#ffffff"
                  strokeWidth={isSelected ? 2.5 : 2}
                  filter={isSelected ? 'url(#pin-glow)' : 'url(#map-glow)'}
                />

                {/* Inner White Core for HQ */}
                {hub.highlight && (
                  <circle r={isSelected ? 3.5 : 2.5} fill="#ffffff" />
                )}

                {/* Location Name Label */}
                <g transform={`translate(0, ${isSelected ? -16 : -12})`}>
                  <rect
                    x={-((hub.name.length * 6.5) / 2 + 6)}
                    y="-10"
                    width={hub.name.length * 6.5 + 12}
                    height="16"
                    rx="8"
                    fill={isSelected ? '#0A3D47' : 'rgba(255, 255, 255, 0.92)'}
                    stroke={isSelected ? '#F4A62A' : 'rgba(11, 85, 99, 0.25)'}
                    strokeWidth={isSelected ? 1.5 : 1}
                  />
                  <text
                    y="2"
                    textAnchor="middle"
                    fill={isSelected ? '#ffffff' : '#0A3D47'}
                    fontSize="9.5"
                    fontWeight="800"
                    fontFamily="Outfit, sans-serif"
                  >
                    {hub.name}
                  </text>
                </g>
              </g>
            );
          })}
        </svg>

        {/* Compass rose in top-left */}
        <div className="absolute top-3 left-3 px-2 py-1 rounded-lg bg-white/70 backdrop-blur-xs text-[10px] font-bold text-[#0A3D47] flex items-center gap-1 border border-white/60">
          <span>🧭 North QLD</span>
        </div>
      </div>

      {/* Selected Hub Interactive Details Card */}
      <div className="bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-white shadow-md text-left transition-all">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-gray-100 pb-2 mb-2.5">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#F4A62A]" />
            <h4 className="font-heading font-extrabold text-base text-[#0A3D47]">
              {currentHub.name} Hub
            </h4>
            <span className="text-[11px] font-bold text-[#0B5563] bg-[#E3F1F1] px-2 py-0.5 rounded-full">
              {currentHub.sub}
            </span>
          </div>

          <a 
            href="tel:0431430905" 
            className="text-xs font-bold text-[#0B5563] hover:text-[#F4A62A] flex items-center gap-1"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>0431 430 905</span>
          </a>
        </div>

        <p className="text-xs text-[#4A5A60] mb-2.5">
          <strong>Key Coverage:</strong> {currentHub.suburbs}
        </p>

        {/* Services Badges in Selected Hub */}
        <div className="flex flex-wrap gap-1.5">
          {currentHub.services.map((service, sIdx) => (
            <span 
              key={sIdx}
              className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-[#FBF5EA] text-[#0A3D47] border border-[#EADFCB]"
            >
              ✓ {service}
            </span>
          ))}
        </div>
      </div>

      {/* Quick Select Buttons */}
      <div className="flex flex-wrap gap-1.5 justify-center">
        {NORTH_QLD_HUBS.map((hub) => (
          <button
            key={hub.id}
            type="button"
            onClick={() => handleMarkerClick(hub.id)}
            className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
              hub.id === currentHub.id
                ? 'bg-[#0B5563] text-white shadow-sm'
                : 'bg-white/80 hover:bg-white text-[#0A3D47] border border-teal-100'
            }`}
          >
            📍 {hub.name}
          </button>
        ))}
      </div>

      <p className="text-xs text-[#3D6B70] text-center italic">
        Locals supporting locals throughout coastal and rural QLD.
      </p>

    </div>
  );
};
