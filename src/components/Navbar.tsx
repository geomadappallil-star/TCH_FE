import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ArrowRight, ShieldCheck, Sparkles, Facebook } from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  onNavigate: (pageId: string) => void;
  isTransitioning?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  currentPage, 
  onNavigate,
  isTransitioning = false
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', name: 'Overview', href: '#/' },
    { id: 'services', name: 'Our Services', href: '#/services' },
    { id: 'units', name: '1 & 2-Bed Units', href: '#/units' },
    { id: 'funding', name: 'NDIS & Funding', href: '#/funding' },
    { id: 'careers', name: 'Careers', href: '#/careers' },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'glass-nav bg-[#FAF8F5]/95 backdrop-blur-xl border-b border-[#164E43]/15 shadow-sm' 
        : 'bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#164E43]/10'
    }`}>
      
      {/* Serko-style Top Laser Progress Beam when transitioning */}
      {isTransitioning && (
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#D4A359] via-[#E5B56A] to-emerald-400 serko-laser-beam z-50" />
      )}

      {/* Top micro-bar for quick local credibility */}
      <div className="hidden md:block bg-gradient-to-r from-[#0A241F] via-[#0E352D] to-[#0A241F] text-teal-100 text-xs py-2 px-4 font-sans">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-[#E5B56A] font-semibold">
              <Sparkles className="w-3.5 h-3.5" /> Locally Owned &amp; Based in Townsville
            </span>
            <span className="text-teal-600">|</span>
            <span className="text-teal-200">NDIS, Private &amp; VHC Approved</span>
            <span className="text-teal-600">|</span>
            <span className="flex items-center gap-1.5 text-emerald-200">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-300" /> AHPRA Verified RNs &amp; Screened Crews
            </span>
          </div>
          <div className="flex items-center gap-3 text-xs font-medium">
            <span className="text-teal-200">Direct Coordinator Hotline:</span>
            <a href="tel:0431430905" className="text-white hover:text-[#E5B56A] transition-colors font-bold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              0431 430 905
            </a>
          </div>
        </div>
      </div>

      {/* Main Glass Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo & Name (Clicks to Home Page) */}
          <button 
            type="button"
            onClick={() => onNavigate('home')} 
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#D4A359] rounded-xl p-1 transition-transform text-left"
          >
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
              <span className="block font-sans font-bold text-lg leading-tight text-[#0E352D] group-hover:text-[#164E43] tracking-tight">
                TCH Support Services
              </span>
              <span className="block font-sans text-[11px] font-semibold uppercase tracking-wider text-[#566B64]">
                Nursing · Allied Health · Home &amp; Yard
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links with Colorful Hover & Page Transition Trigger */}
          <nav className="hidden lg:flex items-center gap-1.5 font-sans font-bold text-sm">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => onNavigate(link.id)}
                  className={`px-4 py-2 rounded-full transition-all duration-300 border flex items-center gap-2 ${
                    isActive
                      ? 'bg-[#164E43] text-[#E5B56A] border-[#164E43] shadow-md shadow-[#164E43]/20'
                      : 'text-[#2D453E] border-transparent hover:bg-[#164E43] hover:text-[#E5B56A] hover:border-[#164E43] hover:shadow-md hover:shadow-[#164E43]/20 hover:-translate-y-0.5'
                  }`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full transition-colors ${
                    isActive ? 'bg-[#E5B56A]' : 'bg-[#D4A359]/40 group-hover:bg-[#E5B56A]'
                  }`} />
                  <span>{link.name}</span>
                </button>
              );
            })}
          </nav>

          {/* Call & Social CTA Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://www.facebook.com/share/18R5gx47UT/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TCH Support Services Facebook Page"
              title="Visit our Facebook Page"
              className="p-2.5 rounded-full bg-white hover:bg-gray-50 text-[#1877F2] border border-gray-200 shadow-sm transition-all duration-200 hover:-translate-y-0.5"
            >
              <Facebook className="w-4 h-4 fill-current" />
            </a>
            <a
              href="tel:0431430905"
              className="btn-press inline-flex items-center gap-2.5 bg-[#164E43] hover:bg-[#0E352D] text-white font-sans font-bold text-sm px-5 py-2.5 rounded-full shadow-md shadow-[#164E43]/15 transition-all duration-200 hover:-translate-y-0.5"
            >
              <Phone className="w-4 h-4 text-[#E5B56A]" />
              <span>0431 430 905</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href="tel:0431430905"
              className="p-2.5 rounded-full bg-[#164E43] text-white sm:hidden shadow-sm"
              aria-label="Call TCH Support"
            >
              <Phone className="w-4 h-4 text-[#E5B56A]" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-white border border-gray-200 text-[#0E352D] hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#D4A359]"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer (Frosted Glass Panel) */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#164E43]/15 bg-[#FAF8F5]/98 backdrop-blur-2xl px-5 pt-4 pb-7 transition-all duration-300">
          <nav className="flex flex-col gap-1.5">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => {
                    onNavigate(link.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full flex items-center justify-between font-sans font-bold text-base py-3 px-4 rounded-xl transition-all duration-200 text-left ${
                    isActive
                      ? 'bg-[#164E43] text-[#E5B56A] shadow-sm'
                      : 'text-[#0E352D] hover:bg-[#164E43] hover:text-[#E5B56A]'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${isActive ? 'bg-[#E5B56A]' : 'bg-[#164E43]'}`} />
                    <span>{link.name}</span>
                  </span>
                  <ArrowRight className={`w-4 h-4 ${isActive ? 'text-[#E5B56A]' : 'text-[#D4A359]'}`} />
                </button>
              );
            })}
            <div className="mt-4 pt-4 border-t border-gray-200 flex flex-col gap-3">
              <a
                href="tel:0431430905"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#164E43] text-white font-sans font-bold text-base py-3.5 rounded-xl shadow-md"
              >
                <Phone className="w-5 h-5 text-[#E5B56A]" />
                <span>Call Alan: 0431 430 905</span>
              </a>
              <button
                type="button"
                onClick={() => {
                  onNavigate('home');
                  setMobileMenuOpen(false);
                }}
                className="w-full inline-flex items-center justify-center gap-2 bg-white font-sans font-semibold text-[#0E352D] py-3 rounded-xl border border-gray-200 shadow-sm"
              >
                <span>Request a Callback</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
