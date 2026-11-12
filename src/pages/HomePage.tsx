import React from 'react';
import { PhotoHero } from '../components/PhotoHero.js';
import { AboutSection } from '../components/AboutSection.js';
import { SerkoRouteVisualizer } from '../components/SerkoRouteVisualizer.js';
import { ReferralSection } from '../components/ReferralSection.js';
import { SerkoJourneyBanner } from '../components/SerkoJourneyBanner.js';

interface HomePageProps {
  onNavigate: (pageId: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="animate-serko-page-enter">
      {/* 1. Hero Overview Stage */}
      <PhotoHero onNavigate={onNavigate} />

      {/* 2. About Us, Mission, Vision & Values */}
      <AboutSection />

      {/* 3. Serko-Style Interactive North Queensland Route Visualizer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SerkoRouteVisualizer />
      </div>

      {/* 4. Dual Referral Pathways (Splose + General In-App) */}
      <ReferralSection />

      {/* 5. Serko Journey Progression to Next Page */}
      <SerkoJourneyBanner
        currentPageIndex={0}
        totalPages={5}
        nextPageId="services"
        nextPageTitle="02 / Our Core Capabilities"
        nextPageSubtitle="High-standard clinical nursing, 2-week FCA reports, allied health, and home care in Townsville."
        onNavigate={onNavigate}
      />
    </div>
  );
};
