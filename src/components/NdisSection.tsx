import React from 'react';
import { Check, ShieldCheck, FileText, CalendarCheck, HelpCircle, ArrowRight } from 'lucide-react';

export const NdisSection: React.FC = () => {
  const fundingTypes = [
    {
      title: 'Plan Managed',
      badge: 'Most Popular',
      desc: 'We invoice your registered plan manager directly via email or portal. Zero out-of-pocket expenses and nothing for you to chase or claim back.',
      action: 'Direct Invoicing'
    },
    {
      title: 'Self Managed',
      badge: 'Full Flexibility',
      desc: 'We issue itemized tax invoices directly to you. Easily claim reimbursement through the NDIA myplace portal with line items and service dates set out clearly.',
      action: 'Fast Reimbursement'
    },
    {
      title: 'Home Care Package',
      badge: 'Aged Care & HCP',
      desc: 'We work alongside your approved package provider, or deliver private top-up care where package funds do not stretch far enough.',
      action: 'Package Coordinated'
    },
    {
      title: 'NDIA Managed Plans',
      badge: 'Provider Partner Model',
      desc: 'NDIA-managed plans require a registered provider. We will be upfront on your first call, and can deliver allied health and care under your registered provider as an approved subcontractor or partner.',
      action: 'Partnership Permitted'
    }
  ];

  return (
    <section id="ndis" className="py-16 md:py-24 bg-[#EFEDE4]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-sans font-bold tracking-widest text-sage-700 uppercase mb-2">
            <span className="w-6 h-0.5 bg-gold"></span>
            <span>NDIS Plan Freedom</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-sans text-teal-ink">
            Self-managed and plan-managed participants can choose us directly
          </h2>
          <p className="text-base sm:text-lg text-muted font-serif mt-3 leading-relaxed">
            Under NDIS legislation, participants who self-manage or use a plan manager are completely free to choose unregistered providers that offer better local responsiveness, consistent faces, and honest hourly rates.
          </p>
        </div>

        {/* 4 Funding Roles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {fundingTypes.map((item, idx) => (
            <div key={idx} className="glass-card p-6 border border-white/80 shadow-glass flex flex-col justify-between">
              <div>
                <span className="inline-block px-2.5 py-1 rounded-full text-[11px] font-sans font-bold bg-teal-50 text-teal border border-teal/15 mb-3">
                  {item.badge}
                </span>
                <h3 className="font-sans font-bold text-lg text-teal-ink mb-2">
                  {item.title}
                </h3>
                <p className="font-serif text-xs sm:text-sm text-muted leading-relaxed">
                  {item.desc}
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-teal/10 flex items-center justify-between text-xs font-sans font-semibold text-teal">
                <span>{item.action}</span>
                <span>&check;</span>
              </div>
            </div>
          ))}
        </div>

        {/* Working with Support Coordinators */}
        <div className="glass-card p-6 sm:p-10 border border-white/90 shadow-glass">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-sans font-bold uppercase tracking-wider text-sage-700">
                Support Coordinators &amp; LACs
              </span>
              <h3 className="text-2xl font-bold font-sans text-teal-ink">
                "Find me a nurse in Townsville" is the call we answer most.
              </h3>
              <p className="font-serif text-sm sm:text-base text-muted leading-relaxed">
                We know who is free right now across Townsville, what competencies they hold, and whether the required supports sit appropriately within your participant’s core or capacity-building budgets. If we cannot cover it, you’ll hear that on the same day rather than waiting a week in limbo.
              </p>
              
              <div className="pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-gold to-gold-dark text-teal-ink font-sans font-semibold text-sm px-6 py-3 rounded-full shadow-sm hover:brightness-105 transition-all"
                >
                  <span>Submit Participant Referral</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Checklist items */}
            <div className="lg:col-span-6 space-y-3.5 bg-white/70 p-6 rounded-2xl border border-teal/15">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-teal-50 text-teal flex items-center justify-center flex-shrink-0 mt-0.5">
                  <FileText className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-sm text-teal-ink">Quotes and service agreements up front</h4>
                  <p className="font-serif text-xs text-muted">Clear written schedule before anyone starts, eliminating surprise invoices.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-teal-50 text-teal flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CalendarCheck className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-sm text-teal-ink">Notes formatted for plan reviews</h4>
                  <p className="font-serif text-xs text-muted">Progress notes and clinical metrics you can directly integrate into review reports.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-teal-50 text-teal flex items-center justify-center flex-shrink-0 mt-0.5">
                  <ShieldCheck className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-sm text-teal-ink">Budget-aware roster management</h4>
                  <p className="font-serif text-xs text-muted">We actively flag if a shift schedule will burn through budget before the plan expires.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-teal-50 text-teal flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-teal" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-sm text-teal-ink">Bound by the NDIS Code of Conduct</h4>
                  <p className="font-serif text-xs text-muted">Registration status does not change the rigorous standard every worker is held to.</p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
