import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { FaTrash, FaPlus, FaMinus, FaShoppingBag } from 'react-icons/fa';

const Cart: React.FC = () => {
  const navigate = useNavigate();
  const { cart, removeFromCart, updateQuantity, clearCart, getTotalPrice, getTotalItems } = useCart();
  const totalPrice = getTotalPrice();
  const totalItems = getTotalItems();

  const handleCheckout = () => {
    alert('🎉 Order placed successfully! Your snacks are on their way!');
    clearCart();
    navigate('/');
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center bg-gradient-to-b from-purple-100 to-pink-100">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center bg-white rounded-3xl shadow-xl p-12"
        >
          <motion.span
            animate={{ rotate: [0, -10, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-8xl block mb-6"
          >
            🛒
          </motion.span>
          <h2 className="font-bubblegum text-3xl text-purple-900 mb-4">
            Your cart is empty!
          </h2>
          <p className="font-comic text-gray-600 mb-8">
            Time to fill it with delicious snacks!
          </p>
          <Link to="/explorer">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-comic font-bold text-lg"
            >
              Start Shopping 🎯
            </motion.button>
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-purple-100 to-pink-100">
      {/* Header */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-bubblegum text-5xl md:text-6xl text-purple-900 mb-4"
          >
            Your Snack Cart 🛒
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-comic text-xl text-purple-700"
          >
            {totalItems} {totalItems === 1 ? 'item' : 'items'} ready for checkout!
          </motion.p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <AnimatePresence>
              {cart.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg p-6 mb-4"
                >
                  <div className="flex items-center gap-6">
                    <div className="w-24 h-24 rounded-xl overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="font-bubblegum text-xl text-purple-900 mb-2">
                        {item.name}
                      </h3>
                      <p className="font-comic text-purple-600 text-lg">
                        ${item.price.toFixed(2)}
                      </p>
                    </div>

                    <div className="flex items-center gap-3">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-8 h-8 rounded-full bg-purple-100 text-purple-900 flex items-center justify-center hover:bg-purple-200"
                      >
                        <FaMinus className="text-sm" />
                      </motion.button>
                      <span className="font-comic font-bold text-lg w-12 text-center">
                        {item.quantity}
                      </span>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 rounded-full bg-purple-100 text-purple-900 flex items-center justify-center hover:bg-purple-200"
                      >
                        <FaPlus className="text-sm" />
                      </motion.button>
                    </div>

                    <div className="text-right">
                      <p className="font-comic font-bold text-xl text-purple-900 mb-2">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <FaTrash />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={clearCart}
              className="bg-red-100 text-red-600 px-6 py-3 rounded-full font-comic font-bold hover:bg-red-200 transition-colors"
            >
              Clear Cart 🗑️
            </motion.button>
          </div>

          {/* Order Summary */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl shadow-xl p-8 text-white sticky top-24"
            >
              <h2 className="font-bubblegum text-2xl mb-6">
                Order Summary 📋
              </h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between font-comic">
                  <span>Subtotal ({totalItems} items)</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-comic">
                  <span>Delivery</span>
                  <span className="text-green-300">FREE! 🎉</span>
                </div>
                <div className="flex justify-between font-comic">
                  <span>Snack Tax</span>
                  <span>$0.00 😉</span>
                </div>
                <div className="border-t border-white/30 pt-4">
                  <div className="flex justify-between font-bubblegum text-2xl">
                    <span>Total</span>
                    <span>${totalPrice.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleCheckout}
                className="w-full bg-white text-purple-600 py-4 rounded-full font-comic font-bold text-lg flex items-center justify-center gap-2"
              >
                <FaShoppingBag /> Checkout
              </motion.button>

              <Link to="/explorer">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full mt-4 bg-white/20 backdrop-blur text-white py-3 rounded-full font-comic font-bold"
                >
                  Continue Shopping
                </motion.button>
              </Link>

              {/* Fun Animation */}
              <div className="mt-6 text-center">
                <p className="font-comic text-sm mb-2">Your snacks are excited!</p>
                <div className="flex justify-center gap-2">
                  {['🍿', '🍪', '🍬'].map((emoji, i) => (
                    <motion.span
                      key={i}
                      animate={{ 
                        y: [0, -10, 0],
                        rotate: [0, 10, -10, 0]
                      }}
                      transition={{ 
                        duration: 2, 
                        delay: i * 0.2, 
                        repeat: Infinity 
                      }}
                      className="text-3xl"
                    >
                      {emoji}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
