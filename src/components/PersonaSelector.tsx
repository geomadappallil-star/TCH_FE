import React, { useState } from 'react';
import { User, ClipboardCheck, Building2, Briefcase, Check, ArrowRight } from 'lucide-react';
import { PersonaType } from '../types.js';

export const PersonaSelector: React.FC = () => {
  const [activePersona, setActivePersona] = useState<PersonaType>('participant');

  const personas = [
    {
      id: 'participant' as PersonaType,
      title: 'Participant / Family',
      subtitle: 'Self or Plan Managed',
      icon: User,
      heading: 'Care that fits your daily life and respects your home',
      description: 'You have complete choice and control over who enters your house. Whether you need a regular clinical nurse for complex dressings and catheter changes, or a reliable gardener and house cleaner to keep the property safe, we invoice your plan manager or portal directly with no out-of-pocket costs.',
      keyPoints: [
        'Direct invoicing to your plan manager or NDIA portal',
        'Same friendly face visiting every week',
        'Combined clinical nursing + yard care under one agreement',
        'Free in-home initial nurse assessment within 48 hours'
      ],
      ctaText: 'Find Care for Yourself or Family',
      ctaHref: '#contact'
    },
    {
      id: 'coordinator' as PersonaType,
      title: 'Support Coordinator',
      subtitle: 'Fast Local Placement',
      icon: ClipboardCheck,
      heading: 'Real answers on clinical availability the same day',
      description: 'Stop calling around national agencies who promise a nurse in Kirwan and fail to show up. Alan answers your call directly, verifies qualifications against your participant’s plan goals, and provides thorough case notes ready for plan reviews.',
      keyPoints: [
        'Quotes & service agreements provided upfront within 24 hours',
        'Detailed case notes and clinical reports written for plan review',
        'Budget-aware scheduling so participants never run out of funds',
        'Short-notice hospital discharge support from Townsville University Hospital'
      ],
      ctaText: 'Send Participant Referral',
      ctaHref: '#contact'
    },
    {
      id: 'provider' as PersonaType,
      title: 'Care Provider / Facility',
      subtitle: 'Allied Health & Nursing',
      icon: Building2,
      heading: 'Partner with verified clinical nurses and allied health practitioners',
      description: 'As a registered provider, you retain participant governance and registration while collaborating with our qualified nursing and allied health team. All staff are fully compliant with NDIS Worker Screening and AHPRA registration.',
      keyPoints: [
        'Collaborative partnerships permitted under NDIS regulations',
        'RNs, ENs, OTs, Physiotherapists & Psychologists',
        'Comprehensive notes completed in your organization’s format',
        'Rapid capacity assessments and ongoing care plans'
      ],
      ctaText: 'Request Allied Health & Care',
      ctaHref: '#allied-health'
    },
    {
      id: 'jobseeker' as PersonaType,
      title: 'Healthcare Worker',
      subtitle: 'Work with TCH',
      icon: Briefcase,
      heading: 'Shifts that suit your life, right here in Townsville',
      description: 'Are you an RN, EN, AIN, Support Worker, Cleaner, or Gardener? We provide competitive local rates, flexible scheduling (casual, block, or regular rounds), and direct communication with a coordinator who knows the local area.',
      keyPoints: [
        'Meaningful community & in-home work, not hospital rush',
        'Full briefing and property safety check before your shift',
        'Supportive local coordination team that answers the phone',
        'Casual, regular part-time, or weekend block shifts'
      ],
      ctaText: 'View Open Roles & Apply',
      ctaHref: '#jobs'
    }
  ];

  const current = personas.find(p => p.id === activePersona) || personas[0];

  return (
    <section className="py-12 bg-white/40 border-y border-teal/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-8">
          <p className="text-xs uppercase tracking-widest font-sans font-bold text-sage-700 mb-2">
            Tailored For Your Journey
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold font-sans text-teal-ink">
            How can TCH Support Services help you today?
          </h2>
          <p className="text-sm sm:text-base text-muted font-serif mt-2">
            Select your role to explore how our clinical, home, and allied health models align with your specific goals.
          </p>
        </div>

        {/* Persona Glass Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4 mb-8">
          {personas.map((persona) => {
            const Icon = persona.icon;
            const isSelected = activePersona === persona.id;
            return (
              <button
                key={persona.id}
                type="button"
                onClick={() => setActivePersona(persona.id)}
                className={`p-3 sm:p-4 rounded-2xl text-left transition-all duration-200 border ${
                  isSelected
                    ? 'glass-card bg-white/95 border-teal/30 shadow-glass-teal ring-2 ring-teal/20 scale-[1.02]'
                    : 'glass-card bg-white/50 border-teal/10 hover:bg-white/80 opacity-80 hover:opacity-100'
                }`}
              >
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center mb-2.5 ${
                  isSelected ? 'bg-teal text-white shadow-sm' : 'bg-teal-50 text-teal'
                }`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="font-sans font-bold text-sm sm:text-base text-teal-ink leading-tight">
                  {persona.title}
                </div>
                <div className="font-sans text-xs text-muted mt-0.5">
                  {persona.subtitle}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Persona Detail Glass Panel */}
        <div className="glass-card p-6 sm:p-10 border border-white/90 shadow-glass">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <span className="inline-block px-3 py-1 rounded-full bg-teal-50 text-teal font-sans text-xs font-bold border border-teal/15">
                {current.title} Focus
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-sans text-teal-ink">
                {current.heading}
              </h3>
              <p className="text-muted font-serif text-sm sm:text-base leading-relaxed">
                {current.description}
              </p>
              
              <div className="pt-2">
                <a
                  href={current.ctaHref}
                  className="inline-flex items-center gap-2 bg-teal text-white font-sans font-semibold text-sm px-5 py-2.5 rounded-full hover:bg-teal-deep transition-all shadow-sm"
                >
                  <span>{current.ctaText}</span>
                  <ArrowRight className="w-4 h-4 text-gold" />
                </a>
              </div>
            </div>

            {/* Checklist Column */}
            <div className="lg:col-span-5 bg-white/70 rounded-2xl p-5 sm:p-6 border border-teal/15 space-y-3">
              <h4 className="font-sans font-bold text-sm uppercase tracking-wider text-teal-deep mb-2">
                Why Partners &amp; Families Rely on Us:
              </h4>
              {current.keyPoints.map((pt, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-sage-pale flex items-center justify-center text-teal flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span className="font-sans text-xs sm:text-sm text-teal-ink font-medium leading-snug">
                    {pt}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
