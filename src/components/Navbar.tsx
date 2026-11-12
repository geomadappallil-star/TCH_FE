import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ArrowRight, ShieldCheck, Sparkles, Facebook, Mail, Calendar, Home } from 'lucide-react';

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
    { id: 'home', name: 'Overview & About', href: '#/' },
    { id: 'services', name: 'Our Services', href: '#/services' },
    { id: 'units', name: '1 & 2-Bed Units', href: '#/units' },
    { id: 'funding', name: 'Areas & Funding', href: '#/funding' },
    { id: 'careers', name: 'Careers', href: '#/careers' },
  ];

  const handleLinkClick = (pageId: string) => {
    setMobileMenuOpen(false);
    onNavigate(pageId);
  };

  const handleReferralClick = () => {
    setMobileMenuOpen(false);
    if (currentPage !== 'home') {
      onNavigate('home');
      setTimeout(() => {
        const el = document.getElementById('referral');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 350);
    } else {
      const el = document.getElementById('referral');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50">
      
      {/* 1. Client Top Announcement Bar (ATS Peach / Gold Glow) */}
      <div className="bg-gradient-to-r from-[#0B4F51] via-[#073B3C] to-[#0B4F51] text-white py-2 px-3 sm:px-6 text-xs border-b border-[#F9B835]/30 shadow-sm font-sans">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex items-center gap-2 flex-wrap justify-center sm:justify-start">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#F9B835]/25 text-[#F9B835] font-bold text-[11px] uppercase tracking-wider border border-[#F9B835]/40">
              <Sparkles className="w-3 h-3 text-[#F9B835]" /> Notice
            </span>
            <span className="font-medium text-emerald-50">
              <strong className="text-white font-bold">Functional Capacity Assessments in just 2 weeks.</strong>
              <span className="hidden md:inline mx-2 text-[#F9B835]">•</span>
              <span className="text-teal-100">Accommodation available now: 1 and 2-bedroom units in Townsville.</span>
            </span>
          </div>

          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              type="button"
              onClick={handleReferralClick}
              className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#F9B835] text-[#2B2822] font-bold text-[11px] hover:bg-[#ffc657] transition-all duration-200 hover:scale-105 shadow-sm"
            >
              <Calendar className="w-3 h-3" />
              <span>Book now</span>
            </button>
            <button
              type="button"
              onClick={() => handleLinkClick('units')}
              className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-[11px] border border-white/20 transition-all duration-200 hover:scale-105"
            >
              <Home className="w-3 h-3 text-emerald-200" />
              <span>Enquire about units</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. Top Micro Utility Bar (Hotline, Email, Verification) */}
      <div className="hidden md:block bg-[#042627] text-teal-100 text-xs py-1 px-4 font-sans border-b border-teal-800/40">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 text-[#F9B835] font-semibold">
              <Sparkles className="w-3.5 h-3.5" /> Townsville Community Health (TCH)
            </span>
            <span className="text-teal-700">|</span>
            <span className="text-teal-200">NDIS · Private · DVA (VHC) Approved</span>
            <span className="text-teal-700">|</span>
            <span className="flex items-center gap-1 text-emerald-300">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-300" /> Screened Local North QLD Team
            </span>
          </div>
          <div className="flex items-center gap-5 text-xs font-medium">
            <a 
              href="mailto:admin@tchservices.com.au" 
              className="inline-flex items-center gap-1.5 text-teal-200 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#F9B835]" />
              <span>admin@tchservices.com.au</span>
            </a>
            <span className="text-teal-700">|</span>
            <div className="flex items-center gap-1.5">
              <span className="text-teal-300">Hotline:</span>
              <a href="tel:0431430905" className="text-white hover:text-[#F9B835] transition-colors font-bold tracking-wide">
                0431 430 905
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Serko-style Top Laser Progress Beam when transitioning */}
      {isTransitioning && (
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#F9B835] via-[#EF85AA] to-[#94C08E] serko-laser-beam z-50" />
      )}

      {/* 3. Main Glass Navigation Bar in Allied Therapeutic Palette */}
      <div className={`transition-all duration-300 ${
        scrolled 
          ? 'bg-[#FFF3E2]/95 backdrop-blur-xl border-b border-[#0B4F51]/15 shadow-md' 
          : 'bg-[#FFF3E2]/90 backdrop-blur-md border-b border-[#0B4F51]/10'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Brand Logo & Name */}
            <button 
              type="button"
              onClick={() => handleLinkClick('home')} 
              className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#F9B835] rounded-lg p-1 text-left"
            >
              <div className="w-11 h-11 relative flex-shrink-0">
                <svg viewBox="0 0 96 104.5" className="w-full h-full drop-shadow-sm transition-transform duration-300 group-hover:scale-105" aria-hidden="true">
                  <path fill="#F9B835" d="M51.01 12.6c0 3.85-5.78 3.85-5.78 0s5.78-3.85 5.78 0z"/>
                  <path stroke="#F9B835" strokeWidth="2.17" strokeLinecap="round" fill="none" d="M42.35 8.27 38.73 3.93"/>
                  <path stroke="#F9B835" strokeWidth="2.17" strokeLinecap="round" fill="none" d="M53.90 8.27 57.51 3.93"/>
                  <path fill="#0B4F51" d="M48.13 83.38C22.85 63.52 2.99 47.27 2.99 27.41c0-12.64 10.83-21.67 23.47-21.67 9.03 0 16.25 5.42 21.67 14.44z"/>
                  <path fill="#94C08E" d="M48.13 20.18c5.42-9.02 12.63-14.44 21.66-14.44 12.64 0 23.47 9.03 23.47 21.67 0 19.86-19.86 36.11-45.13 55.97z"/>
                  <path stroke="#F9B835" strokeWidth="7.94" strokeLinecap="round" fill="none" d="M19.96 87.72c18.87 14.03 37.73 14.03 56.6 0"/>
                </svg>
              </div>
              <div>
                <span className="block font-sans font-bold text-lg md:text-xl leading-tight text-[#0B4F51] group-hover:text-[#073B3C] tracking-tight">
                  TCH Support Services
                </span>
                <span className="block font-sans text-[11px] font-semibold uppercase tracking-wider text-[#94C08E] font-bold">
                  Townsville Community Health
                </span>
              </div>
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 font-sans font-medium text-sm text-[#2B2822]">
              {navLinks.map((link) => {
                const isActive = currentPage === link.id;
                return (
                  <button
                    key={link.id}
                    type="button"
                    onClick={() => handleLinkClick(link.id)}
                    className={`px-3.5 py-2 rounded-full transition-all duration-200 ${
                      isActive
                        ? 'bg-white text-[#0B4F51] font-bold shadow-sm border border-[#0B4F51]/20'
                        : 'text-gray-700 hover:text-[#0B4F51] hover:bg-white/60'
                    }`}
                  >
                    {link.name}
                  </button>
                );
              })}
            </nav>

            {/* ATS Pill Buttons: Referral & Call CTA */}
            <div className="hidden sm:flex items-center gap-2.5">
              <a
                href="https://www.facebook.com/share/18R5gx47UT/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TCH Support Services Facebook Page"
                title="Visit our Facebook Page"
                className="p-2.5 rounded-full bg-white/80 hover:bg-white text-[#0B4F51] hover:text-[#1877F2] border border-[#0B4F51]/15 shadow-sm transition-all duration-200 hover:-translate-y-0.5"
              >
                <Facebook className="w-4 h-4 text-[#1877F2]" />
              </a>

              {/* Allied Therapeutic Services signature Pill Button */}
              <button
                type="button"
                onClick={handleReferralClick}
                className="inline-flex items-center gap-2 bg-[#EF85AA] hover:bg-[#f29ab7] text-[#590925] font-sans font-bold text-sm px-5 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105 border border-[#590925]/20"
              >
                <span>Make a Referral</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="tel:0431430905"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#0B4F51] to-[#073B3C] text-white font-sans font-semibold text-sm px-4 py-2.5 rounded-full shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5"
              >
                <Phone className="w-4 h-4 text-[#F9B835]" />
                <span>0431 430 905</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                type="button"
                onClick={handleReferralClick}
                className="px-3 py-1.5 rounded-full bg-[#EF85AA] text-[#590925] font-bold text-xs sm:hidden shadow-sm"
              >
                Referral
              </button>
              <a
                href="tel:0431430905"
                className="p-2 rounded-full bg-[#0B4F51] text-white sm:hidden"
                aria-label="Call TCH Support"
              >
                <Phone className="w-4 h-4 text-[#F9B835]" />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-xl bg-white border border-[#0B4F51]/20 text-[#0B4F51] hover:text-[#073B3C] focus:outline-none focus:ring-2 focus:ring-[#F9B835]"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#0B4F51]/15 bg-[#FFF3E2]/98 backdrop-blur-2xl px-5 pt-3 pb-6 transition-all duration-300 shadow-xl">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => handleLinkClick(link.id)}
                className="flex items-center justify-between font-sans font-semibold text-base py-3 px-4 rounded-xl text-[#0B4F51] hover:bg-white hover:text-[#073B3C] transition-colors text-left"
              >
                <span>{link.name}</span>
                <ArrowRight className="w-4 h-4 text-[#94C08E]" />
              </button>
            ))}
            
            <div className="mt-4 pt-4 border-t border-[#0B4F51]/15 flex flex-col gap-3">
              <button
                type="button"
                onClick={handleReferralClick}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#EF85AA] text-[#590925] font-sans font-bold text-base py-3.5 rounded-full shadow-md"
              >
                <span>Make a Referral</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="tel:0431430905"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#0B4F51] text-white font-sans font-semibold text-base py-3.5 rounded-full shadow-md"
              >
                <Phone className="w-5 h-5 text-[#F9B835]" />
                <span>Call Hotline: 0431 430 905</span>
              </a>

              <a
                href="mailto:admin@tchservices.com.au"
                className="w-full inline-flex items-center justify-center gap-2 bg-white font-sans font-semibold text-[#0B4F51] py-3 rounded-full border border-[#0B4F51]/20"
              >
                <Mail className="w-4 h-4 text-[#0B4F51]" />
                <span>admin@tchservices.com.au</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
