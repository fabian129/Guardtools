'use client';

import React from 'react';

const problems = [
  {
    icon: "solar:shield-check-bold-duotone",
    title: "Kvalitetssäkring",
    desc: "Bristande dokumentation och manuella processer ledde till ojämn kvalitet. Kontrakt och SLA:er var svåra att följa upp.",
    metric: "10x",
    metricLabel: "mer rapportering"
  },
  {
    icon: "solar:bolt-circle-bold-duotone",
    title: "Effektivitet",
    desc: "Väktare spenderade onödig tid på pappersarbete istället för bevakningsuppgifter. Kommunikationen var långsam och opålitlig.",
    metric: "2000",
    metricLabel: "min sparade/mån"
  },
  {
    icon: "solar:chart-square-bold-duotone",
    title: "Konkurrenskraft",
    desc: "Utan digitala verktyg var det omöjligt att särskilja sig. Kunder krävde modern teknik men branschen hängde inte med.",
    metric: "24k",
    metricLabel: "min sparade/år"
  }
];

const ProblemCards = () => {
  return (
    <section id="problems" className="section-dark py-24 md:py-32 relative z-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 reveal-item">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-white/50 backdrop-blur-sm mb-8">
            <iconify-icon icon="solar:magnifer-bold-duotone" width="14" height="14" />
            Tre identifierade problem
          </span>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight text-white font-dm">
            Peter identifierade branschens{' '}
            <span className="text-white/40">grundproblem.</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((item, idx) => (
            <div 
              key={idx} 
              className={`group relative rounded-2xl p-8 border border-white/5 bg-[#1a1a1e] transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/20 hover:shadow-xl hover:shadow-blue-500/5 reveal-item delay-${(idx + 1) * 100}`}
            >
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6 group-hover:bg-blue-500/20 transition-colors duration-300">
                <iconify-icon icon={item.icon} width="28" height="28" />
              </div>
              <h4 className="text-xl font-medium text-white mb-3 font-dm">{item.title}</h4>
              <p className="text-white/40 font-light mb-8 leading-relaxed font-inter text-[15px]">
                {item.desc}
              </p>
              
              {/* Metric */}
              <div className="pt-6 border-t border-white/5">
                <span className="text-3xl font-light text-blue-400 font-dm tabular-nums-tight">{item.metric}</span>
                <p className="text-xs text-white/30 uppercase tracking-widest mt-1 font-inter">{item.metricLabel}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemCards;
