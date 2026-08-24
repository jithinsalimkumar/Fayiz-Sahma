import React, { useState, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { weddingData } from "../config/weddingData";
import ThemeToggle from "./ThemeToggle";

export default function Navbar({ isAudioPlaying, toggleAudio, theme, toggleTheme }) {
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
    <header
      className={`fixed top-3 left-0 right-0 z-40 px-4 transition-all duration-300 pointer-events-none flex justify-center`}
    >
      <div
        className={`max-w-[280px] w-full px-5 py-2 rounded-full pointer-events-auto flex items-center justify-between transition-all duration-300 ${
          scrolled
            ? "bg-[#064E3B]/95 dark:bg-[#022C22]/95 backdrop-blur-md border-2 border-[#D4AF37] shadow-[0_10px_30px_rgba(0,0,0,0.4)]"
            : "bg-[#FAF6EE]/90 dark:bg-[#064E3B]/90 backdrop-blur-sm border-2 border-[#D4AF37]/80 shadow-md"
        }`}
      >
        {/* Monogram Brand Link */}
        <a
          href="#hero"
          className="font-display text-xl font-bold tracking-tight text-[#064E3B] dark:text-[#FCD34D] flex items-center gap-1 hover:scale-105 transition-transform"
        >
          <span className="gold-shimmer-text">{coupleInitials}</span>
        </a>

        {/* Floating Quick Action Controls: Theme Toggle + Audio Toggle */}
        <div className="flex items-center gap-2.5">
          {/* Theme Toggle */}
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

          {/* Ambient Nasheed Audio Toggle */}
          {weddingData.audio?.enabled && (
            <button
              onClick={toggleAudio}
              className="p-2 rounded-full bg-[#FAF6EE] dark:bg-[#022C22] border-2 border-[#D4AF37] text-[#064E3B] dark:text-[#FCD34D] hover:scale-110 transition-all shadow-md focus:outline-none cursor-pointer flex items-center justify-center"
              title={isAudioPlaying ? "Mute Background Nasheed" : "Play Background Nasheed"}
              aria-label="Toggle Audio"
            >
              {isAudioPlaying ? (
                <Volume2 className="w-4 h-4 text-[#D4AF37] dark:text-[#FCD34D] animate-pulse" />
              ) : (
                <VolumeX className="w-4 h-4 text-[#064E3B] dark:text-[#FCD34D]" />
              )}
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
