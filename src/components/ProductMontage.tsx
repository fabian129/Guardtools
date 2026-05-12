'use client';

import React from 'react';

const ProductMontage = () => {
  return (
    <section className="overflow-hidden bg-stone-900 z-10 pt-32 pb-32 relative">
      <div className="max-w-[1080px] mx-auto px-6 relative z-20">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-stone-400 font-normal tracking-wide uppercase text-sm mb-3">Plattformen</h2>
          <h3 className="text-4xl font-normal text-[#F2F0EB] mb-6 tracking-tighter font-dm">En komplett digital verktygslåda för säkerhet</h3>
          <p className="text-lg font-light text-stone-400">
            GuardTools samlar bevakning, rondering, larmhantering, rapportering och kvalitetssäkring 
            i en enda plattform. Byggt från grunden av folk som jobbat i branschen.
          </p>
        </div>

        {/* Bento Widget Grid */}
        <div className="grid md:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
          
          {/* Left Column: Command & Control Card */}
          <div className="md:col-span-5 flex justify-center w-full">
            <section className="flex-1 overflow-hidden hover:-translate-y-1 transition-transform duration-500 bg-stone-800 w-full max-w-md border-stone-700 border rounded-[2.2rem] relative shadow-2xl">
              
              {/* Status bar */}
              <div className="px-5 pt-5 flex items-center justify-between text-[11px] text-stone-300 border-b border-stone-700/70 pb-3">
                <span>09:42</span>
                <div className="flex items-center gap-1.5 text-xs">
                  <iconify-icon icon="solar:wifi-bold-duotone" width="14" height="14" />
                  <span>Online</span>
                </div>
              </div>

              {/* App screen */}
              <div className="overflow-hidden rounded-[1.8rem] mt-3 mr-3 ml-3 relative">
                <div className="w-full h-80 bg-gradient-to-br from-stone-700 to-stone-800 flex items-center justify-center">
                  <div className="text-center space-y-3">
                    <iconify-icon icon="solar:shield-keyhole-bold-duotone" width="48" height="48" style={{ color: '#a8a29e' }} />
                    <p className="text-stone-400 text-sm">GuardTools App — Ronderingsvy</p>
                  </div>
                </div>
                <div className="bg-gradient-to-t from-black/80 via-black/30 to-transparent absolute top-0 right-0 bottom-0 left-0" />
                <div className="absolute top-4 left-4 right-4 flex items-start justify-between">
                  <div className="space-y-1">
                    <p className="text-[11px] text-stone-200">12 aktiva vakter · 3 ronderingar pågår</p>
                    <p className="text-xs text-stone-400 max-w-xs">Realtidsövervakning av alla pågående uppdrag</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="mt-6 pr-6 pb-6 pl-6 space-y-6">
                <div className="space-y-1 border-b border-stone-700/70 pb-4">
                  <p className="text-xs font-medium text-stone-400 uppercase tracking-[0.2em]">
                    COMMAND & CONTROL
                  </p>
                  <h2 className="text-xl font-semibold tracking-tight text-stone-50 font-dm">
                    Realtidsövervakning
                  </h2>
                  <p className="text-xs text-stone-400 leading-relaxed">
                    Se var alla vakter befinner sig, vad som händer just nu, och agera direkt från kontrollrummet.
                  </p>
                </div>

                {/* Meta */}
                <div className="grid grid-cols-3 gap-4 text-[11px] text-stone-400">
                  <div>
                    <p className="uppercase tracking-[0.22em] font-medium">Status</p>
                    <p className="mt-1 text-stone-50 font-medium">Live</p>
                  </div>
                  <div>
                    <p className="uppercase tracking-[0.22em] font-medium">Uptime</p>
                    <p className="mt-1 text-stone-50 font-medium">99.9%</p>
                  </div>
                  <div>
                    <p className="uppercase tracking-[0.22em] font-medium">Latens</p>
                    <p className="mt-1 text-stone-50 font-medium">&lt;200ms</p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div className="md:col-span-7 flex flex-col gap-8 w-full">
            
            {/* Dashboard Widget */}
            <div className="card-top w-full h-fit overflow-hidden relative transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] bg-stone-800 rounded-[1.5rem] shadow-2xl hover:-translate-y-1">
              <div className="absolute inset-0 rounded-[1.5rem] border border-white/10" style={{ maskImage: 'linear-gradient(135deg, white, transparent 60%)' }} />
              <div className="absolute inset-0 border-white/5 border rounded-[1.5rem]" style={{ maskImage: 'linear-gradient(135deg, transparent 60%, white)' }} />
              
              <div className="flex flex-col h-full p-6 pb-7 relative z-10">
                <div className="flex justify-between items-start mb-2">
                  <div className="w-3/4">
                    <h1 className="text-[26px] leading-tight tracking-tighter font-dm font-medium text-white">Rapportmotor</h1>
                    <p className="text-stone-400 text-sm font-light mt-1">Automatiserad · ISO 27001-klar</p>
                  </div>
                  <div className="w-1/4 text-right">
                    <div className="text-[20px] font-semibold font-mono text-white tracking-tight">AUDIT</div>
                    <div className="flex items-center justify-end gap-1.5 mt-1">
                      <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" style={{ boxShadow: '0 0 6px rgba(16, 185, 129, 0.4)' }} />
                      <span className="text-xs text-emerald-400 tracking-wider font-medium">AKTIV</span>
                    </div>
                  </div>
                </div>

                {/* Code snippet */}
                <div className="relative mx-auto w-full mb-5 mt-3">
                  <div className="absolute inset-0 translate-y-2 scale-[0.98] rounded-xl bg-stone-950/80 ring-1 ring-white/5 blur-[0.3px]" />
                  <div className="relative rounded-xl bg-[linear-gradient(180deg,rgba(28,25,23,0.95),rgba(12,10,9,0.95))] ring-1 ring-white/10 overflow-hidden shadow-inner">
                    <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/5 bg-stone-900/60">
                      <div className="flex items-center gap-2">
                        <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                        <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                        <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                      </div>
                      <div className="flex items-center gap-1.5 rounded-md border border-white/5 bg-stone-800/40 px-2.5 py-1 text-[11px] text-stone-300">
                        <iconify-icon icon="solar:folder-code-bold-duotone" width="14" height="14" style={{ color: '#a8a29e' }} />
                        <span className="text-stone-300/80 font-mono">report.ts</span>
                      </div>
                    </div>
                    <div className="relative h-28">
                      <div className="absolute inset-0 grid grid-cols-[36px_1fr]">
                        <div className="select-none border-r border-white/5 bg-stone-900/30 px-2 py-3 text-[11px] leading-5 text-stone-500/70 text-right pr-3 font-mono">
                          <div>1</div><div>2</div><div>3</div><div>4</div><div>5</div>
                        </div>
                        <pre className="m-0 overflow-hidden px-5 py-3 text-[12px] leading-5 text-stone-300 font-mono"><span className="text-amber-300">class</span> <span className="text-stone-100">GuardReport</span> {'{'}{'\n'}  <span className="text-amber-300">async</span> <span className="text-stone-200">generateAudit</span>(patrol) {'{'}{'\n'}    <span className="text-amber-300">const</span> data = <span className="text-amber-300">await</span> <span className="text-red-300">this</span>.collect(patrol);{'\n'}    <span className="text-amber-300">return</span> <span className="text-red-300">this</span>.format(data, <span className="text-emerald-300">&apos;ISO-27001&apos;</span>);{'\n'}  {'}'}</pre>
                      </div>
                      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-stone-950 to-transparent" />
                    </div>
                  </div>
                </div>

                {/* Stats row */}
                <div className="flex justify-between mb-5 max-w-lg">
                  <div className="text-center px-2 cursor-pointer transition-all duration-300 p-2 rounded-lg hover:bg-white/5 hover:-translate-y-0.5 w-1/3">
                    <div className="text-2xl sm:text-3xl leading-tight bg-gradient-to-r from-white to-stone-300 bg-clip-text text-transparent font-dm font-medium">
                      24<span className="text-lg sm:text-xl">k</span>
                    </div>
                    <div className="text-[10px] sm:text-xs opacity-70 uppercase tracking-widest mt-1 text-stone-300">MIN/ÅR</div>
                  </div>
                  <div className="w-px h-12 my-auto bg-gradient-to-b from-transparent via-white/20 to-transparent" />
                  <div className="text-center px-2 cursor-pointer transition-all duration-300 p-2 rounded-lg hover:bg-white/5 hover:-translate-y-0.5 w-1/3">
                    <div className="text-2xl sm:text-3xl leading-tight bg-gradient-to-r from-white to-stone-300 bg-clip-text text-transparent font-dm font-medium">
                      99.9<span className="text-lg sm:text-xl">%</span>
                    </div>
                    <div className="text-[10px] sm:text-xs opacity-70 uppercase tracking-widest mt-1 text-stone-300">UPTIME</div>
                  </div>
                  <div className="w-px h-12 my-auto bg-gradient-to-b from-transparent via-white/20 to-transparent" />
                  <div className="text-center px-2 cursor-pointer transition-all duration-300 p-2 rounded-lg hover:bg-white/5 hover:-translate-y-0.5 w-1/3">
                    <div className="text-2xl sm:text-3xl leading-tight bg-gradient-to-r from-white to-stone-300 bg-clip-text text-transparent font-dm font-medium">
                      10<span className="text-lg sm:text-xl">x</span>
                    </div>
                    <div className="text-[10px] sm:text-xs opacity-70 uppercase tracking-widest mt-1 text-stone-300">RAPPORT</div>
                  </div>
                </div>
                
                <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-5" />
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2.5 mb-5">
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-medium tracking-wide px-3 py-1.5 rounded-full bg-stone-700/50 border border-stone-600/30 text-stone-300 cursor-pointer transition-all duration-300 hover:-translate-y-px">
                    <iconify-icon icon="solar:shield-check-bold-duotone" width="14" height="14" />
                    ISO 27001
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-medium tracking-wide px-3 py-1.5 rounded-full bg-stone-700/50 border border-stone-600/30 text-stone-300 cursor-pointer transition-all duration-300 hover:-translate-y-px">
                    <iconify-icon icon="solar:chart-square-bold-duotone" width="14" height="14" />
                    REALTID
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-medium tracking-wide px-3 py-1.5 rounded-full bg-stone-700/50 border border-stone-600/30 text-stone-300 cursor-pointer transition-all duration-300 hover:-translate-y-px">
                    <iconify-icon icon="solar:bolt-bold-duotone" width="14" height="14" />
                    AUTOMATISERAD
                  </span>
                </div>
              </div>
            </div>

            {/* Quality Bar Chart Widget */}
            <section className="flex flex-col bg-stone-800 border-stone-700 border rounded-3xl p-6 w-full hover:-translate-y-1 transition-transform duration-500">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.14em] text-stone-400">Kvalitetsindex</p>
                  <h2 className="text-[22px] sm:text-[24px] font-semibold tracking-tighter text-stone-100 font-dm">Ronderingsdata</h2>
                </div>
                <button className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-stone-700 hover:bg-stone-600 transition border border-stone-600 text-stone-300">
                  <iconify-icon icon="solar:refresh-circle-bold-duotone" width="20" height="20" />
                </button>
              </div>

              <div className="flex-1 flex flex-col gap-4">
                <div className="flex items-center justify-between text-[10px] text-stone-500 px-1">
                  <span>Jan</span><span>Feb</span><span>Mar</span><span className="font-semibold text-stone-200">Apr</span><span>Maj</span><span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span><span>Okt</span><span>Nov</span><span>Dec</span>
                </div>
                
                <div className="mt-1 grid grid-cols-12 gap-2 h-32 items-end">
                  <div className="rounded-t-full bg-stone-700 h-[26%] w-full" />
                  <div className="rounded-t-full bg-stone-700 h-[32%] w-full" />
                  <div className="rounded-t-full bg-stone-700 h-[45%] w-full" />
                  <div className="rounded-t-full bg-stone-400 h-[68%] shadow-md border-t border-stone-300 w-full relative">
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold text-stone-200">98%</div>
                  </div>
                  <div className="rounded-t-full bg-stone-600 h-[74%] w-full" />
                  <div className="rounded-t-full bg-stone-600 h-[80%] w-full" />
                  <div className="rounded-t-full bg-stone-600 h-[92%] w-full" />
                  <div className="rounded-t-full bg-stone-600 h-[100%] w-full" />
                  <div className="rounded-t-full bg-stone-700 h-[77%] w-full" />
                  <div className="rounded-t-full bg-stone-700 h-[60%] w-full" />
                  <div className="rounded-t-full bg-stone-700/50 h-[40%] w-full" />
                  <div className="rounded-t-full bg-stone-700/50 h-[34%] w-full" />
                </div>

                <div className="mt-4 flex items-center justify-between gap-3 border-t border-stone-700 pt-4">
                  <div className="flex-1 max-w-[140px]">
                    <p className="text-[11px] text-stone-500 mb-1.5">Period</p>
                    <button className="w-full flex items-center justify-between rounded-xl bg-stone-700 px-3 py-2 text-xs font-medium text-stone-200 border border-stone-600 hover:bg-stone-600 transition-colors">
                      <span>April</span>
                      <iconify-icon icon="solar:alt-arrow-down-bold-duotone" width="14" height="14" style={{ color: '#a8a29e' }} />
                    </button>
                  </div>
                  <div className="flex flex-col items-end">
                    <p className="text-[11px] text-stone-500 mb-0.5">SLA-uppfyllnad</p>
                    <p className="text-2xl font-semibold tracking-tighter text-stone-100 font-dm">114%</p>
                  </div>
                </div>
              </div>
            </section>

          </div>
        </div>

      </div>
    </section>
  );
};

export default ProductMontage;
