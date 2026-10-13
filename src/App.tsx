import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar.js';
import { PhotoHero } from './components/PhotoHero.js';
import { PersonaSelector } from './components/PersonaSelector.js';
import { ServicesSection } from './components/ServicesSection.js';
import { PropertyShowcase } from './components/PropertyShowcase.js';
import { CostCalculator } from './components/CostCalculator.js';
import { NdisSection } from './components/NdisSection.js';
import { AreaChecker } from './components/AreaChecker.js';
import { ComplianceSection } from './components/ComplianceSection.js';
import { CareersSection } from './components/CareersSection.js';
import { ContactSection } from './components/ContactSection.js';
import { Footer } from './components/Footer.js';
import { QuickActionBar } from './components/QuickActionBar.js';

export function App() {
  const [activeSection, setActiveSection] = useState('top');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['top', 'ndis', 'nursing', 'allied-health', 'home', 'housing', 'area', 'jobs', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div id="top" className="min-h-screen flex flex-col bg-[#F8F7F3] text-[#192B27]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 bg-teal text-white px-4 py-2 rounded-lg font-sans font-bold shadow-lg"
      >
        Skip to main content
      </a>

      {/* Main Glass Navigation Bar */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Area */}
      <main id="main-content" className="flex-grow">
        {/* 1. Soothing Photo Banner Hero with Crisp Bullet Highlights */}
        <PhotoHero />

        {/* 2. Interactive Persona Switcher (Condensed Bullet Cards) */}
        <PersonaSelector />

        {/* 3. Core Clinical, Allied Health & Home Services (Shortened Bullets) */}
        <ServicesSection />

        {/* 4. Housing & Accommodation Flyer Highlights (Elevated in 2nd Half) */}
        <PropertyShowcase />

        {/* 5. Interactive NDIS Care Hours & Budget Estimator */}
        <CostCalculator />

        {/* 6. NDIS Funding Pathways (Self-Managed, Plan-Managed, HCP) */}
        <NdisSection />

        {/* 7. Townsville & Regional Coverage Area Checker */}
        <AreaChecker />

        {/* 8. Safeguards & Credential Verification */}
        <ComplianceSection />

        {/* 9. Careers Page Module with Transparent Banner & PDF Resume Upload */}
        <CareersSection />

        {/* 10. Direct Online Enquiry & Booking Form */}
        <ContactSection />
      </main>

      {/* Global Glass Footer */}
      <Footer />

      {/* Sticky Mobile/Tablet 1-Tap Quick Action Bar */}
      <QuickActionBar />
    </div>
  );
}

export default App;
