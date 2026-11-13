import React, { useState, useEffect, useCallback } from 'react';
import { Navbar } from './components/Navbar.js';
import { Footer } from './components/Footer.js';
import { CommonCtaBanner } from './components/CommonCtaBanner.js';
import { UnitEnquiryModal } from './components/UnitEnquiryModal.js';

// All Sections for the Single Continuous Landing Page
import { HomePage } from './pages/HomePage.js';
import { AboutPage } from './pages/AboutPage.js';
import { ServicesPage } from './pages/ServicesPage.js';
import { ReferralPage } from './pages/ReferralPage.js';
import { CareersPage } from './pages/CareersPage.js';

export function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isUnitModalOpen, setIsUnitModalOpen] = useState<boolean>(false);

  // Smooth scroll to section by ID
  const handleScrollToSection = useCallback((sectionId: string) => {
    if (sectionId === 'units') {
      setIsUnitModalOpen(true);
      const servicesEl = document.getElementById('services');
      if (servicesEl) {
        servicesEl.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    const targetId = sectionId.replace('#', '');
    const element = document.getElementById(targetId);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', `#${targetId}`);
      setActiveSection(targetId);
    } else if (targetId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      window.history.pushState(null, '', '#home');
      setActiveSection('home');
    }
  }, []);

  // Handle URL hash on initial page load and on back/forward
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#/', '').replace('#', '');
      if (hash) {
        setTimeout(() => {
          handleScrollToSection(hash);
        }, 150);
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, [handleScrollToSection]);

  // Scroll spy to automatically update active navbar item as user scrolls
  useEffect(() => {
    const sections = ['home', 'about', 'services', 'referral', 'careers'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl) {
          const top = sectionEl.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div id="top" className="min-h-screen flex flex-col bg-[#FBF5EA] text-[#1E2B30] relative font-sans">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 bg-[#0A3D47] text-white px-5 py-3 rounded-full font-bold shadow-lg"
      >
        Skip to main content
      </a>

      {/* Sticky Main Header with Top Contact Bar */}
      <Navbar 
        activeSection={activeSection} 
        onNavigate={handleScrollToSection}
      />

      {/* Single Page Content: All 5 Sections in Continuous Flow */}
      <main id="main-content" className="flex-grow">
        {/* 1. Home Section (Hero, Highlight Banner, Services Overview, Why Choose TCH, Service Areas) */}
        <section id="home" className="scroll-mt-24">
          <HomePage 
            onNavigate={handleScrollToSection} 
            onOpenUnitModal={() => setIsUnitModalOpen(true)} 
          />
        </section>

        {/* 2. About Us Section (Story, Mission & Vision, Values 01-06, Inclusivity, Acknowledgement) */}
        <section id="about" className="scroll-mt-24 border-t border-[#0B5563]/15">
          <AboutPage />
        </section>

        {/* 3. Services Section (Detailed 5 Services, 2-Week FCA Splose CTA, Accommodation banner) */}
        <section id="services" className="scroll-mt-24 border-t border-[#0B5563]/15">
          <ServicesPage 
            onNavigate={handleScrollToSection} 
            onOpenUnitModal={() => setIsUnitModalOpen(true)} 
          />
        </section>

        {/* 4. Make a Referral Section (Option 1 Allied Health Splose + Option 2 In-App Form) */}
        <section id="referral" className="scroll-mt-24 border-t border-[#0B5563]/15">
          <ReferralPage />
        </section>

        {/* 5. Careers Section (Careers Hero, 5 Roles, EOI Form with Resume Upload) */}
        <section id="careers" className="scroll-mt-24 border-t border-[#0B5563]/15">
          <CareersPage />
        </section>

        {/* Universal Single Call-to-Action Banner */}
        <CommonCtaBanner />
      </main>

      {/* Universal 4-Column Footer */}
      <Footer onNavigate={handleScrollToSection} />

      {/* 1 & 2-Bedroom Unit Enquiry Modal */}
      <UnitEnquiryModal 
        isOpen={isUnitModalOpen} 
        onClose={() => setIsUnitModalOpen(false)} 
      />
    </div>
  );
}

export default App;
