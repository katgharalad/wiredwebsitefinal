'use client';

import { useEffect } from 'react';

export default function Background() {
  useEffect(() => {
    // Unicorn Studio background script
    if (typeof window !== 'undefined' && !window.UnicornStudio) {
      window.UnicornStudio = { isInitialized: false };
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js';
      script.onload = function() {
        if (window.UnicornStudio && !window.UnicornStudio.isInitialized) {
          if (window.UnicornStudio.init) {
            window.UnicornStudio.init();
          }
          window.UnicornStudio.isInitialized = true;
        }
      };
      (document.head || document.body).appendChild(script);
    }
  }, []);

  return (
    <>
      {/* Background (component) */}
      <div 
        className="aura-background-component top-0 w-full h-screen -z-10 fixed" 
        data-alpha-mask="80" 
        style={{ 
          maskImage: 'linear-gradient(transparent, black 0%, black 80%, transparent)',
          willChange: 'transform',
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden'
        }}
      >
        <div className="aura-background-component top-0 w-full -z-10 absolute h-full">
          <div 
            data-us-project="FixNvEwvWwbu3QX9qC3F" 
            className="absolute w-full h-full left-0 top-0 -z-10"
            style={{
              willChange: 'transform',
              transform: 'translateZ(0)'
            }}
          ></div>
        </div>
      </div>

      {/* Background Effects */}
      <div 
        className="fixed inset-0 grid-bg pointer-events-none z-0"
        style={{
          willChange: 'transform',
          transform: 'translateZ(0)'
        }}
      ></div>
    </>
  );
}

declare global {
  interface Window {
    UnicornStudio?: {
      isInitialized: boolean;
      init?: () => void;
    };
  }
}
