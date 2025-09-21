import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getSnackById } from '../data/snacks';
import type { Snack } from '../data/snacks';
import { useCart } from '../context/CartContext';
import { FaStar, FaShoppingCart, FaHeart, FaShare } from 'react-icons/fa';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [liked, setLiked] = useState(false);
  const [userRating, setUserRating] = useState(0);
  const [showAddedMessage, setShowAddedMessage] = useState(false);

  const snack = getSnackById(id || '');

  if (!snack) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <span className="text-6xl mb-4 block">😢</span>
          <h2 className="font-bubblegum text-3xl text-purple-900">Snack not found!</h2>
          <button
            onClick={() => navigate('/explorer')}
            className="mt-4 bg-purple-500 text-white px-6 py-3 rounded-full font-comic"
          >
            Back to Explorer
          </button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart({
        id: snack.id,
        name: snack.name,
        price: snack.price,
        image: snack.image
      });
    }
    setShowAddedMessage(true);
    setTimeout(() => setShowAddedMessage(false), 3000);
  };

  const ratingEmojis = ['😐', '🙂', '😊', '😃', '🤩'];

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-purple-100 to-pink-100">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl shadow-2xl overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Image Section */}
            <div className="relative h-96 lg:h-full">
              <motion.img
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                src={snack.image}
                alt={snack.name}
                className="w-full h-full object-cover"
              />
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-8 right-8 bg-white rounded-full p-4 shadow-lg"
              >
                <span className="text-5xl">{snack.emoji}</span>
              </motion.div>
              {snack.popular && (
                <div className="absolute top-8 left-8 bg-yellow-400 text-purple-900 px-4 py-2 rounded-full font-comic font-bold">
                  🔥 POPULAR
                </div>
              )}
            </div>

            {/* Details Section */}
            <div className="p-8 lg:p-12">
              <motion.h1
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="font-bubblegum text-4xl lg:text-5xl text-purple-900 mb-4"
              >
                {snack.name}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="font-comic text-xl text-gray-700 mb-6"
              >
                {snack.description}
              </motion.p>

              {/* Personality & Flavor */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-purple-100 rounded-xl p-4">
                  <h3 className="font-comic font-bold text-purple-900 mb-1">Personality</h3>
                  <p className="font-comic text-purple-700">{snack.personality}</p>
                </div>
                <div className="bg-pink-100 rounded-xl p-4">
                  <h3 className="font-comic font-bold text-pink-900 mb-1">Flavor</h3>
                  <p className="font-comic text-pink-700">{snack.flavor}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`text-xl ${
                        i < Math.floor(snack.rating) ? 'text-yellow-500' : 'text-gray-300'
                      }`}
                    />
                  ))}
                  <span className="font-comic ml-2">{snack.rating}/5</span>
                </div>
                <span className="text-gray-400">|</span>
                <span className="font-comic text-gray-600">{snack.category}</span>
              </div>

              {/* Price & Quantity */}
              <div className="flex items-center gap-6 mb-8">
                <div>
                  <span className="text-3xl font-bold text-purple-600">${snack.price}</span>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 rounded-full bg-purple-100 text-purple-900 font-bold hover:bg-purple-200"
                  >
                    -
                  </button>
                  <span className="font-comic font-bold text-xl w-12 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 rounded-full bg-purple-100 text-purple-900 font-bold hover:bg-purple-200"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 mb-8">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleAddToCart}
                  className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white py-4 rounded-full font-comic font-bold text-lg flex items-center justify-center gap-2"
                >
                  <FaShoppingCart /> Add to Cart
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setLiked(!liked)}
                  className={`w-14 h-14 rounded-full flex items-center justify-center ${
                    liked ? 'bg-red-500 text-white' : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  <FaHeart />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-14 h-14 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center"
                >
                  <FaShare />
                </motion.button>
              </div>

              {/* Added to Cart Message */}
              {showAddedMessage && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-100 text-green-800 px-4 py-3 rounded-xl font-comic mb-6"
                >
                  ✅ Added {quantity} {snack.name} to cart!
                </motion.div>
              )}

              {/* Rate with Emojis */}
              <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-6">
                <h3 className="font-bubblegum text-xl text-purple-900 mb-4">Rate this snack!</h3>
                <div className="flex gap-3 justify-center">
                  {ratingEmojis.map((emoji, index) => (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setUserRating(index + 1)}
                      className={`text-4xl p-2 rounded-full ${
                        userRating === index + 1 ? 'bg-yellow-300' : 'hover:bg-white/50'
                      }`}
                    >
                      {emoji}
                    </motion.button>
                  ))}
                </div>
                {userRating > 0 && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center mt-3 font-comic text-purple-700"
                  >
                    Thanks for rating! You gave {userRating} {userRating === 1 ? 'star' : 'stars'}!
                  </motion.p>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Related Snacks */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-12"
        >
          <h2 className="font-bubblegum text-3xl text-purple-900 mb-6 text-center">
            You Might Also Like 🎉
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-xl p-4 shadow-lg cursor-pointer"
                onClick={() => navigate(`/product/${i}`)}
              >
                <div className="h-32 bg-gradient-to-br from-purple-200 to-pink-200 rounded-lg mb-3"></div>
                <h4 className="font-comic font-bold text-purple-900">Mystery Snack {i}</h4>
                <p className="font-comic text-sm text-gray-600">Click to explore!</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductDetail;
