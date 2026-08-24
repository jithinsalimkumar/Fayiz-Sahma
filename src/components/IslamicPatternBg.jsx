import React from "react";

/**
 * Rich 8-Point Rub el Hizb SVG Star
 */
export const Islamic8PointStar = ({ className = "w-64 h-64 text-[#D4AF37]" }) => (
  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1" className={className}>
    <rect x="20" y="20" width="60" height="60" rx="2" transform="rotate(0 50 50)" fill="currentColor" fillOpacity="0.04" />
    <rect x="20" y="20" width="60" height="60" rx="2" transform="rotate(45 50 50)" fill="currentColor" fillOpacity="0.04" />
    <circle cx="50" cy="50" r="18" strokeWidth="0.8" strokeDasharray="2 2" />
    <circle cx="50" cy="50" r="8" fill="currentColor" fillOpacity="0.12" />
  </svg>
);

/**
 * Rich 12-Point Islamic Star Medallion
 */
export const Islamic12PointStar = ({ className = "w-48 h-48 text-[#D4AF37]" }) => (
  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.8" className={className}>
    <g transform="translate(50 50)">
      {[0, 30, 60, 90, 120, 150].map((angle) => (
        <rect
          key={angle}
          x="-25"
          y="-25"
          width="50"
          height="50"
          transform={`rotate(${angle})`}
          fill="currentColor"
          fillOpacity="0.03"
        />
      ))}
      <circle cx="0" cy="0" r="22" strokeWidth="1" strokeDasharray="3 2" />
      <circle cx="0" cy="0" r="10" fill="currentColor" fillOpacity="0.1" />
    </g>
  </svg>
);

/**
 * Ornate Islamic Arch Divider
 */
export const IslamicArchDivider = ({ className = "my-6" }) => (
  <div className={`flex items-center justify-center gap-3 text-[#D4AF37] ${className}`}>
    <div className="h-[1px] w-20 bg-gradient-to-r from-transparent via-[#D4AF37] to-[#D4AF37]" />
    <svg className="w-7 h-7 text-[#D4AF37] animate-pulse" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2 L14.5 9 L22 12 L14.5 15 L12 22 L9.5 15 L2 12 L9.5 9 Z" fill="currentColor" fillOpacity="0.25" />
    </svg>
    <div className="h-[1px] w-20 bg-gradient-to-l from-transparent via-[#D4AF37] to-[#D4AF37]" />
  </div>
);

/**
 * Decorative Islamic Corner Filigree Accents for Cards
 */
export const CardCornerFiligree = () => (
  <>
    <div className="absolute top-3 left-3 w-7 h-7 border-t-2 border-l-2 border-[#D4AF37] pointer-events-none flex items-start justify-start">
      <div className="w-2 h-2 bg-[#D4AF37] mt-0.5 ml-0.5 rounded-br-full" />
    </div>
    <div className="absolute top-3 right-3 w-7 h-7 border-t-2 border-r-2 border-[#D4AF37] pointer-events-none flex items-start justify-end">
      <div className="w-2 h-2 bg-[#D4AF37] mt-0.5 mr-0.5 rounded-bl-full" />
    </div>
    <div className="absolute bottom-3 left-3 w-7 h-7 border-b-2 border-l-2 border-[#D4AF37] pointer-events-none flex items-end justify-start">
      <div className="w-2 h-2 bg-[#D4AF37] mb-0.5 ml-0.5 rounded-tr-full" />
    </div>
    <div className="absolute bottom-3 right-3 w-7 h-7 border-b-2 border-r-2 border-[#D4AF37] pointer-events-none flex items-end justify-end">
      <div className="w-2 h-2 bg-[#D4AF37] mb-0.5 mr-0.5 rounded-tl-full" />
    </div>
  </>
);

export default function IslamicPatternBg() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 opacity-25 dark:opacity-20">
      {/* Top Left Rotating 8-Point Star */}
      <div className="absolute -top-24 -left-24 rotate-slow">
        <Islamic8PointStar className="w-[550px] h-[550px] text-[#D4AF37]" />
      </div>

      {/* Bottom Right Rotating 12-Point Star */}
      <div className="absolute -bottom-36 -right-36 rotate-slow-reverse">
        <Islamic12PointStar className="w-[650px] h-[650px] text-[#0A5C36] dark:text-[#D4AF37]" />
      </div>

      {/* Center Subtle Arabesque Lattice Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-7xl flex items-center justify-center opacity-40">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="islamicLattice" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 80 40 L 40 80 L 0 40 Z" fill="none" stroke="#D4AF37" strokeWidth="0.6" strokeOpacity="0.4" />
              <circle cx="40" cy="40" r="6" fill="none" stroke="#064E3B" strokeWidth="0.6" strokeOpacity="0.3" />
              <circle cx="40" cy="40" r="2" fill="#D4AF37" fillOpacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#islamicLattice)" />
        </svg>
      </div>

      {/* Animated Rising Gold Sparkle Nodes */}
      <div className="absolute inset-0 flex justify-around pointer-events-none">
        <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse opacity-60 mt-20" />
        <div className="w-2 h-2 rounded-full bg-[#FFF4D0] animate-ping opacity-40 mt-40" />
        <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse opacity-50 mt-60" />
        <div className="w-2 h-2 rounded-full bg-[#F59E0B] animate-pulse opacity-30 mt-80" />
      </div>
    </div>
  );
}
