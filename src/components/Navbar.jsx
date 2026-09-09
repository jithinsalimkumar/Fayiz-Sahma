import React from "react";
import { motion } from "framer-motion";
import FSMonogramCalligraphy from "./FSMonogramCalligraphy";

// Reusable 24K Gold Ornamental Divider SVG (Left side orientation)
function GoldDividerSVG() {
  return (
    <svg className="w-full h-8 max-w-[300px]" viewBox="0 0 240 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="navGoldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#E8D4C5" stopOpacity="0.1" />
          <stop offset="25%" stopColor="#E8D4C5" stopOpacity="0.6" />
          <stop offset="60%" stopColor="#FFF0E6" stopOpacity="1" />
          <stop offset="100%" stopColor="#CBA68D" stopOpacity="1" />
        </linearGradient>
      </defs>

      {/* Main Left Champagne Rose Gold Flourish Group */}
      <g className="drop-shadow-[0_2px_6px_rgba(232,212,197,0.6)]">
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

        {/* Royal Diamond Medallion */}
        <polygon points="115,4 124,15 115,26 106,15" fill="url(#navGoldGrad)" />
        <polygon points="115,8 120,15 115,22 110,15" fill="#160420" />
        <polygon points="115,11 117.5,15 115,19 112.5,15" fill="url(#navGoldGrad)" />
      </g>
    </svg>
  );
}

export default function Navbar() {
  return (
    <header className="absolute top-0 left-0 right-0 z-40 pointer-events-none flex items-center justify-center px-2 sm:px-6 py-4 sm:py-6 max-h-[550px]:py-2">
      <div className="w-full max-w-5xl flex items-center justify-between pointer-events-auto px-2 sm:px-6">
        {/* Left Side Ornamental 24K Gold Royal Divider */}
        <div className="flex-1 flex items-center justify-end pr-2 sm:pr-4 overflow-hidden">
          <GoldDividerSVG />
        </div>

        {/* Central Monogram Crest */}
        <a
          href="#hero"
          className="hover:scale-105 transition-transform flex-shrink-0 z-10 mx-2"
        >
          <FSMonogramCalligraphy className="h-10 sm:h-14 max-h-[550px]:h-8 w-auto" />
        </a>

        {/* Right Side Ornamental 24K Gold Royal Divider (Horizontally Mirrored) */}
        <div className="flex-1 flex items-center justify-start pl-2 sm:pl-4 overflow-hidden">
          <div className="w-full flex items-center justify-start max-w-[300px] scale-x-[-1]">
            <GoldDividerSVG />
          </div>
        </div>
      </div>
    </header>
  );
}
