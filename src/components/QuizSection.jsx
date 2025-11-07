import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GlitchButton } from "./HeroSection";

const QuizSection = ({ onComplete }) => {
  const [answers, setAnswers] = useState({
    q1: "",
    q2: "",
    q3: "",
    q4: "",
    q5: "",
  });
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState(null);
  const [typingText, setTypingText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  // Define the personality questions
  const questions = [
    {
      id: "q1",
      question: "When infiltrating a corporate server, what's your approach?",
      options: [
        {
          value: "neural",
          label: "Silent and invisible - analyze patterns first",
        },
        { value: "runner", label: "Fast and reckless - speed is everything" },
        {
          value: "enforcer",
          label: "Smash through their firewall with brute force",
        },
        {
          value: "ghost",
          label: "Observe from the shadows, learn their weaknesses",
        },
      ],
    },
    {
      id: "q2",
      question: "A teammate betrays the Syndicate. What do you do?",
      options: [
        {
          value: "neural",
          label: "Reprogram their neural implants as punishment",
        },
        { value: "runner", label: "Chase them down before they escape" },
        { value: "enforcer", label: "Report to command and demand justice" },
        {
          value: "ghost",
          label: "Disappear before anyone notices your connection",
        },
      ],
    },
    {
      id: "q3",
      question: "What drives you to join the Syndicate?",
      options: [
        {
          value: "neural",
          label: "Freedom from corporate control and surveillance",
        },
        {
          value: "runner",
          label: "The thrill of the hack and adrenaline rush",
        },
        { value: "enforcer", label: "Revenge against those who wronged you" },
        {
          value: "ghost",
          label: "Curiosity about the Glitch and its mysteries",
        },
      ],
    },
    {
      id: "q4",
      question: "You're traced mid-hack. What's your move?",
      options: [
        {
          value: "neural",
          label: "Encrypt everything and vanish without a trace",
        },
        {
          value: "runner",
          label: "Redirect the trace back to them - counter-attack",
        },
        {
          value: "enforcer",
          label: "Smash the connection and destroy evidence",
        },
        {
          value: "ghost",
          label: "Accept capture to learn their security system",
        },
      ],
    },
    {
      id: "q5",
      question: "What color glows in your dreams?",
      options: [
        {
          value: "neural",
          label: "Blue - cold logic and calculated precision",
        },
        { value: "enforcer", label: "Red - rage, fire, and raw determination" },
        { value: "ghost", label: "Purple - mystery and the unknown depths" },
        { value: "runner", label: "Green - greed, chaos, and wild energy" },
      ],
    },
  ];

  // Role definitions with detailed descriptions
  const roles = {
    neural: {
      emoji: "🧠",
      title: "Neural Hacker",
      description:
        "You've been chosen as a Neural Hacker — master of logic and digital stealth.",
      fullDesc:
        "Analytical, methodical, and precise. You prefer to think three moves ahead and strike from the shadows of cyberspace.",
      color: "text-blue-400",
      borderColor: "border-blue-400",
      glowColor: "shadow-blue-400",
    },
    runner: {
      emoji: "⚡",
      title: "Data Runner",
      description:
        "You've been chosen as a Data Runner — the fastest in the Grid.",
      fullDesc:
        "Fast, risk-taking, and bold. You live for the rush and never look back when the data is flowing.",
      color: "text-green-400",
      borderColor: "border-green-400",
      glowColor: "shadow-green-400",
    },
    enforcer: {
      emoji: "💀",
      title: "Street Enforcer",
      description:
        "You've been chosen as a Street Enforcer — direct and fearless.",
      fullDesc:
        "Direct, fearless, and aggressive. You solve problems with force and never back down from a fight.",
      color: "text-red-400",
      borderColor: "border-red-400",
      glowColor: "shadow-red-400",
    },
    ghost: {
      emoji: "👻",
      title: "Echo Ghost",
      description:
        "You've been chosen as an Echo Ghost — mysterious and unpredictable.",
      fullDesc:
        "Unpredictable, mysterious, and detached. You operate in the spaces between reality and the digital void.",
      color: "text-purple-400",
      borderColor: "border-purple-400",
      glowColor: "shadow-purple-400",
    },
    rejected: {
      emoji: "❌",
      title: "Access Denied",
      description: "Access Denied. The Glitch has not found you worthy.",
      fullDesc:
        "Your responses show hesitation, disloyalty, or failure to embrace the Syndicate's ways. Try again when you're ready to commit.",
      color: "text-gray-400",
      borderColor: "border-gray-400",
      glowColor: "shadow-gray-400",
    },
  };

  const handleAnswerChange = (questionId, value) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  const calculateResult = () => {
    // Check if all questions are answered
    if (Object.values(answers).some((answer) => !answer)) {
      alert("> ERROR: Please answer all questions before decrypting results.");
      return;
    }

    // Calculate scores for each role
    const scores = {
      neural: 0,
      runner: 0,
      enforcer: 0,
      ghost: 0,
    };

    // Count answers for each role type
    Object.values(answers).forEach((answer) => {
      if (scores.hasOwnProperty(answer)) {
        scores[answer]++;
      }
    });

    // Determine result based on highest score
    let maxScore = Math.max(...Object.values(scores));
    let resultRole = "rejected";

    // Must have at least 2 consistent answers to be recruited
    if (maxScore >= 2) {
      // Find the role with the highest score
      for (const [role, score] of Object.entries(scores)) {
        if (score === maxScore) {
          resultRole = role;
          break;
        }
      }
    }

    setResult(resultRole);
    setShowResult(true);

    // Start typing animation
    const targetText = roles[resultRole].description;
    setIsTyping(true);
    setTypingText("");

    let i = 0;
    const typeInterval = setInterval(() => {
      if (i < targetText.length) {
        setTypingText(targetText.slice(0, i + 1));
        i++;
      } else {
        setIsTyping(false);
        clearInterval(typeInterval);
      }
    }, 50);

    // Call onComplete if provided
    if (onComplete) {
      onComplete(resultRole);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const flickerVariants = {
    initial: { opacity: 1 },
    flicker: {
      opacity: [1, 0.5, 1, 0.3, 1],
      transition: { duration: 0.5 },
    },
  };

  const isAllAnswered = Object.values(answers).every((answer) => answer !== "");

  return (
    <motion.section
      className="min-h-screen py-20 px-4 md:px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl md:text-6xl font-orbitron text-neon-cyan text-glow-cyan text-center mb-12"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          [ Syndicate Assessment ]
        </motion.h2>

        <AnimatePresence mode="wait">
          {!showResult ? (
            <motion.div
              key="quiz"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: -20 }}
              className="space-y-8"
            >
              {questions.map((question, index) => (
                <QuestionCard
                  key={question.id}
                  question={question}
                  index={index}
                  selectedAnswer={answers[question.id]}
                  onAnswerChange={handleAnswerChange}
                  variants={itemVariants}
                />
              ))}

              <motion.div className="text-center pt-8" variants={itemVariants}>
                {isAllAnswered && (
                  <motion.div
                    variants={flickerVariants}
                    initial="initial"
                    whileHover="flicker"
                  >
                    <GlitchButton
                      onClick={calculateResult}
                      className="relative overflow-hidden"
                    >
                      <motion.span
                        initial={{ x: 0 }}
                        whileHover={{ x: [0, -5, 5, 0] }}
                        transition={{ duration: 0.3 }}
                      >
                        🔓 Decrypt Results
                      </motion.span>
                    </GlitchButton>
                  </motion.div>
                )}
                {!isAllAnswered && (
                  <div className="text-neon-purple text-lg font-orbitron">
                    Answer all questions to unlock decryption...
                  </div>
                )}
              </motion.div>
            </motion.div>
          ) : (
            <ResultDisplay
              result={result}
              roles={roles}
              typingText={typingText}
              isTyping={isTyping}
              onReturnToMainframe={scrollToTop}
            />
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  );
};

const QuestionCard = ({
  question,
  index,
  selectedAnswer,
  onAnswerChange,
  variants,
}) => {
  return (
    <motion.div
      className="bg-dark-purple border-2 border-neon-purple p-6 backdrop-blur-sm border-glow-purple relative overflow-hidden"
      variants={variants}
    >
      {/* Circuit pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-2 left-2 w-8 h-8 border-l-2 border-t-2 border-neon-cyan"></div>
        <div className="absolute bottom-2 right-2 w-8 h-8 border-r-2 border-b-2 border-neon-cyan"></div>
      </div>

      <h3 className="text-xl md:text-2xl font-orbitron text-neon-magenta text-glow-magenta mb-6 relative z-10">
        <span className="text-neon-cyan">[{index + 1}]</span>{" "}
        {question.question}
      </h3>

      <div className="space-y-3 relative z-10">
        {question.options.map((option, optIndex) => (
          <motion.label
            key={optIndex}
            className={`
              block p-4 border-2 cursor-pointer transition-all duration-300 relative overflow-hidden
              ${
                selectedAnswer === option.value
                  ? "bg-neon-cyan text-dark-bg border-neon-cyan shadow-lg shadow-neon-cyan/50"
                  : "bg-transparent text-gray-300 border-neon-cyan/50 hover:bg-neon-cyan/10 hover:shadow-neon-cyan/30 hover:border-neon-cyan"
              }
            `}
            whileHover={{ x: 8, scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
          >
            <input
              type="radio"
              name={question.id}
              value={option.value}
              checked={selectedAnswer === option.value}
              onChange={(e) => onAnswerChange(question.id, e.target.value)}
              className="hidden"
            />
            <span className="text-sm md:text-base font-medium">
              <span className="text-neon-purple mr-2">
                [{String.fromCharCode(65 + optIndex)}]
              </span>
              {option.label}
            </span>

            {/* Selection indicator */}
            {selectedAnswer === option.value && (
              <motion.div
                className="absolute right-4 top-1/2 transform -translate-y-1/2"
                initial={{ scale: 0, rotate: 0 }}
                animate={{ scale: 1, rotate: 360 }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-neon-cyan text-xl">⚡</span>
              </motion.div>
            )}
          </motion.label>
        ))}
      </div>
    </motion.div>
  );
};

// Result Display Component
const ResultDisplay = ({
  result,
  roles,
  typingText,
  isTyping,
  onReturnToMainframe,
}) => {
  const roleData = roles[result];

  return (
    <motion.div
      key="result"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="text-center space-y-8"
    >
      {/* Result Container */}
      <motion.div
        className={`
          bg-dark-purple border-4 ${roleData.borderColor} p-8 mx-auto max-w-2xl
          backdrop-blur-sm relative overflow-hidden
        `}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        style={{
          boxShadow: `0 0 50px ${roleData.borderColor.replace("border-", "")}`,
        }}
      >
        {/* Animated background pattern */}
        <motion.div
          className="absolute inset-0 opacity-5"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            backgroundImage: `linear-gradient(45deg, transparent 40%, ${roleData.color.replace(
              "text-",
              ""
            )} 50%, transparent 60%)`,
            backgroundSize: "20px 20px",
          }}
        />

        {/* Role Icon */}
        <motion.div
          className="text-8xl mb-6"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.4, duration: 0.8, type: "spring" }}
        >
          {roleData.emoji}
        </motion.div>

        {/* Role Title */}
        <motion.h3
          className={`text-4xl md:text-5xl font-orbitron ${roleData.color} mb-6 relative z-10`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          style={{
            textShadow: `0 0 20px ${roleData.color.replace("text-", "")}`,
          }}
        >
          {roleData.title}
        </motion.h3>

        {/* Typing Animation */}
        <motion.div
          className="text-lg md:text-xl text-gray-300 mb-6 h-16 flex items-center justify-center relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.4 }}
        >
          <span className="font-mono">
            {typingText}
            {isTyping && (
              <motion.span
                className={roleData.color}
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity }}
              >
                |
              </motion.span>
            )}
          </span>
        </motion.div>

        {/* Full Description */}
        <motion.p
          className="text-gray-400 text-base italic relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          {roleData.fullDesc}
        </motion.p>

        {/* Glitch effect on corners */}
        <div className="absolute top-0 left-0 w-4 h-4 border-l-4 border-t-4 border-neon-cyan"></div>
        <div className="absolute top-0 right-0 w-4 h-4 border-r-4 border-t-4 border-neon-cyan"></div>
        <div className="absolute bottom-0 left-0 w-4 h-4 border-l-4 border-b-4 border-neon-cyan"></div>
        <div className="absolute bottom-0 right-0 w-4 h-4 border-r-4 border-b-4 border-neon-cyan"></div>
      </motion.div>

      {/* Return Button */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <GlitchButton
          onClick={onReturnToMainframe}
          className="bg-dark-purple border-neon-purple hover:bg-neon-purple"
        >
          <span className="flex items-center gap-2">
            <span>🔄</span>
            Return to Mainframe
          </span>
        </GlitchButton>
      </motion.div>

      {/* Status indicators */}
      <motion.div
        className="flex justify-center gap-4 text-xs text-gray-500 font-mono"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
      >
        <span>[STATUS: RECRUITMENT_COMPLETE]</span>
        <span>[CLEARANCE: {result.toUpperCase()}]</span>
        <span>[GLITCH_LEVEL: {Math.floor(Math.random() * 9) + 1}]</span>
      </motion.div>
    </motion.div>
  );
};

export default QuizSection;
