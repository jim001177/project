import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import romanticConfig from '../config/romanticConfig';

const Home = () => {
  const [currentMessage, setCurrentMessage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [particles, setParticles] = useState([]);
  const [clickCount, setClickCount] = useState(0);
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  const { home, animations, easterEggs } = romanticConfig;
  const messages = home.messages;

  // Cycle through messages
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % messages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [messages.length]);

  // Initialize particles
  useEffect(() => {
    if (animations.particles.enabled) {
      const newParticles = [];
      for (let i = 0; i < animations.particles.count; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          vx: (Math.random() - 0.5) * animations.particles.speed,
          vy: (Math.random() - 0.5) * animations.particles.speed,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.5 + 0.2
        });
      }
      setParticles(newParticles);
    }
  }, []);

  // Animate particles
  useEffect(() => {
    if (animations.particles.enabled && particles.length > 0) {
      const animate = () => {
        setParticles(prevParticles => 
          prevParticles.map(particle => ({
            ...particle,
            x: (particle.x + particle.vx + window.innerWidth) % window.innerWidth,
            y: (particle.y + particle.vy + window.innerHeight) % window.innerHeight
          }))
        );
        animationRef.current = requestAnimationFrame(animate);
      };
      animationRef.current = requestAnimationFrame(animate);
      
      return () => {
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }
      };
    }
  }, [particles.length]);

  // Floating hearts animation
  const createHeart = () => {
    if (animations.floatingHearts.enabled) {
      const hearts = ['💕', '💖', '💗', '💝', '💘', '💞', '💓', '💟'];
      const heart = document.createElement('div');
      heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
      heart.className = 'fixed text-2xl pointer-events-none heart-float z-50';
      heart.style.left = Math.random() * window.innerWidth + 'px';
      heart.style.top = window.innerHeight + 'px';
      heart.style.fontSize = (Math.random() * 20 + 20) + 'px';
      document.body.appendChild(heart);
      
      setTimeout(() => {
        heart.remove();
      }, 3000);
    }
  };

  useEffect(() => {
    if (animations.floatingHearts.enabled) {
      const heartInterval = setInterval(createHeart, animations.floatingHearts.frequency);
      return () => clearInterval(heartInterval);
    }
  }, []);

  // Easter egg: Click counter
  const handleEasterEgg = () => {
    setClickCount(prev => prev + 1);
    if (easterEggs.clickCount.enabled && clickCount === easterEggs.clickCount.threshold) {
      alert(easterEggs.clickCount.message);
    }
  };

  // Konami code easter egg
  useEffect(() => {
    if (easterEggs.konamiCode.enabled) {
      const konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
      let userInput = [];
      
      const handleKeyDown = (e) => {
        userInput.push(e.keyCode);
        if (userInput.length > konamiCode.length) {
          userInput = userInput.slice(-konamiCode.length);
        }
        
        if (userInput.join(',') === konamiCode.join(',')) {
          alert(easterEggs.konamiCode.message);
          // Trigger extra hearts
          for (let i = 0; i < 10; i++) {
            setTimeout(() => createHeart(), i * 100);
          }
          userInput = [];
        }
      };
      
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen pt-16 relative overflow-hidden">
      {/* Particle Canvas */}
      {animations.particles.enabled && (
        <canvas
          ref={canvasRef}
          className="absolute inset-0 pointer-events-none"
          style={{ zIndex: 1 }}
        />
      )}


      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating particles */}
        {particles.map(particle => (
          <motion.div
            key={particle.id}
            className="absolute w-1 h-1 bg-romantic-pink rounded-full opacity-30"
            style={{
              left: particle.x,
              top: particle.y,
              width: particle.size,
              height: particle.size,
              opacity: particle.opacity
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [particle.opacity, particle.opacity * 0.5, particle.opacity]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Rotating gradient orbs */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-soft-pink to-romantic-pink rounded-full opacity-20"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-pastel-purple to-soft-lavender rounded-full opacity-20"
        />
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-warm-rose to-soft-peach rounded-full opacity-30"
        />
        
        {/* Additional floating elements */}
        <motion.div
          animate={{ 
            y: [0, -30, 0],
            x: [0, 10, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 right-1/4 w-16 h-16 bg-gradient-to-br from-soft-lavender to-pastel-purple rounded-full opacity-25"
        />
        <motion.div
          animate={{ 
            y: [0, 20, 0],
            x: [0, -15, 0],
            rotate: [0, -3, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/3 left-1/3 w-20 h-20 bg-gradient-to-br from-warm-rose to-romantic-pink rounded-full opacity-20"
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
      >
        {/* Main Content */}
        <div className="text-center">
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-romantic font-bold gradient-text mb-8"
            onClick={handleEasterEgg}
          >
            {home.heroTitle}
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-600 mb-8 font-elegant"
          >
            {home.subtitle}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mb-12"
          >
            <motion.p
              key={currentMessage}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-2xl md:text-3xl font-elegant text-gray-700 mb-4"
            >
              {messages[currentMessage]}
            </motion.p>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-600 mb-16 max-w-3xl mx-auto leading-relaxed"
          >
            {home.description}
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to={home.ctaButtons.primary.route}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-romantic-pink to-warm-pink text-white text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:rotate-1"
              >
                <span className="mr-2">{home.ctaButtons.primary.icon}</span>
                {home.ctaButtons.primary.text}
                <span className="ml-2">✨</span>
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to={home.ctaButtons.secondary.route}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-pastel-purple to-soft-lavender text-white text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-rotate-1"
              >
                <span className="mr-2">{home.ctaButtons.secondary.icon}</span>
                {home.ctaButtons.secondary.text}
                <span className="ml-2">💖</span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Floating Hearts */}
          <motion.div
            variants={itemVariants}
            className="mt-20 flex justify-center space-x-4"
          >
            {['💕', '💖', '💗', '💝', '💘'].map((heart, index) => (
              <motion.span
                key={index}
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 3 + index * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.2
                }}
                className="text-4xl cursor-pointer"
                whileHover={{ scale: 1.2 }}
                onClick={handleEasterEgg}
              >
                {heart}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-white text-center cursor-pointer"
            onClick={handleEasterEgg}
          >
            <p className="text-sm mb-2">Scroll to explore</p>
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-white rounded-full mt-2"
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;