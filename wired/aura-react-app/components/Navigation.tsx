export default function Navigation() {
  return (
    <nav 
      className="fixed flex shadow-black/50 transition-all duration-300 hover:border-white/20 hover:shadow-brand-sky/5 bg-gradient-to-br from-white/10 to-white/0 w-fit max-w-[90vw] z-50 rounded-full ring-white/10 ring-1 pt-1.5 pr-4 pb-1.5 pl-4 top-6 left-1/2 -translate-x-1/2 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] backdrop-blur-xl items-center justify-center gap-8"
      style={{
        willChange: 'transform, opacity',
        backfaceVisibility: 'hidden',
        perspective: '1000px'
      }}
    >
      {/* Logo Area */}
      <div className="flex gap-2.5 items-center">
        <div className="relative flex items-center justify-center">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            style={{ width: '24px', height: '24px', color: 'rgb(56, 189, 248)' }} 
            className="w-[24px] h-[24px]" 
            aria-hidden="true" 
            role="img"
          >
            <path fill="#38bdf8" d="M4.929 4.929c-3.905 3.905-3.905 10.237 0 14.142s10.237 3.905 14.142 0s3.905-10.237 0-14.142s-10.237-3.905-14.142 0" opacity=".5"></path>
            <path fill="#38bdf8" d="M18.521 4.418L4.418 18.521a10 10 0 0 0 1.06 1.061L19.583 5.479a10 10 0 0 0-1.06-1.06"></path>
          </svg>
        </div>
        <span className="font-sans font-medium text-base tracking-tight text-white">Syndx</span>
      </div>

      {/* Links (Hidden on small screens) */}
      <div className="hidden md:flex items-center gap-6">
        <a href="#features" className="text-xs font-medium text-white/50 hover:text-white transition-colors">Science</a>
        <a href="#features" className="text-xs font-medium text-white/50 hover:text-white transition-colors">Product</a>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfOxKc-zdaiUdwdceF4mtMBQ2nKPD5qR8dDGGUbsoXh6jURtg/viewform?usp=publish-editor" target="_blank" rel="noopener noreferrer" className="text-xs font-medium text-white/50 hover:text-white transition-colors">Request Access</a>
      </div>

      {/* Action Button */}
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSfOxKc-zdaiUdwdceF4mtMBQ2nKPD5qR8dDGGUbsoXh6jURtg/viewform?usp=publish-editor" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-full bg-white text-black text-xs font-semibold hover:bg-brand-sky transition-colors group">
        Request Early Access
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          aria-hidden="true" 
          role="img" 
          width="1em" 
          height="1em" 
          viewBox="0 0 24 24"
          className="group-hover:translate-x-0.5 transition-transform"
        >
          <path fill="currentColor" d="M13.25 12.75V18a.75.75 0 0 0 1.28.53l6-6a.75.75 0 0 0 0-1.06l-6-6a.75.75 0 0 0-1.28.53z"></path>
        </svg>
      </a>
    </nav>
  );
}
