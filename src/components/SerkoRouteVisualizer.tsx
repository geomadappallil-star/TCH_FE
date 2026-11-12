import React, { useState } from 'react';
import { MapPin, Activity, Stethoscope, Clock, ShieldCheck, Phone, ArrowRight, Sparkles } from 'lucide-react';

interface RouteNode {
  id: string;
  name: string;
  region: string;
  type: string;
  timeframe: string;
  services: string[];
  x: number; // percentage
  y: number; // percentage
}

export const SerkoRouteVisualizer: React.FC = () => {
  const [activeNodeId, setActiveNodeId] = useState<string>('townsville');

  const nodes: RouteNode[] = [
    {
      id: 'townsville',
      name: 'Townsville Central Base',
      region: 'Townsville & Surrounding Suburbs',
      type: 'Clinical Headquarters & Hospital Transitions',
      timeframe: 'Immediate 24–48h Intake',
      services: ['Registered Clinical Nursing', '2-Week FCA Reports', '1 & 2-Bed Units Ready', 'Cleaning & Gardening'],
      x: 55,
      y: 50
    },
    {
      id: 'ayr',
      name: 'Ayr & Burdekin',
      region: 'Burdekin Agricultural & Coastal Region',
      type: 'Local Support Workers & In-Home Nursing',
      timeframe: 'Daily Local Support Rounds',
      services: ['Personal Care & Daily Living', 'Clinical Nursing Care', 'Yard Maintenance', 'Community Access'],
      x: 72,
      y: 65
    },
    {
      id: 'ingham',
      name: 'Ingham & Hinchinbrook',
      region: 'Hinchinbrook Sugar Cane Corridor',
      type: 'Regional Allied Health & Clinical Reviews',
      timeframe: 'Weekly Scheduled Rounds',
      services: ['Occupational Therapy', 'Physiotherapy Mobility', 'Personal Care', 'Domestic Housekeeping'],
      x: 45,
      y: 36
    },
    {
      id: 'charters-towers',
      name: 'Charters Towers',
      region: 'Flinders Highway Hinterland & Heritage City',
      type: 'Rural Care & Comprehensive Health Reviews',
      timeframe: 'Scheduled Outpatient & Home Visits',
      services: ['Continence Assessments', 'Complex Wound Care', 'NDIS Support Work', 'Yard Maintenance'],
      x: 38,
      y: 72
    },
    {
      id: 'mareeba',
      name: 'Mareeba & Tablelands',
      region: 'Atherton Tablelands Agricultural Hub',
      type: 'In-Home Nursing & Therapy Outreach',
      timeframe: 'Scheduled Regional Visits',
      services: ['Allied Health Therapies', 'Aged Care & HCP Support', 'Personal Care', 'Community Connection'],
      x: 36,
      y: 20
    },
    {
      id: 'mount-isa',
      name: 'Mount Isa',
      region: 'North-West Queensland Outback Community',
      type: 'Remote Mining & Community Support Network',
      timeframe: 'Dedicated Local Support Team',
      services: ['NDIS Daily Living Support', 'Clinical Nursing Oversight', 'Community Outings', 'Domestic Support'],
      x: 12,
      y: 62
    }
  ];

  const activeNode = nodes.find((n) => n.id === activeNodeId) || nodes[0];

  return (
    <div className="rounded-3xl bg-gradient-to-br from-[#0B4F51] via-[#073B3C] to-[#042627] text-white p-6 sm:p-10 shadow-2xl relative overflow-hidden my-12 border border-white/15">
      
      {/* Background Subtle Coordinate Grid */}
      <div className="absolute inset-0 pattern-grid-dark opacity-35 pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-radial-gradient from-[#F9B835]/15 via-transparent to-transparent pointer-events-none" />

      {/* Header telemetry strip */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F9B835]/20 border border-[#F9B835]/40 text-xs font-bold text-[#F9B835] mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive North Queensland Service Grid</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            6 Regional Healthcare Dispatch Corridors
          </h3>
          <p className="text-xs sm:text-sm text-teal-100/90 mt-1 max-w-xl font-sans">
            Click on any regional town to simulate local clinician dispatch routes, turnaround windows, and active capabilities across North Queensland.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-semibold text-emerald-200">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>All 6 Regions Active</span>
          </span>
          <a
            href="tel:0431430905"
            className="ats-button bg-[#F9B835] hover:bg-[#ffc657] text-[#2B2822] font-bold text-xs shadow-md"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>0431 430 905</span>
          </a>
        </div>
      </div>

      {/* Main Interactive Stage: SVG Route Map + Live Inspection Telemetry */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
        
        {/* Left Column (7 cols): Interactive Regional Canvas */}
        <div className="lg:col-span-7 relative aspect-[16/10] bg-[#061713] rounded-2xl border border-white/15 overflow-hidden p-4 shadow-inner">
          
          {/* SVG Animated Route Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <linearGradient id="routeGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#D4A359" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#25A28A" stopOpacity="0.4" />
              </linearGradient>
            </defs>

            {/* Connection lines from central hub (55, 50) to all nodes */}
            {nodes.filter(n => n.id !== 'townsville').map((n) => (
              <g key={`line-${n.id}`}>
                <line
                  x1="55"
                  y1="50"
                  x2={n.x}
                  y2={n.y}
                  stroke="rgba(255, 255, 255, 0.2)"
                  strokeWidth="0.8"
                  strokeDasharray="2 2"
                />
                {activeNodeId === n.id && (
                  <line
                    x1="55"
                    y1="50"
                    x2={n.x}
                    y2={n.y}
                    stroke="url(#routeGlow)"
                    strokeWidth="2"
                    className="animate-pulse"
                  />
                )}
              </g>
            ))}
          </svg>

          {/* Interactive Geographic Nodes */}
          {nodes.map((n) => {
            const isNodeActive = activeNodeId === n.id;
            return (
              <button
                key={n.id}
                type="button"
                onClick={() => setActiveNodeId(n.id)}
                style={{ left: `${n.x}%`, top: `${n.y}%` }}
                className="absolute -translate-x-1/2 -translate-y-1/2 group focus:outline-none z-20"
                aria-label={`Select ${n.name}`}
              >
                {/* Ripple ring for active node */}
                {isNodeActive && (
                  <span className="absolute -inset-3 rounded-full bg-[#F9B835]/30 node-pulse-ripple pointer-events-none" />
                )}

                {/* Node Button */}
                <div className={`px-2.5 py-1.5 rounded-full transition-all duration-300 flex items-center gap-1.5 border shadow-lg ${
                  isNodeActive
                    ? 'bg-[#F9B835] text-[#2B2822] border-white scale-110 font-bold'
                    : 'bg-[#0B4F51]/95 text-teal-100 hover:text-white hover:bg-[#073B3C] border-white/20'
                }`}>
                  <MapPin className={`w-3.5 h-3.5 ${isNodeActive ? 'text-[#2B2822]' : 'text-[#F9B835]'}`} />
                  <span className="text-[10px] sm:text-[11px] whitespace-nowrap font-medium pr-0.5">
                    {n.name.split(' ')[0]}
                  </span>
                </div>
              </button>
            );
          })}

          {/* Map Compass Watermark */}
          <div className="absolute bottom-3 left-3 text-[10px] uppercase font-mono tracking-widest text-teal-200/60 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>North Queensland Service Grid · Townsville Coordinates</span>
          </div>

        </div>

        {/* Right Column (5 cols): Live Route Telemetry Card */}
        <div className="lg:col-span-5 bg-white/[0.08] backdrop-blur-md border border-white/20 p-6 sm:p-7 rounded-3xl space-y-4 shadow-xl">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <span className="text-[10px] font-mono uppercase tracking-widest font-bold text-[#F9B835]">
              Active Corridor Telemetry
            </span>
            <span className="px-2.5 py-0.5 rounded-full bg-emerald-400/20 text-emerald-300 text-[10px] font-bold border border-emerald-400/30">
              Live &amp; Staffed
            </span>
          </div>

          <div>
            <h4 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {activeNode.name}
            </h4>
            <p className="text-xs text-[#F9B835] font-semibold mt-0.5">
              {activeNode.region}
            </p>
            <p className="text-xs text-teal-100/90 font-medium mt-1">
              {activeNode.type}
            </p>
          </div>

          {/* Timeframe pill */}
          <div className="p-3 rounded-2xl bg-white/[0.06] border border-white/10 flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-[#F9B835]/20 text-[#F9B835] flex items-center justify-center flex-shrink-0">
              <Clock className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-wider text-teal-200/70 block font-semibold">
                Turnaround Response SLA:
              </span>
              <span className="text-xs font-bold text-white">
                {activeNode.timeframe}
              </span>
            </div>
          </div>

          {/* Deployed Clinical Capabilities */}
          <div>
            <span className="text-[10px] uppercase tracking-wider text-teal-200/70 block font-semibold mb-2">
              Capabilities On Duty:
            </span>
            <div className="space-y-1.5">
              {activeNode.services.map((svc, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-white">
                  <Activity className="w-3.5 h-3.5 text-[#94C08E] flex-shrink-0" />
                  <span className="font-medium font-sans">{svc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Direct Callback CTA for this corridor */}
          <div className="pt-2">
            <a
              href="#referral"
              className="ats-button w-full inline-flex items-center justify-center gap-2 bg-[#EF85AA] hover:bg-[#f29ab7] text-[#590925] font-bold text-xs py-3.5 shadow-md border border-[#590925]/20 transition-all group"
            >
              <span>Dispatch Request for {activeNode.name.split(' ')[0]}</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

        </div>

      </div>

    </div>
  );
};
