'use client';

import React from 'react';

const principles = [
  {
    num: "01",
    title: "Kvalitetssäkring",
    desc: "Vi bygger verktyg som dokumenterar varje steg — automatiskt. SLA-uppfyllnad, kontrollpunkter och avvikelser loggas i realtid, inte i efterhand.",
    delay: "delay-100"
  },
  {
    num: "02",
    title: "Operativ effektivitet",
    desc: "Väktare ska bevaka, inte fylla i papper. GuardTools eliminerar manuellt arbete och ger tid tillbaka till det som faktiskt spelar roll.",
    delay: "delay-200"
  },
  {
    num: "03",
    title: "Transparens",
    desc: "Kunden ser vad som händer i realtid. Inga svarta lådor, inga eftersläpande rapporter. Full insyn skapar förtroende som är omöjligt att fejka.",
    delay: "delay-300"
  },
  {
    num: "04",
    title: "Informationssäkerhet",
    desc: "ISO 27001-certifierade. Vi behandlar våra kunders data med samma noggrannhet som de bevakar sina kunders fastigheter.",
    delay: "delay-400"
  },
  {
    num: "05",
    title: "Branschkunskap",
    desc: "Grundat av väktare, byggt av ingenjörer. Varje funktion i GuardTools löser ett problem vi själva upplevt på golvet.",
    delay: "delay-500"
  }
];

const LogicSection = () => {
  return (
    <section className="w-full bg-stone-900 py-24 px-6 md:px-12 md:py-32 relative text-[#F2F0EB]">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-24 max-w-2xl reveal-item">
          <h2 className="mb-8 text-4xl font-light tracking-tighter text-white md:text-6xl font-dm">
            Våra grundprinciper
          </h2>
          <p className="text-lg leading-relaxed text-stone-400 tracking-tight">
            GuardTools är inte bara ett verktyg — det är en filosofi. För att lyfta säkerhetsbranschen 
            till sin fulla potential följer vi principer som styr vår utveckling, design och leverans.
          </p>
        </div>

        {/* Principles List */}
        <div className="flex flex-col w-full">
          {principles.map((item) => (
            <div key={item.num} className={`group flex flex-col gap-4 border-b border-stone-800 py-8 transition-colors hover:bg-stone-800/30 md:flex-row md:items-baseline md:gap-12 reveal-item ${item.delay}`}>
              <div className="flex basis-1/3 items-baseline gap-8 text-sm md:text-base">
                <span className="font-mono text-stone-600">{item.num}</span>
                <span className="font-medium tracking-tight text-white">{item.title}</span>
              </div>
              <div className="basis-2/3">
                <p className="text-stone-500 transition-colors group-hover:text-stone-300 leading-relaxed text-base">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}

          {/* Highlighted item */}
          <div className="group flex flex-col gap-4 rounded-lg bg-stone-800/50 px-4 py-6 transition-all hover:bg-stone-800 md:flex-row md:items-center md:gap-12 md:-mx-4 mt-8 reveal-item delay-500">
            <div className="flex basis-1/3 items-center gap-8 text-sm md:text-base">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-stone-700 text-stone-300">
                <iconify-icon icon="solar:global-linear" width="14" height="14" />
              </div>
              <span className="font-medium tracking-tight text-white">Internationell räckvidd</span>
            </div>
            <div className="basis-2/3">
              <p className="text-stone-400 leading-relaxed text-base">
                Från Göteborg till hela Norden och bortom. GuardTools används av säkerhetsföretag i 
                flera länder, med stöd för lokala regulatoriska krav.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogicSection;
