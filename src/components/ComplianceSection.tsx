import React from 'react';
import { ShieldCheck, Check, AlertCircle, FileCheck2, Scale } from 'lucide-react';

export const ComplianceSection: React.FC = () => {
  const credentials = [
    'AHPRA registration verified (RN & EN)',
    'NDIS Worker Screening Check (Yellow Card)',
    'Queensland Blue Card (Working with Children)',
    'National Police History Check',
    'Current HLTAID011 First Aid & CPR',
    'NDIS Quality & Safeguards Orientation',
    'Manual Handling & Safe Transfer certification',
    'Up-to-date Immunisation & Serology records',
    '$20M Public Liability & Professional Indemnity'
  ];

  return (
    <section className="py-16 md:py-24 bg-[#FAF9F5] border-y border-teal/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Credentials List */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="flex items-center gap-2 text-xs font-sans font-bold tracking-widest text-sage-700 uppercase">
              <ShieldCheck className="w-4 h-4 text-gold" />
              <span>Rigorous Screening &amp; Safety</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold font-sans text-teal-ink">
              Nobody starts a shift without the paperwork behind them
            </h2>

            <p className="font-serif text-sm sm:text-base text-muted leading-relaxed">
              We check credentials before anyone is rostered, track expiry dates systematically, and immediately pause staff from the roster if any item lapses. This applies to cleaners and gardeners as much as nurses — they are in someone’s home either way. Verification copies are available upon request to any coordinator, provider, or participant.
            </p>

            {/* Chips Grid */}
            <div className="flex flex-wrap gap-2.5 pt-2">
              {credentials.map((cred, idx) => (
                <div
                  key={idx}
                  className="glass-chip px-3.5 py-2 flex items-center gap-2 text-xs sm:text-sm font-sans font-medium text-teal-ink shadow-sm"
                >
                  <div className="w-4 h-4 rounded-full bg-teal-50 flex items-center justify-center text-teal">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span>{cred}</span>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Plain English Transparency Box */}
          <div className="lg:col-span-6">
            <div className="glass-card p-6 sm:p-8 border-l-4 border-l-gold border-white/80 shadow-glass space-y-4">
              
              <div className="flex items-center gap-3 border-b border-teal/10 pb-3">
                <div className="w-10 h-10 rounded-xl bg-gold/15 flex items-center justify-center text-gold-dark">
                  <Scale className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-sans font-bold text-lg text-teal-ink">
                    Where we sit, in plain English
                  </h3>
                  <span className="text-xs text-muted font-sans">Honest transparency from day one</span>
                </div>
              </div>

              <div className="font-serif text-sm text-muted space-y-3 leading-relaxed">
                <p>
                  <strong>TCH Support Services is not an NDIS registered provider</strong>, and we don’t pretend otherwise. Registration is not legally required to support self-managed and plan-managed participants, or to work as an approved subcontractor for a registered provider — which covers everything we do.
                </p>
                <p>
                  If a participant is NDIA agency-managed, or requires a specific support category that must legally originate from a registered entity, we will be completely transparent on our first phone call. We can either work under an established registered provider or connect you with one of our trusted local partners.
                </p>
                <p className="text-teal-ink font-sans font-medium bg-teal-50/70 p-3 rounded-xl border border-teal/15 text-xs">
                  All of our nurses, carers, cleaners, and yard staff are strictly bound by the Australian NDIS Code of Conduct and relevant professional standards.
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
