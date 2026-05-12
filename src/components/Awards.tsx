'use client';

import React from 'react';

const awards = [
  { year: '2024', title: 'ISO 27001', desc: 'Informationssäkerhet', icon: 'solar:verified-check-bold-duotone' },
  { year: '2019', title: 'DI Gasell', desc: 'Dagens Industri', icon: 'solar:graph-up-bold-duotone' },
  { year: '2013', title: 'Årets Säkerhetsföretag', desc: 'Skydd & Säkerhet', icon: 'solar:cup-star-bold-duotone' },
  { year: '2009', title: 'Snabbast stigande stjärna', desc: 'Deloitte', icon: 'solar:star-shine-bold-duotone' },
  { year: '2009', title: 'Most Exciting Growth', desc: 'Connect Sverige', icon: 'solar:rocket-bold-duotone' },
  { year: '2005', title: 'VINN NU Award', desc: 'Vinnova', icon: 'solar:medal-ribbons-star-bold-duotone' },
];

const Awards = () => {
  return (
    <section className="section-elevated py-24 md:py-32 px-6 md:px-12 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-16 reveal-item">
          <div>
            <div className="flex items-center justify-between text-xs font-medium uppercase tracking-widest text-white/30 mb-6">
              <span className="tracking-tight font-inter">// Priser & Milstolpar</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-white font-dm">
              Erkännanden.
            </h2>
          </div>
        </div>

        {/* Awards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {awards.map((award, idx) => (
            <div 
              key={idx}
              className={`group rounded-2xl border border-white/5 bg-[#1e1e22] p-6 md:p-8 transition-all duration-300 hover:border-blue-500/20 hover:bg-[#222228] reveal-item delay-${Math.min((idx + 1) * 100, 600)}`}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-500/20 transition-colors">
                  <iconify-icon icon={award.icon} width="24" height="24" />
                </div>
                <span className="text-xs text-white/20 font-dm">{award.year}</span>
              </div>
              <h3 className="text-lg font-medium text-white font-dm mb-1 leading-tight">{award.title}</h3>
              <p className="text-sm text-white/30 font-inter">{award.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
