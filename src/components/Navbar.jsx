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
    <header className="fixed top-3 left-0 right-0 z-40 px-4 transition-all duration-300 pointer-events-none flex justify-center">
      <a
        href="#hero"
        className={`pointer-events-auto flex items-center justify-center transition-all duration-300 hover:scale-105 ${
          scrolled ? "scale-90 opacity-95 drop-shadow-[0_8px_20px_rgba(0,0,0,0.7)]" : "scale-100 drop-shadow-[0_10px_30px_rgba(212,175,55,0.45)]"
        }`}
      >
        {/* Royal Monogram Emblem - Larger & Clean Circular Design without Oval Covering */}
        <FSMonogramCalligraphy className="w-16 h-16 sm:w-20 sm:h-20" />
      </a>
    </header>
  );
}
