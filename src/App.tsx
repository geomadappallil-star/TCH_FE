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
    <div id="top" className="min-h-screen flex flex-col bg-[#F8F7F3] text-[#192B27]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 bg-[#2D6A5D] text-white px-4 py-2 rounded-lg font-bold shadow-lg"
      >
        Skip to main content
      </a>

      {/* Main Navigation Bar */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Area: Alternating Background Banners */}
      <main id="main-content" className="flex-grow">
        {/* 1. [DARK BANNER] High-Contrast Photo Hero with Quick Callback Card */}
        <PhotoHero />

        {/* 2. [LIGHT BANNER] Core Clinical, Allied Health & Home Services */}
        <ServicesSection />

        {/* 3. [DARK BANNER] Townsville 4 Move-In Units Photo Showcase & Flyer Highlights */}
        <PropertyShowcase />

        {/* 4. [LIGHT BANNER] NDIS Plan Funding Pathways & Suburb Coverage Strip */}
        <NdisSection />

        {/* 5. [DARK BANNER] Careers Section with Mentorship Prospects & PDF Resume Upload */}
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
