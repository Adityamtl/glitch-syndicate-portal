import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = ({ onComplete }) => {
  const [currentLine, setCurrentLine] = useState(0);
  const [showAccessGranted, setShowAccessGranted] = useState(false);

  const lines = [
    '> Connecting to the Dark Grid...',
    '> Bypassing NeoCity firewalls...',
    '> Accessing The Glitch Syndicate mainframe...',
  ];

  useEffect(() => {
    const timers = [];

    // Show lines one by one
    lines.forEach((_, index) => {
      timers.push(
        setTimeout(() => {
          setCurrentLine(index + 1);
        }, (index + 1) * 800)
      );
    });

    // Show ACCESS GRANTED
    timers.push(
      setTimeout(() => {
        setShowAccessGranted(true);
      }, lines.length * 800 + 500)
    );

    // Complete loading
    timers.push(
      setTimeout(() => {
        onComplete();
      }, lines.length * 800 + 2500)
    );

    return () => timers.forEach(timer => clearTimeout(timer));
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black z-50 flex items-center justify-center"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="w-full max-w-2xl px-8 font-tech text-neon-cyan">
          {lines.slice(0, currentLine).map((line, index) => (
            <motion.p
              key={index}
              className="text-lg md:text-xl mb-2 text-glow-cyan"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {line}
              {index === currentLine - 1 && (
                <motion.span
                  className="inline-block w-2 h-5 bg-neon-cyan ml-1"
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.7, repeat: Infinity }}
                />
              )}
            </motion.p>
          ))}

          {showAccessGranted && (
            <motion.p
              className="text-3xl md:text-5xl font-orbitron text-neon-magenta text-glow-magenta mt-8 animate-flicker"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              &gt; ACCESS GRANTED
              <motion.span
                className="inline-block w-3 h-8 bg-neon-magenta ml-2"
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.7, repeat: Infinity }}
              />
            </motion.p>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen;
