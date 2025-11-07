import React from "react";
import { motion } from "framer-motion";

const AnimatedBackground = () => {
  return (
    <>
      {/* Animated grid background */}
      <div className="fixed inset-0 grid-bg -z-10" />

      {/* CRT scanlines effect */}
      <div className="scanlines" />

      {/* Glitch overlay */}
      <div className="glitch-overlay" />

      {/* Floating particles (optional effect) */}
      <div className="fixed inset-0 overflow-hidden -z-5 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-neon-cyan rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </>
  );
};

export default AnimatedBackground;
