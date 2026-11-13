import React, { useState, useEffect, useCallback } from 'react';
import { Navbar } from './components/Navbar.js';
import { Footer } from './components/Footer.js';
import { UnitEnquiryModal } from './components/UnitEnquiryModal.js';

// 5 Dedicated Pages per November 2026 Client Brief
import { HomePage } from './pages/HomePage.js';
import { AboutPage } from './pages/AboutPage.js';
import { ServicesPage } from './pages/ServicesPage.js';
import { ReferralPage } from './pages/ReferralPage.js';
import { CareersPage } from './pages/CareersPage.js';

export function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const [isUnitModalOpen, setIsUnitModalOpen] = useState<boolean>(false);

  // Map URL hash to page ID (supports deep links and browser navigation)
  const getPageFromHash = (): string => {
    const hash = window.location.hash.replace('#/', '').replace('#', '').toLowerCase();
    if (hash === 'about' || hash === 'about-us') return 'about';
    if (hash === 'services') return 'services';
    if (hash === 'referral' || hash === 'refer') return 'referral';
    if (hash === 'careers' || hash === 'jobs') return 'careers';
    if (hash === 'units') {
      setIsUnitModalOpen(true);
      return 'services';
    }
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

  // Fluid Page Transition Navigator
  const handleNavigate = useCallback((pageId: string) => {
    if (pageId === currentPage && !isTransitioning) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    setIsTransitioning(true);

    // Update browser URL without reloading
    const newHash = pageId === 'home' ? '#/' : `#/${pageId}`;
    window.history.pushState(null, '', newHash);

    // Smooth sweep & instant top scroll
    setTimeout(() => {
      setCurrentPage(pageId);
      window.scrollTo({ top: 0, behavior: 'instant' });
    }, 240);

    // Complete transition
    setTimeout(() => {
      setIsTransitioning(false);
    }, 550);
  }, [currentPage, isTransitioning]);

  return (
    <div id="top" className="min-h-screen flex flex-col bg-[#FBF5EA] text-[#1E2B30] relative font-sans">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 bg-[#0A3D47] text-white px-5 py-3 rounded-full font-bold shadow-lg"
      >
        Skip to main content
      </a>

      {/* Main Header with Top Contact Bar */}
      <Navbar 
        currentPage={currentPage} 
        onNavigate={handleNavigate}
        isTransitioning={isTransitioning}
      />

      {/* Smooth Page Transition Curtain */}
      <div 
        className={`fixed inset-0 z-50 pointer-events-none transition-all duration-400 ease-in-out ${
          isTransitioning 
            ? 'opacity-100 backdrop-blur-sm bg-[#0A3D47]/70' 
            : 'opacity-0 backdrop-blur-none bg-transparent'
        }`}
      >
        {isTransitioning && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-[#FBF5EA] border-2 border-[#F4A62A] text-[#0A3D47] text-xs font-bold shadow-2xl">
              <span className="w-2.5 h-2.5 rounded-full bg-[#F4A62A] animate-ping" />
              <span className="font-heading uppercase tracking-widest text-[#0A3D47] font-bold">
                TCH Support Services · Loading
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Main Content: 5 Pages from the Client Brief */}
      <main id="main-content" className="flex-grow relative">
        {currentPage === 'home' && (
          <HomePage 
            onNavigate={handleNavigate} 
            onOpenUnitModal={() => setIsUnitModalOpen(true)} 
          />
        )}
        {currentPage === 'about' && (
          <AboutPage />
        )}
        {currentPage === 'services' && (
          <ServicesPage 
            onNavigate={handleNavigate} 
            onOpenUnitModal={() => setIsUnitModalOpen(true)} 
          />
        )}
        {currentPage === 'referral' && (
          <ReferralPage />
        )}
        {currentPage === 'careers' && (
          <CareersPage />
        )}
      </main>

      {/* Universal Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* 1 & 2-Bedroom Unit Enquiry Modal */}
      <UnitEnquiryModal 
        isOpen={isUnitModalOpen} 
        onClose={() => setIsUnitModalOpen(false)} 
      />
    </div>
  );
}

export default App;
