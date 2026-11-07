import React, { useState, useEffect, useCallback } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Home, 
  Check, 
  Phone, 
  Maximize2, 
  X, 
  Sparkles, 
  Wind, 
  ShieldCheck, 
  Car, 
  Accessibility, 
  Calendar,
  Layers,
  CheckCircle2,
  Clock,
  Eye
} from 'lucide-react';

interface Slide {
  src: string;
  title: string;
  tag: string;
  description: string;
}

export const PropertyShowcase: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [modalImage, setModalImage] = useState<string | null>(null);

  const slides: Slide[] = [
    {
      src: './images/units/unit-exterior.jpg',
      title: 'Private Deck & Step-Free Ramp Access',
      tag: 'Exterior & Access',
      description: 'Solid Besser block construction keeps units cool through the tropical build-up, featuring an accessible step-free timber deck.'
    },
    {
      src: './images/units/unit-living.jpg',
      title: 'Air-Conditioned Open Living Area',
      tag: 'Living Space',
      description: 'Plush carpeted living room with ceiling fans, security screens, and abundant natural light.'
    },
    {
      src: './images/units/unit-bedroom.jpg',
      title: 'Comfortable & Quiet Bedroom',
      tag: 'Bedroom',
      description: 'Generous private bedroom with split-system air conditioning and tropical ceiling fans throughout.'
    },
    {
      src: './images/units/unit-robes.jpg',
      title: 'Built-in Robes with Mirrored Doors',
      tag: 'Storage',
      description: 'Full-height built-in storage with mirrored sliding wardrobe doors for modern, clutter-free living.'
    },
    {
      src: './images/units/unit-bathroom.jpg',
      title: 'Modern Bathroom & Glass Shower',
      tag: 'Bathroom',
      description: 'Contemporary tiled bathroom complete with clear glass shower screen, chrome tapware, and step-free layout.'
    }
  ];

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, [slides.length]);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  // Auto-advance slideshow with pause on hover
  useEffect(() => {
    if (!isAutoPlaying || modalImage !== null) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, modalImage, nextSlide]);

  // Keyboard navigation for carousel & modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && modalImage) {
        setModalImage(null);
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [modalImage, nextSlide, prevSlide]);

  const propertyFeatures = [
    { icon: Home, title: '1-Bedroom & 2-Bedroom layouts' },
    { icon: Wind, title: 'Air conditioning & ceiling fans throughout' },
    { icon: Layers, title: 'Built-in robes with mirrored doors' },
    { icon: Sparkles, title: 'Modern bathroom with glass shower' },
    { icon: Home, title: 'Carpeted living areas and bedrooms' },
    { icon: ShieldCheck, title: 'Security screens throughout' },
    { icon: Accessibility, title: 'Step-free deck and ramp access' },
    { icon: Car, title: 'Dedicated off-street parking' },
  ];

  return (
    <section id="units" className="scroll-mt-20 py-20 sm:py-28 relative overflow-hidden bg-[#0A2620] text-white">
      <div id="housing" className="scroll-mt-20"></div>
      
      {/* 1. Dynamic Room Photo Atmospheric Background Layer (Transitions smoothly with active room) */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25 pointer-events-none mix-blend-luminosity scale-105 transition-butterflow duration-1000"
        style={{
          backgroundImage: `url('${slides[currentSlide].src}')`
        }}
      />
      
      {/* 2. Deep Eucalyptus Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A2620] via-[#0E352D]/95 to-[#081F1A] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_20%,rgba(22,78,67,0.35),transparent)] pointer-events-none" />
      <div className="absolute inset-0 pattern-grid-dark opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-[#E5B56A] mb-5 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#E5B56A] animate-pulse"></span>
            <span>1 &amp; 2-Bedroom Units Available Immediately · Townsville</span>
          </div>

          {/* Main Editorial Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight text-white leading-[1.15]">
            One &amp; two-bedroom units,{' '}
            <span className="font-serif italic font-normal text-[#E5B56A] block sm:inline mt-1 sm:mt-0">
              available immediately.
            </span>
          </h2>

          {/* Subheading / Description */}
          <p className="text-base sm:text-lg text-teal-100/90 mt-4 max-w-2xl mx-auto font-normal leading-relaxed">
            Home and living support with units available for participants to live independently. One-bedroom and two-bedroom layouts ready for immediate move-in in Townsville. Besser block construction keeps them cool through the tropical build-up, with air conditioning throughout, carpeted living and bedrooms, and modern glass-screen bathrooms.
          </p>

          {/* Architectural Quick Specs Ribbon */}
          <div className="mt-8 flex flex-wrap justify-center items-center gap-2.5 sm:gap-3 text-xs">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.08] backdrop-blur-sm border border-white/15 text-teal-100 font-medium">
              <Home className="w-3.5 h-3.5 text-[#E5B56A]" />
              <span>1 &amp; 2-Bed Layouts</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.08] backdrop-blur-sm border border-white/15 text-teal-100 font-medium">
              <Wind className="w-3.5 h-3.5 text-[#E5B56A]" />
              <span>Split A/C &amp; Fans</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.08] backdrop-blur-sm border border-white/15 text-teal-100 font-medium">
              <Accessibility className="w-3.5 h-3.5 text-[#E5B56A]" />
              <span>Step-Free Ramp Access</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.08] backdrop-blur-sm border border-white/15 text-teal-100 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-[#E5B56A]" />
              <span>Security Screened</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.08] backdrop-blur-sm border border-white/15 text-teal-100 font-medium">
              <Car className="w-3.5 h-3.5 text-[#E5B56A]" />
              <span>Off-Street Parking</span>
            </div>
          </div>

        </div>

        {/* Main Showcase Layout: 12-Column Architectural Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column (7 cols): Interactive Master Photo Stage */}
          <div 
            className="lg:col-span-7 space-y-4"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {/* Quick Room Selector Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
              {slides.map((s, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setCurrentSlide(idx)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                    currentSlide === idx
                      ? 'bg-[#D4A359] text-[#0A2620] shadow-md font-bold'
                      : 'bg-white/10 text-teal-100/80 hover:bg-white/15 hover:text-white border border-white/10'
                  }`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${currentSlide === idx ? 'bg-[#0A2620]' : 'bg-[#D4A359]'}`} />
                  <span>{s.tag}</span>
                </button>
              ))}
            </div>

            {/* Master Photo Frame */}
            <div className="relative aspect-[16/10] sm:aspect-[16/10] rounded-3xl overflow-hidden bg-[#081F1A] shadow-2xl border-2 border-white/20 group">
              
              {/* Active Image */}
              <img
                src={slides[currentSlide].src}
                alt={slides[currentSlide].title}
                className="w-full h-full object-cover cursor-pointer transition-transform duration-700 group-hover:scale-105"
                onClick={() => setModalImage(slides[currentSlide].src)}
              />

              {/* Top Bar Badges on Image */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[#E5B56A] text-xs font-bold border border-white/15 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E5B56A] animate-ping" />
                  <span>{slides[currentSlide].tag}</span>
                </span>

                <button
                  type="button"
                  onClick={() => setModalImage(slides[currentSlide].src)}
                  className="pointer-events-auto p-2.5 rounded-xl bg-black/60 backdrop-blur-md text-white hover:bg-black/90 hover:text-[#E5B56A] transition-all border border-white/20 flex items-center gap-1.5 text-xs font-medium"
                  aria-label="View Fullscreen"
                >
                  <Maximize2 className="w-4 h-4 text-[#E5B56A]" />
                  <span className="hidden sm:inline">Fullscreen</span>
                </button>
              </div>

              {/* Floating Architectural Information Plaque (Bottom) */}
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7 bg-gradient-to-t from-black/95 via-black/75 to-transparent backdrop-blur-xs text-white">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <h3 className="font-bold text-lg sm:text-2xl text-white leading-tight">
                      {slides[currentSlide].title}
                    </h3>
                    <p className="text-xs sm:text-sm text-teal-100/90 leading-relaxed max-w-xl">
                      {slides[currentSlide].description}
                    </p>
                  </div>

                  {/* Room Index Indicator */}
                  <div className="hidden sm:flex flex-col items-end flex-shrink-0">
                    <span className="text-xl font-bold text-[#E5B56A] tracking-wider">
                      0{currentSlide + 1}
                    </span>
                    <span className="text-[10px] uppercase tracking-wider text-teal-200/70 font-semibold">
                      of 0{slides.length}
                    </span>
                  </div>
                </div>
              </div>

              {/* Prev & Next Floating Navigation Buttons */}
              <button
                type="button"
                onClick={prevSlide}
                className="btn-press absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/90 backdrop-blur-md text-[#0A2620] hover:bg-white hover:scale-110 transition-all shadow-xl border border-black/10 focus:outline-none"
                aria-label="Previous Slide"
              >
                <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
              </button>

              <button
                type="button"
                onClick={nextSlide}
                className="btn-press absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/90 backdrop-blur-md text-[#0A2620] hover:bg-white hover:scale-110 transition-all shadow-xl border border-black/10 focus:outline-none"
                aria-label="Next Slide"
              >
                <ChevronRight className="w-5 h-5 stroke-[2.5]" />
              </button>
            </div>

            {/* Interactive Thumbnail Gallery Strip */}
            <div className="grid grid-cols-5 gap-2.5 sm:gap-3">
              {slides.map((s, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setCurrentSlide(idx)}
                  className={`group relative aspect-[16/11] rounded-2xl overflow-hidden border-2 transition-all ${
                    currentSlide === idx
                      ? 'border-[#D4A359] shadow-lg ring-2 ring-[#D4A359]/50 scale-[1.02]'
                      : 'border-white/15 opacity-65 hover:opacity-100 hover:border-white/40'
                  }`}
                >
                  <img src={s.src} alt={s.title} className="w-full h-full object-cover" />
                  <div className={`absolute inset-0 transition-opacity ${
                    currentSlide === idx ? 'bg-transparent' : 'bg-black/30 group-hover:bg-transparent'
                  }`} />
                  <span className="absolute bottom-1 inset-x-1 text-[9px] sm:text-[10px] font-bold text-white text-center truncate bg-black/60 backdrop-blur-xs rounded px-1 py-0.5">
                    {s.tag}
                  </span>
                </button>
              ))}
            </div>

            {/* Visual Slide Progress Bar */}
            <div className="flex items-center justify-between text-xs text-teal-200/70 pt-1">
              <span className="flex items-center gap-1.5 text-[11px]">
                <Eye className="w-3.5 h-3.5 text-[#E5B56A]" />
                <span>Click image or expand button for high-res view</span>
              </span>
              <div className="flex items-center gap-1.5">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-1.5 rounded-full transition-all ${
                      currentSlide === idx ? 'w-6 bg-[#D4A359]' : 'w-2 bg-white/30 hover:bg-white/60'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

          </div>

          {/* Right Column (5 cols): Living Features & Tenancy Dossier Card (No AI Box) */}
          <div className="lg:col-span-5 bg-[#FCFAF7] border border-[#E2DBD0] text-[#182823] p-6 sm:p-7 rounded-2xl shadow-xl space-y-6">
            
            {/* Dossier Header */}
            <div className="border-b border-[#E8E2D7] pb-4">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] font-mono uppercase tracking-widest font-bold text-[#164E43] block">
                  Flyer Highlights
                </span>
                <span className="px-2.5 py-0.5 rounded-md bg-[#FAF3E7] text-[#9E6C1F] text-[11px] font-bold border border-[#E8D1A7]">
                  Move-In Ready
                </span>
              </div>
              <h3 className="font-bold text-2xl text-[#0E352D] tracking-tight leading-tight">
                1 &amp; 2-Bedroom Units Available Immediately
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 mt-2 font-medium leading-relaxed">
                Home and living support with one-bedroom and two-bedroom units available immediately for participants to live independently.
              </p>
            </div>

            {/* 8 Crisp Features Matrix (Open Architectural Checklist - No Boxes in Boxes) */}
            <div>
              <h4 className="text-[10px] font-mono uppercase tracking-widest font-bold text-[#164E43] mb-3">
                What's Included &amp; Built-In
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3">
                {propertyFeatures.map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-2.5 text-xs text-stone-800 font-medium">
                    <div className="w-5 h-5 rounded-md bg-[#164E43]/10 text-[#164E43] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <span className="leading-snug">{feat.title}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* NDIS Participants Welcome Banner */}
            <div className="p-4 rounded-xl bg-[#EFF5F0] border border-[#CFE0D3] text-xs text-emerald-950 space-y-1">
              <div className="flex items-center gap-2 font-bold text-[#0E352D]">
                <Check className="w-4 h-4 text-emerald-600 stroke-[3]" />
                <span>NDIS Participants Welcome</span>
              </div>
              <p className="text-stone-600 leading-relaxed text-[11px] sm:text-xs">
                Home and living support, personal care, clinical nursing, cleaning, and yard maintenance can be arranged before moving in.
              </p>
            </div>

            {/* Direct Booking & Inspection Card */}
            <div className="p-5 rounded-xl bg-[#0E352D] text-white space-y-3.5 shadow-md">
              <div className="flex justify-between items-center">
                <span className="text-xs text-emerald-200 font-semibold uppercase tracking-wider">
                  Inspections &amp; Move-In
                </span>
                <span className="px-2.5 py-0.5 rounded-md bg-[#D4A359] text-[#0A2620] text-[11px] font-bold">
                  By Appointment
                </span>
              </div>

              <p className="text-xs text-teal-100/90 leading-relaxed">
                Call Alan directly for a walk-through inspection and tenancy arrangements.
              </p>

              <div className="pt-1 flex flex-col sm:flex-row gap-2.5">
                <a
                  href="tel:0431430905"
                  className="btn-press flex-1 inline-flex items-center justify-center gap-2 bg-[#D4A359] hover:bg-[#C28F42] text-[#0A2620] font-bold text-xs sm:text-sm py-3 px-4 rounded-xl shadow-md transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#0A2620]" />
                  <span>0431 430 905</span>
                </a>

                <a
                  href="#top"
                  className="btn-press flex-1 inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm py-3 px-4 rounded-xl border border-white/20 transition-colors"
                >
                  <Calendar className="w-4 h-4 text-[#E5B56A]" />
                  <span>Request Callback</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Enhanced Lightbox Modal */}
      {modalImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/95 backdrop-blur-md transition-opacity animate-in fade-in"
          onClick={() => setModalImage(null)}
        >
          <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            {/* Top Modal Controls */}
            <div className="flex items-center justify-between pb-3 text-white">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-[#D4A359] text-[#0A2620] text-xs font-bold uppercase tracking-wider">
                  {slides[currentSlide].tag}
                </span>
                <h4 className="font-bold text-sm sm:text-base text-white">
                  {slides[currentSlide].title}
                </h4>
              </div>

              <button
                type="button"
                onClick={() => setModalImage(null)}
                className="p-2 rounded-full bg-white/10 hover:bg-white/30 text-white transition-all flex items-center gap-1.5 text-xs font-bold"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
                <span className="hidden sm:inline">Close</span>
              </button>
            </div>

            {/* Modal Image Box */}
            <div className="relative rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-black">
              <img 
                src={modalImage} 
                alt="Unit Full View" 
                className="w-full h-auto max-h-[80vh] object-contain mx-auto" 
              />
            </div>

            {/* Bottom Caption */}
            <p className="text-xs sm:text-sm text-teal-100/90 text-center mt-3 max-w-2xl mx-auto">
              {slides[currentSlide].description}
            </p>
          </div>
        </div>
      )}

    </section>
  );
};
