import React from "react";

/**
 * Custom F & S Interlocking Calligraphic Monogram Emblem:
 * Classy 24K Gold Standalone Calligraphic Crest with refined proportions and gold drop shadow.
 */
export default function FSMonogramCalligraphy({ className = "h-24 sm:h-32 w-auto" }) {
  return (
    <div className={`${className} inline-flex items-center justify-center relative select-none group`}>
      <img
        src="/images/fs_custom_monogram.png"
        alt="Fayiz & Sahma Monogram"
        className="h-full w-auto object-contain relative z-10 filter drop-shadow-[0_4px_18px_rgba(232,212,197,0.7)] group-hover:scale-105 transition-transform duration-300"
        draggable="false"
      />
    </div>
  );
}
