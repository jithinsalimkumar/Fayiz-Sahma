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
import Footer from "./components/Footer";

export default function App() {
  const [isOpened, setIsOpened] = useState(false);

  // Lock body scroll while splash screen overlay is active
  useEffect(() => {
    if (!isOpened) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpened]);

  // Listen for native phone/browser back button presses (popstate)
  useEffect(() => {
    const handlePopState = (event) => {
      if (event.state && event.state.page === "invitation") {
        setIsOpened(true);
      } else {
        setIsOpened(false);
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const handleEnterInvitation = () => {
    // Push history state so native mobile back button returns to splash cover
    window.history.pushState({ page: "invitation" }, "", "#invitation");
    setIsOpened(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#022C22] text-[#FAF6EE] selection:bg-[#D4AF37]/30 selection:text-[#FAF6EE] relative font-sans overflow-x-clip">
      {/* Scroll Progress Bar (Page 2) */}
      {isOpened && <ScrollProgress />}

      {/* Layered Islamic Geometric Star Background */}
      <IslamicPatternBg />

      {/* Sticky Top Header Navbar */}
      <Navbar />

      {/* Main Wedding Invitation Details (Pre-rendered for silky 60fps transition) */}
      <main className="relative z-10">
        <HeroSection />
        <BlessingVerse />
        <TheCouple />
        <CountdownTimer />
        <EventCard />
        <Footer />
      </main>

      {/* Fullscreen Cover Landing Splash Overlay (Page 1) */}
      <AnimatePresence>
        {!isOpened && (
          <LandingSplash onEnter={handleEnterInvitation} />
        )}
      </AnimatePresence>
    </div>
  );
}
