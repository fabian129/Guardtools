'use client';

import React, { useEffect, useState, useRef } from 'react';

interface CounterProps {
  end: number;
  suffix?: string;
  label: string;
}

const Counter = ({ end, suffix = '', label }: CounterProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = end / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);

  return (
    <div ref={ref} className="pt-8 md:pt-0 px-4 text-center">
      <div className="text-4xl lg:text-6xl font-light mb-3 tabular-nums-tight font-dm glow-text">
        {count.toLocaleString('sv-SE')}{suffix}
      </div>
      <div className="text-blue-200/60 font-light text-sm font-inter">{label}</div>
    </div>
  );
};

const ImpactMetrics = () => {
  return (
    <section className="bg-[#0a0a0e] py-32 relative overflow-hidden text-white">
      {/* Glow Effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-blue-600/20 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-48 bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20 reveal-item">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight font-dm max-w-2xl mx-auto leading-tight">
            Siffror som talar{' '}
            <span className="text-blue-400">för sig själva.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-white/10 reveal-item delay-300">
          <Counter end={24000} suffix="" label="Minuter sparade per år" />
          <Counter end={10} suffix="x" label="Mer rapportering per väktare" />
          <Counter end={2000} suffix="" label="Minuter sparade per månad" />
          <Counter end={20} suffix="+" label="Års branscherfarenhet" />
        </div>
      </div>
    </section>
  );
};

export default ImpactMetrics;
