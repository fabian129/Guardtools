'use client';

import React from 'react';

const ContentSection = () => {
  return (
    <section id="story" className="md:px-12 md:py-32 text-stone-800 bg-[#EAE8E2] w-full pt-20 pr-6 pb-20 pl-6 relative">
      {/* Section Tag */}
      <div className="mb-12 border-b border-stone-300/50 pb-6 md:mb-24 reveal-item">
        <div className="flex items-center justify-between text-xs font-medium uppercase tracking-widest text-stone-500">
          <span className="tracking-tighter">// Vår historia börjar på 90-talet.</span>
          <button className="rounded-full border border-stone-400/30 p-2 hover:bg-stone-200 transition-colors">
            <iconify-icon icon="solar:arrow-left-linear" width="18" height="18" />
          </button>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-12 lg:gap-x-12 max-w-7xl mx-auto">
        {/* Left Column: Image */}
        <div className="flex flex-col gap-4 lg:col-span-4 lg:mt-24 reveal-item delay-100">
          <div className="group relative aspect-[4/5] overflow-hidden rounded-sm bg-stone-300">
            <img 
              src="/guard-portrait.png" 
              alt="Grundaren" 
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" 
            />
          </div>
          <div className="flex justify-between text-xs font-medium uppercase tracking-widest text-stone-500">
            <span className="tracking-tighter">[01] Peter Andreasson, Grundare</span>
            <span className="tracking-tighter">©2004</span>
          </div>
        </div>

        {/* Right Column Area */}
        <div className="flex flex-col gap-20 lg:col-span-8">
          {/* Big Paragraph */}
          <p className="leading-tight md:text-5xl lg:text-[3.5rem] lg:leading-[1.15] text-3xl font-light text-stone-900 tracking-tighter font-dm reveal-item delay-200">
            Peter Andreasson arbetade som väktare under 90-talet. Han insåg att arbetet försvårades av förvirrande och ineffektiva lösningar. Han tänkte: {'"'}Tänk om vi kan använda <span className="font-dm font-light tracking-tighter text-stone-500">mobil digital teknik</span> för att göra ett bättre jobb?{'"'}
          </p>

          {/* Sub Grid: Image + Text/Stats */}
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            {/* Middle Image */}
            <div className="flex flex-col gap-4 reveal-item delay-300">
              <div className="group relative aspect-[4/5] overflow-hidden rounded-sm bg-stone-300">
                <img 
                  src="/control-room.jpg" 
                  alt="Forskning" 
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
              </div>
              <div className="flex justify-between text-xs font-medium uppercase tracking-widest text-stone-500">
                <span className="tracking-tighter">[02] ITC Viktoria / RISE</span>
                <span className="tracking-tighter">2002–2005</span>
              </div>
            </div>

            {/* Right Text & Stats */}
            <div className="flex flex-col justify-between py-4">
              <div className="space-y-8 reveal-item delay-400">
                <p className="leading-relaxed text-lg text-stone-600 tracking-tighter">
                  Peter sökte sig till universitetet och studerade mjukvaruutveckling (MSc). Han utförde 
                  omfattande etnografiska studier vid ITC Viktoria (numera RISE) och identifierade tre 
                  grundproblem i säkerhetsbranschen: kvalitet, effektivitet och konkurrenskraft.
                </p>
                <div className="flex gap-1 text-stone-400">
                  <iconify-icon icon="solar:star-linear" width="12" height="12" />
                  <iconify-icon icon="solar:star-linear" width="12" height="12" />
                  <iconify-icon icon="solar:star-linear" width="12" height="12" />
                </div>
              </div>

              {/* Stats */}
              <div className="mt-12 flex items-end justify-between border-t border-stone-300/50 pt-12 reveal-item delay-500">
                <div className="flex gap-12">
                  <div>
                    <span className="text-5xl text-stone-900 font-dm font-light tracking-tighter">3</span>
                    <p className="mt-2 text-xs uppercase text-stone-500 tracking-tighter">Års forskning</p>
                  </div>
                  <div>
                    <span className="text-5xl text-stone-900 font-dm font-light tracking-tighter">MSc</span>
                    <p className="mt-2 text-xs uppercase text-stone-500 tracking-tighter">Mjukvaruutveckling</p>
                  </div>
                </div>
                <button className="rounded-full border border-stone-400/30 p-3 hover:bg-stone-200 transition-colors">
                  <iconify-icon icon="solar:arrow-right-linear" width="20" height="20" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trusted Partners Marquee */}
      <div className="reveal-item delay-200 border-stone-300/50 border-t mt-24 pt-12 max-w-7xl mx-auto">
        <p className="uppercase text-xs text-stone-400 tracking-tighter mb-8">Betrodda av bland andra</p>
        <div className="group relative flex w-full overflow-hidden" style={{ maskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)' }}>
          <div className="flex shrink-0 animate-scroll items-center gap-16 pr-16 opacity-50 grayscale transition-all duration-500 group-hover:opacity-80">
            <span className="text-2xl font-dm font-light tracking-tighter text-stone-600 whitespace-nowrap">Securitas</span>
            <span className="text-2xl font-dm font-light tracking-tighter text-stone-600 whitespace-nowrap">Avarn Security</span>
            <span className="text-2xl font-dm font-light tracking-tighter text-stone-600 whitespace-nowrap">Cubsec</span>
            <span className="text-2xl font-dm font-light tracking-tighter text-stone-600 whitespace-nowrap">SBT (Avarn)</span>
            <span className="text-2xl font-dm font-light tracking-tighter text-stone-600 whitespace-nowrap">Nokas</span>
            <span className="text-2xl font-dm font-light tracking-tighter text-stone-600 whitespace-nowrap">Tempest</span>
          </div>
          <div className="flex shrink-0 animate-scroll items-center gap-16 pr-16 opacity-50 grayscale transition-all duration-500 group-hover:opacity-80" aria-hidden="true">
            <span className="text-2xl font-dm font-light tracking-tighter text-stone-600 whitespace-nowrap">Securitas</span>
            <span className="text-2xl font-dm font-light tracking-tighter text-stone-600 whitespace-nowrap">Avarn Security</span>
            <span className="text-2xl font-dm font-light tracking-tighter text-stone-600 whitespace-nowrap">Cubsec</span>
            <span className="text-2xl font-dm font-light tracking-tighter text-stone-600 whitespace-nowrap">SBT (Avarn)</span>
            <span className="text-2xl font-dm font-light tracking-tighter text-stone-600 whitespace-nowrap">Nokas</span>
            <span className="text-2xl font-dm font-light tracking-tighter text-stone-600 whitespace-nowrap">Tempest</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
