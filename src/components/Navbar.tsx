import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import { useCart } from '../context/CartContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { getTotalItems } = useCart();
  const cartItems = getTotalItems();

  const navLinks = [
    { path: '/', label: 'Home', emoji: '🏠' },
    { path: '/about', label: 'About', emoji: '📖' },
    { path: '/explorer', label: 'Snack Explorer', emoji: '🗺️' },
    { path: '/shop', label: 'Shop', emoji: '🛍️' },
    { path: '/blog', label: 'Adventures', emoji: '🎮' },
    { path: '/quiz', label: 'Snack Quiz', emoji: '🎯' },
    { path: '/contact', label: 'Contact', emoji: '📧' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-3xl"
            >
              🍿
            </motion.div>
            <span className="font-bubblegum text-2xl bg-gradient-to-r from-snack-purple to-snack-pink bg-clip-text text-transparent">
              SnackVenture
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center space-x-1 px-3 py-2 rounded-full transition-all duration-300 hover:scale-110 ${
                  location.pathname === link.path
                    ? 'bg-gradient-to-r from-snack-purple to-snack-pink text-white'
                    : 'hover:bg-purple-100'
                }`}
              >
                <span>{link.emoji}</span>
                <span className="font-comic font-bold">{link.label}</span>
              </Link>
            ))}
            <Link to="/cart" className="relative">
              <motion.div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="p-2"
              >
                <FaShoppingCart className="text-2xl text-snack-purple" />
                {cartItems > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 bg-snack-pink text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold"
                  >
                    {cartItems}
                  </motion.span>
                )}
              </motion.div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <Link to="/cart" className="relative">
              <FaShoppingCart className="text-2xl text-snack-purple" />
              {cartItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-snack-pink text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                  {cartItems}
                </span>
              )}
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-2xl text-snack-purple"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white rounded-lg shadow-lg mt-2 p-4"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center space-x-2 px-4 py-3 rounded-lg mb-2 transition-all ${
                  location.pathname === link.path
                    ? 'bg-gradient-to-r from-snack-purple to-snack-pink text-white'
                    : 'hover:bg-purple-100'
                }`}
              >
                <span>{link.emoji}</span>
                <span className="font-comic font-bold">{link.label}</span>
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
