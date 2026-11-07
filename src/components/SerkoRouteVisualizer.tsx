import React, { useState } from 'react';
import { MapPin, Activity, Stethoscope, Clock, ShieldCheck, Phone, ArrowRight, Sparkles } from 'lucide-react';

interface RouteNode {
  id: string;
  name: string;
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
      name: 'Townsville Central Hub',
      type: 'Clinical Headquarters & Hospital Transitions',
      timeframe: '24–48h Immediate Response',
      services: ['Registered Nursing Care', '2-Week FCA Assessments', '1 & 2-Bed Ready Units'],
      x: 50,
      y: 45
    },
    {
      id: 'kirwan',
      name: 'Kirwan & Thuringowa',
      type: 'Daily Community Nursing & Home Maintenance',
      timeframe: 'Daily Scheduled Rounds',
      services: ['Subcutaneous Medication', 'Wound Dressings', 'Lawn & Yard Care'],
      x: 32,
      y: 52
    },
    {
      id: 'burdell',
      name: 'Burdell & Northern Beaches',
      type: 'Independent Living & Domestic Cleaning',
      timeframe: 'Same-Day Dispatch Available',
      services: ['Domestic House Cleaning', 'Personal Care', 'High Pressure Washing'],
      x: 42,
      y: 28
    },
    {
      id: 'ingham',
      name: 'Ingham Regional Corridor',
      type: 'Regional Allied Health & Nurse Reviews',
      timeframe: 'Weekly Scheduled Clinical Days',
      services: ['Occupational Therapy', 'Physiotherapy Plans', 'VHC Gardening'],
      x: 20,
      y: 18
    },
    {
      id: 'charters-towers',
      name: 'Charters Towers Hinterland',
      type: 'Aged Care Reviews & Comprehensive Assessments',
      timeframe: 'Weekly Outpatient & Home Visits',
      services: ['Continence Assessments', 'Enteral PEG Feeding', 'NDIS Support'],
      x: 18,
      y: 78
    },
    {
      id: 'douglas',
      name: 'Douglas & University Corridor',
      type: 'Allied Health Assessments & Complex Care',
      timeframe: 'Priority Hospital Discharge Route',
      services: ['Clinical Consultations', 'OT Home Modifications', 'Catheter Care'],
      x: 68,
      y: 62
    }
  ];

  const activeNode = nodes.find((n) => n.id === activeNodeId) || nodes[0];

  return (
    <div className="rounded-3xl bg-[#09221C] border border-[#164E43]/40 text-white p-6 sm:p-10 shadow-2xl relative overflow-hidden my-12">
      
      {/* Background Subtle Coordinate Grid */}
      <div className="absolute inset-0 pattern-grid-dark opacity-35 pointer-events-none" />
      <div className="absolute inset-0 bg-radial-gradient from-[#164E43]/30 via-transparent to-transparent pointer-events-none" />

      {/* Header telemetry strip */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4A359]/20 border border-[#D4A359]/40 text-xs font-bold text-[#E5B56A] mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Regional Clinical Network</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Live Healthcare Dispatch Corridors
          </h3>
          <p className="text-xs sm:text-sm text-teal-100/80 mt-1 max-w-xl">
            Click on any regional node to simulate clinician dispatch routes, turnaround windows, and service capacity across North Queensland.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/10 border border-white/15 text-xs font-semibold text-emerald-200">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>All Corridors Active</span>
          </span>
          <a
            href="tel:0431430905"
            className="btn-press inline-flex items-center gap-2 bg-[#D4A359] hover:bg-[#C28F42] text-[#09221C] font-bold text-xs px-4 py-2 rounded-xl transition-all shadow-md"
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

            {/* Connection lines from central hub (50, 45) to all nodes */}
            {nodes.filter(n => n.id !== 'townsville').map((n) => (
              <g key={`line-${n.id}`}>
                <line
                  x1="50"
                  y1="45"
                  x2={n.x}
                  y2={n.y}
                  stroke="rgba(255, 255, 255, 0.15)"
                  strokeWidth="0.8"
                  strokeDasharray="2 2"
                />
                {activeNodeId === n.id && (
                  <line
                    x1="50"
                    y1="45"
                    x2={n.x}
                    y2={n.y}
                    stroke="url(#routeGlow)"
                    strokeWidth="1.8"
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
                  <span className="absolute -inset-3 rounded-full bg-[#D4A359]/30 node-pulse-ripple pointer-events-none" />
                )}

                {/* Node Button */}
                <div className={`p-2 rounded-xl transition-all duration-300 flex items-center gap-2 border shadow-lg ${
                  isNodeActive
                    ? 'bg-[#D4A359] text-[#09221C] border-white scale-110 font-bold'
                    : 'bg-[#0E352D]/90 text-teal-100 hover:text-white hover:bg-[#164E43] border-white/20'
                }`}>
                  <MapPin className={`w-3.5 h-3.5 ${isNodeActive ? 'text-[#09221C]' : 'text-[#D4A359]'}`} />
                  <span className="text-[10px] sm:text-[11px] whitespace-nowrap font-medium pr-1">
                    {n.name.split(' ')[0]}
                  </span>
                </div>
              </button>
            );
          })}

          {/* Map Compass Watermark */}
          <div className="absolute bottom-3 left-3 text-[10px] uppercase font-mono tracking-widest text-teal-200/50 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>North Queensland Service Grid · Townsville Coordinates</span>
          </div>

        </div>

        {/* Right Column (5 cols): Live Route Telemetry Card */}
        <div className="lg:col-span-5 bg-white/[0.06] backdrop-blur-md border border-white/15 p-6 rounded-2xl space-y-4 shadow-xl">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <span className="text-[10px] font-mono uppercase tracking-widest font-bold text-[#E5B56A]">
              Active Corridor Telemetry
            </span>
            <span className="px-2.5 py-0.5 rounded-md bg-emerald-400/20 text-emerald-300 text-[10px] font-bold border border-emerald-400/30">
              Live
            </span>
          </div>

          <div>
            <h4 className="text-xl font-bold text-white tracking-tight">
              {activeNode.name}
            </h4>
            <p className="text-xs text-teal-200/90 font-medium mt-0.5">
              {activeNode.type}
            </p>
          </div>

          {/* Timeframe pill */}
          <div className="p-3 rounded-xl bg-white/[0.05] border border-white/10 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#D4A359]/20 text-[#E5B56A] flex items-center justify-center flex-shrink-0">
              <Clock className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-wider text-teal-200/70 block font-semibold">
                Turnaround SLA:
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
                  <Activity className="w-3.5 h-3.5 text-[#E5B56A] flex-shrink-0" />
                  <span className="font-medium">{svc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Direct Callback CTA for this corridor */}
          <div className="pt-2">
            <a
              href="#top"
              className="btn-press w-full inline-flex items-center justify-center gap-2 bg-[#164E43] hover:bg-[#0E352D] text-white font-bold text-xs py-3 rounded-xl shadow-md border border-[#D4A359]/30 transition-all group"
            >
              <span>Dispatch Request for {activeNode.name.split(' ')[0]}</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#E5B56A] transition-transform group-hover:translate-x-1" />
            </a>
          </div>

        </div>

      </div>

    </div>
  );
};
