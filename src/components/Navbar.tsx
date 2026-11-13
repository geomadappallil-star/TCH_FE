import React, { useState } from 'react';
import { Logo } from './Logo.js';
import { Phone, Mail, ArrowRight, Menu, X, ChevronRight } from 'lucide-react';

interface NavbarProps {
  activeSection?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection = 'home' }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'about', label: 'About Us', href: '#about' },
    { id: 'services', label: 'Services', href: '#services' },
    { id: 'referral', label: 'Make a Referral', href: '#referral' },
    { id: 'careers', label: 'Careers', href: '#careers' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* 1. Top Announcement Bar */}
      <div className="bg-[#0A3D47] text-white text-xs md:text-sm py-2 px-4 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-y-1.5 gap-x-4">
          <div className="flex items-center gap-2 text-teal-100 font-medium">
            <span className="w-2 h-2 rounded-full bg-[#F4A62A] animate-pulse" />
            <span className="truncate">
              Proudly local in North Queensland · Townsville · Ayr · Ingham · Charters Towers · Mareeba · Mount Isa
            </span>
          </div>
          
          <div className="flex items-center gap-4 text-xs md:text-sm font-bold flex-shrink-0">
            <a 
              href="tel:0431430905" 
              className="flex items-center gap-1.5 hover:text-[#F4A62A] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#F4A62A]" />
              <span>0431 430 905</span>
            </a>
            <span className="text-white/30 hidden sm:inline">|</span>
            <a 
              href="mailto:admin@tchservices.com.au" 
              className="hidden sm:flex items-center gap-1.5 hover:text-[#F4A62A] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#5FB3AA]" />
              <span>admin@tchservices.com.au</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. Glassmorphic Navigation Bar */}
      <nav 
        className="w-full bg-white/85 backdrop-blur-xl border-b border-[#EADFCB] shadow-sm transition-all"
        aria-label="Main Navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          
          {/* Logo */}
          <a 
            href="#home" 
            onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
            className="flex-shrink-0 flex items-center gap-3 focus:outline-none"
            aria-label="TCH Support Services Home"
          >
            <Logo variant="dark" size="md" />
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`px-3.5 py-2 rounded-xl text-[15px] font-bold transition-all relative ${
                    isActive 
                      ? 'text-[#0B5563] bg-[#E3F1F1]/80 shadow-xs' 
                      : 'text-[#1E2B30] hover:text-[#0B5563] hover:bg-black/5'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#F4A62A] rounded-full" />
                  )}
                </a>
              );
            })}
          </div>

          {/* Desktop Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#referral"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#referral');
              }}
              className="btn-base btn-mango text-sm px-5 py-2.5 shadow-md flex items-center gap-2 group"
            >
              <span>Make a referral</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href="#referral"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#referral');
              }}
              className="sm:hidden btn-base btn-mango text-xs px-3.5 py-2"
            >
              Referral
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-[#0A3D47] hover:bg-black/5 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[#EADFCB] bg-white/95 backdrop-blur-2xl px-4 pt-3 pb-6 shadow-2xl space-y-2 animate-fadeIn">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl font-bold text-base transition-colors ${
                      isActive 
                        ? 'bg-[#E3F1F1] text-[#0B5563]' 
                        : 'text-[#1E2B30] hover:bg-[#FBF5EA]'
                    }`}
                  >
                    <span>{link.label}</span>
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  </a>
                );
              })}
            </div>

            <div className="pt-3 border-t border-gray-200/80 flex flex-col gap-2.5">
              <a
                href="#referral"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#referral');
                }}
                className="btn-base btn-mango w-full justify-center"
              >
                <span>Make a referral</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="tel:0431430905"
                className="btn-base btn-ghost w-full justify-center text-sm"
              >
                <Phone className="w-4 h-4" />
                <span>Call Alan: 0431 430 905</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
