import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar.js';
import { VideoHero } from './components/VideoHero.js';
import { CareVideoShowcase } from './components/CareVideoShowcase.js';
import { PersonaSelector } from './components/PersonaSelector.js';
import { ServicesSection } from './components/ServicesSection.js';
import { CostCalculator } from './components/CostCalculator.js';
import { NdisSection } from './components/NdisSection.js';
import { AreaChecker } from './components/AreaChecker.js';
import { ComplianceSection } from './components/ComplianceSection.js';
import { StaffingSection } from './components/StaffingSection.js';
import { CareersSection } from './components/CareersSection.js';
import { ContactSection } from './components/ContactSection.js';
import { PropertyShowcase } from './components/PropertyShowcase.js';
import { Footer } from './components/Footer.js';
import { QuickActionBar } from './components/QuickActionBar.js';

export function App() {
  const [activeSection, setActiveSection] = useState('top');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['top', 'ndis', 'nursing', 'allied-health', 'home', 'area', 'jobs', 'contact'];
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
    <div id="top" className="min-h-screen flex flex-col bg-[#F6F4EE] text-[#17241F]">
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
        {/* 1. Cinematic Video Hero with Open-Licensed Nurse & Elder Video */}
        <VideoHero />

        {/* 2. Visual Care Story & Video Showcase */}
        <CareVideoShowcase />

        {/* 3. Interactive Persona Switcher (Participant, Coordinator, Provider, Jobseeker) */}
        <PersonaSelector />

        {/* 4. Complete Services Showcase (Clinical Nursing, Allied Health, Home & Yard) */}
        <ServicesSection />

        {/* 5. Interactive NDIS Care Hours & Budget Estimator */}
        <CostCalculator />

        {/* 6. NDIS Funding Pathways (Self-Managed, Plan-Managed, HCP) */}
        <NdisSection />

        {/* 7. Townsville & Regional Coverage Area Checker */}
        <AreaChecker />

        {/* 8. Safeguards & Credential Verification */}
        <ComplianceSection />

        {/* 9. Multidisciplinary Allied Health & Nursing Portal */}
        <StaffingSection />

        {/* 10. Local Healthcare Careers & Onboarding */}
        <CareersSection />

        {/* 11. Housing & Accommodation Showcase */}
        <PropertyShowcase />

        {/* 12. Full Online Contact & Referral Booking Form */}
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
