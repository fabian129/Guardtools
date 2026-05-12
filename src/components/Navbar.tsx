'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-[#050505]/95 backdrop-blur-xl border-b border-white/5' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12 py-5">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-xl font-dm font-light tracking-tighter text-white">
            Guard<span className="font-medium">Tools</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10 text-sm tracking-tight text-white/50">
          <Link href="#" className="hover:text-white transition-colors">Lösningar</Link>
          <Link href="#" className="hover:text-white transition-colors">Branscher</Link>
          <Link href="#" className="hover:text-white transition-colors">Om oss</Link>
          <Link href="#" className="hover:text-white transition-colors">Academy</Link>
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-6">
          <span className="text-xs text-white/30 tracking-tight">+46 31-22 11 95</span>
          <Link 
            href="#kontakt" 
            className="rounded-full bg-white px-5 py-2.5 text-sm text-stone-900 font-medium transition-all hover:bg-white/90 hover:scale-105"
          >
            Kontakta oss
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
