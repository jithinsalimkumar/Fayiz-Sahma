import React, { useState, useEffect } from "react";
import { weddingData } from "../config/weddingData";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { groom, bride } = weddingData;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-4 left-0 right-0 z-40 px-4 transition-all duration-300 pointer-events-none flex justify-center">
      <div
        className={`px-6 py-2 rounded-full pointer-events-auto flex items-center justify-center transition-all duration-300 bg-[#064E3B] border-2 border-[#D4AF37] shadow-[0_10px_25px_rgba(0,0,0,0.4)] ${
          scrolled ? "scale-95 shadow-xl" : "scale-100"
        }`}
      >
        {/* Monogram Brand Emblem - Harmonized Gold Serif & Script */}
        <a
          href="#hero"
          className="flex items-center hover:scale-105 transition-transform"
        >
          <span className="font-serif text-xl sm:text-2xl font-bold tracking-widest leading-none flex items-center justify-center gap-0.5 pt-0.5">
            <span className="gold-shimmer-text">{groom.shortName[0]}</span>
            <span className="font-script text-lg sm:text-xl text-[#D4AF37] font-normal mx-0.5">&amp;</span>
            <span className="gold-shimmer-text">{bride.shortName[0]}</span>
          </span>
        </a>
      </div>
    </header>
  );
}
