'use client';

import React from 'react';

const OriginStory = () => {
  return (
    <section id="story" className="section-elevated w-full px-6 md:px-12 py-20 md:py-32 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Tag */}
        <div className="mb-12 border-b border-white/5 pb-6 md:mb-24 reveal-item">
          <div className="flex items-center justify-between text-xs font-medium uppercase tracking-widest text-white/30">
            <span className="tracking-tight font-inter">// Vår historia börjar på 90-talet.</span>
            <span className="tracking-tight font-inter">[01]</span>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-12 lg:gap-x-12">
          {/* Left Column: Image */}
          <div className="flex flex-col gap-4 lg:col-span-4 lg:mt-24 reveal-item delay-100">
            <div className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-[#222226] border border-white/5">
              {/* Placeholder for Peter/team photo */}
              <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-blue-500/10 to-cyan-500/5">
                <div className="text-center space-y-4 p-8">
                  <iconify-icon icon="solar:user-bold-duotone" width="64" height="64" style={{ color: 'rgba(59,130,246,0.4)' }} />
                  <p className="text-sm text-white/30">Grundarens foto</p>
                </div>
              </div>
            </div>
            <div className="flex justify-between text-xs font-medium uppercase tracking-widest text-white/30">
              <span className="tracking-tight font-inter">Peter Andreasson, Grundare & VD</span>
              <span className="tracking-tight font-inter">©2004</span>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-20 lg:col-span-8">
            {/* Big Paragraph */}
            <p className="leading-tight md:text-5xl lg:text-[3.2rem] lg:leading-[1.15] text-3xl font-light text-white/90 tracking-tight font-dm reveal-item delay-200">
              Peter Andreasson arbetade som väktare under 90-talet. Han insåg att arbetet försvårades av förvirrande och ineffektiva lösningar. Han tänkte: {'"'}Tänk om vi kan använda <span className="text-blue-400">mobil digital teknik</span> för att göra ett bättre jobb?{'"'}
            </p>

            {/* Sub Grid */}
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
              {/* Research Image */}
              <div className="flex flex-col gap-4 reveal-item delay-300">
                <div className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-[#222226] border border-white/5">
                  <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-cyan-500/10 to-blue-500/5">
                    <div className="text-center space-y-4 p-8">
                      <iconify-icon icon="solar:library-bold-duotone" width="64" height="64" style={{ color: 'rgba(34,211,238,0.4)' }} />
                      <p className="text-sm text-white/30">Forskningsfoto</p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between text-xs font-medium uppercase tracking-widest text-white/30">
                  <span className="tracking-tight font-inter">ITC Viktoria / RISE</span>
                  <span className="tracking-tight font-inter">2002–2005</span>
                </div>
              </div>

              {/* Right Text & Stats */}
              <div className="flex flex-col justify-between py-4">
                <div className="space-y-8 reveal-item delay-400">
                  <p className="leading-relaxed text-lg text-white/50 tracking-tight font-inter">
                    Peter sökte sig till universitetet och studerade mjukvaruutveckling (MSc). Han utförde 
                    omfattande etnografiska studier vid ITC Viktoria (numera RISE) och identifierade tre 
                    grundproblem i säkerhetsbranschen.
                  </p>
                  <div className="flex gap-1 text-blue-500/40">
                    <iconify-icon icon="solar:star-linear" width="12" height="12" />
                    <iconify-icon icon="solar:star-linear" width="12" height="12" />
                    <iconify-icon icon="solar:star-linear" width="12" height="12" />
                  </div>
                </div>

                {/* Stats */}
                <div className="mt-12 flex items-end justify-between border-t border-white/5 pt-12 reveal-item delay-500">
                  <div className="flex gap-12">
                    <div>
                      <span className="text-5xl text-white font-dm font-light tracking-tight">3</span>
                      <p className="mt-2 text-xs uppercase text-white/40 tracking-tight font-inter">Års forskning</p>
                    </div>
                    <div>
                      <span className="text-5xl text-white font-dm font-light tracking-tight">MSc</span>
                      <p className="mt-2 text-xs uppercase text-white/40 tracking-tight font-inter">Mjukvaruutveckling</p>
                    </div>
                  </div>
                  <a href="#problems" className="rounded-full border border-white/10 p-3 hover:bg-white/5 transition-colors">
                    <iconify-icon icon="solar:arrow-right-linear" width="20" height="20" style={{ color: '#f0eeeb' }} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OriginStory;
