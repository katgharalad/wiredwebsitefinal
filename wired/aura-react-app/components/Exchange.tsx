export default function Exchange() {
  return (
    <section className="lg:px-12 flex flex-col overflow-hidden z-10 bg-[#030303]/50 w-full border-white/5 border-t px-6 py-32 relative items-center">

      <div className="max-w-7xl w-full relative z-10">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-12 mb-20">
          <div className="flex flex-col gap-6 max-w-3xl">
            {/* Index / Label */}
            <div className="flex items-center gap-4">
              <span className="flex items-center justify-center w-8 h-8 rounded-full border border-white/10 bg-white/5 text-xs font-mono text-white/50">03</span>
              <span className="text-xs font-mono text-brand-sky/90 uppercase tracking-[0.2em]">Pipeline Overview</span>
            </div>

            {/* Headline */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium tracking-tight text-white leading-[1.1]">
              Transform EEG Into Insight.
              <span className="text-white/40 italic"> Standard EEG input, artifact removal, alpha isolation, FAA computation, clinical PDF output.</span>
            </h2>
          </div>

          {/* Context Paragraph */}
          <div className="max-w-sm pb-2">
            <p className="text-white/50 text-sm leading-relaxed font-light">
              Begin with EEG. Record 5–10 minutes of resting-state data (eyes closed). Channels F3, F4, Cz at 256Hz.
            </p>
          </div>
        </div>

        {/* Main Feature Card */}
        <div className="w-full rounded-[24px] border border-white/10 bg-[#080808] overflow-hidden flex flex-col lg:flex-row relative group">
          {/* Left Column: Content */}
          <div className="lg:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center items-start z-10 relative bg-[#080808]">
            <h3 className="text-3xl md:text-4xl font-serif font-medium text-white mb-6 tracking-tight">
              Clean the Signal. Extract Alpha. Calculate FAA. Generate Output.
            </h3>
            <p className="text-white/60 mb-10 leading-relaxed font-light max-w-md text-base">
              Remove eye blinks and muscle tension using ICA. Confirm channel impedance ≤ 50kΩ. Isolate 8–13 Hz activity using Welch&apos;s method. Compute power at F3/F4. FAA = ln(F4) - ln(F3). Normalize and compare to internal reference distributions. PDF lab report with FAA index, interpretation, and percentile score. EHR-compatible.
            </p>

            <div className="flex flex-wrap gap-4 w-full sm:w-auto">
              {/* Primary Button (Brand Sky) */}
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSfOxKc-zdaiUdwdceF4mtMBQ2nKPD5qR8dDGGUbsoXh6jURtg/viewform?usp=publish-editor" target="_blank" rel="noopener noreferrer" className="px-8 py-3.5 bg-brand-sky text-[#030303] font-semibold text-sm rounded-full hover:bg-[#38BDF8]/90 transition-colors flex items-center justify-center gap-2 min-w-[140px]">
                Get Started
              </a>
              {/* Secondary Button (Outline) */}
              <a href="#features" className="px-8 py-3.5 border border-white/10 text-white font-medium text-sm rounded-full hover:bg-white/5 transition-colors flex items-center justify-center gap-2 min-w-[140px]">
                View Methodology
              </a>
            </div>
          </div>

          {/* Right Column: Clean Technical Illustration */}
          <div className="lg:w-1/2 bg-[#050505] relative min-h-[400px] border-t lg:border-t-0 lg:border-l border-white/5 overflow-hidden flex items-center justify-center">
            {/* Subtle Isometric Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '48px 96px' }}>
            </div>

            {/* Abstract Devices Composition */}
            <div className="relative w-full h-full flex items-center justify-center p-12 perspective-1000">
              <div className="relative w-72 h-56 transform rotate-x-6 rotate-y-[-6deg] hover:rotate-0 transition-transform duration-700 ease-out">
                {/* Background Panel (EEG Dashboard) */}
                <div className="absolute top-0 right-0 w-56 h-36 bg-[#0A0A0A] border border-white/10 rounded-xl shadow-2xl z-0 overflow-hidden">
                  <div className="h-8 border-b border-white/5 flex items-center px-3 gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
                  </div>
                  <div className="p-4 grid grid-cols-2 gap-3">
                    <div className="h-12 bg-white/5 rounded border border-white/5 flex items-center justify-center">
                      <span className="text-[9px] font-mono text-white/40">F3</span>
                    </div>
                    <div className="h-12 bg-white/5 rounded border border-white/5 flex items-center justify-center">
                      <span className="text-[9px] font-mono text-white/40">F4</span>
                    </div>
                  </div>
                </div>

                {/* Foreground Panel (Clinical Report) */}
                <div className="absolute bottom-4 left-4 w-44 h-32 bg-[#0F0F0F] border border-white/10 rounded-xl shadow-[0_20px_40px_-15px_rgba(0,0,0,1)] z-10 flex flex-col overflow-hidden">
                  <div className="flex justify-between items-center p-4 border-b border-white/5 bg-white/[0.01]">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-brand-sky flex items-center justify-center">
                        <svg className="w-2.5 h-2.5 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span className="text-[10px] font-mono text-white/60">FAA Index</span>
                    </div>
                    <span className="text-[10px] font-mono text-brand-sky">-0.42</span>
                  </div>
                  <div className="p-4 space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-white/40">Percentile</span>
                      <span className="text-xs text-white font-mono">32nd</span>
                    </div>
                    <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                      <div className="w-[32%] h-full bg-brand-sky"></div>
                    </div>
                  </div>
                </div>

                {/* Floating EEG Icon */}
                <div className="absolute -top-6 -left-6 w-12 h-12 bg-[#050505] border border-white/10 rounded-full flex items-center justify-center z-20 shadow-xl animate-[bounce_4s_infinite]">
                  <svg className="w-5 h-5 text-white/80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M3 12h18M3 6h18M3 18h18"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
