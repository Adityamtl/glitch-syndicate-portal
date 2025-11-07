import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GlitchButton } from './HeroSection';

const QuizSection = ({ onComplete }) => {
  const [answers, setAnswers] = useState({
    q1: '',
    q2: '',
    q3: '',
    q4: '',
  });

  const questions = [
    {
      id: 'q1',
      question: 'A data node is locked. Your console flashes \'ACCESS DENIED\'. You:',
      options: [
        { value: 'hacker', label: 'Scan for an unsecured port. There\'s always a back-door.' },
        { value: 'runner', label: 'Bypass it. Speed is life. Find another route to the payload.' },
        { value: 'enforcer', label: 'Smash the console. Physical access is still access.' },
      ],
    },
    {
      id: 'q2',
      question: 'A rival synth drops a package. A corpo patrol is on the corner. You:',
      options: [
        { value: 'runner', label: 'Grab it and run. You were built for this.' },
        { value: 'ghost', label: 'Create a distraction. Glitch the patrol\'s comms and slip by unseen.' },
        { value: 'enforcer', label: 'Ambush the patrol. Take the package and their gear.' },
      ],
    },
    {
      id: 'q3',
      question: 'Your ideal loadout is:',
      options: [
        { value: 'hacker', label: 'A custom neural deck and a line of pure, untraceable code.' },
        { value: 'enforcer', label: 'Chromed fists and a plasma shotgun. Keep it personal.' },
        { value: 'ghost', label: 'Optical camo, silenced pistol, and a mono-wire for emergencies.' },
      ],
    },
    {
      id: 'q4',
      question: 'The client offers double for a "no witnesses" job. You:',
      options: [
        { value: 'enforcer', label: 'Accept. Credits are credits. Business is business.' },
        { value: 'hacker', label: 'Refuse. Code is my weapon, not blood. I don\'t do "wetwork".' },
        { value: 'runner', label: 'Accept, but "no witnesses" just means "be fast enough."' },
      ],
    },
  ];

  const handleAnswerChange = (questionId, value) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Check if all questions are answered
    if (Object.values(answers).some(answer => !answer)) {
      alert('> ERROR: Please answer all questions before transmitting.');
      return;
    }

    // Calculate results
    const scores = {
      runner: 0,
      hacker: 0,
      enforcer: 0,
      ghost: 0,
    };

    Object.values(answers).forEach(answer => {
      if (scores.hasOwnProperty(answer)) {
        scores[answer]++;
      }
    });

    // Determine result
    let maxScore = 0;
    let result = 'runner';

    Object.entries(scores).forEach(([role, score]) => {
      if (score > maxScore) {
        maxScore = score;
        result = role;
      }
    });

    onComplete(result);
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
          [ Recruitment Test ]
        </motion.h2>

        <motion.form
          onSubmit={handleSubmit}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
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

          <motion.div
            className="text-center pt-8"
            variants={itemVariants}
          >
            <GlitchButton type="submit">
              Transmit Answers
            </GlitchButton>
          </motion.div>
        </motion.form>
      </div>
    </motion.section>
  );
};

const QuestionCard = ({ question, index, selectedAnswer, onAnswerChange, variants }) => {
  return (
    <motion.div
      className="bg-dark-purple border-2 border-neon-purple p-6 backdrop-blur-sm border-glow-purple"
      variants={variants}
    >
      <h3 className="text-xl md:text-2xl font-orbitron text-neon-magenta text-glow-magenta mb-6">
        {index + 1}. {question.question}
      </h3>

      <div className="space-y-3">
        {question.options.map((option, optIndex) => (
          <motion.label
            key={optIndex}
            className={`
              block p-4 border-2 cursor-pointer transition-all duration-300
              ${selectedAnswer === option.value
                ? 'bg-neon-cyan text-dark-bg border-neon-cyan shadow-neon-cyan'
                : 'bg-transparent text-gray-300 border-neon-cyan hover:bg-neon-cyan/20 hover:shadow-neon-cyan/50'
              }
            `}
            whileHover={{ x: 5 }}
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
            <span className="text-sm md:text-base">{option.label}</span>
          </motion.label>
        ))}
      </div>
    </motion.div>
  );
};

export default QuizSection;
