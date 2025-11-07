import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Footer = () => {
  const [easterEggActive, setEasterEggActive] = useState(false);
  const [keySequence, setKeySequence] = useState("");

  useEffect(() => {
    const handleKeyPress = (e) => {
      setKeySequence((prev) => {
        const newSeq = (prev + e.key).slice(-7);
        if (newSeq.includes("/access")) {
          setEasterEggActive(true);
        }
        return newSeq;
      });
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  return (
    <motion.footer
      className="relative border-t border-neon-purple py-8 mt-20 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 1 }}
    >
      <motion.p
        className={`
          font-tech text-sm md:text-base
          ${
            easterEggActive
              ? "text-neon-cyan text-glow-cyan"
              : "text-neon-purple animate-flicker"
          }
        `}
        animate={
          !easterEggActive
            ? {
                textShadow: [
                  "0 0 5px #9400d3",
                  "0 0 10px #9400d3, 0 0 20px #9400d3",
                  "0 0 5px #9400d3",
                ],
              }
            : {}
        }
        transition={{ duration: 5, repeat: Infinity }}
      >
        {easterEggActive
          ? "HIDDEN PROTOCOL ACTIVATED: //Welcome, true_believer.exe//"
          : "© 2199 The Glitch Syndicate | All transmissions monitored by an unknown entity."}
      </motion.p>

      {/* Hint for easter egg */}
      {!easterEggActive && (
        <motion.p
          className="text-xs text-gray-600 mt-2 opacity-30 hover:opacity-100 transition-opacity"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ delay: 3 }}
        >
          [Hint: Try typing '/access']
        </motion.p>
      )}

      {/* Decorative corner brackets */}
      <div className="absolute top-0 left-4 text-neon-purple text-2xl">╔</div>
      <div className="absolute top-0 right-4 text-neon-purple text-2xl">╗</div>
      <div className="absolute bottom-0 left-4 text-neon-purple text-2xl">
        ╚
      </div>
      <div className="absolute bottom-0 right-4 text-neon-purple text-2xl">
        ╝
      </div>
    </motion.footer>
  );
};

export default Footer;
