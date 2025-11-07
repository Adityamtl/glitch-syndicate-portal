import React, { useState } from "react";
import { motion } from "framer-motion";
import { GlitchButton } from "./HeroSection";

const ResultSection = ({ result, onNavigate }) => {
  const [uploadStatus, setUploadStatus] = useState("idle");

  const roleData = {
    neural: {
      title: "NEURAL HACKER",
      emoji: "🧠",
      description:
        "You are a digital god. The network is your weapon and your playground. Firewalls are puzzles, and corporations are your prey. You fight with code, logic, and pure intellect. Your mind operates like a quantum processor, calculating probabilities and exploiting weaknesses others cannot see.",
      color: "blue",
      welcome:
        "Welcome to the Neural Division. Your cognitive enhancement begins now.",
    },
    runner: {
      title: "DATA RUNNER",
      emoji: "⚡",
      description:
        "You live for the chase. Speed, reflexes, and a neural-linked rig are your tools. You move through data-streams and city streets like a phantom. Your job: get the package, no matter what. Time is your ally, hesitation is your enemy.",
      color: "green",
      welcome: "Welcome to the Runner Corps. The Grid awaits your velocity.",
    },
    enforcer: {
      title: "STREET ENFORCER",
      emoji: "💀",
      description:
        "You are the line between the code and the concrete. Heavily chromed and ready for a fight, you are the muscle. When a data-steal goes wrong, you are the one who gets the team out alive. Fear is a luxury you cannot afford.",
      color: "red",
      welcome: "Welcome to the Enforcement Division. Show them no mercy.",
    },
    ghost: {
      title: "ECHO GHOST",
      emoji: "👻",
      description:
        "You were never here. You specialize in stealth, infiltration, and misdirection. You move unseen, unheard, and leave nothing but whispers and corrupted log files. You are the ultimate spy, a phantom in the machine.",
      color: "purple",
      welcome: "Welcome to the Shadow Protocol. You are now invisible.",
    },
    rejected: {
      title: "ACCESS DENIED",
      emoji: "❌",
      description:
        "Your neural pattern shows instability. The Glitch has analyzed your responses and found them... insufficient. Loyalty cannot be taught. Commitment cannot be faked. Perhaps the corporate world is more suited to your temperament.",
      color: "gray",
      welcome: "Connection terminated. Seek employment elsewhere.",
    },
  };

  const currentRole = roleData[result] || roleData.neural;

  const getColorClasses = (color) => {
    switch (color) {
      case "blue":
        return "text-blue-400";
      case "green":
        return "text-green-400";
      case "red":
        return "text-red-400";
      case "purple":
        return "text-purple-400";
      case "gray":
        return "text-gray-400";
      default:
        return "text-neon-cyan";
    }
  };

  const getGlowColor = (color) => {
    switch (color) {
      case "blue":
        return "#3b82f6";
      case "green":
        return "#22c55e";
      case "red":
        return "#ef4444";
      case "purple":
        return "#a855f7";
      case "gray":
        return "#9ca3af";
      default:
        return "#00ffff";
    }
  };

  const handleUpload = () => {
    setUploadStatus("uploading");
    setTimeout(() => {
      setUploadStatus("verified");
    }, 2000);
  };

  return (
    <motion.section
      className="min-h-screen flex flex-col items-center justify-center px-4 py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-3xl w-full text-center">
        <motion.h2
          className="text-2xl md:text-3xl text-gray-400 mb-4"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Analyzing neural signature...
        </motion.h2>

        <motion.h2
          className="text-2xl md:text-3xl text-neon-cyan text-glow-cyan mb-8"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Your profile aligns with:
        </motion.h2>

        <motion.div
          className={`bg-dark-purple border-2 p-8 mb-8 backdrop-blur-sm relative overflow-hidden ${
            result === "rejected"
              ? "border-gray-400"
              : "border-neon-magenta border-glow-purple"
          }`}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8, type: "spring" }}
        >
          {/* Role emoji */}
          <motion.div
            className="text-8xl mb-4"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.8, duration: 0.8, type: "spring" }}
          >
            {currentRole.emoji}
          </motion.div>

          <motion.h1
            className={`text-4xl md:text-6xl font-orbitron mb-6 ${getColorClasses(
              currentRole.color
            )}`}
            animate={{
              textShadow: [
                `0 0 5px ${getGlowColor(currentRole.color)}`,
                `0 0 20px ${getGlowColor(currentRole.color)}`,
                `0 0 5px ${getGlowColor(currentRole.color)}`,
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {currentRole.title}
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-300 leading-relaxed mb-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            {currentRole.description}
          </motion.p>

          <motion.p
            className={`text-base font-orbitron italic ${getColorClasses(
              currentRole.color
            )}`}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            {currentRole.welcome}
          </motion.p>

          {/* Decorative corners */}
          <div className="absolute top-2 left-2 w-8 h-8 border-l-4 border-t-4 border-neon-cyan"></div>
          <div className="absolute top-2 right-2 w-8 h-8 border-r-4 border-t-4 border-neon-cyan"></div>
          <div className="absolute bottom-2 left-2 w-8 h-8 border-l-4 border-b-4 border-neon-cyan"></div>
          <div className="absolute bottom-2 right-2 w-8 h-8 border-r-4 border-b-4 border-neon-cyan"></div>
        </motion.div>

        <motion.div
          className="space-y-6"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          {result !== "rejected" ? (
            <div className="bg-dark-purple border-2 border-neon-purple p-6 backdrop-blur-sm border-glow-purple">
              <h3 className="text-xl md:text-2xl font-orbitron text-neon-cyan text-glow-cyan mb-4">
                [ Transmission Received ]
              </h3>
              <p className="text-gray-300 mb-3">
                Your application has been logged in the Syndicate's deep
                archive. We know who you are. We know your digital shadow.
              </p>
              <p className="text-neon-magenta text-glow-magenta">
                Await contact via encrypted channel. Do not contact us.
              </p>

              {uploadStatus === "idle" && (
                <motion.div className="mt-6">
                  <GlitchButton onClick={handleUpload} secondary>
                    Upload DNA Sample (Optional)
                  </GlitchButton>
                </motion.div>
              )}

              {uploadStatus === "uploading" && (
                <motion.p
                  className="text-neon-cyan text-glow-cyan mt-6 text-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  TRANSMITTING...
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.7, repeat: Infinity }}
                  >
                    _
                  </motion.span>
                </motion.p>
              )}

              {uploadStatus === "verified" && (
                <motion.p
                  className="text-neon-magenta text-glow-magenta mt-6 text-lg font-bold"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                >
                  ...DNA SAMPLE VERIFIED.
                </motion.p>
              )}
            </div>
          ) : (
            <div className="bg-dark-purple border-2 border-red-500 p-6 backdrop-blur-sm">
              <h3 className="text-xl md:text-2xl font-orbitron text-red-400 mb-4">
                [ Connection Terminated ]
              </h3>
              <p className="text-gray-300 mb-3">
                Your neural pattern does not match our requirements. The
                Syndicate operates on trust, loyalty, and unwavering commitment.
              </p>
              <p className="text-red-400">
                Perhaps the corporate world is better suited to your...
                temperament.
              </p>
            </div>
          )}

          <GlitchButton onClick={() => onNavigate("home")}>
            Return to Mainframe
          </GlitchButton>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ResultSection;
