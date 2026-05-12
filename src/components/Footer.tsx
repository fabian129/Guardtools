'use client';

import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#050505] border-t border-white/5 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-12 md:gap-8 mb-20">
          <div className="col-span-2 md:col-span-4">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-xl font-bold tracking-tight text-white">Guard<span className="text-white/40">Tools</span></span>
            </div>
            <p className="text-sm text-neutral-500 leading-relaxed max-w-xs">
              Den banbrytande digitala helhetslösningen för bemannad bevakning, larmhantering och säkerhet. Byggt i Göteborg sedan 2004.
            </p>
          </div>

          <div className="col-span-1 md:col-span-2">
            <h4 className="text-sm font-semibold text-white mb-6">Lösningar</h4>
            <ul className="space-y-4 text-sm text-neutral-500">
              <li><Link href="#" className="hover:text-white transition-colors">Rondering</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Larmhantering</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Command & Control</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Rapportmotor</Link></li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-2">
            <h4 className="text-sm font-semibold text-white mb-6">Resurser</h4>
            <ul className="space-y-4 text-sm text-neutral-500">
              <li><Link href="#" className="hover:text-white transition-colors">Academy</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Support</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Nyheter</Link></li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-2">
            <h4 className="text-sm font-semibold text-white mb-6">Företag</h4>
            <ul className="space-y-4 text-sm text-neutral-500">
              <li><Link href="#" className="hover:text-white transition-colors">Om oss</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Jobba här</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Kontakt</Link></li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-2">
            <h4 className="text-sm font-semibold text-white mb-6">Juridik</h4>
            <ul className="space-y-4 text-sm text-neutral-500">
              <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Villkor</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">ISO 27001</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-neutral-600 font-medium">© 2025 Blue Mobile Systems AB. Alla rättigheter förbehållna.</p>
          <div className="flex gap-6">
            <a href="#" className="text-neutral-600 hover:text-white transition-colors">
              <iconify-icon icon="simple-icons:linkedin" width="20" height="20" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
