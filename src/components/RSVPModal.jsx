import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, HeartHandshake, Users } from "lucide-react";
import { weddingData } from "../config/weddingData";

export default function RSVPModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    attending: "yes",
    guestsCount: 1,
    message: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-md p-8 rounded-3xl bg-[#FAF6EE] dark:bg-[#064E3B] border-2 border-[#D4AF37] shadow-2xl text-left"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full text-[#064E3B] dark:text-[#FAF6EE] hover:text-[#D4AF37] focus:outline-none cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {submitted ? (
            <div className="py-8 text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-emerald-900 text-[#D4AF37] border-2 border-[#D4AF37] flex items-center justify-center mb-4 animate-bounce">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#064E3B] dark:text-[#FAF6EE] mb-2">
                JazakAllah Khair!
              </h3>
              <p className="font-sans text-sm text-[#0A5C36] dark:text-[#FCD34D] font-medium">
                Your RSVP response has been recorded. We look forward to celebrating with you!
              </p>
            </div>
          ) : (
            <div>
              <div className="flex items-center gap-2 text-[#D4AF37] mb-2">
                <HeartHandshake className="w-5 h-5" />
                <span className="text-xs uppercase tracking-widest font-bold">R.S.V.P Invitation</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#064E3B] dark:text-[#FAF6EE] mb-1">
                Will You Attend?
              </h3>
              <p className="text-xs text-[#0A5C36] dark:text-[#FCD34D]/80 mb-6 font-medium">
                Please confirm your presence for {weddingData.groom.shortName} &amp; {weddingData.bride.shortName}'s wedding.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#064E3B] dark:text-[#FAF6EE] mb-1">
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Abdullah & Family"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-[#022C22] border border-[#D4AF37]/50 text-[#064E3B] dark:text-[#FAF6EE] focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#064E3B] dark:text-[#FAF6EE] mb-1">
                    Attendance Status
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, attending: "yes" })}
                      className={`py-2 px-3 rounded-xl border text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                        formData.attending === "yes"
                          ? "bg-[#064E3B] text-[#D4AF37] border-[#D4AF37]"
                          : "bg-white dark:bg-[#022C22] text-[#064E3B] dark:text-[#FAF6EE] border-[#D4AF37]/30"
                      }`}
                    >
                      Joyfully Attend
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, attending: "no" })}
                      className={`py-2 px-3 rounded-xl border text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                        formData.attending === "no"
                          ? "bg-[#064E3B] text-[#D4AF37] border-[#D4AF37]"
                          : "bg-white dark:bg-[#022C22] text-[#064E3B] dark:text-[#FAF6EE] border-[#D4AF37]/30"
                      }`}
                    >
                      Regretfully Decline
                    </button>
                  </div>
                </div>

                {formData.attending === "yes" && (
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#064E3B] dark:text-[#FAF6EE] mb-1">
                      Number of Guests Attending
                    </label>
                    <input
                      type="number"
                      min="1"
                      max="10"
                      value={formData.guestsCount}
                      onChange={(e) => setFormData({ ...formData, guestsCount: parseInt(e.target.value) || 1 })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-[#022C22] border border-[#D4AF37]/50 text-[#064E3B] dark:text-[#FAF6EE] focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>
                )}

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#064E3B] dark:text-[#FAF6EE] mb-1">
                    Warm Note / Message (Optional)
                  </label>
                  <textarea
                    rows="2"
                    placeholder="Send your prayers to the couple..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-[#022C22] border border-[#D4AF37]/50 text-[#064E3B] dark:text-[#FAF6EE] focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#FFF4D0] to-[#D4AF37] text-[#064E3B] text-xs font-extrabold uppercase tracking-widest shadow-md hover:scale-[1.02] transition-transform cursor-pointer"
                >
                  Submit Confirmation
                </button>
              </form>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
