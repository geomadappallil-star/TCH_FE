import React, { useState } from 'react';
import { Calculator, ArrowRight, Check, HelpCircle, FileSpreadsheet } from 'lucide-react';

export const CostCalculator: React.FC = () => {
  const [nursingHours, setNursingHours] = useState<number>(2);
  const [personalHours, setPersonalHours] = useState<number>(4);
  const [cleaningHours, setCleaningHours] = useState<number>(2);
  const [yardHours, setYardHours] = useState<number>(2);

  // Standard indicative hourly guide rates aligned with NDIS benchmark ceilings
  const NURSING_RATE = 115;
  const PERSONAL_RATE = 62;
  const CLEANING_RATE = 54;
  const YARD_RATE = 56;

  const totalWeekly = 
    (nursingHours * NURSING_RATE) +
    (personalHours * PERSONAL_RATE) +
    (cleaningHours * CLEANING_RATE) +
    (yardHours * YARD_RATE);

  const totalHours = nursingHours + personalHours + cleaningHours + yardHours;

  return (
    <section className="py-14 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="glass-card p-6 sm:p-10 border border-white/90 shadow-glass">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Sliders */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="flex items-center gap-2 text-xs font-sans font-bold tracking-widest text-sage-700 uppercase">
                <Calculator className="w-4 h-4 text-gold" />
                <span>Interactive Care Budget Estimator</span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-bold font-sans text-teal-ink">
                  Estimate your weekly support hours &amp; plan usage
                </h3>
                <p className="font-serif text-sm sm:text-base text-muted mt-1">
                  Adjust the sliders to plan weekly clinical visits, personal routines, and home maintenance under self-managed or plan-managed funding.
                </p>
              </div>

              <div className="space-y-5 pt-2">
                
                {/* Clinical Nursing Slider */}
                <div className="bg-white/70 p-4 rounded-xl border border-teal/15">
                  <div className="flex justify-between items-center mb-1.5 font-sans">
                    <span className="font-bold text-sm text-teal-ink">Clinical Nursing (RN / EN)</span>
                    <span className="font-bold text-teal text-sm bg-teal-50 px-2 py-0.5 rounded-lg border border-teal/15">
                      {nursingHours} {nursingHours === 1 ? 'hr' : 'hrs'} / week
                    </span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="15"
                    step="1"
                    value={nursingHours}
                    onChange={(e) => setNursingHours(Number(e.target.value))}
                    className="w-full accent-teal h-2 bg-teal-100 rounded-lg cursor-pointer"
                  />
                  <p className="text-xs text-muted mt-1">Wound dressing, complex meds, PEG feeds, catheter flushing</p>
                </div>

                {/* Personal Care Slider */}
                <div className="bg-white/70 p-4 rounded-xl border border-teal/15">
                  <div className="flex justify-between items-center mb-1.5 font-sans">
                    <span className="font-bold text-sm text-teal-ink">Personal Care &amp; Daily Living</span>
                    <span className="font-bold text-teal text-sm bg-teal-50 px-2 py-0.5 rounded-lg border border-teal/15">
                      {personalHours} {personalHours === 1 ? 'hr' : 'hrs'} / week
                    </span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="25"
                    step="1"
                    value={personalHours}
                    onChange={(e) => setPersonalHours(Number(e.target.value))}
                    className="w-full accent-teal h-2 bg-teal-100 rounded-lg cursor-pointer"
                  />
                  <p className="text-xs text-muted mt-1">Showering assistance, morning routine, mobility &amp; meals</p>
                </div>

                {/* Domestic Cleaning Slider */}
                <div className="bg-white/70 p-4 rounded-xl border border-teal/15">
                  <div className="flex justify-between items-center mb-1.5 font-sans">
                    <span className="font-bold text-sm text-teal-ink">House Cleaning &amp; Laundry</span>
                    <span className="font-bold text-teal text-sm bg-teal-50 px-2 py-0.5 rounded-lg border border-teal/15">
                      {cleaningHours} {cleaningHours === 1 ? 'hr' : 'hrs'} / week
                    </span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="10"
                    step="1"
                    value={cleaningHours}
                    onChange={(e) => setCleaningHours(Number(e.target.value))}
                    className="w-full accent-teal h-2 bg-teal-100 rounded-lg cursor-pointer"
                  />
                  <p className="text-xs text-muted mt-1">Sanitising kitchen &amp; bathrooms, floors, linen wash</p>
                </div>

                {/* Yard Maintenance Slider */}
                <div className="bg-white/70 p-4 rounded-xl border border-teal/15">
                  <div className="flex justify-between items-center mb-1.5 font-sans">
                    <span className="font-bold text-sm text-teal-ink">Yard &amp; Garden Maintenance</span>
                    <span className="font-bold text-teal text-sm bg-teal-50 px-2 py-0.5 rounded-lg border border-teal/15">
                      {yardHours} {yardHours === 1 ? 'hr' : 'hrs'} / week
                    </span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="10"
                    step="1"
                    value={yardHours}
                    onChange={(e) => setYardHours(Number(e.target.value))}
                    className="w-full accent-teal h-2 bg-teal-100 rounded-lg cursor-pointer"
                  />
                  <p className="text-xs text-muted mt-1">Mowing, whipper snipping, palm frond removal, trip hazard clearance</p>
                </div>

              </div>
            </div>

            {/* Right Column: Dynamic Glass Summary Card */}
            <div className="lg:col-span-5">
              <div className="glass-card-dark bg-teal-ink/90 text-white p-6 sm:p-8 rounded-2xl shadow-xl space-y-5 border border-teal-500/20">
                
                <div className="flex items-center justify-between border-b border-teal-800 pb-4">
                  <span className="text-xs uppercase tracking-widest font-sans font-bold text-sage-pale">
                    Indicative Plan Overview
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-gold text-ink text-xs font-sans font-bold">
                    {totalHours} Total Hours/wk
                  </span>
                </div>

                <div>
                  <span className="text-xs font-sans text-teal-200">Estimated Weekly NDIS Budget Usage:</span>
                  <div className="text-3xl sm:text-4xl font-bold font-sans text-gold mt-1">
                    ${totalWeekly.toLocaleString()} <span className="text-sm font-normal text-teal-200">/ week</span>
                  </div>
                  <div className="text-xs text-teal-300 font-sans mt-0.5">
                    Approx. ${(totalWeekly * 4.33).toFixed(0)} per calendar month
                  </div>
                </div>

                <div className="space-y-2 py-2 border-y border-teal-800/80 text-xs font-sans">
                  <div className="flex justify-between text-teal-100">
                    <span>Clinical Nursing ({nursingHours}h)</span>
                    <span className="font-semibold">${nursingHours * NURSING_RATE}/wk</span>
                  </div>
                  <div className="flex justify-between text-teal-100">
                    <span>Personal Care ({personalHours}h)</span>
                    <span className="font-semibold">${personalHours * PERSONAL_RATE}/wk</span>
                  </div>
                  <div className="flex justify-between text-teal-100">
                    <span>Domestic Cleaning ({cleaningHours}h)</span>
                    <span className="font-semibold">${cleaningHours * CLEANING_RATE}/wk</span>
                  </div>
                  <div className="flex justify-between text-teal-100">
                    <span>Yard Care ({yardHours}h)</span>
                    <span className="font-semibold">${yardHours * YARD_RATE}/wk</span>
                  </div>
                </div>

                <div className="text-xs text-teal-200 font-sans space-y-1.5">
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                    <span>Invoiced directly to your plan manager</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                    <span>Itemized line items matching NDIS price guide</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                    <span>No lock-in contracts or exit penalty fees</span>
                  </div>
                </div>

                <a
                  href={`#contact`}
                  className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-gold to-gold-dark text-teal-ink font-sans font-bold text-sm py-3.5 px-4 rounded-xl shadow-md hover:brightness-105 transition-all"
                >
                  <FileSpreadsheet className="w-4 h-4" />
                  <span>Request Custom Service Agreement</span>
                </a>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
