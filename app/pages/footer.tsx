"use client";

import React from "react";

export default function FooterPage() {
  return (
    <div data-theme="light" className="w-full bg-white pt-20">
      {/* Feedback Box */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 relative z-10">
        <div className="rounded-[15px] py-20 px-8 md:py-32 md:px-16 flex flex-col md:flex-row items-center justify-between gap-8 bg-gradient-to-r from-[#B8E7FF] to-[#D2CCFF]">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-black/75 mb-5">
              Anything you'd like to share with me?
            </h2>
            <p className="text-black/75 text-sm md:text-base font-medium">
              Let me know so I can improve myself and continue developing both personally and professionally.
            </p>
          </div>
          <a href="mailto:harindulneth@gmail.com" className="bg-[#352D46] hover:bg-[#2A2337] transition-colors text-white px-8 py-4 rounded-full font-medium whitespace-nowrap flex items-center justify-center gap-3">
            <span>Send Feedback</span>
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full bg-[#0A0A0A] rounded-t-[50px] pt-16 pb-8 md:pt-24 md:pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden flex flex-col items-center">
        <div className="max-w-7xl mx-auto w-full z-10 flex flex-col lg:flex-row justify-between gap-10 lg:gap-8 mb-24 md:mb-32">
          
          {/* Left Section */}
          <div className="w-full lg:max-w-lg space-y-5">
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Ready to Go?</h2>
            <p className="text-xl md:text-2xl font-medium text-white/90 pb-4">
              harindulneth@gmail.com
            </p>
            <p className="text-white/70 max-w-lg text-sm md:text-base leading-relaxed">
              Interested in collaborating on innovative AI or software projects? 
              I'm always open to discussing new ideas and building impactful, 
              scalable solutions. Let's connect.
            </p>
            <div className="pt-3">
              <a 
                href="mailto:harindulneth@gmail.com"
                className="inline-block bg-[#1A1A1A] hover:bg-gradient-to-r hover:from-[#92FCD2] hover:to-[#D1CDFF] hover:text-black transition-all duration-300 text-white px-8 py-3 rounded-full font-medium"
              >
                Let's Connect
              </a>
            </div>
          </div>

          {/* Links Sections */}
          <div className="flex flex-wrap md:flex-nowrap gap-16 lg:gap-32">
            <div className="space-y-5">
              <h3 className="text-white font-semibold text-lg">Pages</h3>
              <ul className="space-y-3">
                {['Home', 'About Me', 'Skills', 'Projects', 'Awards', 'Experience'].map((page) => (
                  <li key={page}>
                    <a href={`#${page.toLowerCase().replace(/ & /g, '').replace(/ /g, '')}`} className="text-white/70 hover:text-white transition-colors text-sm font-medium">
                      {page === 'Awards' ? 'Awards & Winnings' : page}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-5">
              <h3 className="text-white font-semibold text-lg">Socials</h3>
              <ul className="space-y-3">
                <li><a href="https://www.facebook.com/harin.dulneth.7" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors text-sm font-medium">Facebook</a></li>
                <li><a href="https://www.instagram.com/___.harin.___/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors text-sm font-medium">Instagram</a></li>
                <li><a href="https://x.com/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors text-sm font-medium">Twitter</a></li>
                <li><a href="https://www.linkedin.com/in/harin-dulneth-1b8455352/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors text-sm font-medium">LinkedIn</a></li>
              </ul>
            </div>

            <div className="space-y-5">
              <h3 className="text-white font-semibold text-lg">Legal</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-white/70 hover:text-white transition-colors text-sm font-medium">Privacy Policy</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors text-sm font-medium">Terms of Service</a></li>
                <li><a href="#" className="text-white/70 hover:text-white transition-colors text-sm font-medium">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom row: Copyright and Icons */}
        <div className="max-w-7xl mx-auto w-full z-10 flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 pb-8 md:pb-12">
          <p className="text-white/50 text-sm mb-6 md:mb-0">
            © copyright Harin 2026. All Rights Reserved.
          </p>
          <div className="flex space-x-5">
            <a href="https://github.com/HarinDulneth" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors">
              <span className="sr-only">GitHub</span>
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844v.005c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>
            </a>
            <a href="https://www.linkedin.com/in/harin-dulneth-1b8455352/" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors">
              <span className="sr-only">LinkedIn</span>
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a href="https://x.com/" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors">
              <span className="sr-only">X (Twitter)</span>
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="https://www.instagram.com/___.harin.___/" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors">
              <span className="sr-only">Instagram</span>
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
            <a href="https://www.facebook.com/harin.dulneth.7" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors">
              <span className="sr-only">Facebook</span>
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
          </div>
        </div>

        {/* Big Background Text directly below the row */}
        <div className="w-full flex justify-center">
          <h1 className="text-[13vw] leading-none font-bold bg-clip-text text-transparent bg-gradient-to-b from-[#0F0F0F]/50 to-[#222222] select-none text-center">
            HarinDulneth
          </h1>
        </div>
        
      </footer>
    </div>
  );
}
