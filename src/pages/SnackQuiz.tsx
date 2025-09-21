import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { snacks } from '../data/snacks';

interface Question {
  id: number;
  question: string;
  emoji: string;
  options: { text: string; value: string }[];
}

const SnackQuiz: React.FC = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [recommendedSnacks, setRecommendedSnacks] = useState<typeof snacks>([]);

  const questions: Question[] = [
    {
      id: 1,
      question: "What's your ideal snack time?",
      emoji: "⏰",
      options: [
        { text: "Morning Energy Boost", value: "morning" },
        { text: "Afternoon Pick-me-up", value: "afternoon" },
        { text: "Late Night Munchies", value: "night" },
        { text: "All Day Long!", value: "always" }
      ]
    },
    {
      id: 2,
      question: "Pick your flavor adventure!",
      emoji: "🎨",
      options: [
        { text: "Sweet & Sugary", value: "sweet" },
        { text: "Salty & Savory", value: "salty" },
        { text: "Spicy & Bold", value: "spicy" },
        { text: "Mix it up!", value: "mixed" }
      ]
    },
    {
      id: 3,
      question: "What's your snacking mood?",
      emoji: "😊",
      options: [
        { text: "Adventurous Explorer", value: "adventurous" },
        { text: "Comfort Seeker", value: "comfort" },
        { text: "Health Conscious", value: "healthy" },
        { text: "Party Animal", value: "party" }
      ]
    },
    {
      id: 4,
      question: "Choose your texture!",
      emoji: "✨",
      options: [
        { text: "Crunchy & Crispy", value: "crunchy" },
        { text: "Chewy & Soft", value: "chewy" },
        { text: "Smooth & Creamy", value: "smooth" },
        { text: "Surprise Me!", value: "surprise" }
      ]
    },
    {
      id: 5,
      question: "What's your snack personality?",
      emoji: "🎭",
      options: [
        { text: "Bold & Daring", value: "bold" },
        { text: "Classic & Reliable", value: "classic" },
        { text: "Fun & Playful", value: "playful" },
        { text: "Sophisticated & Refined", value: "sophisticated" }
      ]
    }
  ];

  const handleAnswer = (value: string) => {
    const newAnswers = [...answers, value];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResult(newAnswers);
    }
  };

  const calculateResult = (userAnswers: string[]) => {
    // Simple recommendation logic based on answers
    let recommended = [...snacks];
    
    // Filter based on flavor preference
    if (userAnswers[1] === 'sweet') {
      recommended = recommended.filter(s => s.category === 'cookies' || s.category === 'candy');
    } else if (userAnswers[1] === 'salty') {
      recommended = recommended.filter(s => s.category === 'chips');
    } else if (userAnswers[1] === 'spicy') {
      recommended = recommended.filter(s => s.flavor.toLowerCase().includes('spicy') || s.flavor.toLowerCase().includes('hot'));
    }
    
    // Filter based on mood
    if (userAnswers[2] === 'healthy') {
      recommended = recommended.filter(s => s.category === 'healthy');
    } else if (userAnswers[2] === 'party') {
      recommended = recommended.filter(s => s.popular);
    }
    
    // Limit to top 3 recommendations
    setRecommendedSnacks(recommended.slice(0, 3));
    setShowResult(true);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
    setRecommendedSnacks([]);
  };

  const progress = ((currentQuestion + (showResult ? 1 : 0)) / (questions.length + 1)) * 100;

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-purple-100 via-pink-100 to-orange-100">
      {/* Header */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-bubblegum text-5xl md:text-6xl text-purple-900 mb-4"
          >
            Snack Personality Quiz 🎯
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-comic text-xl text-purple-700"
          >
            Discover your perfect snack match!
          </motion.p>
        </div>
      </section>

      {/* Progress Bar */}
      <div className="max-w-4xl mx-auto px-4 mb-8">
        <div className="bg-white/50 rounded-full h-4 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5 }}
            className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
          />
        </div>
        <p className="text-center mt-2 font-comic text-purple-700">
          {showResult ? 'Complete!' : `Question ${currentQuestion + 1} of ${questions.length}`}
        </p>
      </div>

      {/* Quiz Content */}
      <div className="max-w-4xl mx-auto px-4">
        <AnimatePresence mode="wait">
          {!showResult ? (
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              className="bg-white rounded-3xl shadow-2xl p-8 md:p-12"
            >
              <div className="text-center mb-8">
                <motion.span
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-8xl block mb-4"
                >
                  {questions[currentQuestion].emoji}
                </motion.span>
                <h2 className="font-bubblegum text-3xl md:text-4xl text-purple-900">
                  {questions[currentQuestion].question}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {questions[currentQuestion].options.map((option, index) => (
                  <motion.button
                    key={option.value}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleAnswer(option.value)}
                    className="bg-gradient-to-r from-purple-100 to-pink-100 hover:from-purple-200 hover:to-pink-200 p-6 rounded-2xl font-comic text-lg text-purple-900 font-bold transition-all"
                  >
                    {option.text}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-3xl shadow-2xl p-8 md:p-12"
            >
              <div className="text-center mb-8">
                <motion.span
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1 }}
                  className="text-8xl block mb-4"
                >
                  🎉
                </motion.span>
                <h2 className="font-bubblegum text-3xl md:text-4xl text-purple-900 mb-4">
                  Your Perfect Snacks!
                </h2>
                <p className="font-comic text-xl text-purple-700">
                  Based on your answers, we've found your snack soulmates!
                </p>
              </div>

              {recommendedSnacks.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  {recommendedSnacks.map((snack, index) => (
                    <motion.div
                      key={snack.id}
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2 }}
                      className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-6 text-center"
                    >
                      <span className="text-5xl block mb-3">{snack.emoji}</span>
                      <h3 className="font-bubblegum text-xl text-purple-900 mb-2">
                        {snack.name}
                      </h3>
                      <p className="font-comic text-sm text-purple-700 mb-3">
                        {snack.description}
                      </p>
                      <p className="font-bold text-purple-600 mb-3">${snack.price}</p>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => navigate(`/product/${snack.id}`)}
                        className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full font-comic font-bold"
                      >
                        View Snack
                      </motion.button>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="text-center mb-8">
                  <p className="font-comic text-xl text-purple-700">
                    You're so unique, we recommend trying everything! 🌈
                  </p>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={resetQuiz}
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-3 rounded-full font-comic font-bold text-lg"
                >
                  Take Quiz Again 🔄
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate('/explorer')}
                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-comic font-bold text-lg"
                >
                  Explore All Snacks 🗺️
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Fun Facts */}
      <div className="max-w-4xl mx-auto px-4 mt-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-yellow-100 rounded-2xl p-6 text-center"
        >
          <h3 className="font-bubblegum text-xl text-purple-900 mb-3">
            🎲 Quiz Stats
          </h3>
          <div className="grid grid-cols-3 gap-4 font-comic">
            <div>
              <p className="text-3xl font-bold text-purple-600">10K+</p>
              <p className="text-sm text-gray-600">Quizzes Taken</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-purple-600">95%</p>
              <p className="text-sm text-gray-600">Match Accuracy</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-purple-600">50+</p>
              <p className="text-sm text-gray-600">Snack Matches</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SnackQuiz;
