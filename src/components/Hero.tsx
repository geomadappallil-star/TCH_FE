import React from 'react';
import { Phone, ArrowRight, ShieldCheck, HeartHandshake, Home, Users, CheckCircle2 } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden aurora-bg">
      {/* Background Aurora Orbs for Glass Refraction */}
      <div className="aurora-orb-1 top-[-80px] left-[-80px] opacity-60"></div>
      <div className="aurora-orb-2 top-[120px] right-[-100px] opacity-50"></div>
      <div className="aurora-orb-gold bottom-[-40px] left-[35%] opacity-40"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Main Hero Content */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Glass Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-teal/20 text-xs sm:text-sm font-sans font-semibold text-teal-800 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse"></span>
              <span>Townsville &amp; North Queensland NDIS &amp; Healthcare</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-sans text-teal-ink tracking-tight leading-[1.12]">
              Nursing, home and yard care that comes to{' '}
              <span className="relative whitespace-nowrap text-teal">
                your front door
                <span className="absolute left-0 right-0 -bottom-1.5 h-3 bg-gold/30 rounded-full -z-10"></span>
              </span>
              .
            </h1>

            {/* Lede text */}
            <p className="text-base sm:text-lg md:text-xl text-muted font-serif leading-relaxed max-w-2xl">
              TCH Support Services is a dedicated Townsville team delivering clinical nursing, gardening, cleaning, and agency shift cover. We work directly with self-managed and plan-managed NDIS participants, and subcontract qualified staff to registered providers.
            </p>

            {/* Action Buttons with Glass finish */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="tel:0431430905"
                className="inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-teal to-teal-deep text-white font-sans font-semibold text-base px-6 py-3.5 rounded-full shadow-glass-teal hover:shadow-xl hover:-translate-y-0.5 transition-all"
              >
                <Phone className="w-5 h-5 text-gold" />
                <span>Call Alan: 0431 430 905</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 glass-card border border-teal/25 text-teal-ink font-sans font-semibold text-base px-6 py-3.5 rounded-full hover:bg-white/90 hover:-translate-y-0.5 transition-all"
              >
                <span>Make an Enquiry</span>
                <ArrowRight className="w-4 h-4 text-teal" />
              </a>
            </div>

            {/* Credential Tags */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs sm:text-sm font-sans font-medium text-teal-900">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal flex-shrink-0" />
                <span>AHPRA Registered Nurses</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal flex-shrink-0" />
                <span>NDIS Self &amp; Plan Managed</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal flex-shrink-0" />
                <span>Subcontracting to Providers</span>
              </div>
            </div>

          </div>

          {/* Glass Hero Visual Card & Quick Feature Highlights */}
          <div className="lg:col-span-5">
            <div className="relative">
              
              {/* Outer Glow Halo */}
              <div className="absolute inset-0 bg-gradient-to-tr from-teal/20 via-sage/20 to-gold/20 rounded-3xl blur-2xl transform scale-105 -z-10"></div>

              {/* Main Frosted Glass Card */}
              <div className="glass-card p-6 sm:p-8 border border-white/80 shadow-glass space-y-6">
                
                {/* Header inside glass card */}
                <div className="flex items-center justify-between border-b border-teal/10 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-teal-50 border border-teal/20 flex items-center justify-center text-teal">
                      <HeartHandshake className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="font-sans font-bold text-lg text-teal-ink">Townsville Front-Door Care</h3>
                      <p className="text-xs text-muted font-sans">Reliable, clinical &amp; domestic supports</p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-gold/15 text-gold-dark text-xs font-sans font-bold border border-gold/30">
                    Locally Run
                  </span>
                </div>

                {/* 3 Core Care Pillars */}
                <div className="space-y-3.5">
                  <a href="#nursing" className="block p-3.5 rounded-xl bg-white/60 hover:bg-white/95 border border-teal/10 hover:border-teal/30 transition-all group">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-teal-100/60 text-teal group-hover:bg-teal group-hover:text-white transition-colors">
                        <ShieldCheck className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-sans font-semibold text-sm text-teal-ink group-hover:text-teal flex items-center justify-between">
                          <span>Clinical Nursing at Home</span>
                          <span className="text-xs text-teal font-normal group-hover:translate-x-0.5 transition-transform">&rarr;</span>
                        </div>
                        <p className="text-xs text-muted font-serif mt-0.5">Wounds, medications, PEG feeds, catheters &amp; rapid hospital discharges.</p>
                      </div>
                    </div>
                  </a>

                  <a href="#home" className="block p-3.5 rounded-xl bg-white/60 hover:bg-white/95 border border-teal/10 hover:border-teal/30 transition-all group">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-sage-pale text-teal group-hover:bg-sage group-hover:text-white transition-colors">
                        <Home className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-sans font-semibold text-sm text-teal-ink group-hover:text-teal flex items-center justify-between">
                          <span>Tropical Yard &amp; Domestic Cleaning</span>
                          <span className="text-xs text-teal font-normal group-hover:translate-x-0.5 transition-transform">&rarr;</span>
                        </div>
                        <p className="text-xs text-muted font-serif mt-0.5">Lawn mowing, high-pressure washing, storm prep &amp; regular home cleans.</p>
                      </div>
                    </div>
                  </a>

                  <a href="#staffing" className="block p-3.5 rounded-xl bg-white/60 hover:bg-white/95 border border-teal/10 hover:border-teal/30 transition-all group">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-gold/15 text-gold-dark group-hover:bg-gold group-hover:text-ink transition-colors">
                        <Users className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-sans font-semibold text-sm text-teal-ink group-hover:text-teal flex items-center justify-between">
                          <span>Agency Staffing for Providers</span>
                          <span className="text-xs text-teal font-normal group-hover:translate-x-0.5 transition-transform">&rarr;</span>
                        </div>
                        <p className="text-xs text-muted font-serif mt-0.5">Subcontracted RNs, ENs, AINs and support workers for emergency &amp; block shifts.</p>
                      </div>
                    </div>
                  </a>
                </div>

                {/* Direct Coordinator Quote Box */}
                <div className="p-3.5 rounded-xl bg-teal-50/70 border border-teal/15 text-xs text-teal-900 font-sans flex items-center justify-between">
                  <span>Need an emergency RN shift covered?</span>
                  <a href="#contact" className="font-bold text-teal hover:text-teal-deep underline">
                    Request Cover &rarr;
                  </a>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
