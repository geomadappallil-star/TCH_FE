import React from 'react';
import { Phone, Mail, MapPin, Heart, ShieldAlert, Facebook, Sparkles, Building2 } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#071F1A] text-teal-100/80 pt-16 pb-14 border-t border-white/10 font-sans text-xs sm:text-sm relative overflow-hidden">
      
      {/* Subtle Pattern */}
      <div className="absolute inset-0 pattern-grid-dark opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Acknowledgement of Country Banner */}
        <div className="mb-12 p-6 sm:p-7 rounded-3xl bg-white/[0.05] border border-white/10 text-teal-100 text-xs sm:text-sm leading-relaxed">
          <div className="flex items-center gap-2 text-[#F9B835] font-bold uppercase tracking-wider text-xs mb-2">
            <Sparkles className="w-4 h-4" />
            <span>Acknowledgement of Country</span>
          </div>
          <p className="font-sans text-teal-100/90">
            TCH Support Services acknowledges the Traditional Custodians of the lands on which we live and work across North Queensland, including the Bindal and Wulgurukaba peoples of the Townsville region. We pay our respects to Elders past, present and emerging, and recognise their continuing connection to land, waters and community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 relative flex-shrink-0">
                <svg viewBox="0 0 96 104.5" className="w-full h-full" aria-hidden="true">
                  <path fill="#F9B835" d="M51.01 12.6c0 3.85-5.78 3.85-5.78 0s5.78-3.85 5.78 0z"/>
                  <path stroke="#F9B835" strokeWidth="2.17" strokeLinecap="round" fill="none" d="M42.35 8.27 38.73 3.93"/>
                  <path stroke="#F9B835" strokeWidth="2.17" strokeLinecap="round" fill="none" d="M53.90 8.27 57.51 3.93"/>
                  <path fill="#0B4F51" d="M48.13 83.38C22.85 63.52 2.99 47.27 2.99 27.41c0-12.64 10.83-21.67 23.47-21.67 9.03 0 16.25 5.42 21.67 14.44z"/>
                  <path fill="#94C08E" d="M48.13 20.18c5.42-9.02 12.63-14.44 21.66-14.44 12.64 0 23.47 9.03 23.47 21.67 0 19.86-19.86 36.11-45.13 55.97z"/>
                  <path stroke="#F9B835" strokeWidth="7.94" strokeLinecap="round" fill="none" d="M19.96 87.72c18.87 14.03 37.73 14.03 56.6 0"/>
                </svg>
              </div>
              <div>
                <span className="block font-bold text-lg text-white">TCH Support Services</span>
                <span className="block text-xs uppercase tracking-wider text-[#94C08E] font-semibold">Townsville Community Health</span>
              </div>
            </div>

            <p className="text-teal-200/90 text-xs sm:text-sm leading-relaxed max-w-sm font-sans">
              Locally owned, deeply rooted in North Queensland. Delivering high-standard clinical nursing, allied health therapies, home &amp; yard care, and 1 &amp; 2-bedroom units.
            </p>

            <div className="pt-2 text-xs text-teal-300 font-sans">
              <span className="block font-bold text-white">Emergency Notice:</span>
              <span>If you or someone in your care is experiencing a life-threatening medical emergency, call <strong>000</strong> immediately.</span>
            </div>
          </div>

          {/* Core Services Links */}
          <div className="space-y-3 font-sans">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs">Our 5 Core Services</h4>
            <ul className="space-y-2">
              <li><a href="#/services" className="hover:text-[#F9B835] transition-colors">NDIS Supports</a></li>
              <li><a href="#/services" className="hover:text-[#F9B835] transition-colors">Allied Health (2-Week FCA)</a></li>
              <li><a href="#/services" className="hover:text-[#F9B835] transition-colors">Nursing Services (RNs)</a></li>
              <li><a href="#/services" className="hover:text-[#F9B835] transition-colors">Domestic &amp; Cleaning Services</a></li>
              <li><a href="#/services" className="hover:text-[#F9B835] transition-colors">Gardening Services (up to 4m)</a></li>
              <li><a href="#/units" className="hover:text-[#F9B835] transition-colors">1 &amp; 2-Bedroom Units Ready</a></li>
            </ul>
          </div>

          {/* Regional Service Areas */}
          <div className="space-y-3 font-sans">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs">Service Areas</h4>
            <ul className="space-y-2 text-teal-200">
              <li>Townsville &amp; Suburbs</li>
              <li>Ayr (Burdekin)</li>
              <li>Ingham (Hinchinbrook)</li>
              <li>Charters Towers</li>
              <li>Mareeba (Tablelands)</li>
              <li>Mount Isa (North West)</li>
            </ul>
          </div>

          {/* Direct Contact Info */}
          <div className="space-y-3 font-sans">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs">Contact Us</h4>
            <div className="space-y-2.5">
              <a href="tel:0431430905" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-[#F9B835]" />
                <span className="font-bold text-white">0431 430 905</span>
              </a>
              <a href="mailto:admin@tchservices.com.au" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-[#F9B835]" />
                <span>admin@tchservices.com.au</span>
              </a>
              <a href="mailto:hr@tchservices.com.au" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-[#94C08E]" />
                <span>HR: hr@tchservices.com.au</span>
              </a>
              <a
                href="https://www.facebook.com/share/18R5gx47UT/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors group"
              >
                <Facebook className="w-4 h-4 text-[#F9B835] group-hover:text-[#1877F2] transition-colors" />
                <span className="group-hover:underline">Facebook: TCH Support Services</span>
              </a>
              <div className="flex items-start gap-2 text-teal-200">
                <MapPin className="w-4 h-4 text-[#F9B835] flex-shrink-0 mt-0.5" />
                <span>Townsville, QLD 4810, Australia</span>
              </div>
            </div>
          </div>

        </div>

        {/* Legal Disclaimer & Regulatory Standing */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-teal-300/70 font-sans">
          <div>
            &copy; {new Date().getFullYear()} TCH Support Services (Townsville Community Health). All rights reserved.
          </div>
          <div className="text-center md:text-right max-w-xl">
            Supporting self-managed and plan-managed participants, and subcontracting to registered providers in accordance with NDIS Quality &amp; Safeguards Commission guidelines.
          </div>
        </div>

      </div>
    </footer>
  );
};

