'use client';

import React, { useEffect, useRef } from 'react';

const Hero = () => {
  const heroBgRef = useRef<HTMLImageElement>(null);
  const webglRef = useRef<HTMLDivElement>(null);

  // Unicorn Studio via CDN
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.unicorn.studio/v1.4.1/unicornStudio.umd.js';
    script.onload = () => {
      // @ts-expect-error — UnicornStudio loaded from CDN
      if (window.UnicornStudio) {
        // @ts-expect-error — UnicornStudio loaded from CDN
        window.UnicornStudio.init();
      }
    };
    document.body.appendChild(script);

    return () => {
      // @ts-expect-error — UnicornStudio loaded from CDN
      if (window.UnicornStudio) {
        // @ts-expect-error — UnicornStudio loaded from CDN
        window.UnicornStudio.destroy();
      }
    };
  }, []);

  // Parallax on background image
  useEffect(() => {
    const handleScroll = () => {
      if (!heroBgRef.current) return;
      const scrollPosition = window.scrollY;
      if (scrollPosition < window.innerHeight) {
        heroBgRef.current.style.transform = `translateY(${scrollPosition * 0.4}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-stone-900 text-[#F2F0EB]">
      {/* Layer 1: Parallax Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          ref={heroBgRef}
          src="/hero-bg.webp" 
          alt="" 
          className="absolute left-0 -top-[10%] h-[120%] w-full object-cover opacity-60 mix-blend-overlay will-change-transform"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/30 via-transparent to-stone-900/90" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Layer 2: WebGL Effect */}
      <div 
        ref={webglRef}
        className="top-0 w-full h-screen mix-blend-screen saturate-0 z-10 pointer-events-none absolute" 
        style={{ 
          maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', 
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)' 
        }}
      >
        <div 
          data-us-project="7WRlj4TRuUxuldc6GVDM"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Layer 3: Hero Content */}
      <div className="z-10 flex h-[calc(100vh-100px)] flex-col px-6 md:px-12 pb-12 md:pb-20 relative justify-end max-w-7xl mx-auto">
        {/* Top Tags */}
        <div className="mb-auto flex w-full justify-between pt-28 text-xs font-medium tracking-wider text-white/40 reveal-item delay-300">
          <span className="uppercase tracking-tighter">// Sedan 2004 — säkerhet genom teknologi.</span>
          <span className="tracking-tighter hidden md:block">Blue Mobile Systems AB</span>
        </div>

        <div className="flex flex-col items-end gap-12 md:flex-row md:items-end md:justify-between">
          {/* Headline */}
          <h1 className="leading-[1.08] md:max-w-4xl md:text-7xl lg:text-[5.5rem] text-4xl font-light text-white tracking-tighter font-dm reveal-item delay-100">
            Vi är Blue Mobile Systems.{' '}
            <span className="text-white/60 font-dm font-light">Vi bygger</span>{' '}
            <span className="text-white font-dm font-light">GuardTools.</span>
          </h1>

          {/* Right Description & Button */}
          <div className="flex max-w-sm flex-col gap-8 reveal-item delay-300">
            <p className="text-lg leading-relaxed text-white/80 tracking-tighter">
              Den banbrytande digitala helhetslösningen för bemannad bevakning, larmhantering och säkerhet.
            </p>
            <a 
              href="#story" 
              className="group flex w-fit items-center gap-3 rounded-full bg-[#F2F0EB] px-8 py-4 text-sm text-stone-900 font-medium transition-all hover:bg-white hover:shadow-lg hover:scale-105 tracking-tighter"
            >
              Vår historia
              <iconify-icon icon="solar:arrow-down-linear" width="16" height="16" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
