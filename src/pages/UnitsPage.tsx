import React from 'react';
import { PropertyShowcase } from '../components/PropertyShowcase.js';
import { ReferralSection } from '../components/ReferralSection.js';
import { SerkoJourneyBanner } from '../components/SerkoJourneyBanner.js';

interface UnitsPageProps {
  onNavigate: (pageId: string) => void;
}

export const UnitsPage: React.FC<UnitsPageProps> = ({ onNavigate }) => {
  return (
    <div className="animate-serko-page-enter">
      {/* 1. Interactive Architectural Units Showcase */}
      <PropertyShowcase />

      {/* 2. Enquire / Referral Intake */}
      <ReferralSection />

      {/* 3. Journey Progression to Next Page */}
      <SerkoJourneyBanner
        currentPageIndex={2}
        totalPages={5}
        nextPageId="funding"
        nextPageTitle="04 / Funding Pathways & Coverage"
        nextPageSubtitle="Plan-managed, self-managed NDIS, VHC, and private funding with daily route coverage across 10+ suburbs."
        onNavigate={onNavigate}
      />
    </div>
  );
};
