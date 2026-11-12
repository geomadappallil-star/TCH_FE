import React from 'react';
import { 
  Heart, 
  Target, 
  Eye, 
  Compass, 
  ShieldCheck, 
  Users, 
  Sparkles, 
  CheckCircle2, 
  Award, 
  MessageSquare, 
  Phone, 
  Mail,
  ArrowRight
} from 'lucide-react';

export const AboutSection: React.FC = () => {
  const values = [
    {
      title: 'Respect',
      desc: 'We treat every person with dignity and recognise them as the expert in their own life.',
      icon: Heart,
      badge: 'Dignity First',
      badgeClass: 'color-rose'
    },
    {
      title: 'Choice and Control',
      desc: 'You decide what support looks like, who delivers it and when.',
      icon: Compass,
      badge: 'Your Decisions',
      badgeClass: 'color-accent'
    },
    {
      title: 'Honesty',
      desc: 'We\'re upfront about what we can do, what it costs and how it\'s going.',
      icon: MessageSquare,
      badge: 'Transparent',
      badgeClass: 'color-secondary'
    },
    {
      title: 'Reliability',
      desc: 'We turn up on time, follow through and keep you in the loop.',
      icon: CheckCircle2,
      badge: 'Always on Time',
      badgeClass: 'color-blue'
    },
    {
      title: 'Community',
      desc: 'We\'re proudly local and invested in North Queensland.',
      icon: Users,
      badge: 'North QLD Proud',
      badgeClass: 'color-coral'
    },
    {
      title: 'Safety and Quality',
      desc: 'Screened, qualified people and high standards, every visit.',
      icon: ShieldCheck,
      badge: 'Highest Standard',
      badgeClass: 'color-accent'
    }
  ];

  const whyChoosePoints = [
    {
      title: 'Local Team',
      desc: 'Based in Townsville, working across Ayr, Ingham, Charters Towers, Mareeba and Mount Isa.'
    },
    {
      title: 'One Provider, Many Services',
      desc: 'Nursing, support work, allied health, housing and home help all in one reliable place.'
    },
    {
      title: 'Flexible Funding',
      desc: 'NDIS (plan-managed and self-managed), aged care, VHC (Veterans\' Home Care) and private clients.'
    },
    {
      title: 'Screened & Qualified',
      desc: 'Every single worker holds a current NDIS Worker Screening Check and required clinical registrations.'
    },
    {
      title: 'Local Workers',
      desc: 'We hire people who live in the areas we serve, so your worker knows your town and community.'
    },
    {
      title: 'Easy to Deal With',
      desc: 'Clear service agreements, quick replies, and a friendly coordinator team that knows your name.'
    }
  ];

  return (
    <section id="about" className="scroll-mt-20 py-20 bg-[#FAF3EA] relative overflow-hidden border-b border-[#0B4F51]/10">
      
      {/* Decorative Warm Ambient Blobs */}
      <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-[#F9B835]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 rounded-full bg-[#94C08E]/15 blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 fadeInFromBottom">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#0B4F51]/15 text-[#0B4F51] text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#F9B835]" />
            <span>About Us, Mission &amp; Vision</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0B4F51] leading-tight">
            Locally owned, deeply rooted in <br className="hidden sm:inline" />
            <span className="color-secondary">North Queensland.</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-700 mt-4 leading-relaxed font-sans">
            TCH stands for <strong className="text-[#0B4F51] font-bold">Townsville Community Health</strong>, and that's exactly what we're about.
          </p>
        </div>

        {/* Narrative & Inclusivity Card */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 mb-16 border-2 border-[#0B4F51]/15 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <h3 className="text-2xl sm:text-3xl font-bold text-[#0B4F51] tracking-tight">
                Our Story: We live here, we work here.
              </h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-sans">
                We're a Townsville business, run by people who live and work here. We know North Queensland: the heat, the distances between towns, and how much it matters to have someone reliable turn up when they say they will.
              </p>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-sans">
                We support NDIS participants (plan-managed and self-managed), people receiving aged care, veterans through DVA's Veterans' Home Care (VHC), and private clients. Our nurses, support workers and allied health practitioners work together, so you get the right help from one team you know.
              </p>
              <div className="p-4 rounded-2xl bg-[#FFF3E2] border border-[#F9B835]/30 text-xs sm:text-sm text-[#0B4F51] leading-relaxed">
                <strong className="font-bold">An Inclusive Community:</strong> We welcome people of all ages, abilities and backgrounds, including Aboriginal and Torres Strait Islander peoples, culturally and linguistically diverse communities, and LGBTIQA+ people.
              </div>
            </div>

            <div className="lg:col-span-5 bg-gradient-to-br from-[#0B4F51] to-[#073B3C] text-white p-7 sm:p-8 rounded-3xl shadow-md space-y-4">
              <span className="text-xs uppercase font-bold tracking-wider text-[#F9B835] block">
                Comprehensive One-Stop Supports
              </span>
              <h4 className="text-lg font-bold text-white">What we offer under one trusted roof:</h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-teal-100 font-sans">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#F9B835] flex-shrink-0 mt-0.5" />
                  <span><strong>NDIS supports:</strong> Personal care, community access &amp; daily living</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#F9B835] flex-shrink-0 mt-0.5" />
                  <span><strong>Nursing:</strong> In-home clinical care from qualified AHPRA nurses</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#F9B835] flex-shrink-0 mt-0.5" />
                  <span><strong>Allied health:</strong> OT (2-week FCA), Physio, Speech, Dietetics, EP, Psychology</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#F9B835] flex-shrink-0 mt-0.5" />
                  <span><strong>Housing supports:</strong> 1 &amp; 2-bedroom units ready in Townsville</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#F9B835] flex-shrink-0 mt-0.5" />
                  <span><strong>Gardening &amp; cleaning:</strong> Mowing, trimming up to 4m &amp; general cleaning</span>
                </li>
              </ul>
              <div className="pt-2 border-t border-teal-700/50 flex items-center justify-between text-xs text-teal-200">
                <span>Coverage: Townsville to Mount Isa</span>
                <span className="text-[#F9B835] font-bold">100% Screened</span>
              </div>
            </div>

          </div>
        </div>

        {/* Mission & Vision Side-by-Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          {/* Mission Card */}
          <div className="bg-white p-8 rounded-3xl border-2 border-[#0B4F51]/15 shadow-sm hover:border-[#F9B835] transition-all relative overflow-hidden">
            <div className="w-12 h-12 rounded-2xl bg-[#0B4F51]/10 flex items-center justify-center text-[#0B4F51] mb-5">
              <Target className="w-6 h-6 text-[#0B4F51]" />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#EC7E38] block mb-1">
              Our Purpose
            </span>
            <h3 className="text-2xl font-bold text-[#0B4F51] mb-3">Our Mission</h3>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4 font-sans">
              To deliver safe, respectful, quality supports that give people choice and control over their lives, so they can live independently, stay connected and reach their goals, right here in North Queensland.
            </p>
            <div className="p-3.5 rounded-2xl bg-[#FAF3EA] border border-[#F9B835]/30 text-xs text-[#0B4F51] font-semibold flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#F9B835] flex-shrink-0" />
              <span>We listen first, keep you in the driver's seat, and do what we say we'll do.</span>
            </div>
          </div>

          {/* Vision Card */}
          <div className="bg-white p-8 rounded-3xl border-2 border-[#0B4F51]/15 shadow-sm hover:border-[#F9B835] transition-all relative overflow-hidden">
            <div className="w-12 h-12 rounded-2xl bg-[#F9B835]/20 flex items-center justify-center text-[#9E6C1F] mb-5">
              <Eye className="w-6 h-6 text-[#EC7E38]" />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#94C08E] block mb-1 font-bold">
              Our Future
            </span>
            <h3 className="text-2xl font-bold text-[#0B4F51] mb-3">Our Vision</h3>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4 font-sans">
              Stronger, healthier North Queensland communities where everyone, whatever their age, ability or background, is supported to live the life they choose.
            </p>
            <div className="p-3.5 rounded-2xl bg-[#FAF3EA] border border-[#F9B835]/30 text-xs text-[#0B4F51] font-semibold flex items-center gap-2">
              <Users className="w-4 h-4 text-[#0B4F51] flex-shrink-0" />
              <span>The provider locals recommend to family and mates: known for good people, honest service and real results.</span>
            </div>
          </div>

        </div>

        {/* Our 6 Values Grid */}
        <div className="mb-20">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#EC7E38] block mb-1">
              What Guides Every Action
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#0B4F51]">Our Values</h3>
            <p className="text-sm text-gray-600 mt-2 font-sans">
              The principles we show up with on every shift and every visit.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div 
                  key={i} 
                  className="bg-white p-6 rounded-3xl border border-[#0B4F51]/15 shadow-sm hover:border-[#F9B835] hover:shadow-md transition-all group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-2xl bg-[#0B4F51]/10 flex items-center justify-center text-[#0B4F51] group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5 text-[#0B4F51]" />
                    </div>
                    <span className={`${v.badgeClass} text-[11px] font-bold`}>
                      {v.badge}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-[#0B4F51] mb-2">{v.title}</h4>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-sans">
                    {v.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Why Choose TCH 6-Point Breakdown & Ready to Chat CTA */}
        <div className="bg-gradient-to-br from-[#0B4F51] via-[#073B3C] to-[#042627] text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-white/10 relative overflow-hidden">
          
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-[#F9B835] block mb-2">
              The Local Advantage
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
              Why Choose TCH Support Services
            </h3>
            <p className="text-sm text-teal-100 mt-2 font-sans">
              Count on a responsive, locally managed partner that keeps you in the driver's seat.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {whyChoosePoints.map((pt, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-white/[0.08] border border-white/10 hover:bg-white/[0.14] transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-4 h-4 text-[#F9B835] flex-shrink-0" />
                  <h4 className="font-bold text-sm text-white">{pt.title}</h4>
                </div>
                <p className="text-xs text-teal-100/90 leading-relaxed font-sans">
                  {pt.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Ready to Chat CTA strip */}
          <div className="pt-6 border-t border-teal-700/60 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-base font-bold text-white">Ready to chat with a local coordinator?</h4>
              <p className="text-xs text-teal-200 mt-0.5 font-sans">
                Give us a call or email admin@tchservices.com.au and we'll talk through how we can help.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="mailto:admin@tchservices.com.au"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-xs border border-white/20 transition-all"
              >
                <Mail className="w-3.5 h-3.5 text-[#F9B835]" />
                <span>admin@tchservices.com.au</span>
              </a>
              <a
                href="tel:0431430905"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#F9B835] hover:bg-[#ffc657] text-[#2B2822] font-bold text-xs shadow-md transition-all hover:scale-105"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>0431 430 905</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
