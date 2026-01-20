export default function LogoMarquee() {
  return (
    <section 
      className="w-[95%] z-20 pb-8 absolute bottom-0"
      style={{
        willChange: 'transform',
        transform: 'translateZ(0)',
        contain: 'layout style paint'
      }}
    >
      <div className="flex flex-col lg:flex-row overflow-hidden opacity-50 w-full pt-6 gap-x-6 gap-y-6 items-center justify-between">
        {/* Infinite Marquee Section */}
        <div 
          className="flex-1 overflow-hidden mask-gradient-fade w-full relative"
          style={{
            willChange: 'transform',
            transform: 'translateZ(0)'
          }}
        >
          <div 
            className="flex animate-marquee hover:[animation-play-state:paused] w-max gap-x-16 gap-y-16 items-center"
            style={{
              willChange: 'transform',
              transform: 'translateZ(0)'
            }}
          >
            {/* Repeated Tagline Set */}
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="flex items-center gap-4 whitespace-nowrap">
                <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
                  Objective Signals. Personalized Starts.
                </span>
                <span className="text-4xl md:text-5xl lg:text-6xl text-white/30">•</span>
              </div>
            ))}
          </div>
        </div>

        {/* Trusted By Label */}
        <div className="flex items-center gap-3 text-white/30 text-xs font-mono shrink-0 relative z-10 bg-[#030303] pl-4 lg:bg-transparent lg:pl-0">
          <span className="text-white tracking-wide">[ <span className="text-brand-sky">✓</span> ] PILOT PARTNERS</span>
        </div>
      </div>
    </section>
  );
}
