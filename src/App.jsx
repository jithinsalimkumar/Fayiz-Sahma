import React, { useState, useEffect } from "react";
import ScrollProgress from "./components/ScrollProgress";
import IslamicPatternBg from "./components/IslamicPatternBg";
import LandingSplash from "./components/LandingSplash";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import BlessingVerse from "./components/BlessingVerse";
import TheCouple from "./components/TheCouple";
import CountdownTimer from "./components/CountdownTimer";
import EventCard from "./components/EventCard";
import ClosingSection from "./components/ClosingSection";
import MusicPlayer from "./components/MusicPlayer";

export default function App() {
  const [hasEntered, setHasEntered] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const handleEnterInvitation = () => {
    setHasEntered(true);
    setIsAudioPlaying(true);

    setTimeout(() => {
      const heroEl = document.getElementById("hero");
      if (heroEl) {
        heroEl.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-[#FAF6EE] dark:bg-[#022C22] text-[#064E3B] dark:text-[#FAF6EE] selection:bg-[#D4AF37]/30 selection:text-[#064E3B] relative font-sans transition-colors duration-300">
      {/* Scroll Progress Bar */}
      <ScrollProgress />

      {/* Layered Islamic Geometric Star Background */}
      <IslamicPatternBg />

      {/* Background Audio Player */}
      <MusicPlayer isPlaying={isAudioPlaying} />

      {/* Landing Splash Screen */}
      <LandingSplash onEnter={handleEnterInvitation} />

      {/* Main Invitation Sections */}
      <div className={`transition-opacity duration-1000 ${hasEntered ? "opacity-100" : "opacity-90"}`}>
        <Navbar
          isAudioPlaying={isAudioPlaying}
          toggleAudio={() => setIsAudioPlaying((prev) => !prev)}
          theme={theme}
          toggleTheme={toggleTheme}
        />

        <main className="relative z-10">
          <HeroSection />
          <BlessingVerse />
          <TheCouple />
          <CountdownTimer />
          <EventCard />
        </main>

        <ClosingSection />
      </div>
    </div>
  );
}
