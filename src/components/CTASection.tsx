'use client';

import React from 'react';

const CTASection = () => {
  return (
    <section className="relative py-32 bg-[#050505] overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.02] rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-light text-white tracking-tighter font-dm mb-8 leading-[1.05]">
          Redo att modernisera?
        </h2>
        <p className="text-lg text-neutral-500 font-light max-w-xl mx-auto mb-12 tracking-tight leading-relaxed">
          Anslut er organisation till GuardTools och ge era vakter, operatörer och kunder verktygen de förtjänar.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="mailto:info@guardtools.com" 
            className="px-8 py-4 rounded-full bg-white text-black text-sm font-medium tracking-tight hover:scale-105 transition-transform shadow-[0_0_30px_rgba(255,255,255,0.1)]"
          >
            Boka en demo
          </a>
          <a 
            href="tel:+46312211195" 
            className="px-8 py-4 rounded-full bg-transparent border border-white/10 text-white/60 text-sm font-medium tracking-tight hover:bg-white/5 hover:text-white transition-all flex items-center gap-2"
          >
            Prata med oss
            <iconify-icon icon="solar:arrow-right-linear" width="16" height="16" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
