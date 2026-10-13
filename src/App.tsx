import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar.js';
import { PhotoHero } from './components/PhotoHero.js';
import { ServicesSection } from './components/ServicesSection.js';
import { PropertyShowcase } from './components/PropertyShowcase.js';
import { NdisSection } from './components/NdisSection.js';
import { CareersSection } from './components/CareersSection.js';
import { ContactSection } from './components/ContactSection.js';
import { Footer } from './components/Footer.js';
import { QuickActionBar } from './components/QuickActionBar.js';

export function App() {
  const [activeSection, setActiveSection] = useState('top');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['top', 'services', 'units', 'ndis', 'jobs', 'contact'];
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
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 bg-[#2D6A5D] text-white px-4 py-2 rounded-lg font-bold shadow-lg"
      >
        Skip to main content
      </a>

      {/* Main Navigation Bar */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Area */}
      <main id="main-content" className="flex-grow">
        {/* 1. High-Contrast Photo Banner Hero with Crisp Bullet Highlights */}
        <PhotoHero />

        {/* 2. Core Services: Clinical Nursing, Allied Health & Home Maintenance (Primary Focus #1) */}
        <ServicesSection />

        {/* 3. Townsville 4 Move-In Units & Accommodation Flyer Highlights (Primary Focus #2) */}
        <PropertyShowcase />

        {/* 4. Streamlined NDIS Plan Funding & Regional Coverage Bar */}
        <NdisSection />

        {/* 5. Careers Section with Transparent Banner & PDF Resume Upload */}
        <CareersSection />

        {/* 6. Direct Online Enquiry & Booking Form */}
        <ContactSection />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Sticky Mobile/Tablet 1-Tap Quick Action Bar */}
      <QuickActionBar />
    </div>
  );
}

export default App;
