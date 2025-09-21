import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { getPopularSnacks } from '../data/snacks';
import { FaArrowRight, FaStar } from 'react-icons/fa';

const Home: React.FC = () => {
  const popularSnacks = getPopularSnacks().slice(0, 3);
  const [ref, inView] = useInView({ triggerOnce: true });

  const floatingEmojis = ['🍿', '🍪', '🍬', '🥨', '🍩', '🍕', '🍔', '🍟'];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 opacity-90">
          {floatingEmojis.map((emoji, index) => (
            <motion.div
              key={index}
              className="absolute text-6xl opacity-20"
              initial={{ 
                x: Math.random() * window.innerWidth,
                y: -100 
              }}
              animate={{ 
                y: window.innerHeight + 100,
                x: Math.random() * window.innerWidth
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "linear"
              }}
            >
              {emoji}
            </motion.div>
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="mb-8"
          >
            <span className="text-8xl md:text-9xl">🎮</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="font-bubblegum text-5xl md:text-7xl text-white mb-6"
          >
            Discover Snacks Like Never Before!
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="font-comic text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto"
          >
            Embark on an epic snack adventure where every bite is a new level of deliciousness!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/explorer">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-purple-900 px-8 py-4 rounded-full font-bold text-lg font-comic shadow-lg flex items-center gap-2"
              >
                Start the Adventure <FaArrowRight />
              </motion.button>
            </Link>
            <Link to="/shop">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/20 backdrop-blur-md text-white border-2 border-white px-8 py-4 rounded-full font-bold text-lg font-comic shadow-lg"
              >
                Shop Now 🛍️
              </motion.button>
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="text-white text-4xl">👇</div>
        </motion.div>
      </section>

      {/* Featured Snacks Section */}
      <section ref={ref} className="py-20 px-4 bg-gradient-to-b from-purple-100 to-pink-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-bubblegum text-4xl md:text-5xl text-purple-900 mb-4">
              🌟 Featured Snacks 🌟
            </h2>
            <p className="font-comic text-xl text-purple-700">
              Today's most popular adventures!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {popularSnacks.map((snack, index) => (
              <motion.div
                key={snack.id}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white rounded-3xl shadow-xl overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={snack.image} 
                    alt={snack.name}
                    className="w-full h-full object-cover"
                  />
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.2 }}
                    className="absolute top-4 right-4 bg-yellow-400 rounded-full p-3"
                  >
                    <span className="text-3xl">{snack.emoji}</span>
                  </motion.div>
                </div>

                <div className="p-6">
                  <h3 className="font-bubblegum text-2xl text-purple-900 mb-2">
                    {snack.name}
                  </h3>
                  <p className="font-comic text-gray-600 mb-4">
                    {snack.description}
                  </p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-purple-600">
                      ${snack.price}
                    </span>
                    <div className="flex items-center gap-1">
                      <FaStar className="text-yellow-500" />
                      <span className="font-comic">{snack.rating}</span>
                    </div>
                  </div>
                  <Link to={`/product/${snack.id}`}>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-full font-bold font-comic"
                    >
                      Explore {snack.emoji}
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-orange-400 to-pink-500">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-white/20 backdrop-blur-md rounded-3xl p-10"
          >
            <h2 className="font-bubblegum text-4xl md:text-5xl text-white mb-6">
              Ready for Your Snack Adventure?
            </h2>
            <p className="font-comic text-xl text-white/90 mb-8">
              Join thousands of snack explorers on the tastiest journey ever!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/quiz">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg font-comic shadow-lg"
                >
                  Take the Snack Quiz 🎯
                </motion.button>
              </Link>
              <Link to="/explorer">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg font-comic shadow-lg"
                >
                  Explore All Snacks 🗺️
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
