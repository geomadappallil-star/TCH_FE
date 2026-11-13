import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

interface FooterProps {
  onNavigate?: (pageId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, pageId: string) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(pageId);
    }
  };

  return (
    <footer className="bg-[#0A3D47] text-white/90 pt-16 pb-12 font-sans border-t border-[#0B5563]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 4 Columns Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/15">
          {/* Col 1: Brand */}
          <div className="space-y-3">
            <h3 className="font-heading font-extrabold text-2xl text-white tracking-tight">
              TCH Support Services
            </h3>
            <p className="text-white/80 text-sm leading-relaxed">
              Townsville Community Health. Locals looking after locals across North Queensland.
            </p>
            <p className="text-xs text-white/60 font-mono tracking-wide pt-1">
              ABN 37 666 592 785
            </p>
          </div>

          {/* Col 2: Explore */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-base text-white">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm text-white/80">
              <li>
                <a
                  href="#/about"
                  onClick={(e) => handleNav(e, 'about')}
                  className="hover:text-[#F4A62A] transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#/services"
                  onClick={(e) => handleNav(e, 'services')}
                  className="hover:text-[#F4A62A] transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#/referral"
                  onClick={(e) => handleNav(e, 'referral')}
                  className="hover:text-[#F4A62A] transition-colors"
                >
                  Make a Referral
                </a>
              </li>
              <li>
                <a
                  href="#/careers"
                  onClick={(e) => handleNav(e, 'careers')}
                  className="hover:text-[#F4A62A] transition-colors"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-base text-white">
              Contact
            </h4>
            <ul className="space-y-2.5 text-sm text-white/80">
              <li>
                <a
                  href="tel:0431430905"
                  className="inline-flex items-center gap-2 hover:text-[#F4A62A] transition-colors font-semibold"
                >
                  <Phone className="w-4 h-4 text-[#F4A62A]" />
                  <span>0431 430 905</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:admin@tchservices.com.au"
                  className="inline-flex items-center gap-2 hover:text-[#F4A62A] transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#F4A62A]" />
                  <span>admin@tchservices.com.au</span>
                </a>
              </li>
              <li className="inline-flex items-center gap-2 text-white/70">
                <MapPin className="w-4 h-4 text-[#F4A62A]" />
                <span>Based in Townsville, QLD</span>
              </li>
            </ul>
          </div>

          {/* Col 4: We cover */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-base text-white">
              We cover
            </h4>
            <p className="text-sm text-white/80 leading-relaxed">
              Townsville, Ayr, Ingham, Charters Towers, Mareeba and Mount Isa
            </p>
          </div>
        </div>

        {/* Traditional Owners Acknowledgement Box */}
        <div className="mt-10 p-5 sm:p-6 rounded-2xl bg-white/[0.06] border border-white/10 flex flex-col md:flex-row items-center gap-5">
          <div className="flex-shrink-0 w-16 h-16 rounded-xl overflow-hidden border border-white/20 shadow-md">
            <img
              src="/images/indigenous-art.jpg"
              alt="Local First Nations Artwork"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
          <div className="text-xs sm:text-sm text-white/85 leading-relaxed font-sans text-center md:text-left">
            <span className="font-bold text-[#F4A62A] block mb-1">Acknowledgement of Country</span>
            TCH Support Services acknowledges the Bindal and Wulgurukaba peoples, the Traditional Owners of the land on which we work in Townsville, and pays respect to Elders past and present. We extend that respect to all Aboriginal and Torres Strait Islander peoples across the communities we serve.
          </div>
        </div>

        {/* Cultural Image Notice & Copyright */}
        <div className="mt-8 text-center text-xs text-white/60 leading-relaxed">
          <p>
            Aboriginal and Torres Strait Islander visitors are advised that this website may contain images of people who have passed away. &copy; {new Date().getFullYear()} TCH Support Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
