import React from "react";

/**
 * Royal Monogram Emblem:
 * F (left) + Perfect Centered Solid Gold Heart + S (right)
 * Ultra-clear, attractive, and recognizable luxury calligraphy.
 */
export default function FSMonogramCalligraphy({ className = "w-32 h-32", fontStyle = "greatvibes" }) {
  // Select font family stack based on preference
  const fontFamilies = {
    greatvibes: "'Great Vibes', 'Alex Brush', 'Allura', 'Pinyon Script', cursive",
    alexbrush: "'Alex Brush', 'Great Vibes', 'Allura', cursive",
    pinyon: "'Pinyon Script', 'Great Vibes', cursive",
    allura: "'Allura', 'Great Vibes', cursive",
    cinzel: "'Cinzel Decorative', Georgia, serif",
  };

  const selectedFont = fontFamilies[fontStyle] || fontFamilies.greatvibes;

  return (
    <svg
      viewBox="0 0 240 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} overflow-visible`}
    >
      <defs>
        {/* Rich 24K Gold Foil Shimmer Metallic Gradient */}
        <linearGradient id="monogramGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFDF0" />
          <stop offset="20%" stopColor="#F3D578" />
          <stop offset="50%" stopColor="#D4AF37" />
          <stop offset="80%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#A37B15" />
        </linearGradient>

        {/* Soft Golden Aura Glow Backdrop */}
        <radialGradient id="emblemCenterGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.4" />
          <stop offset="50%" stopColor="#D4AF37" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#064E3B" stopOpacity="0" />
        </radialGradient>

        {/* Soft Drop Shadow Filter for Outer Circle Glow */}
        <filter id="goldGlowFilter" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* 1. Center Radial Gold Glow Backdrop */}
      <circle cx="120" cy="120" r="114" fill="url(#emblemCenterGlow)" />

      {/* 2. Outer Primary 24K Gold Circle Frame */}
      <circle
        cx="120"
        cy="120"
        r="106"
        stroke="url(#monogramGoldGrad)"
        strokeWidth="3"
        fill="#022C22"
        fillOpacity="0.88"
        filter="url(#goldGlowFilter)"
      />

      {/* 3. Second Concentric Gold Circle Ring */}
      <circle
        cx="120"
        cy="120"
        r="99"
        stroke="url(#monogramGoldGrad)"
        strokeWidth="1"
        strokeOpacity="0.85"
        fill="none"
      />

      {/* 4. Islamic 8-Point Star Geometrics (Overlapping Rotated Squares centered at 120, 120) */}
      <rect
        x="53"
        y="53"
        width="134"
        height="134"
        stroke="url(#monogramGoldGrad)"
        strokeWidth="1.2"
        strokeOpacity="0.45"
        fill="none"
      />
      <rect
        x="53"
        y="53"
        width="134"
        height="134"
        stroke="url(#monogramGoldGrad)"
        strokeWidth="1.2"
        strokeOpacity="0.45"
        fill="none"
        transform="rotate(45 120 120)"
      />

      {/* 5. Third Concentric Inner Gold Ring */}
      <circle
        cx="120"
        cy="120"
        r="88"
        stroke="url(#monogramGoldGrad)"
        strokeWidth="1"
        strokeOpacity="0.5"
        fill="none"
      />

      {/* 6. Fine Dashed Inner Circle framing the central heart symbol */}
      <circle
        cx="120"
        cy="120"
        r="26"
        stroke="url(#monogramGoldGrad)"
        strokeWidth="1.2"
        strokeDasharray="3 3"
        strokeOpacity="0.75"
        fill="none"
      />

      {/* 7. Flawless Solid 24K Gold Heart Symbol (DEAD-CENTERED AT X = 120, Y = 120) */}
      <path
        d="M 120 137 C 114.5 130.5, 104 118, 104 109.5 C 104 104, 108.2 100, 113.8 100 C 117.2 100, 119.3 101.8, 120 103.5 C 120.7 101.8, 122.8 100, 126.2 100 C 131.8 100, 136 104, 136 109.5 C 136 118, 125.5 130.5, 120 137 Z"
        fill="url(#monogramGoldGrad)"
        className="drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]"
      />

      {/* 8. Letter F on Left (x = 55: Top tip of F is exactly 17px from heart left edge) */}
      <text
        x="55"
        y="118"
        fontFamily={selectedFont}
        fontSize="58"
        fontWeight="normal"
        fill="url(#monogramGoldGrad)"
        textAnchor="middle"
        dominantBaseline="central"
        className="drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]"
      >
        F
      </text>

      {/* 9. Letter S on Right (x = 172: Bottom tip of S is exactly 17px from heart right edge) */}
      <text
        x="172"
        y="118"
        fontFamily={selectedFont}
        fontSize="58"
        fontWeight="normal"
        fill="url(#monogramGoldGrad)"
        textAnchor="middle"
        dominantBaseline="central"
        className="drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]"
      >
        S
      </text>
    </svg>
  );
}
