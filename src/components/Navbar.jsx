import React, { useState, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { weddingData } from "../config/weddingData";

export default function Navbar({ isAudioPlaying, toggleAudio }) {
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
        className={`px-5 py-2 rounded-full pointer-events-auto flex items-center justify-between gap-6 transition-all duration-300 bg-[#022C22]/95 backdrop-blur-md border-2 border-[#D4AF37] shadow-[0_10px_30px_rgba(0,0,0,0.5)] ${
          scrolled ? "scale-95 shadow-xl" : "scale-100"
        }`}
      >
        {/* Monogram Brand Emblem - Cinzel Serif + Pinyon Script Ampersand */}
        <a
          href="#hero"
          className="flex items-center hover:scale-105 transition-transform py-0.5"
          title="Fayiz & Sahma"
        >
          <span className="font-cinzel text-lg font-black gold-shimmer-text tracking-tighter">
            F
          </span>
          <span className="font-monogram text-2xl text-[#D4AF37] font-normal mx-0.5 transform -translate-y-0.5">
            &amp;
          </span>
          <span className="font-cinzel text-lg font-black gold-shimmer-text tracking-tighter">
            S
          </span>
        </a>

        {/* Ambient Audio Music Toggle Button - Gold Coin Disc */}
        {weddingData.audio?.enabled && (
          <button
            onClick={toggleAudio}
            className="w-8 h-8 rounded-full bg-gradient-to-br from-[#FFF4D0] via-[#D4AF37] to-[#B48A1D] text-[#064E3B] flex items-center justify-center shadow-md hover:scale-110 active:scale-95 transition-all cursor-pointer border border-[#FFF4D0]"
            title={isAudioPlaying ? "Mute Background Music" : "Play Background Music"}
            aria-label="Toggle Audio"
          >
            {isAudioPlaying ? (
              <Volume2 className="w-4 h-4 text-[#064E3B] animate-pulse" />
            ) : (
              <VolumeX className="w-4 h-4 text-[#064E3B]/70" />
            )}
          </button>
        )}
      </div>
    </header>
  );
}
