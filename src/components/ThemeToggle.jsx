import React from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle({ theme, toggleTheme }) {
  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-[#FAF6EE] dark:bg-[#022C22] border-2 border-[#D4AF37] text-[#064E3B] dark:text-[#FCD34D] hover:scale-110 transition-all shadow-md cursor-pointer flex items-center justify-center"
      title={theme === "dark" ? "Switch to Light Theme" : "Switch to Dark Theme"}
      aria-label="Toggle Theme"
    >
      {theme === "dark" ? (
        <Sun className="w-4 h-4 text-[#FCD34D]" />
      ) : (
        <Moon className="w-4 h-4 text-[#064E3B]" />
      )}
    </button>
  );
}
