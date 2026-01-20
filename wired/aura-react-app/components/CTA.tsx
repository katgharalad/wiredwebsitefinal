import Image from 'next/image';

export default function CTA() {
  return (
    <section className="flex lg:px-12 bg-[#030303]/80 w-full z-10 border-white/5 border-t px-6 py-32 relative justify-center">
      <div className="w-full max-w-7xl bg-brand-sky rounded-[32px] relative overflow-hidden flex flex-col lg:flex-row items-start lg:items-end justify-between p-10 lg:p-24 group">

        {/* Left Content */}
        <div className="relative z-10 flex flex-col max-w-2xl mb-12 lg:mb-0">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium tracking-tight text-[#030303] mb-8 leading-[1.05]">
            Not sure how FAA fits your <span className="opacity-60 italic">treatment protocols?</span>
          </h2>

          {/* Interaction Card */}
          <a href="#" className="group/card relative mt-4 w-full sm:w-80 h-36 border border-[#030303]/10 rounded-2xl p-6 flex flex-col justify-between hover:border-[#030303]/20 hover:scale-[1.02] transition-all duration-300 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/faa-treatment-bg.png"
                alt="FAA Treatment Protocols"
                fill
                className="object-cover"
                style={{ objectFit: 'cover' }}
              />
              {/* Overlay for text readability */}
              <div className="absolute inset-0 bg-[#030303]/40 group-hover/card:bg-[#030303]/50 transition-colors"></div>
            </div>
            {/* Content */}
            <div className="relative z-10 flex flex-col justify-between h-full">
              <div className="flex justify-between items-start">
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 24 24" className="text-white w-8 h-8 opacity-80">
                  <path fill="currentColor" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12c0 1.6.376 3.112 1.043 4.453c.178.356.237.763.134 1.148l-.595 2.226a1.3 1.3 0 0 0 1.591 1.592l2.226-.596a1.63 1.63 0 0 1 1.149.133A9.96 9.96 0 0 0 12 22" opacity=".5"></path>
                  <path fill="currentColor" d="M7.825 12.85a.825.825 0 0 0 0 1.65h6.05a.825.825 0 0 0 0-1.65zm0-3.85a.825.825 0 0 0 0 1.65h8.8a.825.825 0 0 0 0-1.65z"></path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 24 24" className="text-white w-6 h-6 opacity-40 group-hover/card:opacity-100 group-hover/card:translate-x-1 group-hover/card:-translate-y-1 transition-all">
                  <path fill="currentColor" fillRule="evenodd" d="M17.47 15.53a.75.75 0 0 0 1.28-.53V6a.75.75 0 0 0-.75-.75H9a.75.75 0 0 0-.53 1.28z" clipRule="evenodd"></path>
                  <path fill="currentColor" d="M5.47 17.47a.75.75 0 1 0 1.06 1.06l6.97-6.97l-1.06-1.06z" opacity=".5"></path>
                </svg>
              </div>
              <div className="">
                <span className="block text-white font-semibold text-lg tracking-tight">Consult With Us</span>
                <span className="text-white/80 text-xs font-medium uppercase tracking-wider">Priority Access</span>
              </div>
            </div>
          </a>
        </div>

        {/* Right Content */}
        <div className="relative z-10 max-w-md pb-2 lg:text-right flex flex-col items-start lg:items-end gap-6">
          <p className="text-[#030303]/70 text-lg lg:text-xl font-medium leading-relaxed">
            We work with hospitals and research teams to implement Syndx under IRB or limited release.
          </p>

          {/* Abstract Decor Lines */}
          <div className="hidden lg:flex gap-1.5 opacity-30">
            <div className="w-1.5 h-1.5 rounded-full bg-[#030303]"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-[#030303]"></div>
            <div className="w-12 h-1.5 rounded-full bg-[#030303]"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
