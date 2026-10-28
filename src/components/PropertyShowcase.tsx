import React, { useState, useEffect } from 'react';
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
  Trees, 
  Accessibility, 
  Calendar,
  Layers,
  ArrowRight
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

  // Auto-advance slideshow
  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, slides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

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
    <section id="units" className="scroll-mt-20 py-16 sm:py-24 relative overflow-hidden bg-[#163932] text-white">
      <div id="housing" className="scroll-mt-20"></div>
      
      {/* Background Banner Photo with Townsville Exterior Wash */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15 pointer-events-none mix-blend-luminosity"
        style={{
          backgroundImage: `url('./images/units/unit-exterior.jpg')`
        }}
      />
      
      {/* Deep Eucalyptus Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#163932] via-[#1A453C] to-[#163932] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold uppercase tracking-wider text-[#D4A359] mb-3">
            <span className="w-2 h-2 rounded-full bg-[#D4A359] animate-pulse"></span>
            <span>1 &amp; 2-Bedroom Units Available Immediately · Townsville</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            One &amp; two-bedroom units,{' '}
            <span className="text-[#D4A359]">
              available immediately.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-teal-100 mt-3 max-w-2xl mx-auto font-normal leading-relaxed">
            Home and living support with units available for participants to live independently. One-bedroom and two-bedroom layouts ready for immediate move-in in Townsville. Besser block construction keeps them cool through the tropical build-up, with air conditioning throughout, carpeted living and bedrooms, and modern glass-screen bathrooms.
          </p>
        </div>

        {/* Main Showcase Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Interactive Slideshow */}
          <div 
            className="lg:col-span-7 relative group"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {/* Slideshow Frame */}
            <div className="relative aspect-[16/10] sm:aspect-[16/10] rounded-3xl overflow-hidden bg-black/40 shadow-2xl border-2 border-white/20">
              <img
                src={slides[currentSlide].src}
                alt={slides[currentSlide].title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105 cursor-pointer"
                onClick={() => setModalImage(slides[currentSlide].src)}
              />

              {/* Floating Overlay with Slide Info */}
              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6 bg-gradient-to-t from-black/90 via-black/60 to-transparent backdrop-blur-xs text-white">
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#D4A359] text-[#163932] text-[11px] font-bold uppercase tracking-wider mb-1.5">
                  {slides[currentSlide].tag}
                </span>
                <h3 className="font-bold text-base sm:text-xl text-white leading-tight">
                  {slides[currentSlide].title}
                </h3>
                <p className="text-xs sm:text-sm text-teal-100 mt-1 line-clamp-2">
                  {slides[currentSlide].description}
                </p>
              </div>

              {/* Lightbox Maximize Icon */}
              <button
                type="button"
                onClick={() => setModalImage(slides[currentSlide].src)}
                className="absolute top-3.5 right-3.5 p-2 rounded-xl bg-black/50 backdrop-blur-md text-white hover:bg-black/80 transition-all border border-white/20"
                aria-label="View Fullscreen"
              >
                <Maximize2 className="w-4 h-4 text-[#D4A359]" />
              </button>

              {/* Prev & Next Floating Buttons */}
              <button
                type="button"
                onClick={prevSlide}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/80 backdrop-blur-md text-[#163932] hover:bg-white hover:scale-110 transition-all shadow-md"
                aria-label="Previous Slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                type="button"
                onClick={nextSlide}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/80 backdrop-blur-md text-[#163932] hover:bg-white hover:scale-110 transition-all shadow-md"
                aria-label="Next Slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Thumbnails Strip */}
            <div className="grid grid-cols-5 gap-2 sm:gap-3 mt-3 sm:mt-4">
              {slides.map((s, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setCurrentSlide(idx)}
                  className={`relative aspect-[16/10] rounded-xl overflow-hidden border-2 transition-all ${
                    currentSlide === idx
                      ? 'border-[#D4A359] shadow-md ring-2 ring-[#D4A359]/50 scale-105'
                      : 'border-transparent opacity-60 hover:opacity-100 hover:scale-102'
                  }`}
                >
                  <img src={s.src} alt={s.title} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            {/* Progress Indicator Dots */}
            <div className="flex justify-center items-center gap-1.5 mt-3">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-1.5 rounded-full transition-all ${
                    currentSlide === idx ? 'w-6 bg-[#D4A359]' : 'w-1.5 bg-white/30'
                  }`}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right Column: Features & Inspection Card (High Contrast White Card) */}
          <div className="lg:col-span-5 bg-white text-[#192B27] p-6 sm:p-8 rounded-3xl shadow-2xl border border-white space-y-5">
            
            <div>
              <span className="text-xs uppercase tracking-widest font-bold text-[#2D6A5D] block mb-1">
                Flyer Highlights
              </span>
              <h3 className="font-bold text-xl sm:text-2xl text-[#163932]">
                1 &amp; 2-Bedroom Units Available Immediately
              </h3>
              <p className="text-xs text-[#5C726B] mt-1 font-medium">
                Home and living support with one-bedroom and two-bedroom units available immediately for participants to live independently.
              </p>
            </div>

            {/* 8 Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {propertyFeatures.map((feat, fIdx) => {
                const Icon = feat.icon;
                return (
                  <div 
                    key={fIdx} 
                    className="p-2.5 rounded-xl bg-[#F8F7F3] border border-gray-200 flex items-center gap-2.5 text-xs text-[#163932] font-semibold"
                  >
                    <div className="w-6 h-6 rounded-lg bg-[#2D6A5D]/10 text-[#2D6A5D] flex items-center justify-center flex-shrink-0">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <span className="leading-snug">{feat.title}</span>
                  </div>
                );
              })}
            </div>

            {/* NDIS Participants Welcome Banner */}
            <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-950 space-y-1">
              <div className="flex items-center gap-2 font-bold text-[#163932]">
                <Check className="w-4 h-4 text-emerald-600 stroke-[3]" />
                <span>NDIS Participants Welcome</span>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Home and living support, personal care, clinical nursing, cleaning, and yard maintenance can be arranged before moving in.
              </p>
            </div>

            {/* Direct Booking & Inspection Card */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#163932] text-white space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-xs text-emerald-200 font-semibold uppercase tracking-wider">
                  Inspections &amp; Move-In
                </span>
                <span className="px-2 py-0.5 rounded-full bg-[#D4A359] text-[#163932] text-[11px] font-bold">
                  By Appointment
                </span>
              </div>

              <p className="text-xs text-teal-100">
                Call Alan directly for a walk-through inspection and tenancy arrangements.
              </p>

              <div className="pt-1 flex flex-col sm:flex-row gap-2.5">
                <a
                  href="tel:0431430905"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-[#D4A359] hover:bg-[#c2934a] text-[#163932] font-bold text-xs sm:text-sm py-2.5 px-4 rounded-xl shadow-md transition-all"
                >
                  <Phone className="w-4 h-4 text-[#163932]" />
                  <span>0431 430 905</span>
                </a>

                <a
                  href="#top"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm py-2.5 px-4 rounded-xl border border-white/20 transition-all"
                >
                  <Calendar className="w-4 h-4 text-[#D4A359]" />
                  <span>Request Callback</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Lightbox Modal */}
      {modalImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
          onClick={() => setModalImage(null)}
        >
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              onClick={() => setModalImage(null)}
              className="absolute -top-12 right-0 p-2 rounded-full bg-white/20 text-white hover:bg-white/40 text-sm font-bold transition-all"
            >
              <X className="w-6 h-6" />
            </button>
            <img 
              src={modalImage} 
              alt="Unit Full View" 
              className="w-full h-auto max-h-[85vh] object-contain rounded-2xl shadow-2xl border border-white/20" 
            />
          </div>
        </div>
      )}

    </section>
  );
};
