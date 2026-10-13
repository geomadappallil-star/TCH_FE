import React, { useState } from 'react';
import { 
  Activity, 
  Stethoscope, 
  Pill, 
  Syringe, 
  ClipboardList, 
  ShieldAlert, 
  Home, 
  Trees, 
  Sparkles, 
  Trash2, 
  CloudRain, 
  Droplets, 
  Bed, 
  Shield, 
  UserCheck, 
  Building,
  CheckCircle,
  Clock,
  ArrowRight
} from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'nursing' | 'home'>('all');

  const nursingServices = [
    {
      title: 'Wound & Post-Surgical Care',
      icon: Activity,
      desc: 'Dressing changes, surgical wound care & tropical wound reviews across Townsville.'
    },
    {
      title: 'Medication Management',
      icon: Pill,
      desc: 'Webster-pack monitoring, insulin titration, injections & documented GP logs.'
    },
    {
      title: 'Enteral Feeding & PEG Care',
      icon: Syringe,
      desc: 'PEG/NG feeding, stoma site hygiene, pump calibration & carer delegation training.'
    },
    {
      title: 'Continence & Catheter Care',
      icon: Droplets,
      desc: 'IDC/SPC catheter changes, bowel regimes & respectful continence assessments.'
    },
    {
      title: 'Complex High-Intensity Supports',
      icon: ShieldAlert,
      desc: 'Diabetes protocols, seizure management & nurse-governed clinical interventions.'
    },
    {
      title: 'Assessments & Care Plans',
      icon: ClipboardList,
      desc: 'Health assessments, mealtime plans & clinical reports for NDIS plan reviews.'
    },
    {
      title: 'Personal Care & Daily Living',
      icon: UserCheck,
      desc: 'Dignified showering, dressing, transfers & morning/evening home routines.'
    },
    {
      title: 'Carer Training & Delegation',
      icon: ShieldCheck,
      desc: 'Task delegation so regular support workers safely handle clinical routines.'
    },
    {
      title: 'Rapid Hospital Discharge',
      icon: Clock,
      desc: 'Fast transition from Townsville University Hospital with nurses in 24–48 hours.'
    }
  ];

  const homeServices = [
    {
      title: 'Lawn Mowing & Edging',
      icon: Trees,
      desc: 'Fortnightly wet season runs, edge trimming & paths blown clean.'
    },
    {
      title: 'Garden & Yard Tidy-Ups',
      icon: Trees,
      desc: 'Whipper snipping, weeding, tree hedging & clearing tropical growth.'
    },
    {
      title: 'Green Waste & Rubbish Removal',
      icon: Trash2,
      desc: 'Heavy palms, branches and debris hauled away to keep verges tidy and safe.'
    },
    {
      title: 'Gutters & Storm Season Prep',
      icon: CloudRain,
      desc: 'Gutter clearing & securing loose items before tropical storm season.'
    },
    {
      title: 'High-Pressure Surface Washing',
      icon: Droplets,
      desc: 'Concrete footpaths & patios stripped of dangerous slippery black mould.'
    },
    {
      title: 'Regular House Cleaning',
      icon: Sparkles,
      desc: 'Sanitised bathrooms, kitchens, vacuuming & mopping on regular weekly rounds.'
    },
    {
      title: 'Laundry, Linen & Bed Changes',
      icon: Bed,
      desc: 'Washing, line drying, folding & fitted sheet changes for mobility comfort.'
    },
    {
      title: 'Deep & Spring Cleans',
      icon: Home,
      desc: 'Ovens, windows, tracks & ceiling fans reset before tenancy/NDIS reviews.'
    },
    {
      title: 'Trip Hazard & Safety Audits',
      icon: Shield,
      desc: 'Clearing obstructed walkways & checking non-slip ramp safety.'
    }
  ];

  function ShieldCheck(props: any) {
    return <Shield {...props} />;
  }

  return (
    <div className="space-y-16">
      
      {/* NURSING SECTION */}
      <section id="nursing" className="scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <div className="flex items-center gap-2 text-xs font-sans font-bold tracking-widest text-sage-700 uppercase mb-2">
                <span className="w-6 h-0.5 bg-gold"></span>
                <span>Clinical Nursing at Home</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-sans text-teal-ink">
                Clinical care at home, without the hospital trip
              </h2>
              <p className="text-muted font-serif text-base sm:text-lg max-w-2xl mt-2">
                Our registered and enrolled nurses handle the complex clinical tasks so participants and families can enjoy life. Every visit is coordinated with your GP and allied health team.
              </p>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-sans font-semibold text-teal hover:text-teal-deep border-b border-teal/30 hover:border-teal pb-1"
            >
              <span>Book a free clinical consultation</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Grid of Nursing Glass Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {nursingServices.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <div key={i} className="glass-card p-6 border border-white/80 shadow-glass flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal/15 flex items-center justify-center text-teal mb-4">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-sans font-bold text-base sm:text-lg text-teal-ink mb-2">
                      {svc.title}
                    </h3>
                    <p className="font-serif text-xs sm:text-sm text-muted leading-relaxed">
                      {svc.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-teal/10 flex items-center justify-between text-xs font-sans text-teal">
                    <span className="font-medium">Plan &amp; Self-Managed</span>
                    <a href="#contact" className="hover:underline font-bold">Enquire &rarr;</a>
                  </div>
                </div>
              );
            })}
          </div>

          {/* 3 Step Clinical Care Process (Glass Banner) */}
          <div className="mt-12 glass-card p-6 sm:p-8 border border-white/90 shadow-glass">
            <h3 className="text-lg font-sans font-bold text-teal-ink mb-6 text-center">
              How our clinical home nursing starts in 3 straightforward steps:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
              <div className="p-4 rounded-xl bg-white/60 border border-teal/10 relative">
                <span className="text-2xl font-sans font-bold text-gold block mb-1">01</span>
                <h4 className="font-sans font-bold text-teal-ink text-base mb-1">Tell us what is needed</h4>
                <p className="font-serif text-xs sm:text-sm text-muted">
                  Call or email us with the situation, funding type, and start date. No endless administrative forms to chase.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/60 border border-teal/10 relative">
                <span className="text-2xl font-sans font-bold text-gold block mb-1">02</span>
                <h4 className="font-sans font-bold text-teal-ink text-base mb-1">Free in-home assessment</h4>
                <p className="font-serif text-xs sm:text-sm text-muted">
                  A registered nurse visits, formulates the care plan, and issues a transparent quote matched to NDIS line items within 2 business days.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/60 border border-teal/10 relative">
                <span className="text-2xl font-sans font-bold text-gold block mb-1">03</span>
                <h4 className="font-sans font-bold text-teal-ink text-base mb-1">Care starts, notes follow</h4>
                <p className="font-serif text-xs sm:text-sm text-muted">
                  We assign a consistent nurse, execute the service agreement, and send thorough case notes to your coordinator.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* HOME & YARD SECTION */}
      <section id="home" className="scroll-mt-24 py-12 bg-white/30 border-y border-teal/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <div className="flex items-center gap-2 text-xs font-sans font-bold tracking-widest text-sage-700 uppercase mb-2">
                <span className="w-6 h-0.5 bg-gold"></span>
                <span>Gardening &amp; Cleaning</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-sans text-teal-ink">
                A yard you can enjoy, and a home that stays safe
              </h2>
              <p className="text-muted font-serif text-base sm:text-lg max-w-2xl mt-2">
                In tropical North Queensland, a lawn gets out of hand in a fortnight and mould appears in days. Our home and yard crew keeps both under control on a schedule that fits your plan.
              </p>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-sans font-semibold text-teal hover:text-teal-deep border-b border-teal/30 hover:border-teal pb-1"
            >
              <span>Get a yard or clean quote</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Grid of Home & Yard Glass Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {homeServices.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <div key={i} className="glass-card p-6 border border-white/80 shadow-glass flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-sage-pale/60 border border-teal/15 flex items-center justify-center text-teal mb-4">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-sans font-bold text-base sm:text-lg text-teal-ink mb-2">
                      {svc.title}
                    </h3>
                    <p className="font-serif text-xs sm:text-sm text-muted leading-relaxed">
                      {svc.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-teal/10 flex items-center justify-between text-xs font-sans text-teal">
                    <span className="font-medium">One-off or Recurring</span>
                    <a href="#contact" className="hover:underline font-bold">Book Visit &rarr;</a>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Why a nursing provider mows lawns callout */}
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center glass-card p-6 sm:p-8 border border-white/90 shadow-glass">
            <div className="lg:col-span-7 space-y-3">
              <span className="text-xs uppercase tracking-wider font-sans font-bold text-gold-dark">
                The Townsville Difference
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-sans text-teal-ink">
                Why does a nursing provider also mow lawns?
              </h3>
              <p className="font-serif text-sm sm:text-base text-muted leading-relaxed">
                Because the two challenges usually arrive together. A participant who cannot easily manage their garden often struggles with safe bathroom access, and a slippery mossy footpath is an injury waiting to happen for someone we already treat for wound care.
              </p>
              <p className="font-serif text-sm sm:text-base text-muted leading-relaxed">
                Having the same trusted local team handle both means <strong>one point of contact</strong>, <strong>one transparent invoice</strong>, and workers who immediately notice when a client’s health or mobility needs have changed.
              </p>
            </div>

            <div className="lg:col-span-5 bg-white/70 p-5 rounded-2xl border border-teal/15 space-y-2.5">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-sans font-medium text-teal-ink">
                <CheckCircle className="w-4 h-4 text-teal flex-shrink-0" />
                <span>One-off catch-up tidy or regular fortnightly runs</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-sans font-medium text-teal-ink">
                <CheckCircle className="w-4 h-4 text-teal flex-shrink-0" />
                <span>Properties quoted in person before anyone starts</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-sans font-medium text-teal-ink">
                <CheckCircle className="w-4 h-4 text-teal flex-shrink-0" />
                <span>The same familiar worker who knows your gates and pets</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-sans font-medium text-teal-ink">
                <CheckCircle className="w-4 h-4 text-teal flex-shrink-0" />
                <span>Private self-funded clients welcome without any plan needed</span>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
