import React, { useState, useEffect, useCallback } from 'react';
import { Navbar } from './components/Navbar.js';
import { Footer } from './components/Footer.js';
import { QuickActionBar } from './components/QuickActionBar.js';
import { SerkoPageDock } from './components/SerkoPageDock.js';

// Dedicated Individual Pages
import { HomePage } from './pages/HomePage.js';
import { ServicesPage } from './pages/ServicesPage.js';
import { UnitsPage } from './pages/UnitsPage.js';
import { FundingPage } from './pages/FundingPage.js';
import { CareersPage } from './pages/CareersPage.js';

export function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  const pages = [
    { id: 'home', name: 'Overview', shortName: 'Home', num: '01' },
    { id: 'services', name: 'Our Services', shortName: 'Services', num: '02' },
    { id: 'units', name: '1 & 2-Bed Units', shortName: 'Units', num: '03' },
    { id: 'funding', name: 'NDIS & Funding', shortName: 'Funding', num: '04' },
    { id: 'careers', name: 'Careers', shortName: 'Careers', num: '05' },
  ];

  // Map URL hash to page ID (supports deep links and browser navigation)
  const getPageFromHash = (): string => {
    const hash = window.location.hash.replace('#/', '').replace('#', '');
    if (hash === 'services') return 'services';
    if (hash === 'units') return 'units';
    if (hash === 'funding' || hash === 'ndis') return 'funding';
    if (hash === 'careers' || hash === 'jobs') return 'careers';
    return 'home';
  };

  // Synchronize on load and on popstate (browser back/forward button)
  useEffect(() => {
    const initialPage = getPageFromHash();
    setCurrentPage(initialPage);

    const handlePopState = () => {
      const page = getPageFromHash();
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'instant' });
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handlePopState);
    };
  }, []);

  // Serko-Style Fluid Page Transition Navigator
  const handleNavigate = useCallback((pageId: string) => {
    if (pageId === currentPage && !isTransitioning) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    setIsTransitioning(true);

    // Update browser URL without reloading
    const newHash = pageId === 'home' ? '#/' : `#/${pageId}`;
    window.history.pushState(null, '', newHash);

    // Step 1: Smooth spatial curtain sweep & instant top scroll
    setTimeout(() => {
      setCurrentPage(pageId);
      window.scrollTo({ top: 0, behavior: 'instant' });
    }, 280);

    // Step 2: Complete transition
    setTimeout(() => {
      setIsTransitioning(false);
    }, 650);
  }, [currentPage, isTransitioning]);

  return (
    <div id="top" className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#182823] relative">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 bg-[#164E43] text-white px-4 py-2 rounded-lg font-bold shadow-lg"
      >
        Skip to main content
      </a>

      {/* Main Executive Glass Navigation Bar */}
      <Navbar 
        currentPage={currentPage} 
        onNavigate={handleNavigate}
        isTransitioning={isTransitioning}
      />

      {/* Serko-Style Spatial Transition Curtain */}
      <div 
        className={`fixed inset-0 z-50 pointer-events-none transition-all duration-500 ease-in-out ${
          isTransitioning 
            ? 'opacity-100 backdrop-blur-md bg-[#09221C]/70' 
            : 'opacity-0 backdrop-blur-none bg-transparent'
        }`}
      >
        {isTransitioning && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-[#081F1A]/95 border border-[#D4A359]/40 text-white text-xs font-bold shadow-2xl">
              <span className="w-2 h-2 rounded-full bg-[#E5B56A] animate-ping" />
              <span className="font-mono uppercase tracking-widest text-[#E5B56A]">
                Transitioning · TCH Studio
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Main Content Area: Dedicated Independent Pages */}
      <main id="main-content" className="flex-grow relative">
        {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
        {currentPage === 'services' && <ServicesPage onNavigate={handleNavigate} />}
        {currentPage === 'units' && <UnitsPage onNavigate={handleNavigate} />}
        {currentPage === 'funding' && <FundingPage onNavigate={handleNavigate} />}
        {currentPage === 'careers' && <CareersPage onNavigate={handleNavigate} />}
      </main>

      {/* Serko-Style Floating Page Stepper Dock */}
      <SerkoPageDock
        currentPageId={currentPage}
        pages={pages}
        onNavigate={handleNavigate}
      />

      {/* Global Footer */}
      <Footer />

      {/* Sticky Mobile/Tablet 1-Tap Quick Action Bar */}
      <QuickActionBar />
    </div>
  );
}

export default App;
