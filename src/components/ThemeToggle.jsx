import React from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle({ theme, toggleTheme }) {
  return (
    <button
      onClick={toggleTheme}
      className="p-2.5 rounded-full bg-[#FAF6EE] dark:bg-[#064E3B] border border-[#D4AF37]/50 text-[#064E3B] dark:text-[#D4AF37] hover:border-[#D4AF37] hover:scale-105 transition-all shadow-sm cursor-pointer"
      title={theme === "dark" ? "Switch to Ivory & Emerald Light Mode" : "Switch to Deep Emerald & Gold Dark Mode"}
      aria-label="Toggle Theme"
    >
      {theme === "dark" ? (
        <Sun className="w-4 h-4 text-[#FCD34D] animate-spin-slow" />
      ) : (
        <Moon className="w-4 h-4 text-[#064E3B]" />
      )}
    </button>
  );
}
