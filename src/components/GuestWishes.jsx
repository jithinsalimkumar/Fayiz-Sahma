import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquareHeart, Send, Sparkles } from "lucide-react";
import { IslamicArchDivider } from "./IslamicPatternBg";

export default function GuestWishes() {
  const [wishes, setWishes] = useState([
    {
      id: 1,
      name: "Uncle Faisal & Family",
      message: "Barakallahu lakuma wa baraka alaikuma! May Allah shower His blessings upon both of you.",
      date: "Today",
    },
    {
      id: 2,
      name: "Dr. Hamza Ibrahim",
      message: "Wishing Fayiz & Sahma a lifetime of love, peace, and endless joy together.",
      date: "Yesterday",
    },
    {
      id: 3,
      name: "Ayesha & Zahra",
      message: "So happy for you both! May your union be filled with tranquility and mercy.",
      date: "2 days ago",
    },
  ]);

  const [newName, setNewName] = useState("");
  const [newMessage, setNewMessage] = useState("");

  const handleAddWish = (e) => {
    e.preventDefault();
    if (!newName.trim() || !newMessage.trim()) return;

    const wishObj = {
      id: Date.now(),
      name: newName.trim(),
      message: newMessage.trim(),
      date: "Just now",
    };

    setWishes([wishObj, ...wishes]);
    setNewName("");
    setNewMessage("");
  };

  return (
    <section
      id="wishes"
      className="py-24 px-6 bg-[#FAF6EE] dark:bg-[#022C22] relative overflow-hidden transition-colors duration-300"
    >
      <div className="max-w-4xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs font-bold uppercase tracking-[0.3em] text-[#D4AF37] block mb-2"
          >
            Prayers &amp; Good Wishes
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-serif text-4xl sm:text-5xl text-[#064E3B] dark:text-[#FAF6EE] font-bold"
          >
            Guest Wall of Blessings
          </motion.h2>
          <IslamicArchDivider className="my-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Send Blessing Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 rounded-3xl bg-[#FAF6EE]/90 dark:bg-[#064E3B]/90 backdrop-blur-md border-2 border-[#D4AF37]/50 p-6 sm:p-8 shadow-lg"
          >
            <div className="flex items-center gap-2 text-[#D4AF37] mb-4">
              <MessageSquareHeart className="w-5 h-5" />
              <span className="text-xs uppercase tracking-widest font-bold">Leave Your Dua</span>
            </div>

            <form onSubmit={handleAddWish} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#064E3B] dark:text-[#FAF6EE] mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Tariq & Family"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-[#022C22] border border-[#D4AF37]/40 text-[#064E3B] dark:text-[#FAF6EE] text-sm focus:outline-none focus:border-[#D4AF37]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#064E3B] dark:text-[#FAF6EE] mb-1">
                  Your Blessing / Dua
                </label>
                <textarea
                  required
                  rows="3"
                  placeholder="Write your prayers and warm wishes..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-[#022C22] border border-[#D4AF37]/40 text-[#064E3B] dark:text-[#FAF6EE] text-sm focus:outline-none focus:border-[#D4AF37]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-[#064E3B] to-[#0A5C36] text-[#D4AF37] border border-[#D4AF37] text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform cursor-pointer shadow-md"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Post Blessing</span>
              </button>
            </form>
          </motion.div>

          {/* Animated Scrolling Wish Wall List */}
          <div className="lg:col-span-7 space-y-4 max-h-[460px] overflow-y-auto pr-1">
            <AnimatePresence mode="popLayout">
              {wishes.map((wish) => (
                <motion.div
                  key={wish.id}
                  initial={{ opacity: 0, y: 15, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  className="p-5 rounded-2xl bg-[#FAF6EE]/90 dark:bg-[#064E3B]/90 border border-[#D4AF37]/40 shadow-sm text-left relative overflow-hidden"
                >
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-serif text-base font-bold text-[#064E3B] dark:text-[#FAF6EE]">
                      {wish.name}
                    </h4>
                    <span className="text-[10px] uppercase tracking-wider text-[#D4AF37] font-semibold">
                      {wish.date}
                    </span>
                  </div>
                  <p className="font-sans text-xs sm:text-sm text-[#0A5C36] dark:text-[#FCD34D] leading-relaxed italic">
                    "{wish.message}"
                  </p>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
