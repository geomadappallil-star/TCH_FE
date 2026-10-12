import React, { useState } from 'react';
import { 
  Play, 
  Heart, 
  Activity, 
  Home, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  UserCheck
} from 'lucide-react';

interface StoryItem {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  image: string;
  tag: string;
  duration: string;
  points: string[];
}

export const CareVideoShowcase: React.FC = () => {
  const [selectedStory, setSelectedStory] = useState<StoryItem | null>(null);

  const stories: StoryItem[] = [
    {
      id: 'nursing',
      category: 'Clinical Nursing Care',
      title: 'Attentive, gentle care that honors your dignity',
      subtitle: 'Hospital-standard clinical nursing in the warmth and comfort of your private living room.',
      image: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=1000&q=80',
      tag: 'AHPRA Verified RNs',
      duration: 'In-Home Care',
      points: [
        'Wound dressing, suture removal & pressure sore staging',
        'Subcutaneous medication administration & insulin support',
        'Continence assessments, catheter hygiene & bowel regimes',
        'Post-hospital discharge stabilization in Townsville'
      ]
    },
    {
      id: 'allied',
      category: 'Allied Health & Mobility',
      title: 'Preserving movement, joint mobility, and confidence',
      subtitle: 'Occupational therapy and physiotherapy designed around your daily routines.',
      image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1000&q=80',
      tag: 'Therapy & Rehabilitation',
      duration: 'Goal-Centric',
      points: [
        'Gentle joint mobilization and assisted range-of-motion',
        'Home environmental hazard identification & rail recommendations',
        'Mobility aid guidance (wheelchairs, walkers, transfer frames)',
        'Comprehensive clinical notes tailored for NDIS plan reviews'
      ]
    },
    {
      id: 'home-yard',
      category: 'Home & Yard Maintenance',
      title: 'A clear pathway, a tidy garden, a spotless home',
      subtitle: 'Fall prevention begins in the yard before anyone even steps through the front door.',
      image: 'https://images.unsplash.com/photo-1592417817098-8f3d69109853?auto=format&fit=crop&w=1000&q=80',
      tag: 'NDIS Core Supports',
      duration: 'Regular Rounds',
      points: [
        'Lawn mowing, edging, hedge trimming & snake-safe green clearing',
        'High-pressure cleaning of mossy and slippery outdoor concrete',
        'Domestic house cleaning, bathroom sanitization & kitchen maintenance',
        'Heavy rubbish haulage and pathway hazard removal'
      ]
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-paper relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal/10 border border-teal/20 text-xs font-sans font-semibold text-teal mb-3">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span>Real Local Care Stories</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-sans text-teal-ink tracking-tight mb-4">
            See how our team supports your daily routine
          </h2>

          <p className="text-base sm:text-lg text-muted font-serif leading-relaxed">
            From Registered Nurses managing complex clinical treatments to reliable gardeners keeping access ramps clear, explore our hands-on care across Townsville.
          </p>
        </div>

        {/* 3 Story Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {stories.map((story) => (
            <div
              key={story.id}
              className="glass-card overflow-hidden group hover:-translate-y-1.5 transition-all duration-300 flex flex-col border border-white/80 shadow-lg"
            >
              {/* Media Thumbnail with Glass Overlay */}
              <div className="relative aspect-[16/11] overflow-hidden bg-teal-900">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-ink/80 via-teal-ink/20 to-transparent"></div>

                {/* Floating Tag */}
                <div className="absolute top-3.5 left-3.5 flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[11px] font-sans font-bold text-teal-ink shadow-sm">
                    {story.tag}
                  </span>
                </div>

                <div className="absolute bottom-3.5 left-3.5 right-3.5">
                  <span className="text-gold font-sans font-bold text-xs uppercase tracking-wider block mb-0.5">
                    {story.category}
                  </span>
                  <h3 className="text-white font-sans font-bold text-base leading-snug drop-shadow-sm">
                    {story.title}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 flex-grow flex flex-col justify-between space-y-4">
                <p className="font-serif text-xs sm:text-sm text-muted leading-relaxed">
                  {story.subtitle}
                </p>

                {/* Service Bullet Highlights */}
                <ul className="space-y-2 border-t border-teal/10 pt-4 text-xs font-sans text-teal-900">
                  {story.points.map((pt, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal flex-shrink-0 mt-0.5" />
                      <span className="leading-snug">{pt}</span>
                    </li>
                  ))}
                </ul>

                {/* Button Action */}
                <div className="pt-2">
                  <a
                    href="#contact"
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-teal-50 hover:bg-teal text-teal hover:text-white font-sans font-bold text-xs transition-colors border border-teal/15"
                  >
                    <span>Request This Support</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Local Guarantee Banner */}
        <div className="mt-12 glass-card-dark p-6 sm:p-8 rounded-3xl text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gold/20 text-gold flex items-center justify-center flex-shrink-0 border border-gold/30">
              <UserCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-sans font-bold text-base sm:text-lg">
                No National Call Centers. Direct Coordinator Accountability.
              </h4>
              <p className="font-serif text-xs sm:text-sm text-teal-100 mt-0.5 max-w-2xl">
                When you call TCH Support Services, Alan answers directly. We know Townsville streets, local ferry schedules to Magnetic Island, and regional travel to Ingham and Charters Towers.
              </p>
            </div>
          </div>

          <a
            href="tel:0431430905"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-gold to-gold-dark text-teal-ink font-sans font-bold text-xs sm:text-sm py-3 px-6 rounded-full shadow-lg hover:brightness-105 transition-all flex-shrink-0"
          >
            <span>Call Alan on 0431 430 905</span>
          </a>
        </div>

      </div>
    </section>
  );
};
