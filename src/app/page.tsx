'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ContentSection from '@/components/ContentSection';
import BenefitsSection from '@/components/BenefitsSection';
import SystemSection from '@/components/SystemSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

export default function Home() {
  useScrollReveal();

  return (
    <>
      <Navbar />
      <main>
        {/* ── HERO (AI Template) ── */}
        <Hero />

        {/* ── MANIFESTO (AI Template – ljus beige) ── */}
        <ContentSection />

        {/* ── NEXUS SEKTIONER (mörk) ── */}
        <BenefitsSection />
        <SystemSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
