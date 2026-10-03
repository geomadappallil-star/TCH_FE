import React from 'react';
import { Phone, Sparkles, ShieldCheck } from 'lucide-react';

export const MaintenanceNavbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 glass-nav bg-[#F6F4EE]/90 backdrop-blur-xl border-b border-teal/15 shadow-sm">
      {/* Top micro-bar for credibility */}
      <div className="hidden md:block bg-gradient-to-r from-teal-900 via-teal-800 to-teal-900 text-teal-100 text-xs py-1.5 px-4 font-sans">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 text-gold">
              <Sparkles className="w-3.5 h-3.5" /> Locally Owned &amp; Based in Townsville
            </span>
            <span className="text-teal-400">|</span>
            <span>Self-Managed &amp; Plan-Managed NDIS Welcome</span>
            <span className="text-teal-400">|</span>
            <span className="flex items-center gap-1 text-sage-200">
              <ShieldCheck className="w-3.5 h-3.5 text-sage-pale" /> AHPRA Verified RNs &amp; Screened Local Crews
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs font-medium">
            <span>Direct Coordinator Hotline:</span>
            <a href="tel:0431430905" className="text-white hover:text-gold transition-colors font-bold">
              0431 430 905
            </a>
          </div>
        </div>
      </div>

      {/* Main Glass Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo & Name */}
          <a href="#" className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-gold rounded-lg p-1">
            <div className="w-10 h-10 relative flex-shrink-0">
              <svg viewBox="0 0 96 104.5" className="w-full h-full drop-shadow-sm transition-transform duration-300 group-hover:scale-105" aria-hidden="true">
                <path fill="#E3A83B" d="M51.01 12.6c0 3.85-5.78 3.85-5.78 0s5.78-3.85 5.78 0z"/>
                <path stroke="#E3A83B" strokeWidth="2.17" strokeLinecap="round" fill="none" d="M42.35 8.27 38.73 3.93"/>
                <path stroke="#E3A83B" strokeWidth="2.17" strokeLinecap="round" fill="none" d="M53.90 8.27 57.51 3.93"/>
                <path fill="#0E6E64" d="M48.13 83.38C22.85 63.52 2.99 47.27 2.99 27.41c0-12.64 10.83-21.67 23.47-21.67 9.03 0 16.25 5.42 21.67 14.44z"/>
                <path fill="#8FAE7D" d="M48.13 20.18c5.42-9.02 12.63-14.44 21.66-14.44 12.64 0 23.47 9.03 23.47 21.67 0 19.86-19.86 36.11-45.13 55.97z"/>
                <path stroke="#E3A83B" strokeWidth="7.94" strokeLinecap="round" fill="none" d="M19.96 87.72c18.87 14.03 37.73 14.03 56.6 0"/>
              </svg>
            </div>
            <div>
              <span className="block font-sans font-bold text-lg leading-tight text-teal-900 group-hover:text-teal tracking-tight">
                TCH Support Services
              </span>
              <span className="block font-sans text-[11px] font-semibold uppercase tracking-wider text-sage-700">
                Nursing · Home &amp; Yard · Staffing
              </span>
            </div>
          </a>

          {/* Service Status Notice */}
          <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/70 border border-teal/15 text-xs font-sans text-teal-900">
            <span className="w-2 h-2 rounded-full bg-teal animate-pulse"></span>
            <span className="font-semibold">All In-Home Services &amp; Shift Rosters Operational</span>
          </div>

          {/* Direct Phone Call Button */}
          <div className="flex items-center gap-3">
            <a
              href="tel:0431430905"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-teal to-teal-deep text-white font-sans font-semibold text-sm px-4 py-2.5 rounded-full shadow-glass-teal hover:shadow-lg hover:from-teal-deep hover:to-teal transition-all duration-200 hover:-translate-y-0.5"
            >
              <Phone className="w-4 h-4 text-gold" />
              <span>0431 430 905</span>
            </a>
          </div>

        </div>
      </div>
    </header>
  );
};
