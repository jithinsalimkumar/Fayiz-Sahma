import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  const [currentPage, setCurrentPage] = useState("splash"); // "splash" (Page 1) or "invitation" (Page 2)
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  // Listen for native phone/browser back button presses (popstate)
  useEffect(() => {
    const handlePopState = (event) => {
      if (event.state && event.state.page === "invitation") {
        setCurrentPage("invitation");
      } else {
        setCurrentPage("splash");
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const handleEnterInvitation = () => {
    // Push history state so native mobile back button returns to splash cover
    window.history.pushState({ page: "invitation" }, "", "#invitation");
    setCurrentPage("invitation");
    setIsAudioPlaying(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#022C22] text-[#FAF6EE] selection:bg-[#D4AF37]/30 selection:text-[#FAF6EE] relative font-sans overflow-x-hidden">
      {/* Scroll Progress Bar (Page 2) */}
      {currentPage === "invitation" && <ScrollProgress />}

      {/* Layered Islamic Geometric Star Background */}
      <IslamicPatternBg />

      {/* Background Audio Player */}
      <MusicPlayer isPlaying={isAudioPlaying} />

      {/* Dynamic Page Switcher with Framer Motion AnimatePresence */}
      <AnimatePresence mode="wait">
        {currentPage === "splash" ? (
          /* PAGE 1: Fullscreen Cover Page */
          <motion.div
            key="page-splash"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.92, y: -40, filter: "blur(4px)" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full min-h-screen"
          >
            <LandingSplash onEnter={handleEnterInvitation} />
          </motion.div>
        ) : (
          /* PAGE 2: Complete Wedding Invitation Details */
          <motion.div
            key="page-invitation"
            initial={{ opacity: 0, scale: 1.04, y: 50, filter: "blur(4px)" }}
            animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 0.96, y: 50 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="w-full min-h-screen relative"
          >
            <Navbar
              isAudioPlaying={isAudioPlaying}
              toggleAudio={() => setIsAudioPlaying((prev) => !prev)}
            />

            <main className="relative z-10">
              <HeroSection />
              <BlessingVerse />
              <TheCouple />
              <CountdownTimer />
              <EventCard />
            </main>

            <ClosingSection />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
