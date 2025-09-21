import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { snacks } from '../data/snacks';
import type { Snack } from '../data/snacks';
import { useCart } from '../context/CartContext';
import { FaShoppingCart, FaStar } from 'react-icons/fa';

const Shop: React.FC = () => {
  const { addToCart } = useCart();

  const handleAddToCart = (snack: Snack) => {
    addToCart({
      id: snack.id,
      name: snack.name,
      price: snack.price,
      image: snack.image
    });
  };

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-purple-100 to-pink-100">
      {/* Header */}
      <section className="py-12 px-4 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-bubblegum text-5xl md:text-6xl text-white mb-4"
          >
            Snack Shop 🛍️
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-comic text-xl text-white/90"
          >
            Your one-stop destination for all things delicious!
          </motion.p>
        </div>
      </section>

      {/* Shop Grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {snacks.map((snack, index) => (
              <motion.div
                key={snack.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden group"
              >
                <Link to={`/product/${snack.id}`}>
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={snack.image}
                      alt={snack.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-white rounded-full p-2">
                      <span className="text-3xl">{snack.emoji}</span>
                    </div>
                    {snack.popular && (
                      <div className="absolute top-4 left-4 bg-yellow-400 text-purple-900 px-3 py-1 rounded-full font-comic font-bold">
                        POPULAR
                      </div>
                    )}
                  </div>
                </Link>

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

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleAddToCart(snack)}
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-full font-comic font-bold flex items-center justify-center gap-2"
                  >
                    <FaShoppingCart /> Add to Cart
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;
