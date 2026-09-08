import React, { useState, useEffect } from "react";
import FSMonogramCalligraphy from "./FSMonogramCalligraphy";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 pointer-events-none flex items-center justify-center px-2 sm:px-6 py-2 ${
        scrolled
          ? "bg-[#022C22]/95 backdrop-blur-md border-b border-[#D4AF37]/50 shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
          : "bg-gradient-to-b from-[#022C22]/90 via-[#064E3B]/60 to-transparent backdrop-blur-xs"
      }`}
    >
      <div
        className={`w-full max-w-5xl flex items-center justify-between pointer-events-auto py-1 px-3 sm:px-6 rounded-full transition-all duration-300 ${
          scrolled
            ? "bg-[#064E3B]/95 border border-[#D4AF37]/50 shadow-lg scale-95"
            : "bg-[#064E3B]/85 border border-[#D4AF37]/40 shadow-md scale-100"
        }`}
      >
        {/* Left Side Ornamental Wave & Zig-Zag Gold Line (Extends to left edge) */}
        <div className="flex-1 flex items-center justify-end pr-1 sm:pr-3 overflow-hidden">
          <svg className="w-full h-8 max-w-[280px]" viewBox="0 0 240 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="navGoldLeft" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.15" />
                <stop offset="35%" stopColor="#D4AF37" stopOpacity="0.6" />
                <stop offset="70%" stopColor="#FFF4D0" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#D4AF37" stopOpacity="1" />
              </linearGradient>
            </defs>

            {/* Main Horizontal Wave & Zig-Zag Line */}
            <path
              d="M 0 15 H 70 Q 85 5, 100 15 T 130 15 L 145 7 L 155 23 L 165 15 Q 180 25, 195 15 H 240"
              stroke="url(#navGoldLeft)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="drop-shadow-[0_2px_5px_rgba(212,175,55,0.5)]"
            />

            {/* Parallel Fine Wave Accent Line */}
            <path
              d="M 40 15 Q 55 22, 70 15 Q 85 8, 100 15"
              stroke="url(#navGoldLeft)"
              strokeWidth="1.2"
              strokeOpacity="0.6"
              fill="none"
            />

            {/* Geometric Diamond Accents on Zig-Zag */}
            <polygon points="155,9 161,15 155,21 149,15" fill="url(#navGoldLeft)" />
            <circle cx="100" cy="15" r="2.5" fill="url(#navGoldLeft)" />
            <circle cx="195" cy="15" r="2.2" fill="url(#navGoldLeft)" />
          </svg>
        </div>

        {/* Central Monogram Circle Emblem */}
        <a href="#hero" className="hover:scale-105 transition-transform flex-shrink-0 z-10 mx-1">
          <FSMonogramCalligraphy className="w-14 h-14 sm:w-18 sm:h-18" />
        </a>

        {/* Right Side Ornamental Wave & Zig-Zag Gold Line (Extends to right edge) */}
        <div className="flex-1 flex items-center justify-start pl-1 sm:pl-3 overflow-hidden">
          <svg className="w-full h-8 max-w-[280px]" viewBox="0 0 240 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="navGoldRight" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#D4AF37" stopOpacity="1" />
                <stop offset="30%" stopColor="#FFF4D0" stopOpacity="0.9" />
                <stop offset="65%" stopColor="#D4AF37" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.15" />
              </linearGradient>
            </defs>

            {/* Main Horizontal Wave & Zig-Zag Line (Mirrored) */}
            <path
              d="M 0 15 Q 45 5, 60 15 L 75 7 L 85 23 L 95 15 Q 110 25, 125 15 T 155 15 H 240"
              stroke="url(#navGoldRight)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="drop-shadow-[0_2px_5px_rgba(212,175,55,0.5)]"
            />

            {/* Parallel Fine Wave Accent Line */}
            <path
              d="M 140 15 Q 155 22, 170 15 Q 185 8, 200 15"
              stroke="url(#navGoldRight)"
              strokeWidth="1.2"
              strokeOpacity="0.6"
              fill="none"
            />

            {/* Geometric Diamond Accents on Zig-Zag */}
            <polygon points="85,9 91,15 85,21 79,15" fill="url(#navGoldRight)" />
            <circle cx="60" cy="15" r="2.5" fill="url(#navGoldRight)" />
            <circle cx="140" cy="15" r="2.2" fill="url(#navGoldRight)" />
          </svg>
        </div>
      </div>
    </header>
  );
}
