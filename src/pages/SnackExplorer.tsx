import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { snacks } from '../data/snacks';
import type { Snack } from '../data/snacks';
import { FaStar, FaFilter } from 'react-icons/fa';
import type { IconType } from 'react-icons';
import { useCart } from '../context/CartContext';

const SnackExplorer: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedFlavor, setSelectedFlavor] = useState<string>('all');
  const [showPopular, setShowPopular] = useState<boolean>(false);
  const [hoveredSnack, setHoveredSnack] = useState<string | null>(null);
  const { addToCart } = useCart();

  const categories = [
    { id: 'all', name: 'All Snacks', emoji: '🎯' },
    { id: 'chips', name: 'Chips', emoji: '🥔' },
    { id: 'cookies', name: 'Cookies', emoji: '🍪' },
    { id: 'candy', name: 'Candy', emoji: '🍬' },
    { id: 'healthy', name: 'Healthy', emoji: '🥗' }
  ];

  const flavors = [
    'all', 'Spicy', 'Sweet', 'Sour', 'Salty', 'Fruity', 'Chocolate'
  ];

  const filteredSnacks = snacks.filter(snack => {
    const categoryMatch = selectedCategory === 'all' || snack.category === selectedCategory;
    const flavorMatch = selectedFlavor === 'all' || snack.flavor.toLowerCase().includes(selectedFlavor.toLowerCase());
    const popularMatch = !showPopular || snack.popular;
    return categoryMatch && flavorMatch && popularMatch;
  });

  const handleAddToCart = (snack: Snack) => {
    addToCart({
      id: snack.id,
      name: snack.name,
      price: snack.price,
      image: snack.image
    });
  };

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-purple-100 via-pink-100 to-orange-100">
      {/* Header */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-bubblegum text-5xl md:text-6xl text-purple-900 mb-4"
          >
            Snack Explorer 🗺️
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-comic text-xl text-purple-700"
          >
            Navigate through our delicious snack universe!
          </motion.p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-6 px-4 bg-white/50 backdrop-blur-md sticky top-16 z-40">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-4">
            {/* Category Filter */}
            <div className="flex items-center gap-2">
              <FaFilter className="text-purple-600" />
              <span className="font-comic font-bold text-purple-900">Category:</span>
              <div className="flex gap-2">
                {categories.map(cat => (
                  <motion.button
                    key={cat.id}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-4 py-2 rounded-full font-comic transition-all ${
                      selectedCategory === cat.id
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                        : 'bg-white hover:bg-purple-100'
                    }`}
                  >
                    {cat.emoji} {cat.name}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Popular Filter */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowPopular(!showPopular)}
              className={`px-4 py-2 rounded-full font-comic transition-all ${
                showPopular
                  ? 'bg-yellow-400 text-purple-900'
                  : 'bg-white hover:bg-yellow-100'
              }`}
            >
              ⭐ Popular Only
            </motion.button>
          </div>
        </div>
      </section>

      {/* Snack Grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence>
            <motion.div 
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {filteredSnacks.map((snack, index) => (
                <motion.div
                  key={snack.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ y: -10, scale: 1.05 }}
                  onHoverStart={() => setHoveredSnack(snack.id)}
                  onHoverEnd={() => setHoveredSnack(null)}
                  className="relative bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer"
                >
                  {/* Snack Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={snack.image} 
                      alt={snack.name}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                    {/* Emoji Badge */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute top-3 right-3 bg-white/90 rounded-full p-2"
                    >
                      <span className="text-2xl">{snack.emoji}</span>
                    </motion.div>
                    {/* Popular Badge */}
                    {snack.popular && (
                      <motion.div
                        initial={{ x: -100 }}
                        animate={{ x: 0 }}
                        className="absolute top-3 left-3 bg-yellow-400 text-purple-900 px-3 py-1 rounded-full font-comic font-bold text-sm"
                      >
                        🔥 HOT
                      </motion.div>
                    )}
                  </div>

                  {/* Snack Info */}
                  <div className="p-4">
                    <h3 className="font-bubblegum text-xl text-purple-900 mb-1">
                      {snack.name}
                    </h3>
                    <p className="font-comic text-sm text-gray-600 mb-2">
                      {snack.personality}
                    </p>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-lg font-bold text-purple-600">
                        ${snack.price}
                      </span>
                      <div className="flex items-center gap-1">
                        <FaStar className="text-yellow-500 text-sm" />
                        <span className="font-comic text-sm">{snack.rating}</span>
                      </div>
                    </div>

                    {/* Hover Content */}
                    <AnimatePresence>
                      {hoveredSnack === snack.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="overflow-hidden"
                        >
                          <p className="font-comic text-xs text-gray-500 mb-3">
                            {snack.description}
                          </p>
                          <div className="flex gap-2">
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={(e) => {
                                e.stopPropagation();
                                handleAddToCart(snack);
                              }}
                              className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 rounded-full font-comic font-bold text-sm"
                            >
                              Add to Cart
                            </motion.button>
                            <Link to={`/product/${snack.id}`} className="flex-1">
                              <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-full bg-purple-100 text-purple-900 py-2 rounded-full font-comic font-bold text-sm"
                              >
                                View
                              </motion.button>
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Category Tag */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-purple-100 to-transparent p-2">
                    <span className="font-comic text-xs text-purple-700 capitalize">
                      {snack.category} • {snack.flavor}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredSnacks.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <span className="text-6xl mb-4 block">😢</span>
              <h3 className="font-bubblegum text-2xl text-purple-900 mb-2">
                No snacks found!
              </h3>
              <p className="font-comic text-gray-600">
                Try adjusting your filters to discover more treats!
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default SnackExplorer;
