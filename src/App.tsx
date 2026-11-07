import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar.js';
import { PhotoHero } from './components/PhotoHero.js';
import { ServicesSection } from './components/ServicesSection.js';
import { PropertyShowcase } from './components/PropertyShowcase.js';
import { NdisSection } from './components/NdisSection.js';
import { CareersSection } from './components/CareersSection.js';
import { Footer } from './components/Footer.js';
import { QuickActionBar } from './components/QuickActionBar.js';

export function App() {
  const [activeSection, setActiveSection] = useState('top');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['top', 'services', 'units', 'ndis', 'jobs'];
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
    <div id="top" className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#182823]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 bg-[#164E43] text-white px-4 py-2 rounded-lg font-bold shadow-lg"
      >
        Skip to main content
      </a>

      {/* Main Navigation Bar */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Area: Alternating Human-Crafted Banners */}
      <main id="main-content" className="flex-grow">
        {/* 1. [DEEP EUCALYPTUS] High-Contrast Photo Hero with Real Healthcare Consultation & Quick Callback Card */}
        <PhotoHero />

        {/* 2. [WARM PAPER] Core Clinical, Allied Health & Home Services with Tropical Garden Wash */}
        <ServicesSection />

        {/* 3. [DEEP EUCALYPTUS] Townsville Move-In Units Photo Showcase & Flyer Highlights */}
        <PropertyShowcase />

        {/* 4. [WARM PAPER] NDIS Plan Funding Pathways & Suburb Coverage Strip */}
        <NdisSection />

        {/* 5. [DEEP EUCALYPTUS] Careers Section with Clinical Team Background & PDF Resume Upload */}
        <CareersSection />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Sticky Mobile/Tablet 1-Tap Quick Action Bar */}
      <QuickActionBar />
    </div>
  );
}

export default App;
