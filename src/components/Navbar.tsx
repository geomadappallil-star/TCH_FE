import React, { useState } from 'react';
import { Phone, Mail, ArrowRight, Menu, X } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'referral', label: 'Make a Referral' },
    { id: 'careers', label: 'Careers' },
  ];

  const handleNavClick = (sectionId: string) => {
    onNavigate(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full shadow-sm bg-[#FBF5EA]/95 backdrop-blur-md">
      {/* Top Contact Micro-Bar */}
      <div className="bg-[#0A3D47] text-white text-xs sm:text-sm py-2 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          {/* Regional locations ticker */}
          <div className="text-white/90 font-medium text-center sm:text-left truncate">
            <span>Proudly local in North Queensland</span>
            <span className="hidden md:inline"> · Townsville · Ayr · Ingham · Charters Towers · Mareeba · Mount Isa</span>
          </div>

          {/* Contact phone and email */}
          <div className="flex items-center gap-4 text-xs sm:text-sm">
            <a
              href="tel:0431430905"
              className="inline-flex items-center gap-1.5 hover:text-[#F4A62A] transition-colors font-semibold"
              aria-label="Call 0431 430 905"
            >
              <Phone className="w-3.5 h-3.5 text-[#F4A62A]" />
              <span>0431 430 905</span>
            </a>
            <span className="text-white/30 hidden xs:inline">|</span>
            <a
              href="mailto:admin@tchservices.com.au"
              className="inline-flex items-center gap-1.5 hover:text-[#F4A62A] transition-colors"
              aria-label="Email admin@tchservices.com.au"
            >
              <Mail className="w-3.5 h-3.5 text-[#F4A62A]" />
              <span className="hidden sm:inline">admin@tchservices.com.au</span>
              <span className="sm:hidden">Email</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 text-left focus:outline-none group"
        >
          <div className="w-10 h-10 flex-shrink-0 relative">
            <svg viewBox="0 0 96 104.5" className="w-full h-full" aria-hidden="true">
              <path fill="#F4A62A" d="M51.01 12.6c0 3.85-5.78 3.85-5.78 0s5.78-3.85 5.78 0z" />
              <path stroke="#F4A62A" strokeWidth="2.5" strokeLinecap="round" fill="none" d="M42.35 8.27 38.73 3.93" />
              <path stroke="#F4A62A" strokeWidth="2.5" strokeLinecap="round" fill="none" d="M53.90 8.27 57.51 3.93" />
              <path fill="#0B5563" d="M48.13 83.38C22.85 63.52 2.99 47.27 2.99 27.41c0-12.64 10.83-21.67 23.47-21.67 9.03 0 16.25 5.42 21.67 14.44z" />
              <path fill="#94C08E" d="M48.13 20.18c5.42-9.02 12.63-14.44 21.66-14.44 12.64 0 23.47 9.03 23.47 21.67 0 19.86-19.86 36.11-45.13 55.97z" />
              <path stroke="#F4A62A" strokeWidth="8" strokeLinecap="round" fill="none" d="M19.96 87.72c18.87 14.03 37.73 14.03 56.6 0" />
            </svg>
          </div>
          <div className="leading-tight">
            <span className="block font-heading font-extrabold text-xl sm:text-2xl tracking-tight text-[#0A3D47]">
              TCH
            </span>
            <span className="block font-heading text-[10px] sm:text-xs tracking-wider uppercase font-bold text-[#0B5563]">
              SUPPORT SERVICES
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`px-3.5 py-2 rounded-full font-heading text-sm sm:text-base font-semibold transition-all duration-200 ${
                  isActive
                    ? 'text-[#0A3D47] underline underline-offset-8 decoration-2 decoration-[#F4A62A] font-bold'
                    : 'text-[#1E2B30] hover:text-[#0A3D47] hover:bg-black/5'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </div>

        {/* Right Action: Make a Referral Button */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={() => handleNavClick('referral')}
            className="btn-mango group"
          >
            <span>Make a referral</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Mobile Menu Hamburger */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={() => handleNavClick('referral')}
            className="px-3.5 py-2 text-xs font-bold rounded-full bg-[#F4A62A] text-[#1E2B30]"
          >
            Refer
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-[#0A3D47] hover:bg-black/5"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FBF5EA] border-t border-[#0A3D47]/10 px-4 pt-4 pb-6 space-y-2 animate-fadeInFromTop shadow-lg">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`w-full text-left px-4 py-3 rounded-xl font-heading font-bold text-base transition-colors ${
                  isActive
                    ? 'bg-[#0A3D47] text-white'
                    : 'text-[#1E2B30] hover:bg-black/5'
                }`}
              >
                {link.label}
              </button>
            );
          })}

          <div className="pt-3">
            <button
              onClick={() => handleNavClick('referral')}
              className="w-full btn-mango justify-center"
            >
              <span>Make a referral</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
