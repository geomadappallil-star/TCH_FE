import React, { useState, useEffect } from 'react';
import { BackgroundMotion } from './components/BackgroundMotion.js';
import { Navbar } from './components/Navbar.js';
import { HomeHero } from './components/HomeHero.js';
import { AboutSection } from './components/AboutSection.js';
import { ServicesDetailSection } from './components/ServicesDetailSection.js';
import { ReferralSection } from './components/ReferralSection.js';
import { CareersSectionNew } from './components/CareersSectionNew.js';
import { ChatBannerAndFooter } from './components/ChatBannerAndFooter.js';
import { QuickActionBar } from './components/QuickActionBar.js';

export function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'referral', 'careers'];
      const scrollPosition = window.scrollY + 240;

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
    <div className="relative min-h-screen flex flex-col bg-[#FBF5EA] text-[#1E2B30] overflow-x-hidden selection:bg-[#F4A62A]/40 selection:text-[#0A3D47]">
      {/* 1. Ambient Moving Graphics Background Layer */}
      <BackgroundMotion />

      {/* Skip to Content for Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 bg-[#0B5563] text-white px-4 py-2 rounded-lg font-bold shadow-lg"
      >
        Skip to main content
      </a>

      {/* 2. Glassmorphic Navigation Bar */}
      <Navbar activeSection={activeSection} />

      {/* 3. Main Content Sections */}
      <main id="main-content" className="flex-grow relative z-10 pb-16 lg:pb-0">
        
        {/* Home: Hero, Highlights, Service Overview, Why Choose TCH, Service Areas */}
        <HomeHero />

        {/* About Us: Story, Mission & Vision, 6 Values, Diversity & Indigenous Acknowledgement */}
        <AboutSection />

        {/* Services: In-depth NDIS, Allied Health (FCA), Nursing, Cleaning & Gardening */}
        <ServicesDetailSection />

        {/* Make a Referral: Option 1 Splose link & Option 2 Direct Interactive Referral */}
        <ReferralSection />

        {/* Careers: Local hiring benefits, 5 Open positions & EOI form */}
        <CareersSectionNew />

      </main>

      {/* 4. "Let's have a chat" Banner + Deep Teal Global Footer */}
      <ChatBannerAndFooter />

      {/* 5. Mobile Quick Action Bar (1-Tap Call & Referral) */}
      <QuickActionBar />
    </div>
  );
}

export default App;
