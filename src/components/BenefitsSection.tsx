'use client';

import React from 'react';

const BenefitsSection = () => {
  return (
    <div className="relative border-b border-white/5 bg-[#050505]">
      {/* Vertical grid lines */}
      <div className="absolute inset-y-0 left-0 right-0 mx-auto max-w-7xl border-l border-r border-white/5 pointer-events-none z-0 hidden md:block">
        <div className="absolute left-1/3 top-0 bottom-0 w-px bg-white/5 hidden md:block" />
        <div className="absolute right-1/3 top-0 bottom-0 w-px bg-white/5 hidden md:block" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 relative z-10">
        {/* Top meta — editorial style */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 text-xs md:text-sm text-[#0066FF]/60 uppercase tracking-[0.2em] gap-4">
          <div className="flex items-center gap-3">
            <span className="text-[#0066FF] font-mono">01</span>
            <span className="w-12 h-px bg-white/20" />
          </div>
          <div className="text-[#0066FF]/40 tracking-tighter">// Fördelar</div>
          <div className="hidden md:block text-right text-[#0066FF]/40 tracking-tighter">Varför GuardTools</div>
        </div>

        {/* Headline — editorial style matching SystemSection */}
        <div className="max-w-6xl mb-32 relative">
          <h2 className="leading-[1.05] md:text-7xl lg:text-[5.5rem] text-4xl font-light text-white tracking-tighter font-dm mb-8">
            Förbättra varje steg <br />
            <span className="text-white/30">i ert säkerhetsarbete.</span>
          </h2>
          <p className="text-lg md:text-xl text-neutral-500 font-light max-w-2xl leading-relaxed tracking-tight">
            Bättre uppföljning, snabbare respons, tydligare rapporter och högre kundnöjdhet — med intelligent automation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0">
          {/* Benefit 1 */}
          <div className="relative md:px-8 group">
            <div className="h-64 w-full bg-[#0A0A0A] rounded-2xl border border-white/5 mb-8 flex flex-col items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px]" />
              
              <div className="relative z-10 w-48 bg-[#0F0F0F] rounded-lg border border-white/10 shadow-2xl p-4 flex flex-col gap-3 transition-transform duration-500 group-hover:-translate-y-2">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 rounded-full bg-white/20" />
                  <div className="h-1 w-12 bg-white/10 rounded-full" />
                </div>
                <div className="space-y-2">
                  <div className="h-1.5 w-full bg-neutral-800 rounded-full" />
                  <div className="h-1.5 w-2/3 bg-neutral-800 rounded-full" />
                </div>
                <div className="mt-2 self-center bg-[#0066FF]/10 border border-[#0066FF]/20 rounded-full px-3 py-1 flex items-center gap-1.5">
                  <iconify-icon icon="solar:check-circle-bold" className="text-[#0066FF] text-xs" />
                  <span className="text-[10px] font-medium text-neutral-300">Rapport klar</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-light text-white mb-3 tracking-tighter font-dm">Automatisk rapportering</h3>
              <p className="text-sm text-neutral-500 leading-relaxed tracking-tight">
                Sluta slösa tid på manuella rapporter. GuardTools genererar SLA-rapporter, 
                ronderingsprotokoll och avvikelserapporter automatiskt.
              </p>
            </div>
          </div>

          {/* Benefit 2 */}
          <div className="relative md:px-8 group">
            <div className="h-64 w-full bg-[#0A0A0A] rounded-2xl border border-white/5 mb-8 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent opacity-50" />
              
              <div className="relative z-10 w-24 h-24 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full drop-shadow-[0_0_15px_rgba(0,102,255,0.1)]">
                  <path d="M50 0 L95 25 L95 75 L50 100 L5 75 L5 25 Z" fill="#0F0F0F" stroke="#0066FF" strokeWidth="1" strokeOpacity="0.3" />
                </svg>
                <iconify-icon icon="solar:users-group-rounded-linear" className="text-[#0066FF]/70 text-3xl relative z-20" />
              </div>
            </div>

            <div>
              <h3 className="text-xl font-light text-white mb-3 tracking-tighter font-dm">Frigör era operatörer</h3>
              <p className="text-sm text-neutral-500 leading-relaxed tracking-tight">
                Ge era fältoperatörer och kontrollrumsoperatörer möjlighet att fokusera 
                på säkerhet istället för administration.
              </p>
            </div>
          </div>

          {/* Benefit 3 */}
          <div className="relative md:px-8 group">
            <div className="h-64 w-full bg-[#0A0A0A] rounded-2xl border border-white/5 mb-8 flex items-end justify-center pb-8 px-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4">
                <div className="text-center">
                  <div className="text-2xl font-light text-[#0066FF] tracking-tighter font-dm">98%</div>
                  <div className="text-[10px] text-neutral-500 uppercase tracking-wider">SLA-uppfyllnad</div>
                </div>
              </div>

              <svg className="w-full h-32 overflow-visible" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="white" stopOpacity="0.1" />
                    <stop offset="100%" stopColor="transparent" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d="M0 120 L 50 100 L 100 105 L 150 60 L 200 20" fill="url(#chartGradient)" stroke="none" />
                <path d="M0 120 L 50 100 L 100 105 L 150 60 L 200 20" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]" />
                <circle cx="0" cy="120" r="2" fill="#262626" stroke="white" strokeWidth="1.5" />
                <circle cx="50" cy="100" r="2" fill="#262626" stroke="white" strokeWidth="1.5" />
                <circle cx="100" cy="105" r="2" fill="#262626" stroke="white" strokeWidth="1.5" />
                <circle cx="150" cy="60" r="2" fill="#262626" stroke="white" strokeWidth="1.5" />
                <circle cx="200" cy="20" r="3" fill="#0066FF" className="group-hover:scale-150 transition-transform origin-center" />
                <rect x="175" y="0" width="40" height="20" rx="4" fill="#fff" fillOpacity="0.1" stroke="rgba(255,255,255,0.2)" />
                <text x="195" y="14" fontFamily="sans-serif" fontSize="10" fill="white" textAnchor="middle">100%</text>
              </svg>
            </div>

            <div>
              <h3 className="text-xl font-light text-white mb-3 tracking-tighter font-dm">Leverera kvalitet konsekvent</h3>
              <p className="text-sm text-neutral-500 leading-relaxed tracking-tight">
                Mät och förbättra er leveranskvalitet kontinuerligt. Realtids-dashboards 
                ger er full insyn i SLA och prestanda.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;
