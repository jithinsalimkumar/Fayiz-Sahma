import React, { useState, useEffect } from "react";
import FSMonogramCalligraphy from "./FSMonogramCalligraphy";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

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
        className={`px-5 py-1.5 rounded-full pointer-events-auto flex items-center justify-center transition-all duration-300 bg-[#064E3B] border-2 border-[#D4AF37] shadow-[0_10px_25px_rgba(0,0,0,0.4)] ${
          scrolled ? "scale-95 shadow-xl" : "scale-100"
        }`}
      >
        {/* Custom Classy Calligraphy Monogram Emblem */}
        <a
          href="#hero"
          className="flex items-center hover:scale-105 transition-transform"
        >
          <FSMonogramCalligraphy className="w-20 h-9" />
        </a>
      </div>
    </header>
  );
}
