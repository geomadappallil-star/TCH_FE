import React, { useState } from 'react';
import { MapPin, Search, CheckCircle2, Navigation, Compass, AlertCircle } from 'lucide-react';

export const AreaChecker: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const zones = [
    {
      name: 'Northern Beaches',
      tag: 'Regular Daily Route',
      suburbs: ['Bushland Beach', 'Deeragun', 'Burdell', 'Mount Low', 'Jensen', 'Bluewater', 'Black River', 'Saunders Beach', 'Toolakea'],
      notes: 'Daily nursing visits and fortnightly lawn rounds. Standard local rates apply.'
    },
    {
      name: 'City & Inner Suburbs',
      tag: 'Central Hub',
      suburbs: ['North Ward', 'South Townsville', 'Townsville City', 'Belgian Gardens', 'Castle Hill', 'Rowes Bay', 'West End', 'Hermit Park', 'Hyde Park', 'Mundingburra', 'Railway Estate', 'Pimlico', 'Currajong', 'Mysterton'],
      notes: 'Rapid 2-hour response for urgent wound checks, medication cover, and discharges.'
    },
    {
      name: 'Thuringowa & South',
      tag: 'Riverway & Growth Corridor',
      suburbs: ['Kirwan', 'Condon', 'Rasmussen', 'Kelso', 'Annandale', 'Douglas', 'Idalia', 'Wulguru', 'Cluden', 'Oonoonba', 'Mount Louisa', 'Cosgrove', 'Bohle Plains'],
      notes: 'Extensive regular coverage for in-home nursing, disability support, and yard maintenance.'
    },
    {
      name: 'Further Afield & Islands',
      tag: 'Regional Coverage',
      suburbs: ['Magnetic Island', 'Alligator Creek', 'Nome', 'Julago', 'Ayr & Home Hill', 'Ingham', 'Charters Towers', 'Woodstock'],
      notes: 'Magnetic Island visits coordinated around the Nelly Bay ferry. Regional travel agreed in writing upfront with zero surprise billing.'
    }
  ];

  const filteredZones = searchTerm.trim() === '' 
    ? zones 
    : zones.map(z => ({
        ...z,
        suburbs: z.suburbs.filter(s => s.toLowerCase().includes(searchTerm.toLowerCase().trim()))
      })).filter(z => z.suburbs.length > 0);

  return (
    <section id="area" className="py-16 md:py-24 bg-white/40 border-b border-teal/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Search Input */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-sans font-bold tracking-widest text-sage-700 uppercase mb-2">
              <Compass className="w-4 h-4 text-gold" />
              <span>Where We Travel</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-sans text-teal-ink">
              From the Northern Beaches to the Burdekin
            </h2>
            <p className="font-serif text-sm sm:text-base text-muted mt-2">
              Our nurses and home care crews live locally in Townsville, so regional travel is never a barrier. If your suburb is not on this list, ring Alan anyway — we cover more ground than most.
            </p>
          </div>

          {/* Search Box with Glass Finish */}
          <div className="w-full md:w-80">
            <div className="relative">
              <Search className="w-4 h-4 text-teal absolute left-3.5 top-3.5" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Type your suburb (e.g. Kirwan)..."
                className="w-full pl-10 pr-4 py-2.5 glass-input font-sans text-sm text-teal-ink placeholder:text-muted/60"
              />
              {searchTerm && (
                <button
                  type="button"
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-3 text-xs text-muted hover:text-teal font-sans"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Zones Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredZones.map((zone, idx) => (
            <div key={idx} className="glass-card p-6 border border-white/80 shadow-glass flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-sans font-bold uppercase tracking-wider text-sage-700 block mb-1">
                  {zone.tag}
                </span>
                <h3 className="font-sans font-bold text-lg text-teal-ink mb-3 pb-2 border-b border-teal/10">
                  {zone.name}
                </h3>
                
                <ul className="space-y-1.5 font-sans text-xs text-muted mb-4">
                  {zone.suburbs.map((suburb, sIdx) => (
                    <li key={sIdx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0"></span>
                      <span className={searchTerm && suburb.toLowerCase().includes(searchTerm.toLowerCase()) ? 'text-teal font-bold bg-teal-50 px-1 rounded' : ''}>
                        {suburb}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-3 border-t border-teal/10 text-[11px] font-serif text-muted">
                {zone.notes}
              </div>
            </div>
          ))}
        </div>

        {filteredZones.length === 0 && (
          <div className="text-center py-10 glass-card p-6 border border-teal/20">
            <AlertCircle className="w-8 h-8 text-gold mx-auto mb-2" />
            <p className="font-sans font-bold text-base text-teal-ink">
              Looking for "{searchTerm}"?
            </p>
            <p className="font-serif text-sm text-muted mt-1 max-w-md mx-auto">
              We frequently service outer North Queensland regions upon request. Give Alan a call on <a href="tel:0431430905" className="text-teal font-bold underline">0431 430 905</a> to confirm roster availability.
            </p>
          </div>
        )}

      </div>
    </section>
  );
};
