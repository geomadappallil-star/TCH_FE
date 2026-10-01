import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
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
    { name: 'NDIS Plans', href: '#ndis' },
    { name: 'Clinical Nursing', href: '#nursing' },
    { name: 'Home & Yard', href: '#home' },
    { name: 'Agency Staffing', href: '#staffing' },
    { name: 'Coverage Area', href: '#area' },
    { name: 'Careers', href: '#jobs' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'glass-nav bg-[#F6F4EE]/90 backdrop-blur-xl border-b border-teal/15 shadow-sm' 
        : 'bg-[#F6F4EE]/80 backdrop-blur-md border-b border-teal/10'
    }`}>
      {/* Top micro-bar for quick local credibility */}
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
              <ShieldCheck className="w-3.5 h-3.5 text-sage-pale" /> AHPRA Verified RNs &amp; Screened Crews
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
          <a href="#top" className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-gold rounded-lg p-1">
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

          {/* Desktop Navigation Links with Glass Pill indicator */}
          <nav className="hidden lg:flex items-center gap-1 font-sans font-medium text-sm text-muted">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-2 rounded-full transition-all duration-200 ${
                    isActive
                      ? 'bg-white/80 text-teal-ink font-semibold shadow-sm border border-teal/15 backdrop-blur-md'
                      : 'hover:text-teal-deep hover:bg-white/40'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Call & Intake CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="tel:0431430905"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-teal to-teal-deep text-white font-sans font-semibold text-sm px-4 py-2.5 rounded-full shadow-glass-teal hover:shadow-lg hover:from-teal-deep hover:to-teal transition-all duration-200 hover:-translate-y-0.5"
            >
              <Phone className="w-4 h-4 text-gold" />
              <span>0431 430 905</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href="tel:0431430905"
              className="p-2 rounded-full bg-teal text-white sm:hidden"
              aria-label="Call TCH Support"
            >
              <Phone className="w-4 h-4 text-gold" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl glass-card text-teal-ink hover:text-teal focus:outline-none focus:ring-2 focus:ring-gold"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer (Frosted Glass Panel) */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass-nav border-t border-teal/15 bg-[#F6F4EE]/95 backdrop-blur-2xl px-5 pt-3 pb-6 transition-all duration-300">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between font-sans font-semibold text-base py-3 px-4 rounded-xl text-teal-ink hover:bg-white/80 hover:text-teal transition-colors"
              >
                <span>{link.name}</span>
                <ArrowRight className="w-4 h-4 text-sage" />
              </a>
            ))}
            <div className="mt-4 pt-4 border-t border-teal/15 flex flex-col gap-3">
              <a
                href="tel:0431430905"
                className="w-full inline-flex items-center justify-center gap-2 bg-teal text-white font-sans font-semibold text-base py-3.5 rounded-xl shadow-glass-teal"
              >
                <Phone className="w-5 h-5 text-gold" />
                <span>Call Alan: 0431 430 905</span>
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 glass-card font-sans font-semibold text-teal-ink py-3 rounded-xl border border-teal/20"
              >
                <span>Submit Online Enquiry</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
