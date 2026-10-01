import React from 'react';
import { Phone, Mail, MapPin, Heart, ShieldAlert } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#083A34] text-teal-100/80 pt-16 pb-12 border-t border-white/10 font-sans text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 relative flex-shrink-0">
                <svg viewBox="0 0 96 104.5" className="w-full h-full" aria-hidden="true">
                  <path fill="#E3A83B" d="M51.01 12.6c0 3.85-5.78 3.85-5.78 0s5.78-3.85 5.78 0z"/>
                  <path stroke="#E3A83B" strokeWidth="2.17" strokeLinecap="round" fill="none" d="M42.35 8.27 38.73 3.93"/>
                  <path stroke="#E3A83B" strokeWidth="2.17" strokeLinecap="round" fill="none" d="M53.90 8.27 57.51 3.93"/>
                  <path fill="#0E6E64" d="M48.13 83.38C22.85 63.52 2.99 47.27 2.99 27.41c0-12.64 10.83-21.67 23.47-21.67 9.03 0 16.25 5.42 21.67 14.44z"/>
                  <path fill="#8FAE7D" d="M48.13 20.18c5.42-9.02 12.63-14.44 21.66-14.44 12.64 0 23.47 9.03 23.47 21.67 0 19.86-19.86 36.11-45.13 55.97z"/>
                  <path stroke="#E3A83B" strokeWidth="7.94" strokeLinecap="round" fill="none" d="M19.96 87.72c18.87 14.03 37.73 14.03 56.6 0"/>
                </svg>
              </div>
              <div>
                <span className="block font-bold text-lg text-white">TCH Support Services</span>
                <span className="block text-xs uppercase tracking-wider text-sage-pale font-semibold">Townsville &amp; North Queensland</span>
              </div>
            </div>

            <p className="font-serif text-teal-200/90 text-sm leading-relaxed max-w-sm">
              Delivering high-standard clinical nursing, tropical yard maintenance, domestic house cleaning, and rapid agency staffing. Locally based in Townsville.
            </p>

            <div className="pt-2 text-xs text-teal-300">
              <span className="block font-bold text-white">Emergency Notice:</span>
              <span>If you or someone in your care is experiencing a life-threatening medical emergency, call <strong>000</strong> immediately.</span>
            </div>
          </div>

          {/* Core Services Links */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs">Our Services</h4>
            <ul className="space-y-2">
              <li><a href="#nursing" className="hover:text-gold transition-colors">Clinical Nursing at Home</a></li>
              <li><a href="#nursing" className="hover:text-gold transition-colors">Wound &amp; Catheter Care</a></li>
              <li><a href="#home" className="hover:text-gold transition-colors">Lawn Mowing &amp; Edging</a></li>
              <li><a href="#home" className="hover:text-gold transition-colors">Domestic House Cleaning</a></li>
              <li><a href="#home" className="hover:text-gold transition-colors">Storm Season &amp; Gutter Prep</a></li>
              <li><a href="#staffing" className="hover:text-gold transition-colors">Agency Staffing for Providers</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs">Navigation</h4>
            <ul className="space-y-2">
              <li><a href="#ndis" className="hover:text-gold transition-colors">NDIS Funding Pathways</a></li>
              <li><a href="#area" className="hover:text-gold transition-colors">Service Area &amp; Suburbs</a></li>
              <li><a href="#jobs" className="hover:text-gold transition-colors">Careers &amp; Open Shifts</a></li>
              <li><a href="#contact" className="hover:text-gold transition-colors">Make an Enquiry</a></li>
            </ul>
          </div>

          {/* Direct Contact Info */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs">Direct Contact</h4>
            <div className="space-y-2.5">
              <a href="tel:0431430905" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-gold" />
                <span className="font-bold text-white">0431 430 905</span>
              </a>
              <a href="mailto:admin@tchservices.com.au" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-gold" />
                <span>admin@tchservices.com.au</span>
              </a>
              <div className="flex items-start gap-2 text-teal-200">
                <MapPin className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                <span>Townsville, QLD 4810, Australia</span>
              </div>
            </div>
          </div>

        </div>

        {/* Legal Disclaimer & Regulatory Standing */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-teal-300/70">
          <div>
            &copy; {new Date().getFullYear()} TCH Support Services. All rights reserved. ABN 00 000 000 000.
          </div>
          <div className="text-center md:text-right max-w-xl font-serif">
            Not an NDIS registered provider. Supporting self-managed and plan-managed participants, and subcontracting to registered providers in accordance with NDIS Quality &amp; Safeguards Commission guidelines.
          </div>
        </div>

      </div>
    </footer>
  );
};
