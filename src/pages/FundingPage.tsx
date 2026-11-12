import React from 'react';
import { NdisSection } from '../components/NdisSection.js';
import { ServiceAreasSection } from '../components/ServiceAreasSection.js';
import { ReferralSection } from '../components/ReferralSection.js';
import { SerkoJourneyBanner } from '../components/SerkoJourneyBanner.js';

interface FundingPageProps {
  onNavigate: (pageId: string) => void;
}

export const FundingPage: React.FC<FundingPageProps> = ({ onNavigate }) => {
  return (
    <div className="animate-serko-page-enter">
      {/* 1. NDIS & Funding Pathways with Cyclic Suburb Ticker */}
      <NdisSection />

      {/* 2. North Queensland 6 Service Areas */}
      <ServiceAreasSection />

      {/* 3. Dual Referral Pathways */}
      <ReferralSection />

      {/* 4. Journey Progression to Next Page */}
      <SerkoJourneyBanner
        currentPageIndex={3}
        totalPages={5}
        nextPageId="careers"
        nextPageTitle="05 / Join Our Townsville Team"
        nextPageSubtitle="Explore clinical nursing, allied health, cleaning, and gardening career pathways with direct clinician mentorship."
        onNavigate={onNavigate}
      />
    </div>
  );
};
