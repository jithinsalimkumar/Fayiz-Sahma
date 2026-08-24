import React, { useState, useEffect } from "react";
import { Volume2, VolumeX, Music } from "lucide-react";
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
        className={`max-w-[240px] w-full px-4 py-2 rounded-full pointer-events-auto flex items-center justify-between transition-all duration-300 ${
          scrolled
            ? "bg-[#064E3B]/95 backdrop-blur-md border-2 border-[#D4AF37] shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
            : "bg-[#FAF6EE]/90 backdrop-blur-sm border-2 border-[#D4AF37] shadow-md"
        }`}
      >
        {/* Monogram Brand Emblem */}
        <a
          href="#hero"
          className="font-display text-lg font-bold tracking-tight text-[#064E3B] flex items-center gap-1 hover:scale-105 transition-transform"
        >
          <span className="gold-shimmer-text">{coupleInitials}</span>
        </a>

        {/* Ambient Audio Music Control Button */}
        {weddingData.audio?.enabled && (
          <button
            onClick={toggleAudio}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-[#064E3B] to-[#0A5C36] text-[#D4AF37] border border-[#D4AF37] text-[11px] font-bold uppercase tracking-wider shadow-sm hover:scale-105 transition-all cursor-pointer"
            title={isAudioPlaying ? "Mute Ambient Nasheed Audio" : "Play Ambient Nasheed Audio"}
            aria-label="Toggle Audio"
          >
            {isAudioPlaying ? (
              <>
                <Volume2 className="w-3.5 h-3.5 text-[#D4AF37] animate-pulse" />
                <span>Audio</span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5 text-[#FCD34D]" />
                <span>Music</span>
              </>
            )}
          </button>
        )}
      </div>
    </header>
  );
}
