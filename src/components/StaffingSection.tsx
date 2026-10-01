import React, { useState } from 'react';
import { Users, Clock, ShieldCheck, FileCheck, ArrowRight, AlertCircle, CheckCircle2 } from 'lucide-react';

export const StaffingSection: React.FC = () => {
  const [shiftRole, setShiftRole] = useState('Registered Nurse (RN)');
  const [urgency, setUrgency] = useState<'routine' | 'urgent_24h' | 'emergency_sameday'>('urgent_24h');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const staffingRoles = [
    { title: 'Registered Nurses', desc: 'Complex wound care, medication delegation, catheter and bowel care, PEG feeding, and clinical assessments.' },
    { title: 'Enrolled Nurses', desc: 'Medication-endorsed ENs for regular package visits, residential cover, and overnight care.' },
    { title: 'Assistants in Nursing', desc: 'Personal care routines, mealtime assistance, and mobility support supervised under RN plans.' },
    { title: 'Disability Support Workers', desc: 'Experienced local workers for community access, complex behaviours, active overnights, and sleepovers.' },
    { title: 'Domestic Cleaners', desc: 'Vetted housekeeping staff for participants on your books, scheduled on one-off or regular rosters.' },
    { title: 'Gardeners & Grounds Staff', desc: 'Lawn mowing, hedging, green waste, and property tidy crews for your existing housing stock.' },
    { title: 'Short-Notice Shift Cover', desc: 'Same-day and next-day emergency call-outs with an honest, immediate yes or no.' },
    { title: 'Block Placements', desc: 'Consistent worker assignments for weeks or months while you recruit permanent staff.' }
  ];

  return (
    <section id="staffing" className="py-16 md:py-24 bg-gradient-to-br from-teal-900 via-teal-800 to-teal-ink text-white relative overflow-hidden">
      
      {/* Background Lighting */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sage/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-sans font-bold tracking-widest text-sage-pale uppercase mb-2">
            <Users className="w-4 h-4 text-gold" />
            <span>Healthcare Provider Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-sans text-white">
            Subcontract the shift. You keep the registration and the participant.
          </h2>
          <p className="text-base sm:text-lg text-teal-100 font-serif mt-3 leading-relaxed">
            Sick leave, a new participant starting on Monday, or a difficult run of nights while you recruit — we supply qualified staff under your service agreement and clinical governance. Subcontracting to an unregistered provider is fully permitted under NDIS regulations.
          </p>
        </div>

        {/* Roles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {staffingRoles.map((role, idx) => (
            <div key={idx} className="glass-card-dark p-5 border border-white/15 hover:border-gold/40">
              <h3 className="font-sans font-bold text-base text-white mb-1.5 flex items-center justify-between">
                <span>{role.title}</span>
                <span className="text-gold text-xs">&rarr;</span>
              </h3>
              <p className="font-serif text-xs sm:text-sm text-teal-100/80 leading-relaxed">
                {role.desc}
              </p>
            </div>
          ))}
        </div>

        {/* 2 Column: Shift Process & Rapid Request Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Why Providers Choose TCH */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="text-2xl font-bold font-sans text-white">
              From shift request to confirmed placement
            </h3>
            
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3.5">
                <span className="w-8 h-8 rounded-full bg-gold/20 text-gold font-sans font-bold flex items-center justify-center flex-shrink-0 text-sm border border-gold/40">
                  01
                </span>
                <div>
                  <h4 className="font-sans font-bold text-white text-base">Send us the shift details</h4>
                  <p className="font-serif text-xs sm:text-sm text-teal-100/80">Date, time, suburb, participant profile, and specific clinical competencies needed.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <span className="w-8 h-8 rounded-full bg-gold/20 text-gold font-sans font-bold flex items-center justify-center flex-shrink-0 text-sm border border-gold/40">
                  02
                </span>
                <div>
                  <h4 className="font-sans font-bold text-white text-base">We confirm a name &amp; credentials</h4>
                  <p className="font-serif text-xs sm:text-sm text-teal-100/80">You receive worker profile, AHPRA/NDIS screening checks, and CPR verification before accepting.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <span className="w-8 h-8 rounded-full bg-gold/20 text-gold font-sans font-bold flex items-center justify-center flex-shrink-0 text-sm border border-gold/40">
                  03
                </span>
                <div>
                  <h4 className="font-sans font-bold text-white text-base">They work under your plan</h4>
                  <p className="font-serif text-xs sm:text-sm text-teal-100/80">Notes returned in your exact template, and we invoice at an agreed transparent hourly rate.</p>
                </div>
              </div>
            </div>

            <div className="pt-3 flex items-center gap-3 text-xs text-teal-200">
              <ShieldCheck className="w-4 h-4 text-gold flex-shrink-0" />
              <span>Full Public Liability &amp; Professional Indemnity coverage on file</span>
            </div>
          </div>

          {/* Right Column: Fast Provider Shift Request Card */}
          <div className="lg:col-span-6">
            <div className="glass-card-dark p-6 sm:p-8 rounded-2xl border border-white/20 shadow-2xl space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <h4 className="font-sans font-bold text-lg text-white">Emergency or Planned Shift Request</h4>
                <span className="px-2.5 py-0.5 rounded-full bg-gold/20 text-gold text-xs font-sans font-semibold border border-gold/30">
                  Providers Only
                </span>
              </div>

              <p className="text-xs text-teal-100/80 font-serif">
                Registered providers can submit shifts directly. Alan reviews incoming shifts immediately.
              </p>

              <div className="space-y-3 font-sans text-xs">
                <div>
                  <label className="block text-teal-200 uppercase tracking-wider mb-1 font-semibold">
                    Role Needed:
                  </label>
                  <select
                    value={shiftRole}
                    onChange={(e) => setShiftRole(e.target.value)}
                    className="w-full bg-teal-950/70 border border-teal-600/40 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-gold"
                  >
                    <option>Registered Nurse (RN)</option>
                    <option>Enrolled Nurse (EN)</option>
                    <option>Assistant in Nursing (AIN)</option>
                    <option>Disability Support Worker</option>
                    <option>Domestic Cleaner</option>
                    <option>Yard Maintenance</option>
                  </select>
                </div>

                <div>
                  <label className="block text-teal-200 uppercase tracking-wider mb-1 font-semibold">
                    Urgency Level:
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      type="button"
                      onClick={() => setUrgency('emergency_sameday')}
                      className={`py-2 px-2 rounded-lg border text-center font-bold ${
                        urgency === 'emergency_sameday' 
                          ? 'bg-rose-500/30 border-rose-400 text-rose-200' 
                          : 'bg-white/5 border-white/10 text-teal-200'
                      }`}
                    >
                      Same Day
                    </button>
                    <button
                      type="button"
                      onClick={() => setUrgency('urgent_24h')}
                      className={`py-2 px-2 rounded-lg border text-center font-bold ${
                        urgency === 'urgent_24h' 
                          ? 'bg-gold/30 border-gold text-gold-light' 
                          : 'bg-white/5 border-white/10 text-teal-200'
                      }`}
                    >
                      Next 24h
                    </button>
                    <button
                      type="button"
                      onClick={() => setUrgency('routine')}
                      className={`py-2 px-2 rounded-lg border text-center font-bold ${
                        urgency === 'routine' 
                          ? 'bg-teal-500/30 border-teal-300 text-teal-100' 
                          : 'bg-white/5 border-white/10 text-teal-200'
                      }`}
                    >
                      Next Week+
                    </button>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="#contact"
                    className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-gold to-gold-dark text-teal-ink font-sans font-bold text-sm py-3 px-4 rounded-xl shadow-md hover:brightness-105 transition-all"
                  >
                    <span>Complete Shift Booking with Alan &rarr;</span>
                  </a>
                </div>

                <div className="text-center pt-1">
                  <span className="text-[11px] text-teal-300">
                    Urgent weekend shifts? Call Alan directly on{' '}
                    <a href="tel:0431430905" className="text-white underline font-bold">
                      0431 430 905
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
