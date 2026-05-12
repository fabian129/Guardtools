'use client';

import React from 'react';

const SystemSection = () => {
  return (
    <section className="relative bg-[#050505] text-white py-32 overflow-hidden border-b border-white/5">
      <div className="z-0 opacity-[0.08] absolute top-0 right-0 bottom-0 left-0" style={{ backgroundImage: 'radial-gradient(#ffffff 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }} />
      <div className="max-w-7xl z-10 mx-auto pt-6 px-6 pb-24 relative">
        
        {/* Top meta — editorial style */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 text-xs md:text-sm text-[#0066FF]/60 uppercase tracking-[0.2em] gap-4">
          <div className="flex items-center gap-3">
            <span className="text-[#0066FF] font-mono">02</span>
            <span className="w-12 h-px bg-white/20" />
          </div>
          <div className="text-[#0066FF]/40 tracking-tighter">// Systemarkitektur</div>
          <div className="hidden md:block text-right text-[#0066FF]/40 tracking-tighter">Tre pelare</div>
        </div>

        {/* Headline — Linear style */}
        <div className="max-w-6xl mx-auto mb-32 relative">
          <h2 className="leading-[1.05] md:text-7xl lg:text-[5.5rem] text-4xl font-light text-white tracking-tighter font-dm mb-8">
            En plattform <br />
            <span className="text-white/30">för total kontroll.</span>
          </h2>
          <p className="text-lg md:text-xl text-neutral-500 font-light max-w-2xl leading-relaxed tracking-tight">
            Tre integrerade moduler som ger er full överblick — från fält till kontor, från larm till rapport.
          </p>
        </div>

        {/* Dot line divider */}
        <div className="hidden md:flex items-center justify-between px-16 mb-16 opacity-10">
          <div className="w-1.5 h-1.5 rounded-full bg-white" />
          <div className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent w-full" />
          <div className="w-1.5 h-1.5 rounded-full bg-white" />
          <div className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent w-full" />
          <div className="w-1.5 h-1.5 rounded-full bg-white" />
        </div>

        {/* 3 Phases */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12 relative">
          
          {/* Phase 1 */}
          <div className="group relative">
            <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-8">
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-lg bg-[#0F0F0F] border border-white/10 group-hover:border-[#0066FF]/30 flex items-center justify-center relative z-10 shadow-lg group-hover:-translate-y-1 transition-all duration-300">
                  <iconify-icon icon="solar:map-point-wave-linear" className="text-lg text-white/40 group-hover:text-[#0066FF]/70 transition-colors" />
                </div>
                <div className="w-10 h-10 rounded-lg bg-[#0F0F0F] border border-white/10 group-hover:border-[#0066FF]/30 flex items-center justify-center relative z-20 shadow-lg group-hover:-translate-y-1 transition-all duration-300 delay-75">
                  <iconify-icon icon="solar:shield-check-linear" className="text-lg text-white/40 group-hover:text-[#0066FF]/70 transition-colors" />
                </div>
                <div className="w-10 h-10 rounded-lg bg-[#0F0F0F] border border-white/10 group-hover:border-[#0066FF]/30 flex items-center justify-center relative z-30 shadow-lg group-hover:-translate-y-1 transition-all duration-300 delay-150">
                  <iconify-icon icon="solar:smartphone-linear" className="text-lg text-white/40 group-hover:text-[#0066FF]/70 transition-colors" />
                </div>
              </div>
              <span className="text-xs font-mono text-[#0066FF]/40">01</span>
            </div>
            <h3 className="text-xl font-light text-white mb-3 tracking-tighter font-dm group-hover:text-white/80 transition-colors">Fältoperationer</h3>
            <p className="text-sm text-neutral-600 leading-relaxed tracking-tight">
              GPS-spårad rondering, checkpoint-scanning, larmhantering och incidentrapportering — allt i realtid direkt från väktarens mobil.
            </p>
          </div>

          {/* Phase 2 */}
          <div className="group relative">
            <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-8">
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-lg bg-[#0F0F0F] border border-white/10 group-hover:border-[#0066FF]/30 flex items-center justify-center relative z-10 shadow-lg group-hover:-translate-y-1 transition-all duration-300">
                  <iconify-icon icon="solar:monitor-linear" className="text-lg text-white/40 group-hover:text-[#0066FF]/70 transition-colors" />
                </div>
                <div className="w-10 h-10 rounded-lg bg-[#0F0F0F] border border-white/10 group-hover:border-[#0066FF]/30 flex items-center justify-center relative z-20 shadow-lg group-hover:-translate-y-1 transition-all duration-300 delay-75">
                  <iconify-icon icon="solar:chart-square-linear" className="text-lg text-white/40 group-hover:text-[#0066FF]/70 transition-colors" />
                </div>
                <div className="w-10 h-10 rounded-lg bg-[#0F0F0F] border border-white/10 group-hover:border-[#0066FF]/30 flex items-center justify-center relative z-30 shadow-lg group-hover:-translate-y-1 transition-all duration-300 delay-150">
                  <iconify-icon icon="solar:bell-linear" className="text-lg text-white/40 group-hover:text-[#0066FF]/70 transition-colors" />
                </div>
              </div>
              <span className="text-xs font-mono text-[#0066FF]/40">02</span>
            </div>
            <h3 className="text-xl font-light text-white mb-3 tracking-tighter font-dm group-hover:text-white/80 transition-colors">Command & Control</h3>
            <p className="text-sm text-neutral-600 leading-relaxed tracking-tight">
              Full överblick i kontrollrummet. Kartvy med alla aktiva vakter, larmkö, eskaleringsregler och realtidsnotifikationer.
            </p>
          </div>

          {/* Phase 3 */}
          <div className="group relative">
            <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-8">
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-lg bg-[#0F0F0F] border border-white/10 group-hover:border-[#0066FF]/30 flex items-center justify-center relative z-10 shadow-lg group-hover:-translate-y-1 transition-all duration-300">
                  <iconify-icon icon="solar:document-text-linear" className="text-lg text-white/40 group-hover:text-[#0066FF]/70 transition-colors" />
                </div>
                <div className="w-10 h-10 rounded-lg bg-[#0F0F0F] border border-white/10 group-hover:border-[#0066FF]/30 flex items-center justify-center relative z-20 shadow-lg group-hover:-translate-y-1 transition-all duration-300 delay-75">
                  <iconify-icon icon="solar:graph-up-linear" className="text-lg text-white/40 group-hover:text-[#0066FF]/70 transition-colors" />
                </div>
                <div className="w-10 h-10 rounded-lg bg-[#0F0F0F] border border-white/10 group-hover:border-[#0066FF]/30 flex items-center justify-center relative z-30 shadow-lg group-hover:-translate-y-1 transition-all duration-300 delay-150">
                  <iconify-icon icon="solar:globe-linear" className="text-lg text-white/40 group-hover:text-[#0066FF]/70 transition-colors" />
                </div>
              </div>
              <span className="text-xs font-mono text-[#0066FF]/40">03</span>
            </div>
            <h3 className="text-xl font-light text-white mb-3 tracking-tighter font-dm group-hover:text-white/80 transition-colors">Rapporter & Analys</h3>
            <p className="text-sm text-neutral-600 leading-relaxed tracking-tight">
              Automatiska rapporter, SLA-uppföljning och kvalitetsindex. ISO 27001-certifierad datahantering med full audit trail.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SystemSection;
