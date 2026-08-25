import React, { useState, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { weddingData } from "../config/weddingData";

export default function Navbar({ isAudioPlaying, toggleAudio }) {
  const [scrolled, setScrolled] = useState(false);
  const { coupleInitials } = weddingData;

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
        className={`px-5 py-2 rounded-full pointer-events-auto flex items-center justify-between gap-6 transition-all duration-300 bg-[#064E3B] border-2 border-[#D4AF37] shadow-[0_10px_25px_rgba(0,0,0,0.4)] ${
          scrolled ? "scale-95 shadow-xl" : "scale-100"
        }`}
      >
        {/* Monogram Brand Emblem - Running Cursive Script Font */}
        <a
          href="#hero"
          className="flex items-center hover:scale-105 transition-transform"
        >
          <span className="gold-shimmer-text font-running text-2xl sm:text-3xl font-normal tracking-wide leading-none pt-0.5">
            {coupleInitials}
          </span>
        </a>

        {/* Ambient Audio Music Toggle Button - Icon Only (No Text) */}
        {weddingData.audio?.enabled && (
          <button
            onClick={toggleAudio}
            className="w-8 h-8 rounded-full bg-gradient-to-br from-[#D4AF37] via-[#FFF4D0] to-[#D4AF37] text-[#064E3B] flex items-center justify-center shadow-md hover:scale-110 active:scale-95 transition-all cursor-pointer border border-[#FFF4D0]"
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
