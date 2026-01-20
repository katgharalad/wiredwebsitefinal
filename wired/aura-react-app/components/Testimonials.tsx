export default function Testimonials() {
  return (
    <section className="overflow-hidden flex flex-col lg:px-12 z-10 bg-[#030303]/80 w-full border-white/5 border-t pt-32 pb-32 relative backdrop-blur-xl items-center">
      {/* Subtle Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_200px] [mask-image:radial-gradient(ellipse_at_top,black_40%,transparent_100%)] pointer-events-none">
      </div>

      {/* Futuristic EEG Visualization Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <svg className="absolute inset-0 w-full h-full opacity-50" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
          <defs>
            <radialGradient id="center-glow-teal" cx="50%" cy="50%">
              <stop offset="0%" stopColor="rgba(29, 229, 226, 0.6)" />
              <stop offset="70%" stopColor="rgba(29, 229, 226, 0.2)" />
              <stop offset="100%" stopColor="rgba(29, 229, 226, 0)" />
            </radialGradient>
            <radialGradient id="center-core-blue" cx="50%" cy="50%">
              <stop offset="0%" stopColor="rgba(79, 140, 255, 1)" />
              <stop offset="100%" stopColor="rgba(79, 140, 255, 0.3)" />
            </radialGradient>
            <linearGradient id="data-flow" x1="0%" y1="100%" x2="50%" y2="50%">
              <stop offset="0%" stopColor="rgba(79, 140, 255, 0.8)" />
              <stop offset="50%" stopColor="rgba(79, 140, 255, 0.4)" />
              <stop offset="100%" stopColor="rgba(29, 229, 226, 0.1)" />
            </linearGradient>
          </defs>

          {/* Hourglass Curved Lines */}
          <path 
            d="M 0 100 Q 600 400, 1200 100" 
            fill="none" 
            stroke="rgba(255, 255, 255, 0.08)" 
            strokeWidth="1.5"
            strokeDasharray="4 8"
          />
          <path 
            d="M 0 700 Q 600 400, 1200 700" 
            fill="none" 
            stroke="rgba(255, 255, 255, 0.08)" 
            strokeWidth="1.5"
            strokeDasharray="4 8"
          />

          {/* Left Side Pixelated Data Representation */}
          <g opacity="0.3">
            {/* Dense grid in bottom-left */}
            {Array.from({ length: 12 }).map((_, i) => 
              Array.from({ length: 8 }).map((_, j) => (
                <rect
                  key={`${i}-${j}`}
                  x={50 + i * 20}
                  y={600 + j * 15}
                  width="12"
                  height="12"
                  fill="rgba(79, 140, 255, 0.6)"
                  opacity={1 - (i * 0.05 + j * 0.03)}
                />
              ))
            )}
            {/* Fading dots flowing towards center */}
            {Array.from({ length: 30 }).map((_, i) => (
              <circle
                key={`dot-${i}`}
                cx={200 + (i * 15)}
                cy={550 - (i * 8)}
                r={3 - (i * 0.08)}
                fill="rgba(79, 140, 255, 0.4)"
                opacity={0.6 - (i * 0.015)}
              />
            ))}
          </g>

          {/* Central Glowing Element */}
          <g transform="translate(600, 400)">
            {/* Outer dashed ring (teal-green) */}
            <circle 
              r="80" 
              fill="none" 
              stroke="rgba(29, 229, 226, 0.4)" 
              strokeWidth="2" 
              strokeDasharray="8 12"
              className="animate-pulse"
            />
            
            {/* Middle translucent teal circle */}
            <circle 
              r="50" 
              fill="url(#center-glow-teal)" 
              opacity="0.5"
            />
            
            {/* Inner solid blue circle with ring */}
            <circle 
              r="25" 
              fill="url(#center-core-blue)" 
              opacity="0.8"
            />
            <circle 
              r="25" 
              fill="none" 
              stroke="rgba(79, 140, 255, 0.9)" 
              strokeWidth="1.5"
            />
            
            {/* Tiny bright center dot */}
            <circle 
              r="3" 
              fill="rgba(79, 140, 255, 1)" 
              className="animate-pulse"
            />
            
            {/* Light blue lines extending from center */}
            <line 
              x1="25" 
              y1="0" 
              x2="150" 
              y2="-30" 
              stroke="rgba(79, 140, 255, 0.6)" 
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <line 
              x1="-25" 
              y1="0" 
              x2="-150" 
              y2="30" 
              stroke="rgba(79, 140, 255, 0.6)" 
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </g>

          {/* Additional flowing data lines */}
          <path 
            d="M 200 600 Q 400 500, 600 400" 
            fill="none" 
            stroke="rgba(79, 140, 255, 0.3)" 
            strokeWidth="1"
            strokeDasharray="2 4"
          />
          <path 
            d="M 1000 200 Q 800 300, 600 400" 
            fill="none" 
            stroke="rgba(79, 140, 255, 0.3)" 
            strokeWidth="1"
            strokeDasharray="2 4"
          />
        </svg>
      </div>

      <div className="max-w-7xl w-full relative z-10">
        {/* Header Group */}
        <div className="flex flex-col gap-8 mb-24 max-w-5xl mx-auto text-center">
          <span className="text-xs font-mono text-white/40 uppercase tracking-[0.2em] font-medium pl-1 flex items-center justify-center gap-3">
            <span className="w-1 h-1 bg-brand-sky rounded-full shadow-[0_0_10px_rgba(56,189,248,0.8)]"></span>
            Built for the Future of Psychiatric Care
          </span>

          <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif font-medium tracking-tight text-white leading-[1.1]">
            Clinicians need more than symptom scores. Syndx brings measurable, neural data into the decision process.
          </h2>
        </div>

        {/* Statement & Actions Block */}
        <div className="max-w-4xl mx-auto flex flex-col justify-end h-full relative">
            {/* Statement */}
            <div className="mb-12 relative text-center">
              <p className="text-xl md:text-2xl lg:text-3xl text-white/80 font-light leading-relaxed tracking-tight mb-6">
                Psychiatry is one of the only fields in medicine that still relies on trial and error. Doctors do their best, but they&apos;re working without biological feedback. No blood test. No imaging. Just what the patient says—and weeks of waiting to see if a treatment works.
              </p>
              <p className="text-xl md:text-2xl lg:text-3xl text-white/80 font-light leading-relaxed tracking-tight mb-6">
                We believe the brain leaves measurable signatures. That signals like frontal alpha asymmetry, which have been studied for years, can be used in the real world—not just in research papers.
              </p>
              <p className="text-xl md:text-2xl lg:text-3xl text-white/80 font-light leading-relaxed tracking-tight mb-6">
                Syndx was built to bring that science to the clinic. To turn raw EEG into something a psychiatrist can actually use. It&apos;s not magic. It&apos;s a signal we can calculate, compare, and deliver in a form that supports real decisions.
              </p>
              <p className="text-xl md:text-2xl lg:text-3xl text-white/80 font-light leading-relaxed tracking-tight">
                We&apos;re not claiming to solve depression. But if we can reduce the time it takes to find the right treatment, even by a few weeks, that&apos;s a step worth taking. That&apos;s why we&apos;re building this.
              </p>
            </div>

            {/* Divider */}
            <div className="mb-12 flex items-center gap-4">
              <div className="h-px w-8 bg-brand-sky/30"></div>
            </div>

            {/* Bottom Row: CTA */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-center gap-6 border-t border-white/5 pt-8">
              {/* CTA Button */}
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSfOxKc-zdaiUdwdceF4mtMBQ2nKPD5qR8dDGGUbsoXh6jURtg/viewform?usp=publish-editor" target="_blank" rel="noopener noreferrer" className="shiny-cta group !px-7 !py-3">
                <span className="text-sm font-medium">Start Pilot</span>
              </a>
            </div>
          </div>
      </div>
    </section>
  );
}
