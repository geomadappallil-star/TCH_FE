import React, { useState } from 'react';
import { 
  MapPin, 
  Sparkles, 
  Phone, 
  Mail, 
  ArrowRight, 
  Users, 
  CheckCircle2, 
  Compass,
  Navigation
} from 'lucide-react';

export const ServiceAreasSection: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState<string>('Townsville');

  const areas = [
    {
      name: 'Townsville',
      region: 'Townsville and surrounding suburbs',
      landmark: 'Castle Hill & The Strand',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
      description: 'Our head base. Full clinical nursing, 2-week FCA allied health, 1 & 2-bedroom rental units, regular domestic cleaning and garden maintenance.',
      suburbs: ['City', 'Kirwan', 'Thuringowa', 'Burdell', 'Douglas', 'Annandale', 'Bushland Beach', 'Kelso']
    },
    {
      name: 'Ayr',
      region: 'Burdekin region',
      landmark: 'Burdekin Cane Fields & Bridge',
      image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80',
      description: 'Serving the Burdekin farming and coastal community with dedicated local support workers living right in town.',
      suburbs: ['Ayr Township', 'Home Hill', 'Brandon', 'Alva Beach', 'Airdmillan']
    },
    {
      name: 'Ingham',
      region: 'Hinchinbrook region',
      landmark: 'Victoria Sugar Mill & Tropical Rivers',
      image: 'https://images.unsplash.com/photo-1511497584788-87676104235f?auto=format&fit=crop&w=800&q=80',
      description: 'Supporting Hinchinbrook residents with prompt clinical reviews, personal care routines, and regular lawn maintenance.',
      suburbs: ['Ingham', 'Halifax', 'Lucinda', 'Trebonne', 'Taylors Beach']
    },
    {
      name: 'Charters Towers',
      region: 'Charters Towers and surrounds',
      landmark: 'Heritage Streetscapes & Goldfields',
      image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80',
      description: 'Regional and rural support providing consistent, reliable carers who understand country living and pastoral distances.',
      suburbs: ['Charters Towers CBD', 'Columbia', 'Richmond Hill', 'Queenton', 'Millchester']
    },
    {
      name: 'Mareeba',
      region: 'Atherton Tablelands',
      landmark: 'Tablelands Farmland & Coffee Plantations',
      image: 'https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?auto=format&fit=crop&w=800&q=80',
      description: 'Extending in-home supports, nursing consultations and allied health therapies into the lush Atherton Tablelands.',
      suburbs: ['Mareeba Town', 'Biboohra', 'Walkamin', 'Mutchilba', 'Kuranda Gateway']
    },
    {
      name: 'Mount Isa',
      region: 'North West Queensland',
      landmark: 'Outback Horizons & Red Earth',
      image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80',
      description: 'Serving the remote North West mining community with reliable NDIS and private support workers living locally.',
      suburbs: ['Mount Isa City', 'Pioneer', 'Happy Valley', 'Soldiers Hill', 'Townview']
    }
  ];

  const activeArea = areas.find(a => a.name === selectedLocation) || areas[0];

  const areaBadges: { [key: string]: string } = {
    'Townsville': 'color-secondary',
    'Ayr': 'color-accent',
    'Ingham': 'color-blue',
    'Charters Towers': 'color-coral',
    'Mareeba': 'color-rose',
    'Mount Isa': 'color-accent'
  };

  return (
    <section id="areas" className="scroll-mt-20 py-20 bg-[#FFF3E2] relative overflow-hidden border-b border-[#0B4F51]/10">
      
      {/* Decorative Warm Blobs */}
      <div className="absolute top-10 left-10 w-96 h-96 rounded-full bg-[#F9B835]/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-[#94C08E]/15 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 fadeInFromBottom">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#0B4F51]/15 text-[#0B4F51] text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
            <MapPin className="w-3.5 h-3.5 text-[#F9B835]" />
            <span>North Queensland Service Areas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0B4F51] leading-tight">
            From the coast to the Tablelands <br className="hidden sm:inline" />
            <span className="color-secondary">&amp; the North West.</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-700 mt-4 leading-relaxed font-sans">
            Based in Townsville, we hire local people in each area we serve. Your support worker lives in your community, knows your town and can be there when you need them.
          </p>
        </div>

        {/* 6 Regional Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {areas.map((area) => {
            const isSelected = selectedLocation === area.name;
            const badgeClass = areaBadges[area.name] || 'color-secondary';

            return (
              <div 
                key={area.name}
                onClick={() => setSelectedLocation(area.name)}
                className={`cursor-pointer p-6 rounded-3xl border-2 transition-all duration-300 relative overflow-hidden ${
                  isSelected 
                    ? 'bg-white border-[#F9B835] shadow-lg ring-2 ring-[#F9B835]/30 scale-[1.01]' 
                    : 'bg-white/85 border-[#0B4F51]/15 hover:border-[#0B4F51]/30 shadow-sm hover:bg-white'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-full bg-[#0B4F51]/10 flex items-center justify-center text-[#0B4F51]">
                      <MapPin className="w-4 h-4 text-[#0B4F51]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-[#0B4F51]">{area.name}</h3>
                      <span className="text-xs text-gray-600 font-medium block">{area.region}</span>
                    </div>
                  </div>
                  <span className={`${badgeClass} text-[10px] font-bold`}>
                    Local Crew
                  </span>
                </div>

                <div className="text-xs text-[#EC7E38] font-bold uppercase tracking-wider mb-2 flex items-center gap-1">
                  <Compass className="w-3.5 h-3.5" />
                  <span>Landmark: {area.landmark}</span>
                </div>

                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4 font-sans">
                  {area.description}
                </p>

                <div className="pt-3 border-t border-gray-100 flex flex-wrap gap-1.5">
                  {area.suburbs.slice(0, 4).map((sub, i) => (
                    <span key={i} className="text-[10px] px-2.5 py-0.5 rounded-full bg-[#FAF3EA] text-[#0B4F51] font-semibold border border-[#0B4F51]/10">
                      {sub}
                    </span>
                  ))}
                  {area.suburbs.length > 4 && (
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-gray-100 text-gray-600 font-medium">
                      +{area.suburbs.length - 4} more
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Live Outside Notice & Rapid Response CTA Strip */}
        <div className="bg-white rounded-3xl p-8 border-2 border-[#0B4F51]/15 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#EC7E38] uppercase tracking-wider">
              <Navigation className="w-3.5 h-3.5 text-[#F9B835]" />
              <span>Location Flexibility</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#0B4F51]">
              Live outside these towns? Get in touch anyway.
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 max-w-2xl leading-relaxed font-sans">
              Service availability can vary by location. We are constantly expanding our regional North Queensland rounds and are always happy to talk about how we can support you or your participant.
            </p>
          </div>

          <div className="flex items-center gap-3 flex-shrink-0">
            <a
              href="mailto:admin@tchservices.com.au"
              className="ats-button bg-white hover:bg-gray-50 text-[#0B4F51] border border-[#0B4F51]/20 font-bold text-xs sm:text-sm shadow-xs"
            >
              <Mail className="w-4 h-4 text-[#0B4F51]" />
              <span>Email Location Query</span>
            </a>
            <a
              href="tel:0431430905"
              className="ats-button bg-[#0B4F51] hover:bg-[#073B3C] text-white font-bold text-xs sm:text-sm shadow-md"
            >
              <Phone className="w-4 h-4 text-[#F9B835]" />
              <span>0431 430 905</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
