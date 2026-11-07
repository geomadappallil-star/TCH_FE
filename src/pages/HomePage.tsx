import React from 'react';
import { PhotoHero } from '../components/PhotoHero.js';
import { SerkoRouteVisualizer } from '../components/SerkoRouteVisualizer.js';
import { SerkoJourneyBanner } from '../components/SerkoJourneyBanner.js';

interface HomePageProps {
  onNavigate: (pageId: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="animate-serko-page-enter">
      {/* 1. Hero Overview Stage */}
      <PhotoHero />

      {/* 2. Serko-Style Interactive North Queensland Route Visualizer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SerkoRouteVisualizer />
      </div>

      {/* 3. Serko Journey Progression to Next Page */}
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
