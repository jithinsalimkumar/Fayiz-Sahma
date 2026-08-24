import React, { useState, useEffect } from "react";

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(currentProgress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-1 z-50 bg-emerald-950/20 pointer-events-none">
      <div
        className="h-full bg-gradient-to-r from-[#D4AF37] via-[#FFF4D0] to-[#D4AF37] transition-all duration-150 ease-out shadow-[0_0_10px_#D4AF37]"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
}
