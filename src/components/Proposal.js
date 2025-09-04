import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Confetti from 'react-confetti';
import romanticConfig from '../config/romanticConfig';

const Proposal = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);
  const [showMaybeMessage, setShowMaybeMessage] = useState(false);
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const { proposal, animations } = romanticConfig;

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleYesClick = () => {
    setShowConfetti(true);
    setShowCelebration(true);
    
    // Play celebration sound
    if (window.playSoundEffect) {
      window.playSoundEffect('celebration');
    }
    
    // Stop confetti after configured duration
    setTimeout(() => {
      setShowConfetti(false);
    }, animations.confetti.duration);
  };

  const handleMaybeClick = () => {
    setShowMaybeMessage(true);
    setTimeout(() => {
      setShowMaybeMessage(false);
    }, 3000);
  };

  const createFloatingHearts = () => {
    const hearts = ['💕', '💖', '💗', '💝', '💘', '💞', '💓', '💟'];
    const heart = document.createElement('div');
    heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
    heart.className = 'fixed text-4xl pointer-events-none heart-float z-50';
    heart.style.left = Math.random() * window.innerWidth + 'px';
    heart.style.top = window.innerHeight + 'px';
    heart.style.fontSize = (Math.random() * 20 + 20) + 'px';
    document.body.appendChild(heart);
    
    setTimeout(() => {
      heart.remove();
    }, 4000);
  };

  useEffect(() => {
    if (showCelebration) {
      const heartInterval = setInterval(createFloatingHearts, 300);
      return () => clearInterval(heartInterval);
    }
  }, [showCelebration]);

  return (
    <div className="min-h-screen pt-20 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Confetti */}
      {showConfetti && (
        <Confetti
          width={windowDimensions.width}
          height={windowDimensions.height}
          recycle={false}
          numberOfPieces={animations.confetti.pieces}
          colors={['#FFB6C1', '#FF69B4', '#DDA0DD', '#E6E6FA', '#FFC0CB']}
        />
      )}

      {/* Background Hearts */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -100],
              opacity: [0, 1, 0],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeOut",
            }}
            className="absolute text-2xl text-romantic-pink opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            💕
          </motion.div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <AnimatePresence>
          {!showCelebration ? (
            <motion.div
              key="proposal"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              {/* Main Proposal Card */}
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="bg-white bg-opacity-95 backdrop-blur-sm rounded-3xl p-8 md:p-16 shadow-2xl mb-12"
              >
                <motion.div
                  animate={{ 
                    scale: [1, 1.05, 1],
                    rotate: [0, 2, -2, 0]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="text-8xl md:text-9xl mb-8"
                >
                  💕
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="text-4xl md:text-6xl font-romantic font-bold gradient-text mb-8"
                >
                  {proposal.title}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  className="text-xl md:text-2xl text-gray-700 mb-12 font-elegant leading-relaxed"
                >
                  {proposal.subtitle}
                  <br /><br />
                  {proposal.description}
                </motion.p>

                {/* Action Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                  className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                >
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleYesClick}
                    className="px-12 py-6 bg-gradient-to-r from-romantic-pink to-warm-pink text-white text-2xl font-bold rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:rotate-1"
                  >
                    {proposal.buttons.yes.text}
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleMaybeClick}
                    className="px-8 py-4 bg-gradient-to-r from-pastel-purple to-soft-lavender text-white text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    {proposal.buttons.maybe.text}
                  </motion.button>
                </motion.div>
              </motion.div>

              {/* Maybe Message Popup */}
              <AnimatePresence>
                {showMaybeMessage && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                  >
                    <motion.div
                      initial={{ y: 50 }}
                      animate={{ y: 0 }}
                      className="bg-white rounded-2xl p-8 max-w-md mx-4 text-center shadow-2xl"
                    >
                      <div className="text-4xl mb-4">💕</div>
                      <h3 className="text-2xl font-romantic font-bold text-gray-800 mb-4">
                        Take Your Time
                      </h3>
                      <p className="text-gray-600 font-elegant">
                        {proposal.buttons.maybe.message}
                      </p>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Sweet Messages */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.1 }}
                className="grid md:grid-cols-3 gap-6"
              >
                {proposal.sweetMessages.map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-white bg-opacity-80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="text-4xl mb-4">{item.icon}</div>
                    <h3 className="text-xl font-romantic font-bold text-gray-800 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 font-elegant">
                      {item.message}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="celebration"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="text-9xl md:text-[12rem] mb-8"
              >
                🎉
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-5xl md:text-7xl font-romantic font-bold gradient-text mb-8"
              >
                {proposal.celebration.title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-2xl md:text-3xl text-gray-700 mb-12 font-elegant"
              >
                {proposal.buttons.yes.celebration}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="bg-white bg-opacity-95 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl max-w-4xl mx-auto"
              >
                <h2 className="text-3xl md:text-4xl font-romantic font-bold gradient-text mb-6">
                  {proposal.celebration.subtitle}
                </h2>
                
                <div className="text-lg md:text-xl text-gray-700 font-elegant space-y-4 mb-8">
                  {proposal.celebration.messages.map((message, index) => (
                    <p key={index}>{message}</p>
                  ))}
                </div>

                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-6xl mb-6"
                >
                  💕💖💕💖💕
                </motion.div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.location.href = '/'}
                  className="px-8 py-4 bg-gradient-to-r from-romantic-pink to-warm-pink text-white text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {proposal.celebration.cta}
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Proposal;

