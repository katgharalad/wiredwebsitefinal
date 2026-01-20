'use client';

import { useEffect } from 'react';
import Image from 'next/image';

export default function Features() {
  useEffect(() => {
    const cards = document.querySelectorAll('.spotlight-card');
    const cleanupFunctions: (() => void)[] = [];
    
    cards.forEach((card) => {
      let rafId: number | null = null;
      const handleMouseMove = (e: Event) => {
        if (rafId) return;
        const mouseEvent = e as MouseEvent;
        
        rafId = requestAnimationFrame(() => {
          const rect = card.getBoundingClientRect();
          const x = mouseEvent.clientX - rect.left;
          const y = mouseEvent.clientY - rect.top;
          (card as HTMLElement).style.setProperty('--mouse-x', `${x}px`);
          (card as HTMLElement).style.setProperty('--mouse-y', `${y}px`);
          rafId = null;
        });
      };
      card.addEventListener('mousemove', handleMouseMove, { passive: true });
      cleanupFunctions.push(() => {
        card.removeEventListener('mousemove', handleMouseMove);
        if (rafId) cancelAnimationFrame(rafId);
      });
    });
    
    return () => {
      cleanupFunctions.forEach(cleanup => cleanup());
    };
  }, []);

  return (
    <section id="features" className="flex flex-col overflow-hidden lg:px-12 z-10 bg-black/50 w-full border-white/5 border-t pt-32 pr-6 pb-32 pl-6 relative items-center">
      {/* Clean Background Line (No Glows) */}
      <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      {/* Section Header */}
      <div className="flex flex-col items-center text-center max-w-3xl mb-24 relative z-10">
        {/* Hero-Inspired Vertical Beam Animation */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-48 w-6 overflow-hidden flex justify-center">
          <svg className="h-full w-full" viewBox="0 0 6 192" fill="none">
            <defs>
              <linearGradient id="header-beam" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#38BDF8" stopOpacity="0" />
                <stop offset="50%" stopColor="#38BDF8" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#38BDF8" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M3 0V192" stroke="url(#header-beam)" strokeWidth="1.5" strokeLinecap="round" className="beam-line animate-beam opacity-70"></path>
          </svg>
        </div>

        <div className="flex items-center gap-3 mb-8 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-sky opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-sky"></span>
          </span>
          <span className="text-xs font-mono text-brand-sky uppercase tracking-[0.2em] font-medium">System Capabilities</span>
        </div>

        <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-medium tracking-tight text-white mb-8">
          Brain signals, measured and translated.
        </h2>

        <p className="text-xl text-white/60 leading-relaxed max-w-2xl font-light tracking-tight">
          Syndx uses signal processing, artifact rejection, and spectral analysis to turn raw EEG into decision support for mood disorder treatment.
        </p>
      </div>

      {/* Feature Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 z-10 w-full max-w-7xl relative gap-x-6 gap-y-6">
        {/* Card 1: Automated Execution */}
        <div className="spotlight-card group relative flex flex-col p-10 rounded-[32px] border border-white/10 bg-white/[0.02] overflow-hidden transition-all duration-500">
          {/* Spotlight Background */}
          <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.06), transparent 40%)' }}></div>
          {/* Spotlight Border */}
          <div className="pointer-events-none absolute inset-0 rounded-[32px] border border-brand-sky/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ maskImage: 'radial-gradient(300px circle at var(--mouse-x) var(--mouse-y), black, transparent)', WebkitMaskImage: 'radial-gradient(300px circle at var(--mouse-x) var(--mouse-y), black, transparent)' }}></div>

          <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          </div>

          <h3 className="text-2xl font-semibold tracking-tight text-white mb-4 relative z-10">Biomarker Computation</h3>
          <p className="text-base text-white/50 leading-relaxed mb-12 relative z-10 font-light">Extract features like frontal alpha asymmetry (FAA) with millisecond precision using validated EEG processing methods.</p>

          {/* Visual: Chat/Terminal UI */}
          <div className="relative z-10 mt-auto w-full h-72 rounded-2xl border border-white/10 bg-[#0A0A0A] overflow-hidden flex flex-col shadow-2xl">
            {/* Header */}
            <div className="px-5 py-4 border-b border-white/5 flex items-center justify-between bg-white/5">
              <div className="flex items-center gap-2 opacity-50">
                <div className="w-2 h-2 rounded-full bg-white/40"></div>
                <div className="w-2 h-2 rounded-full bg-white/40"></div>
              </div>
              <span className="text-xs text-white/30 font-mono">Syndx Engine v1.3</span>
            </div>
            {/* Body */}
            <div className="p-6 flex flex-col gap-5 relative h-full">
              <div className="absolute top-0 right-0 bottom-0 left-0">
              </div>

              {/* User Message */}
              <div className="self-end max-w-[90%] bg-white/10 backdrop-blur-sm rounded-2xl rounded-tr-sm p-4 border border-white/5 animate-[fadeIn_1s_ease-out]">
                <p className="text-xs text-white/90 font-light leading-relaxed">
                  Process EEG recording from <span className="text-white font-medium">Patient ID: 2047</span>.
                  Compute <span className="text-brand-sky">FAA index</span>.
                </p>
              </div>

              {/* System Message */}
              <div className="self-start max-w-[90%] bg-white/[0.03] backdrop-blur-md rounded-2xl rounded-tl-sm p-5 border border-white/10 relative overflow-hidden group-hover:border-brand-sky/20 transition-colors duration-500">
                <div className="flex items-center gap-2 mb-3 text-brand-sky font-mono text-[10px] uppercase tracking-wider">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
                  </svg> Syndx Engine
                </div>
                <p className="mb-4 text-xs text-white/80 font-light">FFT window initialized (2s, Hamming). PSD normalized. FAA = -0.42 computed.</p>

                {/* Progress Bar */}
                <div className="w-full bg-black/40 rounded-full h-1.5 mb-2 overflow-hidden">
                  <div className="bg-brand-sky h-full w-[100%] animate-[pulse_2s_infinite]"></div>
                </div>
                <div className="flex justify-between text-[10px] text-brand-sky/60 font-mono">
                  <span>COMPUTED</span>
                  <span>-0.42 FAA Index</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2: Smart Liquidity (Clean & Hero Inspired) */}
        <div className="spotlight-card relative flex flex-col p-[1px] rounded-[32px] overflow-hidden lg:-mt-8 lg:mb-8 z-20 group">
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-transparent rounded-[32px]">
          </div>
          <div className="absolute inset-0 bg-[#050505] rounded-[31px] m-[1px] overflow-hidden">
            {/* Inner Spotlight Background */}
            <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" style={{ background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.06), transparent 40%)' }}></div>
          </div>

          {/* Spotlight Border Overlay */}
          <div className="pointer-events-none absolute inset-0 rounded-[32px] border border-brand-sky/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-50" style={{ maskImage: 'radial-gradient(300px circle at var(--mouse-x) var(--mouse-y), black, transparent)', WebkitMaskImage: 'radial-gradient(300px circle at var(--mouse-x) var(--mouse-y), black, transparent)' }}></div>

          <div className="relative z-10 flex flex-col h-full p-10 group">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative">
                <div className="absolute inset-0 bg-brand-sky/20 blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-zap text-brand-sky relative z-10">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold tracking-tight text-white group-hover:text-white transition-colors">Asymmetry
                Analysis</h3>
            </div>
            <p className="text-base text-white/50 leading-relaxed mb-12 font-light group-hover:text-white/70 transition-colors">
              Comparing patient score to normative database. Left-frontal hypoactivity detected. 32nd percentile alignment.</p>

            {/* Visual: Asymmetry Analysis Screenshot */}
            <div className="mt-auto relative w-full h-80 rounded-2xl border border-white/10 bg-[#0A0A0A] overflow-hidden shadow-2xl">
              <Image
                src="/abcd1.png"
                alt="Asymmetry analysis showing patient score comparison to normative database"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
        </div>

        {/* Card 3: Multi-Sig Governance */}
        <div className="spotlight-card group relative flex flex-col p-10 rounded-[32px] border border-white/10 bg-white/[0.02] overflow-hidden transition-all duration-500">
          {/* Spotlight Background */}
          <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.06), transparent 40%)' }}></div>
          {/* Spotlight Border */}
          <div className="pointer-events-none absolute inset-0 rounded-[32px] border border-brand-sky/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ maskImage: 'radial-gradient(300px circle at var(--mouse-x) var(--mouse-y), black, transparent)', WebkitMaskImage: 'radial-gradient(300px circle at var(--mouse-x) var(--mouse-y), black, transparent)' }}></div>

          <h3 className="text-2xl font-semibold tracking-tight text-white mb-4 relative z-10">Clinical Readiness</h3>
          <p className="text-base text-white/50 leading-relaxed mb-12 relative z-10 font-light">Generate structured reports with FAA score, interpretation, and percentile rank. Compatible with standard EHRs and workflows.</p>

          {/* Visual: Clinical Report Screenshot */}
          <div className="relative mt-auto w-full h-72 rounded-2xl border border-white/10 bg-[#0A0A0A] overflow-hidden shadow-2xl">
            <Image
              src="/clinical-report-screenshot.jpeg"
              alt="Clinical report showing FAA score, interpretation, and percentile rank"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <div className="mt-24 relative z-10">
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfOxKc-zdaiUdwdceF4mtMBQ2nKPD5qR8dDGGUbsoXh6jURtg/viewform?usp=publish-editor" target="_blank" rel="noopener noreferrer" className="group relative px-9 py-4 rounded-full bg-white text-black font-semibold text-sm transition-all duration-300 hover:bg-[#e5e5e5] flex items-center gap-3 overflow-hidden tracking-tight">
          <span className="relative z-10">Explore Platform</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right relative z-10 transition-transform duration-300 group-hover:translate-x-1">
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
          
          {/* Button Shine Effect */}
          <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent z-0"></div>
        </a>
      </div>
    </section>
  );
}
