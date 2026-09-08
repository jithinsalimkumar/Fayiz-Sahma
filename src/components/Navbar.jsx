import React, { useState, useEffect } from "react";
import FSMonogramCalligraphy from "./FSMonogramCalligraphy";

/**
 * Gold Ornamental Filigree Side Wing Accent
 */
const HeaderFiligreeWing = ({ isRight = false }) => (
  <div className={`flex items-center gap-1 ${isRight ? "flex-row-reverse" : ""}`}>
    {/* Glowing Tapered Line */}
    <div className={`h-[1.5px] w-6 sm:w-16 bg-gradient-to-r ${isRight ? "from-[#D4AF37] to-transparent" : "from-transparent to-[#D4AF37]"}`} />
    
    {/* Gold Calligraphic Wing SVG */}
    <svg
      viewBox="0 0 80 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-10 h-5 sm:w-14 sm:h-7 text-[#D4AF37] drop-shadow-[0_2px_6px_rgba(212,175,55,0.4)] ${isRight ? "scale-x-[-1]" : ""}`}
    >
      <path d="M 0 15 L 50 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M 20 15 C 32 15, 42 6, 54 4 C 62 2, 68 8, 62 13 C 58 16, 52 13, 55 10" stroke="currentColor" strokeWidth="1.2" fill="none" />
      <path d="M 25 15 C 36 15, 46 24, 58 26 C 66 28, 71 22, 65 17 C 61 14, 55 17, 58 20" stroke="currentColor" strokeWidth="1.2" fill="none" />
      <circle cx="72" cy="15" r="2.5" fill="currentColor" />
    </svg>
  </div>
);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-2.5 left-0 right-0 z-40 px-3 transition-all duration-300 pointer-events-none flex justify-center">
      <div
        className={`pointer-events-auto flex items-center justify-center gap-2 sm:gap-3 transition-all duration-300 bg-[#064E3B]/90 backdrop-blur-md border border-[#D4AF37]/60 shadow-[0_10px_30px_rgba(0,0,0,0.6)] rounded-full px-3 sm:px-6 py-1 ${
          scrolled ? "scale-95 shadow-2xl bg-[#022C22]/95 border-[#D4AF37]" : "scale-100"
        }`}
      >
        {/* Left Side Ornamental Gold Filigree Wing */}
        <HeaderFiligreeWing />

        {/* Center Circular Monogram Emblem */}
        <a
          href="#hero"
          className="flex items-center justify-center hover:scale-105 transition-transform"
          title="Fayiz & Sahma Monogram"
        >
          <FSMonogramCalligraphy className="w-13 h-13 sm:w-16 sm:h-16 drop-shadow-[0_4px_15px_rgba(212,175,55,0.5)]" />
        </a>

        {/* Right Side Ornamental Gold Filigree Wing */}
        <HeaderFiligreeWing isRight />
      </div>
    </header>
  );
}
