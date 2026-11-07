import React from 'react';
import { ServicesSection } from '../components/ServicesSection.js';
import { SerkoJourneyBanner } from '../components/SerkoJourneyBanner.js';

interface ServicesPageProps {
  onNavigate: (pageId: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  return (
    <div className="animate-serko-page-enter">
      {/* 1. Core Services Section with Background Motion Depth */}
      <ServicesSection />

      {/* 2. Journey Progression to Next Page */}
      <SerkoJourneyBanner
        currentPageIndex={1}
        totalPages={5}
        nextPageId="units"
        nextPageTitle="03 / 1 & 2-Bedroom Units Immediate"
        nextPageSubtitle="Move-in ready independent living units with air conditioning, step-free ramp access, and parking in Townsville."
        onNavigate={onNavigate}
      />
    </div>
  );
};
