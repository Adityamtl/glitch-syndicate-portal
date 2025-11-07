import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = ({ onNavigate }) => {
  return (
    <motion.section
      className="min-h-screen flex flex-col items-center justify-center text-center px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h1
        className="text-5xl md:text-7xl font-orbitron text-neon-cyan text-glow-cyan mb-6 animate-flicker"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        Welcome to The Glitch Syndicate
      </motion.h1>

      <motion.p
        className="text-xl md:text-2xl text-neon-magenta text-glow-magenta mb-12 max-w-2xl"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        Only the worthy may enter the neon underworld.
      </motion.p>

      <motion.div
        className="flex flex-col md:flex-row gap-6"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <GlitchButton onClick={() => onNavigate('quiz')}>
          Begin Recruitment Test
        </GlitchButton>
        <GlitchButton onClick={() => onNavigate('about')} secondary>
          About The Syndicate
        </GlitchButton>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-neon-cyan rounded-full flex justify-center pt-2">
          <motion.div
            className="w-1 h-2 bg-neon-cyan rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </motion.section>
  );
};

// Reusable Glitch Button Component
export const GlitchButton = ({ children, onClick, secondary, className = '' }) => {
  return (
    <motion.button
      onClick={onClick}
      className={`
        relative font-orbitron text-lg md:text-xl uppercase tracking-wider
        px-8 py-4 border-2 transition-all duration-300
        ${secondary 
          ? 'border-neon-purple text-neon-purple border-glow-purple hover:bg-neon-purple' 
          : 'border-neon-cyan text-neon-cyan border-glow-cyan hover:bg-neon-cyan'
        }
        hover:text-dark-bg hover:shadow-neon-cyan
        ${className}
      `}
      whileHover={{ 
        scale: 1.05,
        boxShadow: secondary 
          ? '0 0 20px #9400d3, 0 0 40px #ff00ff'
          : '0 0 20px #00ffff, 0 0 40px #00aaff'
      }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
      
      {/* Glitch effect on hover */}
      <motion.div
        className="absolute inset-0 bg-dark-bg pointer-events-none"
        initial={{ clipPath: 'inset(0 0 100% 0)' }}
        whileHover={{
          clipPath: [
            'inset(0 0 100% 0)',
            'inset(0 0 50% 0)',
            'inset(50% 0 0 0)',
            'inset(0 0 50% 0)',
            'inset(0 0 100% 0)',
          ],
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.button>
  );
};

export default HeroSection;
