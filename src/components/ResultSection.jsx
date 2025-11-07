import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GlitchButton } from './HeroSection';

const ResultSection = ({ result, onNavigate }) => {
  const [uploadStatus, setUploadStatus] = useState('idle');

  const roleData = {
    runner: {
      title: 'DATA RUNNER',
      description: 'You live for the chase. Speed, reflexes, and a neural-linked rig are your tools. You move through data-streams and city streets like a phantom. Your job: get the package, no matter what.',
      color: 'cyan',
    },
    hacker: {
      title: 'NEURAL HACKER',
      description: 'You are a digital god. The network is your weapon and your playground. Firewalls are puzzles, and corporations are your prey. You fight with code, logic, and pure intellect.',
      color: 'purple',
    },
    enforcer: {
      title: 'STREET ENFORCER',
      description: 'You are the line between the code and the concrete. Heavily chromed and ready for a fight, you are the muscle. When a data-steal goes wrong, you are the one who gets the team out alive.',
      color: 'magenta',
    },
    ghost: {
      title: 'ECHO GHOST',
      description: 'You were never here. You specialize in stealth, infiltration, and misdirection. You move unseen, unheard, and leave nothing but whispers and corrupted log files. You are the ultimate spy.',
      color: 'cyan',
    },
  };

  const currentRole = roleData[result] || roleData.runner;

  const handleUpload = () => {
    setUploadStatus('uploading');
    setTimeout(() => {
      setUploadStatus('verified');
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
          className="bg-dark-purple border-2 border-neon-magenta p-8 mb-8 border-glow-purple backdrop-blur-sm"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8, type: 'spring' }}
        >
          <motion.h1
            className={`
              text-4xl md:text-6xl font-orbitron mb-6
              ${currentRole.color === 'cyan' ? 'text-neon-cyan text-glow-cyan' : ''}
              ${currentRole.color === 'purple' ? 'text-neon-purple text-glow-purple' : ''}
              ${currentRole.color === 'magenta' ? 'text-neon-magenta text-glow-magenta' : ''}
            `}
            animate={{
              textShadow: [
                `0 0 5px ${currentRole.color === 'cyan' ? '#00ffff' : currentRole.color === 'purple' ? '#9400d3' : '#ff00ff'}`,
                `0 0 20px ${currentRole.color === 'cyan' ? '#00ffff' : currentRole.color === 'purple' ? '#9400d3' : '#ff00ff'}`,
                `0 0 5px ${currentRole.color === 'cyan' ? '#00ffff' : currentRole.color === 'purple' ? '#9400d3' : '#ff00ff'}`,
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {currentRole.title}
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-300 leading-relaxed"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            {currentRole.description}
          </motion.p>
        </motion.div>

        <motion.div
          className="space-y-6"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <div className="bg-dark-purple border-2 border-neon-purple p-6 backdrop-blur-sm border-glow-purple">
            <h3 className="text-xl md:text-2xl font-orbitron text-neon-cyan text-glow-cyan mb-4">
              [ Transmission Received ]
            </h3>
            <p className="text-gray-300 mb-3">
              Your application has been logged in the Syndicate's deep archive.
              We know who you are. We know your digital shadow.
            </p>
            <p className="text-neon-magenta text-glow-magenta">
              Await contact via encrypted channel. Do not contact us.
            </p>

            {uploadStatus === 'idle' && (
              <motion.div className="mt-6">
                <GlitchButton onClick={handleUpload} secondary>
                  Upload DNA Sample (Optional)
                </GlitchButton>
              </motion.div>
            )}

            {uploadStatus === 'uploading' && (
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

            {uploadStatus === 'verified' && (
              <motion.p
                className="text-neon-magenta text-glow-magenta mt-6 text-lg font-bold"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
              >
                ...DNA SAMPLE VERIFIED.
              </motion.p>
            )}
          </div>

          <GlitchButton onClick={() => onNavigate('home')}>
            Return to Mainframe
          </GlitchButton>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ResultSection;
