import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedBackground from "./components/AnimatedBackground";
import LoadingScreen from "./components/LoadingScreen";
import HeroSection from "./components/HeroSection";
import InnerCircle from "./components/InnerCircle";
import QuizSection from "./components/QuizSection";
import ResultSection from "./components/ResultSection";
import JoinTheStatic from "./components/JoinTheStatic";
import Footer from "./components/Footer";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentSection, setCurrentSection] = useState("home");
  const [quizResult, setQuizResult] = useState(null);

  // Check if user has seen loading screen in this session
  useEffect(() => {
    const hasSeenLoader = sessionStorage.getItem("glitchSyndicateLoaderSeen");
    if (hasSeenLoader) {
      setIsLoading(false);
    }
  }, []);

  const handleLoadingComplete = () => {
    sessionStorage.setItem("glitchSyndicateLoaderSeen", "true");
    setIsLoading(false);
  };

  const handleNavigation = (section) => {
    setCurrentSection(section);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleQuizComplete = (result) => {
    setQuizResult(result);
    setCurrentSection("result");
  };

  // Page transition variants
  const pageVariants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <div className="relative min-h-screen">
      {/* Loading Screen */}
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}

      {/* Animated Background */}
      {!isLoading && <AnimatedBackground />}

      {/* Main Content */}
      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="relative z-10"
        >
          <AnimatePresence mode="wait">
            {currentSection === "home" && (
              <motion.div
                key="home"
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <HeroSection onNavigate={handleNavigation} />
              </motion.div>
            )}

            {currentSection === "about" && (
              <motion.div
                key="about"
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <InnerCircle onNavigate={handleNavigation} />
              </motion.div>
            )}

            {currentSection === "quiz" && (
              <motion.div
                key="quiz"
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <QuizSection onComplete={handleQuizComplete} />
              </motion.div>
            )}

            {currentSection === "result" && (
              <motion.div
                key="result"
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <ResultSection
                  result={quizResult}
                  onNavigate={handleNavigation}
                />
              </motion.div>
            )}

            {currentSection === "static" && (
              <motion.div
                key="static"
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <JoinTheStatic onNavigate={handleNavigation} />
              </motion.div>
            )}
          </AnimatePresence>

          <Footer />
        </motion.div>
      )}
    </div>
  );
}

export default App;
