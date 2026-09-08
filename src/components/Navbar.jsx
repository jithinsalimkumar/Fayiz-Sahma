import React, { useState, useEffect } from "react";
import FSMonogramCalligraphy from "./FSMonogramCalligraphy";

// Reusable 24K Gold Ornamental Divider SVG (Left side orientation)
function GoldDividerSVG() {
  return (
    <svg className="w-full h-8 max-w-[300px]" viewBox="0 0 240 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="navGoldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.1" />
          <stop offset="25%" stopColor="#D4AF37" stopOpacity="0.6" />
          <stop offset="60%" stopColor="#FFF4D0" stopOpacity="1" />
          <stop offset="100%" stopColor="#D4AF37" stopOpacity="1" />
        </linearGradient>
      </defs>

      {/* Main Left Gold Ornamental Flourish Group */}
      <g className="drop-shadow-[0_2px_6px_rgba(212,175,55,0.6)]">
        {/* Main Line extending to center emblem */}
        <path
          d="M 0 15 H 65 Q 90 3, 115 15 T 165 15 H 240"
          stroke="url(#navGoldGrad)"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />

        {/* Parallel Fine Accent Wave */}
        <path
          d="M 20 15 Q 42 7, 65 15 Q 90 23, 115 15 Q 140 7, 165 15 Q 200 23, 235 15"
          stroke="url(#navGoldGrad)"
          strokeWidth="1.2"
          strokeOpacity="0.65"
          fill="none"
        />

        {/* Golden Pearl Beads framing the center diamond */}
        <circle cx="65" cy="15" r="2.8" fill="url(#navGoldGrad)" />
        <circle cx="165" cy="15" r="2.8" fill="url(#navGoldGrad)" />
        <circle cx="35" cy="15" r="1.8" fill="url(#navGoldGrad)" />
        <circle cx="195" cy="15" r="1.8" fill="url(#navGoldGrad)" />

        {/* Royal 24K Gold Diamond Medallion */}
        <polygon points="115,4 124,15 115,26 106,15" fill="url(#navGoldGrad)" />
        <polygon points="115,8 120,15 115,22 110,15" fill="#022C22" />
        <polygon points="115,11 117.5,15 115,19 112.5,15" fill="url(#navGoldGrad)" />
      </g>
    </svg>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 30;
      setScrolled((prev) => (prev !== isScrolled ? isScrolled : prev));
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 pointer-events-none flex items-center justify-center px-2 sm:px-6 py-2 ${
        scrolled
          ? "bg-[#022C22]/98 border-b border-[#D4AF37]/50 shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
          : "bg-gradient-to-b from-[#022C22] via-[#064E3B]/80 to-transparent"
      }`}
    >
      <div
        className={`w-full max-w-5xl flex items-center justify-between pointer-events-auto py-1 px-3 sm:px-6 rounded-full transition-all duration-300 ${
          scrolled
            ? "bg-[#064E3B]/95 border border-[#D4AF37]/50 shadow-lg scale-95"
            : "bg-[#064E3B]/85 border border-[#D4AF37]/40 shadow-md scale-100"
        }`}
      >
        {/* Left Side Ornamental 24K Gold Royal Divider */}
        <div className="flex-1 flex items-center justify-end pr-1 sm:pr-3 overflow-hidden">
          <GoldDividerSVG />
        </div>

        {/* Central Monogram Circle Emblem */}
        <a href="#hero" className="hover:scale-105 transition-transform flex-shrink-0 z-10 mx-1">
          <FSMonogramCalligraphy className="w-14 h-14 sm:w-18 sm:h-18" />
        </a>

        {/* Right Side Ornamental 24K Gold Royal Divider (Horizontally Mirrored for 100% Symmetrical Balance) */}
        <div className="flex-1 flex items-center justify-start pl-1 sm:pl-3 overflow-hidden">
          <div className="w-full flex items-center justify-start max-w-[300px] scale-x-[-1]">
            <GoldDividerSVG />
          </div>
        </div>
      </div>
    </header>
  );
}
