import React from "react";

/**
 * Royal Monogram Emblem:
 * F (left) + Perfect Centered Solid Gold Heart + S (right)
 * Set in Monsieur La Doulaise / Herr Von Muellerhoff extravagant flowing fancy-script.
 */
export default function FSMonogramCalligraphy({ className = "w-32 h-32", fontStyle = "greatvibes" }) {
  const fontFamilies = {
    greatvibes: "'Great Vibes', 'Alex Brush', 'Allura', 'Pinyon Script', cursive",
    doulaise: "'Monsieur La Doulaise', 'Herr Von Muellerhoff', 'Great Vibes', cursive",
    muellerhoff: "'Herr Von Muellerhoff', 'Monsieur La Doulaise', 'Great Vibes', cursive",
    italianno: "'Italianno', 'Pinyon Script', 'Great Vibes', cursive",
    pinyon: "'Pinyon Script', 'Great Vibes', cursive",
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
        fillOpacity="0.9"
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
        r="18"
        stroke="url(#monogramGoldGrad)"
        strokeWidth="1.2"
        strokeDasharray="3 3"
        strokeOpacity="0.75"
        fill="none"
      />

      {/* 7. Perfectly Centered & Proportional Solid 24K Gold Heart Symbol (CENTERED AT X = 120, Y = 120.5) */}
      <path
        d="M 120 131.5 C 116.5 127.5, 109 120, 109 115.5 C 109 111.8, 112 109.2, 115.5 109.2 C 117.8 109.2, 119.3 110.5, 120 111.4 C 120.7 110.5, 122.2 109.2, 124.5 109.2 C 128 109.2, 131 111.8, 131 115.5 C 131 120, 123.5 127.5, 120 131.5 Z"
        fill="url(#monogramGoldGrad)"
        className="drop-shadow-[0_2px_5px_rgba(0,0,0,0.6)]"
      />

      {/* 8. Flowing Fancy-Script Letter F on Left (x = 68, y = 120, fontSize = 34) */}
      <text
        x="68"
        y="120"
        fontFamily={selectedFont}
        fontSize="34"
        fontWeight="normal"
        fill="url(#monogramGoldGrad)"
        textAnchor="middle"
        dominantBaseline="central"
        className="drop-shadow-[0_2px_5px_rgba(0,0,0,0.6)]"
      >
        F
      </text>

      {/* 9. Flowing Fancy-Script Letter S on Right (x = 166, y = 119, fontSize = 34) */}
      <text
        x="166"
        y="119"
        fontFamily={selectedFont}
        fontSize="34"
        fontWeight="normal"
        fill="url(#monogramGoldGrad)"
        textAnchor="middle"
        dominantBaseline="central"
        className="drop-shadow-[0_2px_5px_rgba(0,0,0,0.6)]"
      >
        S
      </text>
    </svg>
  );
}
