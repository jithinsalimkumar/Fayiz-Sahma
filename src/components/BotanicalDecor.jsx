import React from "react";

/**
 * Minimal, delicate botanical line-art decorative components
 */
export const OliveBranch = ({ className = "w-16 h-16 text-[#8EA289]" }) => (
  <svg
    viewBox="0 0 100 100"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {/* Delicate stem */}
    <path d="M50 95 C 48 65, 45 40, 50 5 C 52 35, 55 60, 50 95" />
    
    {/* Left leaves */}
    <path d="M49 75 C 30 70, 20 65, 25 55 C 35 60, 45 68, 49 75" fill="currentColor" fillOpacity="0.08" />
    <path d="M48 55 C 25 50, 15 42, 22 32 C 32 38, 42 46, 48 55" fill="currentColor" fillOpacity="0.08" />
    <path d="M49 35 C 30 28, 22 18, 30 10 C 38 18, 44 26, 49 35" fill="currentColor" fillOpacity="0.08" />

    {/* Right leaves */}
    <path d="M51 68 C 70 63, 80 58, 75 48 C 65 53, 55 61, 51 68" fill="currentColor" fillOpacity="0.08" />
    <path d="M52 48 C 75 43, 85 35, 78 25 C 68 31, 58 39, 52 48" fill="currentColor" fillOpacity="0.08" />
    <path d="M51 28 C 70 21, 78 11, 70 3 C 62 11, 56 19, 51 28" fill="currentColor" fillOpacity="0.08" />
  </svg>
);

export const MinimalDivider = ({ className = "my-8" }) => (
  <div className={`flex items-center justify-center gap-3 text-[#B2C2AE] ${className}`}>
    <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#D2DBCF]" />
    <div className="w-1.5 h-1.5 rounded-full bg-[#D98A74]/60" />
    <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#D2DBCF]" />
  </div>
);

export const SubtleRingAccents = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center opacity-25">
    <div className="w-[500px] h-[500px] rounded-full border border-[#B2C2AE]/30 transform -rotate-12 scale-110" />
    <div className="absolute w-[380px] h-[380px] rounded-full border border-dashed border-[#D98A74]/20 transform rotate-45" />
  </div>
);
