import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import romanticConfig from '../config/romanticConfig';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const { quiz } = romanticConfig;
  const questions = quiz.questions;

  const handleAnswerSelect = (answerIndex) => {
    setSelectedAnswer(answerIndex);
    setShowResult(true);
    
    // Play sound effect
    if (window.playSoundEffect) {
      if (answerIndex === questions[currentQuestion].correct) {
        window.playSoundEffect('correctAnswer');
      } else {
        window.playSoundEffect('buttonClick');
      }
    }
    
    if (answerIndex === questions[currentQuestion].correct) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
  };

  const getScoreMessage = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage === 100) {
      return quiz.scoreMessages.perfect;
    } else if (percentage >= 80) {
      return quiz.scoreMessages.excellent;
    } else if (percentage >= 60) {
      return quiz.scoreMessages.good;
    } else {
      return quiz.scoreMessages.okay;
    }
  };

  if (currentQuestion >= questions.length) {
    const scoreData = getScoreMessage();
    return (
      <div className="min-h-screen pt-20 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center bg-white bg-opacity-90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl"
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-6xl mb-6"
            >
              🎉
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-romantic font-bold gradient-text mb-6">
              {scoreData.title}
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-700 mb-8 font-elegant">
              {scoreData.message}
            </p>
            
            <div className="bg-gradient-to-r from-romantic-pink to-warm-pink text-white text-2xl font-bold py-4 px-8 rounded-full mb-8 inline-block">
              Score: {score}/{questions.length} ({Math.round((score / questions.length) * 100)}%)
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleRestart}
                className="px-8 py-4 bg-gradient-to-r from-pastel-purple to-soft-lavender text-white text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Play Again 💕
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = '/proposal'}
                className="px-8 py-4 bg-gradient-to-r from-romantic-pink to-warm-pink text-white text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Continue to Proposal 💍
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-romantic font-bold text-center gradient-text mb-6">
            {quiz.title}
          </h1>
          <div className="bg-white bg-opacity-50 rounded-full h-4 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              transition={{ duration: 0.5 }}
              className="h-full bg-gradient-to-r from-romantic-pink to-warm-pink"
            />
          </div>
          <p className="text-center text-gray-600 mt-2 font-elegant">
            Question {currentQuestion + 1} of {questions.length}
          </p>
        </motion.div>

        <motion.div
          key={currentQuestion}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="bg-white bg-opacity-90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl md:text-4xl font-romantic font-bold text-center gradient-text mb-12"
          >
            {questions[currentQuestion].question}
          </motion.h2>

          <div className="space-y-4">
            {questions[currentQuestion].options.map((option, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleAnswerSelect(index)}
                disabled={showResult}
                className={`w-full p-6 text-left rounded-2xl text-lg font-elegant transition-all duration-300 ${
                  showResult
                    ? index === questions[currentQuestion].correct
                      ? 'bg-green-100 border-2 border-green-400 text-green-800'
                      : selectedAnswer === index
                      ? 'bg-red-100 border-2 border-red-400 text-red-800'
                      : 'bg-gray-100 text-gray-500'
                    : 'bg-gradient-to-r from-soft-pink to-romantic-pink text-white hover:from-romantic-pink hover:to-warm-pink hover:shadow-lg'
                }`}
              >
                {option}
              </motion.button>
            ))}
          </div>

          <AnimatePresence>
            {showResult && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="mt-8 text-center"
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 0.6 }}
                  className="text-4xl mb-4"
                >
                  {selectedAnswer === questions[currentQuestion].correct ? '🎉' : '💕'}
                </motion.div>
                
                <p className="text-xl md:text-2xl font-elegant text-gray-700 mb-6">
                  {questions[currentQuestion].responses[selectedAnswer]}
                </p>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleNext}
                  className="px-8 py-4 bg-gradient-to-r from-romantic-pink to-warm-pink text-white text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {currentQuestion < questions.length - 1 ? 'Next Question 💕' : 'See Results 🎉'}
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default Quiz;

