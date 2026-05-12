'use client';

import React from 'react';

const milestones = [
  { year: '2002', title: 'Vetenskaplig forskning', desc: 'Peter Andreasson går med i forskargruppen Public Safety vid ITC Viktoria (numera RISE).', accent: false },
  { year: '2004', title: 'Blue Mobile Systems grundas', desc: 'GuardTools börjar utvecklas. Cubsec och SBT (numera Avarn) blir de första kunderna.', accent: true },
  { year: '2005', title: 'VINN NU Award', desc: 'Prisbelönade av Vinnova: "Företaget bedöms bli ett framtida tillväxtföretag."', accent: false },
  { year: '2009', title: 'Dubbla utmärkelser', desc: 'Sveriges snabbast stigande teknikstjärna (Deloitte) och Connects pris för mest spännande tillväxtföretag.', accent: false },
  { year: '2013', title: 'Årets Säkerhetsföretag', desc: 'Utmärkelse från Skydd & Säkerhet för unik lösning, beprövad kunskap och starkt engagemang.', accent: true },
  { year: '2016', title: 'Internationell expansion', desc: 'Fler internationella kunder, större team, mer fokus på design och framtidsplaner.', accent: false },
  { year: '2019', title: 'DI Gasell', desc: 'Priset från Dagens Industri för kontinuerlig organisk tillväxt med sund ekonomi.', accent: false },
  { year: '2024', title: 'ISO 27001-certifiering', desc: 'GuardTools certifieras för informationssäkerhet — ett verktyg för riskhantering och cyberresiliens.', accent: true },
];

const Timeline = () => {
  return (
    <section className="section-dark py-24 md:py-32 px-6 md:px-12 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-20 reveal-item">
          <div className="flex items-center justify-between text-xs font-medium uppercase tracking-widest text-white/30 mb-8">
            <span className="tracking-tight font-inter">// Milstolpar</span>
            <span className="tracking-tight font-inter">[02]</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-light tracking-tight text-white font-dm max-w-3xl">
            20 år av innovation{' '}
            <span className="text-white/30">inom säkerhet.</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />

          <div className="space-y-0">
            {milestones.map((item, idx) => (
              <div 
                key={idx} 
                className={`relative flex items-start gap-8 md:gap-0 py-8 reveal-item delay-${Math.min((idx + 1) * 100, 700)}`}
              >
                {/* Left content (desktop) */}
                <div className={`hidden md:flex md:w-1/2 ${idx % 2 === 0 ? 'justify-end pr-16' : 'order-last pl-16'}`}>
                  {idx % 2 === 0 ? (
                    <div className="text-right max-w-md">
                      <h3 className="text-xl font-medium text-white font-dm mb-2">{item.title}</h3>
                      <p className="text-white/40 text-sm leading-relaxed font-inter">{item.desc}</p>
                    </div>
                  ) : (
                    <div className="max-w-md">
                      <h3 className="text-xl font-medium text-white font-dm mb-2">{item.title}</h3>
                      <p className="text-white/40 text-sm leading-relaxed font-inter">{item.desc}</p>
                    </div>
                  )}
                </div>

                {/* Center dot */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex flex-col items-center z-10">
                  <div className={`w-4 h-4 rounded-full border-2 ${
                    item.accent 
                      ? 'bg-blue-500 border-blue-400 shadow-lg shadow-blue-500/30' 
                      : 'bg-[#222226] border-white/20'
                  }`} />
                  <span className={`mt-2 text-xs font-medium tracking-tight font-dm ${
                    item.accent ? 'text-blue-400' : 'text-white/30'
                  }`}>
                    {item.year}
                  </span>
                </div>

                {/* Right content (desktop) */}
                <div className={`hidden md:flex md:w-1/2 ${idx % 2 === 0 ? 'pl-16' : 'order-first justify-end pr-16'}`}>
                  {/* Empty on alternating sides */}
                </div>

                {/* Mobile content */}
                <div className="md:hidden pl-12">
                  <h3 className="text-lg font-medium text-white font-dm mb-1">{item.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed font-inter">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
