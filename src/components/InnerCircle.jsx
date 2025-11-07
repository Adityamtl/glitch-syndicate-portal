import React from "react";
import { motion } from "framer-motion";
import { GlitchButton } from "./HeroSection";

const InnerCircle = ({ onNavigate }) => {
  const leaders = [
    {
      name: "ZeroVox",
      role: "The Architect",
      description: "No one knows if they're human or pure code.",
      avatar: "/asset/img1.png",
      color: "cyan",
    },
    {
      name: "Nyx.exe",
      role: "Data Runner",
      description:
        "Our top data runner. Fast, silent, and lethal in the digital plane.",
      avatar: "/asset/img2.png",
      color: "magenta",
    },
    {
      name: "Cipherline",
      role: "Encryption Master",
      description:
        "Master of encryption. Writes code that can start or stop a war.",
      avatar: "/asset/img3.png",
      color: "cyan",
    },
    {
      name: "Ash Protocol",
      role: "Street Enforcer",
      description:
        'Street Enforcer. Handles our... "physical network security."',
      avatar: "/asset/img4.png",
      color: "purple",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <motion.section
      className="min-h-screen py-20 px-4 md:px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-6xl font-orbitron text-neon-cyan text-glow-cyan text-center mb-8"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          [ The Inner Circle ]
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl text-neon-magenta text-glow-magenta text-center max-w-4xl mx-auto mb-16 leading-relaxed"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          The Glitch Syndicate controls the dark data streams of NeoCity. We
          trade in stolen memories, encrypted dreams, and forbidden code. We are
          the ghosts in the machine, the static between worlds. The corporations
          build walls; we show them walls are just suggestions.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {leaders.map((leader, index) => (
            <LeaderCard key={index} leader={leader} variants={itemVariants} />
          ))}
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <GlitchButton onClick={() => onNavigate("home")}>
            Back to Mainframe
          </GlitchButton>
        </motion.div>
      </div>
    </motion.section>
  );
};

const LeaderCard = ({ leader, variants }) => {
  const glowClass =
    leader.color === "cyan"
      ? "border-neon-cyan"
      : leader.color === "magenta"
      ? "border-neon-magenta"
      : "border-neon-purple";

  return (
    <motion.div
      className={`bg-dark-purple border-2 ${glowClass} p-6 text-center backdrop-blur-sm border-glow-purple`}
      variants={variants}
      whileHover={{
        y: -10,
        boxShadow:
          leader.color === "cyan"
            ? "0 0 20px #00ffff, 0 0 40px #00ffff"
            : leader.color === "magenta"
            ? "0 0 20px #ff00ff, 0 0 40px #ff00ff"
            : "0 0 20px #9400d3, 0 0 40px #9400d3",
        scale: 1.05,
      }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="relative inline-block mb-4"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      >
        <img
          src={leader.avatar}
          alt={`${leader.name} Avatar`}
          className={`w-36 h-36 rounded-full border-4 ${glowClass} object-cover mx-auto`}
        />
        <motion.div
          className={`absolute inset-0 rounded-full border-4 ${glowClass} opacity-0`}
          whileHover={{
            opacity: [0, 0.5, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 1, repeat: Infinity }}
        />
      </motion.div>

      <h3 className="text-2xl font-orbitron text-neon-magenta text-glow-magenta mb-2">
        {leader.name}
      </h3>

      <p className="text-sm text-neon-cyan mb-3 uppercase tracking-wider">
        {leader.role}
      </p>

      <p className="text-gray-400 text-sm leading-relaxed">
        {leader.description}
      </p>
    </motion.div>
  );
};

export default InnerCircle;
