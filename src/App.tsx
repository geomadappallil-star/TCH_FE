import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar.js';
import { Hero } from './components/Hero.js';
import { PersonaSelector } from './components/PersonaSelector.js';
import { ServicesSection } from './components/ServicesSection.js';
import { CostCalculator } from './components/CostCalculator.js';
import { NdisSection } from './components/NdisSection.js';
import { StaffingSection } from './components/StaffingSection.js';
import { ComplianceSection } from './components/ComplianceSection.js';
import { AreaChecker } from './components/AreaChecker.js';
import { CareersSection } from './components/CareersSection.js';
import { ContactSection } from './components/ContactSection.js';
import { Footer } from './components/Footer.js';
import { QuickActionBar } from './components/QuickActionBar.js';

export function App() {
  const [activeSection, setActiveSection] = useState('ndis');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['ndis', 'nursing', 'home', 'staffing', 'area', 'jobs', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#F6F4EE] text-[#17241F]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 bg-teal text-white px-4 py-2 rounded-lg font-sans font-bold shadow-lg"
      >
        Skip to main content
      </a>

      {/* Glass Header */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Flow */}
      <main id="main-content" className="flex-grow">
        <Hero />
        <PersonaSelector />
        <ServicesSection />
        <CostCalculator />
        <NdisSection />
        <StaffingSection />
        <ComplianceSection />
        <AreaChecker />
        <CareersSection />
        <ContactSection />
      </main>

      {/* Glass Footer */}
      <Footer />

      {/* Mobile/Tablet Sticky Action Bar */}
      <QuickActionBar />
    </div>
  );
}

export default App;
