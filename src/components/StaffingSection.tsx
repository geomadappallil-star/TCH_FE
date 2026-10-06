import React, { useState } from 'react';
import { Users, Clock, ShieldCheck, FileCheck, ArrowRight, AlertCircle, CheckCircle2 } from 'lucide-react';

export const StaffingSection: React.FC = () => {
  const [serviceRole, setServiceRole] = useState('Occupational Therapist (OT)');
  const [urgency, setUrgency] = useState<'routine' | 'urgent_24h' | 'emergency_sameday'>('routine');

  const alliedHealthRoles = [
    { title: 'Occupational Therapy', desc: 'Functional capacity assessments (FCA), assistive technology prescription, home modifications, and sensory supports.' },
    { title: 'Physiotherapy', desc: 'Mobility rehabilitation, balance training, falls prevention programs, pain management, and personalized exercise plans.' },
    { title: 'Clinical Nursing', desc: 'Complex wound care, medication governance, catheter and bowel management, PEG feeding, and clinical assessments.' },
    { title: 'Psychology & PBS', desc: 'Evidence-based psychological interventions, emotional well-being, coping strategies, and positive behaviour support.' },
    { title: 'Plan Review Reports', desc: 'Comprehensive multidisciplinary clinical reports and justification for NDIS plan reviews and funding renewals.' },
    { title: 'NDIS Everyday Supports', desc: 'Personal care routines, meal preparation, community access, respite, transport, and daily living skills.' },
    { title: 'House Cleaning', desc: 'Vetted domestic housekeeping, laundry and linen service, spring cleans, and hygienic home upkeep.' },
    { title: 'Gardening & Yard Care', desc: 'Lawn mowing, tropical yard tidy-ups, green waste removal, and wet-season storm gutter clearing.' }
  ];

  return (
    <section id="allied-health" className="py-16 md:py-24 bg-gradient-to-br from-teal-900 via-teal-800 to-teal-ink text-white relative overflow-hidden">
      
      {/* Background Lighting */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sage/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-sans font-bold tracking-widest text-sage-pale uppercase mb-2">
            <Users className="w-4 h-4 text-gold" />
            <span>Allied Health &amp; Nursing Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-sans text-white">
            Support at home, delivered by a qualified local team.
          </h2>
          <p className="text-base sm:text-lg text-teal-100 font-serif mt-3 leading-relaxed">
            From clinical nursing to occupational therapy, physiotherapy, and psychology — our multidisciplinary team coordinates closely with participants, families, and support coordinators across Townsville, Ingham, and Charters Towers.
          </p>
        </div>

        {/* Roles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {alliedHealthRoles.map((role, idx) => (
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

        {/* 2 Column: Care Process & Rapid Referral Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Why Providers & Participants Choose TCH */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="text-2xl font-bold font-sans text-white">
              From initial referral to ongoing care &amp; reports
            </h3>
            
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3.5">
                <span className="w-8 h-8 rounded-full bg-gold/20 text-gold font-sans font-bold flex items-center justify-center flex-shrink-0 text-sm border border-gold/40">
                  01
                </span>
                <div>
                  <h4 className="font-sans font-bold text-white text-base">Send us the referral details</h4>
                  <p className="font-serif text-xs sm:text-sm text-teal-100/80">Participant goals, NDIS plan details, suburb, and specific allied health or nursing disciplines needed.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <span className="w-8 h-8 rounded-full bg-gold/20 text-gold font-sans font-bold flex items-center justify-center flex-shrink-0 text-sm border border-gold/40">
                  02
                </span>
                <div>
                  <h4 className="font-sans font-bold text-white text-base">We confirm clinician match &amp; intake</h4>
                  <p className="font-serif text-xs sm:text-sm text-teal-100/80">Prompt response with practitioner profiles, AHPRA credentials, and verified NDIS worker screening.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <span className="w-8 h-8 rounded-full bg-gold/20 text-gold font-sans font-bold flex items-center justify-center flex-shrink-0 text-sm border border-gold/40">
                  03
                </span>
                <div>
                  <h4 className="font-sans font-bold text-white text-base">Therapy delivery &amp; reporting</h4>
                  <p className="font-serif text-xs sm:text-sm text-teal-100/80">Regular sessions delivered at home or community, backed by detailed clinical review reports for NDIA funding.</p>
                </div>
              </div>
            </div>

            <div className="pt-3 flex items-center gap-3 text-xs text-teal-200">
              <ShieldCheck className="w-4 h-4 text-gold flex-shrink-0" />
              <span>Full Public Liability &amp; Professional Indemnity coverage on file</span>
            </div>
          </div>

          {/* Right Column: Fast Allied Health & Care Request Card */}
          <div className="lg:col-span-6">
            <div className="glass-card-dark p-6 sm:p-8 rounded-2xl border border-white/20 shadow-2xl space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <h4 className="font-sans font-bold text-lg text-white">Allied Health &amp; Care Intake</h4>
                <span className="px-2.5 py-0.5 rounded-full bg-gold/20 text-gold text-xs font-sans font-semibold border border-gold/30">
                  Quick Referral
                </span>
              </div>

              <p className="text-xs text-teal-100/80 font-serif">
                Support coordinators, participants, and providers can submit requests directly to Alan.
              </p>

              <div className="space-y-3 font-sans text-xs">
                <div>
                  <label className="block text-teal-200 uppercase tracking-wider mb-1 font-semibold">
                    Discipline Needed:
                  </label>
                  <select
                    value={serviceRole}
                    onChange={(e) => setServiceRole(e.target.value)}
                    className="w-full bg-teal-950/70 border border-teal-600/40 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-gold"
                  >
                    <option>Occupational Therapist (OT)</option>
                    <option>Physiotherapist</option>
                    <option>Clinical Nurse (RN)</option>
                    <option>Psychologist / Behaviour Support</option>
                    <option>Plan Review &amp; Reporting</option>
                    <option>Enrolled Nurse (EN)</option>
                    <option>NDIS Everyday Support Worker</option>
                    <option>Domestic Cleaning</option>
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
                      Urgent (24h)
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
                      This Week
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
                      Flexible
                    </button>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="#contact"
                    className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-gold to-gold-dark text-teal-ink font-sans font-bold text-sm py-3 px-4 rounded-xl shadow-md hover:brightness-105 transition-all"
                  >
                    <span>Connect With Alan &rarr;</span>
                  </a>
                </div>

                <div className="text-center pt-1">
                  <span className="text-[11px] text-teal-300">
                    Questions or urgent referrals? Call Alan directly on{' '}
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
