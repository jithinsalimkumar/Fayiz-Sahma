import React, { useState, useEffect } from "react";

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
          if (totalHeight > 0) {
            const currentProgress = (window.scrollY / totalHeight) * 100;
            setScrollProgress(currentProgress);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-1 z-50 bg-[#160420]/30 pointer-events-none">
      <div
        className="h-full w-full bg-gradient-to-r from-[#CBA68D] via-[#FFF0E6] to-[#E8D4C5] shadow-[0_0_10px_rgba(232,212,197,0.8)] transform-gpu origin-left"
        style={{ transform: `scaleX(${scrollProgress / 100})` }}
      />
    </div>
  );
}
