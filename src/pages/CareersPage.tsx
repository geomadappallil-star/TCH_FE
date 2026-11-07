import React from 'react';
import { CareersSection } from '../components/CareersSection.js';
import { SerkoJourneyBanner } from '../components/SerkoJourneyBanner.js';

interface CareersPageProps {
  onNavigate: (pageId: string) => void;
}

export const CareersPage: React.FC<CareersPageProps> = ({ onNavigate }) => {
  return (
    <div className="animate-serko-page-enter">
      {/* 1. Careers & Recruitment Console */}
      <CareersSection />

      {/* 2. Journey Progression: Loop back to Home */}
      <SerkoJourneyBanner
        currentPageIndex={4}
        totalPages={5}
        nextPageId="home"
        nextPageTitle="01 / Return to Overview & Intake"
        nextPageSubtitle="Back to homepage overview, clinical route telemetry, and quick callback request desk."
        onNavigate={onNavigate}
      />
    </div>
  );
};
