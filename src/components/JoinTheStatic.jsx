import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GlitchButton } from "./HeroSection";

const JoinTheStatic = ({ onNavigate }) => {
  const [isDecrypted, setIsDecrypted] = useState(false);
  const [typingIndex, setTypingIndex] = useState(0);

  const hiddenMessages = [
    "//Hidden Lore Fragment//",
    "> You will be assigned a sigil. Do not show it to corps.",
    "> Access Level: Shadow / Echo",
    "> This message is only visible to those who have proven their signature on the grid.",
  ];

  const handleDecrypt = () => {
    setIsDecrypted(true);
    setTypingIndex(0);

    // Typing animation effect
    const typingInterval = setInterval(() => {
      setTypingIndex((prev) => {
        if (prev >= hiddenMessages.join("").length) {
          clearInterval(typingInterval);
          return prev;
        }
        return prev + 1;
      });
    }, 30);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.section
      id="join-the-static"
      className="min-h-screen py-20 px-4 md:px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.h2
          className="text-4xl md:text-6xl font-orbitron text-center mb-12"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          style={{
            background: "linear-gradient(90deg, #ff00ff, #9400d3, #ff00ff)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: "0 0 20px #ff00ff, 0 0 40px #9400d3",
          }}
        >
          <motion.span
            animate={{
              textShadow: [
                "0 0 10px #ff00ff, 0 0 20px #9400d3",
                "0 0 20px #ff00ff, 0 0 40px #9400d3, 0 0 60px #ff00ff",
                "0 0 10px #ff00ff, 0 0 20px #9400d3",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            JOIN THE STATIC: WHY THE GLITCH CALLS
          </motion.span>
        </motion.h2>

        {/* Lore Paragraph */}
        <motion.div
          className="bg-dark-purple border-2 border-neon-purple p-8 mb-8 backdrop-blur-sm border-glow-purple"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <motion.p
            className="text-gray-300 text-lg leading-relaxed font-tech"
            animate={{
              opacity: [0.9, 1, 0.9],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Most data-jockeys think The Glitch Syndicate is just a myth, a
            boogeyman story whispered by burnt-out runners in neon-drenched
            bars. They say you don't find the Syndicate; you just see their
            static-laced signature right before your world dissolves. They
            aren't a gang with chrome and guns; they are the error in the
            system, the ghost in the machine that suddenly has a will of its
            own. They live in the corrupted code and fractured data-streams that
            the corporations try to delete, thriving in the digital noise that
            everyone else ignores.
          </motion.p>

          {/* Glitch effect overlay */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            animate={{
              opacity: [0, 0.1, 0],
              clipPath: [
                "inset(0 0 100% 0)",
                "inset(30% 0 40% 0)",
                "inset(0 0 100% 0)",
              ],
            }}
            transition={{ duration: 4, repeat: Infinity, repeatDelay: 2 }}
            style={{
              background:
                "linear-gradient(90deg, transparent, #ff00ff, transparent)",
            }}
          />
        </motion.div>

        {/* Decrypt Button */}
        {!isDecrypted && (
          <motion.div
            className="text-center mb-8"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <motion.button
              onClick={handleDecrypt}
              className="relative font-orbitron text-xl uppercase tracking-wider px-10 py-5 border-2 border-neon-cyan text-neon-cyan transition-all duration-300 border-glow-cyan hover:bg-neon-cyan hover:text-dark-bg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: [
                  "0 0 10px #00ffff, inset 0 0 10px #00ffff",
                  "0 0 20px #00ffff, 0 0 40px #00aaff, inset 0 0 10px #00ffff",
                  "0 0 10px #00ffff, inset 0 0 10px #00ffff",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              DECRYPT DEEPER LAYER
              {/* Flicker effect */}
              <motion.span
                className="absolute inset-0 bg-neon-cyan opacity-0"
                animate={{
                  opacity: [0, 0.3, 0],
                }}
                transition={{
                  duration: 0.1,
                  repeat: Infinity,
                  repeatDelay: Math.random() * 3 + 2,
                }}
              />
            </motion.button>
          </motion.div>
        )}

        {/* Hidden Message Box */}
        <AnimatePresence>
          {isDecrypted && (
            <motion.div
              className="bg-black border-2 border-neon-purple p-6 mb-8 font-tech relative overflow-hidden"
              initial={{ opacity: 0, height: 0, scale: 0.8 }}
              animate={{
                opacity: 1,
                height: "auto",
                scale: 1,
                boxShadow: [
                  "0 0 10px #9400d3, inset 0 0 20px rgba(148, 0, 211, 0.3)",
                  "0 0 20px #9400d3, 0 0 40px #ff00ff, inset 0 0 20px rgba(148, 0, 211, 0.3)",
                  "0 0 10px #9400d3, inset 0 0 20px rgba(148, 0, 211, 0.3)",
                ],
              }}
              exit={{ opacity: 0, height: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
            >
              {/* Glitch effect on reveal */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-neon-purple to-transparent opacity-30"
                initial={{ x: "-100%" }}
                animate={{ x: "200%" }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              />

              {/* Scanline effect */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "repeating-linear-gradient(0deg, rgba(0, 0, 0, 0.3) 0px, transparent 1px, transparent 2px, rgba(0, 0, 0, 0.3) 3px)",
                }}
                animate={{ backgroundPosition: ["0px 0px", "0px 100px"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />

              <div className="relative z-10">
                {hiddenMessages.map((message, index) => (
                  <motion.p
                    key={index}
                    className="text-neon-cyan text-lg mb-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.3, duration: 0.5 }}
                  >
                    {message}
                  </motion.p>
                ))}

                {/* Blinking cursor */}
                <motion.span
                  className="inline-block w-3 h-5 bg-neon-cyan ml-1"
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.7, repeat: Infinity }}
                />
              </div>

              {/* Random glitch flickers */}
              <motion.div
                className="absolute inset-0 bg-neon-purple opacity-0 pointer-events-none"
                animate={{
                  opacity: [0, 0.2, 0],
                  clipPath: [
                    "inset(0% 0% 100% 0%)",
                    "inset(30% 0% 40% 0%)",
                    "inset(60% 0% 10% 0%)",
                    "inset(0% 0% 100% 0%)",
                  ],
                }}
                transition={{
                  duration: 0.3,
                  repeat: Infinity,
                  repeatDelay: Math.random() * 2 + 1,
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation Buttons */}
        <motion.div
          className="flex flex-col md:flex-row gap-6 justify-center items-center"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <GlitchButton onClick={() => onNavigate("home")}>
            Back to Mainframe
          </GlitchButton>

          <motion.button
            onClick={scrollToTop}
            className="font-orbitron text-lg uppercase tracking-wider px-8 py-4 border-2 border-neon-purple text-neon-purple transition-all duration-300 border-glow-purple hover:bg-neon-purple hover:text-dark-bg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            ↑ Scroll to Top ↑
          </motion.button>
        </motion.div>

        {/* Mysterious footer text */}
        <motion.p
          className="text-center text-gray-600 text-sm mt-12 font-tech italic"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          "We are the static between your thoughts and your screen..."
        </motion.p>
      </div>
    </motion.section>
  );
};

export default JoinTheStatic;
