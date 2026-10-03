import React from 'react';
import { MaintenanceNavbar } from './components/MaintenanceNavbar.js';
import { MaintenanceHero } from './components/MaintenanceHero.js';
import { Footer } from './components/Footer.js';
import { QuickActionBar } from './components/QuickActionBar.js';

export function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F6F4EE] text-[#17241F]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 bg-teal text-white px-4 py-2 rounded-lg font-sans font-bold shadow-lg"
      >
        Skip to main content
      </a>

      {/* Glass Header (Matching Brand & Theme) */}
      <MaintenanceNavbar />

      {/* Main Maintenance Glass Experience */}
      <main id="main-content" className="flex-grow">
        <MaintenanceHero />
      </main>

      {/* Glass Footer (Matching Brand & Theme) */}
      <Footer />

      {/* Mobile/Tablet Sticky Quick Action Bar */}
      <QuickActionBar />
    </div>
  );
}

export default App;
