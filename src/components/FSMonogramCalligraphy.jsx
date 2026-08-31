import React from "react";

/**
 * Custom Classy & Attractive Calligraphy Vector Monogram (F & S)
 * Perfectly balanced stroke weights for F, &, and S.
 */
export default function FSMonogramCalligraphy({ className = "w-48 h-20" }) {
  return (
    <svg
      viewBox="0 0 320 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} drop-shadow-[0_4px_12px_rgba(212,175,55,0.4)]`}
    >
      <defs>
        {/* Rich 24K Gold Foil Shimmer Gradient */}
        <linearGradient id="monogramGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#B48A1D" />
          <stop offset="25%" stopColor="#D4AF37" />
          <stop offset="50%" stopColor="#FFF4D0" />
          <stop offset="75%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#B48A1D" />
        </linearGradient>

        {/* Soft Ambient Glow Filter */}
        <filter id="goldGlowFilter" x="-10%" y="-10%" width="120%" height="120%">
          <feGaussianBlur stdDeviation="1.2" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      <g filter="url(#goldGlowFilter)">
        {/* ===================== REFINED SLEEK LETTER F ===================== */}
        {/* Top Wave Bar - Elegant Calligraphic Arch */}
        <path
          fill="none"
          stroke="url(#monogramGoldGrad)"
          strokeWidth="4"
          strokeLinecap="round"
          d="M 32 30 C 44 20, 70 18, 98 24 C 88 28, 66 30, 48 32 C 60 30, 80 27, 94 24"
        />
        {/* Finial Dot on F Top Wave */}
        <circle cx="32" cy="30" r="2" fill="url(#monogramGoldGrad)" />

        {/* Main Curved Stem & Bottom Loop */}
        <path
          fill="none"
          stroke="url(#monogramGoldGrad)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M 64 26 C 58 45, 54 65, 56 82 C 57 92, 48 98, 38 94 C 28 90, 24 78, 28 68 C 32 60, 42 62, 45 70 C 47 78, 40 86, 48 86"
        />

        {/* Middle Cross-Bar */}
        <path
          fill="none"
          stroke="url(#monogramGoldGrad)"
          strokeWidth="3"
          strokeLinecap="round"
          d="M 42 58 C 54 56, 68 52, 78 48"
        />

        {/* ===================== UNIQUE CALLIGRAPHIC AMPERSAND (&) ===================== */}
        <path
          fill="none"
          stroke="url(#monogramGoldGrad)"
          strokeWidth="3.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M 172 78 C 160 88, 146 94, 138 86 C 130 78, 134 64, 146 52 C 158 40, 168 28, 158 22 C 148 16, 140 26, 144 38 C 148 50, 160 62, 178 76 C 184 80, 192 84, 198 84"
        />
        <circle cx="158" cy="22" r="2" fill="url(#monogramGoldGrad)" />

        {/* ===================== SLEEK LETTER S ===================== */}
        <path
          fill="none"
          stroke="url(#monogramGoldGrad)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M 272 26 C 255 16, 232 20, 224 34 C 218 44, 224 54, 236 60 C 250 67, 260 74, 256 86 C 250 96, 232 100, 218 92 M 272 26 C 276 30, 276 36, 272 40"
        />
        <circle cx="272" cy="26" r="2" fill="url(#monogramGoldGrad)" />
      </g>
    </svg>
  );
}
