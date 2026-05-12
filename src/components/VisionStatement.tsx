'use client';

import React from 'react';

const VisionStatement = () => {
  return (
    <section className="section-light py-24 md:py-32 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <div className="reveal-item">
          <span className="inline-flex items-center gap-2 rounded-full border border-neutral-300/60 bg-white/50 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-neutral-500 backdrop-blur-sm mb-10">
            Vår vision
          </span>
        </div>
        
        <blockquote className="max-w-4xl mx-auto reveal-item delay-200">
          <p className="text-3xl md:text-5xl lg:text-[3.5rem] font-light leading-[1.2] tracking-tight text-neutral-800 font-dm">
            &ldquo;Vi vill bidra till att göra säkerhetsbranschen bättre.{' '}
            <span className="text-neutral-400">
              Inte bara för vakter eller chefer, utan för alla som arbetar i branschen, 
              såväl som deras kunder och allmänheten.
            </span>
            &rdquo;
          </p>
        </blockquote>

        <div className="mt-12 reveal-item delay-400">
          <p className="text-neutral-500 font-inter text-sm">
            — Peter Andreasson, Grundare & VD, Blue Mobile Systems
          </p>
        </div>

        {/* Decorative dots */}
        <div className="flex justify-center gap-1 mt-12 reveal-item delay-500">
          <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
          <div className="w-1.5 h-1.5 rounded-full bg-blue-300" />
          <div className="w-1.5 h-1.5 rounded-full bg-blue-200" />
        </div>
      </div>
    </section>
  );
};

export default VisionStatement;
