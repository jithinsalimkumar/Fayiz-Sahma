import React, { useState, useEffect } from "react";
import { Volume2, VolumeX, ArrowLeft } from "lucide-react";
import { weddingData } from "../config/weddingData";
import ThemeToggle from "./ThemeToggle";

export default function Navbar({ isAudioPlaying, toggleAudio, theme, toggleTheme, onBackToCover }) {
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
        className={`max-w-xs sm:max-w-sm w-full px-4 py-2 rounded-full pointer-events-auto flex items-center justify-between transition-all duration-300 ${
          scrolled
            ? "bg-[#064E3B]/90 dark:bg-[#022C22]/90 backdrop-blur-md border border-[#D4AF37]/60 shadow-[0_10px_25px_rgba(0,0,0,0.3)]"
            : "bg-[#FAF6EE]/80 dark:bg-[#064E3B]/80 backdrop-blur-sm border border-[#D4AF37]/30 shadow-sm"
        }`}
      >
        {/* Back to Cover Button + Monogram */}
        <div className="flex items-center gap-2">
          {onBackToCover && (
            <button
              onClick={onBackToCover}
              className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-[#064E3B] dark:text-[#D4AF37] hover:opacity-80 transition-opacity cursor-pointer border border-[#D4AF37]/40 px-2.5 py-1 rounded-full bg-[#FAF6EE]/60 dark:bg-[#022C22]/60"
              title="Return to Cover Page"
            >
              <ArrowLeft className="w-3 h-3 text-[#D4AF37]" />
              <span>Cover</span>
            </button>
          )}

          <a
            href="#hero"
            className="font-display text-lg font-bold tracking-tight text-[#064E3B] dark:text-[#D4AF37] flex items-center gap-1 hover:scale-105 transition-transform ml-1"
          >
            <span className="gold-shimmer-text">{coupleInitials}</span>
          </a>
        </div>

        {/* Floating Quick Action Controls: Theme Toggle + Audio Toggle */}
        <div className="flex items-center gap-2">
          {/* Theme Toggle */}
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

          {/* Ambient Nasheed Audio Toggle */}
          {weddingData.audio?.enabled && (
            <button
              onClick={toggleAudio}
              className="p-2 rounded-full bg-[#FAF6EE] dark:bg-[#064E3B] border border-[#D4AF37]/50 text-[#064E3B] dark:text-[#D4AF37] hover:border-[#D4AF37] transition-all shadow-xs focus:outline-none cursor-pointer"
              title={isAudioPlaying ? "Mute Background Nasheed" : "Play Background Nasheed"}
              aria-label="Toggle Audio"
            >
              {isAudioPlaying ? (
                <Volume2 className="w-3.5 h-3.5 text-[#D4AF37] animate-pulse" />
              ) : (
                <VolumeX className="w-3.5 h-3.5 text-[#064E3B] dark:text-[#FAF6EE]/60" />
              )}
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
