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
    { icon: Wind, title: 'Air conditioning & ceiling fans throughout' },
    { icon: Layers, title: 'Built-in robes with mirrored doors' },
    { icon: Sparkles, title: 'Modern bathroom with glass shower' },
    { icon: Home, title: 'Carpeted living areas and bedrooms' },
    { icon: ShieldCheck, title: 'Security screens throughout' },
    { icon: Accessibility, title: 'Step-free deck and ramp access' },
    { icon: Car, title: 'Dedicated off-street parking' },
    { icon: Trees, title: 'Low maintenance, peaceful yard' },
  ];

  return (
    <section id="housing" className="py-14 sm:py-20 relative overflow-hidden">
      
      {/* Background Aurora Glow */}
      <div className="aurora-orb-1 top-10 right-[-100px] opacity-40"></div>
      <div className="aurora-orb-gold bottom-10 left-[-80px] opacity-35"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/15 text-gold-dark border border-gold/30 text-xs font-sans font-bold uppercase tracking-wider mb-3">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse"></span>
            <span>4 Units Available Now · Townsville</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-sans text-teal-ink tracking-tight">
            Four tidy units,{' '}
            <span className="relative whitespace-nowrap text-teal">
              ready to move into
              <span className="absolute left-0 right-0 -bottom-1 h-3 bg-gold/30 rounded-full -z-10"></span>
            </span>
            .
          </h2>

          <p className="font-serif text-base sm:text-lg text-muted mt-3 leading-relaxed">
            Four tidy units have just come up in Townsville. Besser block construction keeps them cool through the build-up, with air conditioning throughout, carpeted living and bedrooms, and modern glass-screen bathrooms.
          </p>
        </div>

        {/* Ultra-Modern Glass Showcase Card */}
        <div className="glass-card p-4 sm:p-8 lg:p-10 border border-white/90 shadow-glass">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Interactive Slideshow */}
            <div 
              className="lg:col-span-7 relative group"
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              {/* Slideshow Frame */}
              <div className="relative aspect-[16/10] sm:aspect-[16/10] rounded-2xl overflow-hidden bg-teal-ink/10 shadow-xl border border-white/60">
                <img
                  src={slides[currentSlide].src}
                  alt={slides[currentSlide].title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105 cursor-pointer"
                  onClick={() => setModalImage(slides[currentSlide].src)}
                />

                {/* Floating Glass Overlay with Slide Info */}
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 bg-gradient-to-t from-teal-ink/90 via-teal-ink/60 to-transparent backdrop-blur-xs text-white">
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-gold text-ink text-[11px] font-sans font-bold uppercase tracking-wider mb-1">
                    {slides[currentSlide].tag}
                  </span>
                  <h3 className="font-sans font-bold text-base sm:text-xl text-white leading-tight">
                    {slides[currentSlide].title}
                  </h3>
                  <p className="font-serif text-xs sm:text-sm text-teal-100/90 mt-1 line-clamp-2">
                    {slides[currentSlide].description}
                  </p>
                </div>

                {/* Lightbox Maximize Icon */}
                <button
                  type="button"
                  onClick={() => setModalImage(slides[currentSlide].src)}
                  className="absolute top-3 right-3 p-2 rounded-xl bg-teal-ink/60 backdrop-blur-md text-white hover:bg-teal-ink/90 transition-all border border-white/20"
                  aria-label="View Fullscreen"
                >
                  <Maximize2 className="w-4 h-4 text-gold" />
                </button>

                {/* Prev & Next Floating Buttons */}
                <button
                  type="button"
                  onClick={prevSlide}
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/70 backdrop-blur-md text-teal-ink hover:bg-white hover:scale-110 transition-all shadow-md border border-white/80"
                  aria-label="Previous Slide"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <button
                  type="button"
                  onClick={nextSlide}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/70 backdrop-blur-md text-teal-ink hover:bg-white hover:scale-110 transition-all shadow-md border border-white/80"
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
                        ? 'border-gold shadow-md ring-2 ring-gold/40 scale-105'
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
                      currentSlide === idx ? 'w-6 bg-gold' : 'w-1.5 bg-teal/20'
                    }`}
                    aria-label={`Slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Right Column: Features & Inspection Call to Action */}
            <div className="lg:col-span-5 space-y-6">
              
              <div>
                <span className="text-xs uppercase tracking-widest font-sans font-bold text-sage-700 block mb-1">
                  At a Glance
                </span>
                <h3 className="font-sans font-bold text-2xl text-teal-ink">
                  Designed for Cool, Safe &amp; Independent Living
                </h3>
              </div>

              {/* 8 Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {propertyFeatures.map((feat, fIdx) => {
                  const Icon = feat.icon;
                  return (
                    <div 
                      key={fIdx} 
                      className="p-2.5 rounded-xl bg-white/70 border border-teal/10 flex items-center gap-2.5 text-xs font-sans text-teal-ink font-medium hover:bg-white/95 transition-all"
                    >
                      <div className="w-6 h-6 rounded-lg bg-teal-50 text-teal flex items-center justify-center flex-shrink-0">
                        <Icon className="w-3.5 h-3.5 text-teal" />
                      </div>
                      <span className="leading-snug">{feat.title}</span>
                    </div>
                  );
                })}
              </div>

              {/* NDIS Participants Welcome Banner */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-teal-50 to-sage-pale/60 border border-teal/20 space-y-1.5">
                <div className="flex items-center gap-2 text-teal-ink font-sans font-bold text-sm">
                  <Check className="w-4 h-4 text-teal stroke-[3]" />
                  <span>NDIS Participants Welcome</span>
                </div>
                <p className="font-serif text-xs text-muted leading-relaxed">
                  Our own team can take care of <strong>personal care, clinical nursing, cleaning and the yard</strong>, so your supports are sorted before you move in.
                </p>
              </div>

              {/* Direct Booking & Inspection Card */}
              <div className="p-4 sm:p-5 rounded-2xl bg-teal-ink text-white shadow-lg space-y-3 border border-teal-700">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-sage-pale font-sans font-semibold uppercase tracking-wider">
                    Rent, Address &amp; Inspections
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-gold text-ink text-[11px] font-sans font-bold">
                    By Appointment
                  </span>
                </div>

                <div className="font-sans text-sm text-teal-100">
                  Speak directly with Alan to book a walk-through or arrange tenancy agreements.
                </div>

                <div className="pt-1 flex flex-col sm:flex-row gap-2.5">
                  <a
                    href="tel:0431430905"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-gold to-gold-dark text-teal-ink font-sans font-bold text-sm py-2.5 px-4 rounded-xl shadow-md hover:brightness-105 transition-all"
                  >
                    <Phone className="w-4 h-4 text-teal-ink" />
                    <span>0431 430 905</span>
                  </a>

                  <a
                    href="#contact"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-sans font-semibold text-sm py-2.5 px-4 rounded-xl border border-white/20 transition-all"
                  >
                    <Calendar className="w-4 h-4 text-gold" />
                    <span>Request Details</span>
                  </a>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Lightbox Modal */}
      {modalImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-teal-ink/90 backdrop-blur-md"
          onClick={() => setModalImage(null)}
        >
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              onClick={() => setModalImage(null)}
              className="absolute -top-12 right-0 p-2 rounded-full bg-white/20 text-white hover:bg-white/40 font-sans text-sm font-bold transition-all"
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
