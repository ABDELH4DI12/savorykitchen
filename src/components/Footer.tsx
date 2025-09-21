import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 3000);
      setEmail('');
    }
  };

  const socialIcons = [
    { Icon: FaFacebook, color: 'hover:text-blue-600', emoji: '🍕' },
    { Icon: FaTwitter, color: 'hover:text-blue-400', emoji: '🍔' },
    { Icon: FaInstagram, color: 'hover:text-pink-600', emoji: '🍟' },
    { Icon: FaYoutube, color: 'hover:text-red-600', emoji: '🍿' },
    { Icon: FaTiktok, color: 'hover:text-black', emoji: '🍩' },
  ];

  return (
    <footer className="bg-gradient-to-r from-purple-900 to-pink-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="text-4xl"
              >
                🍿
              </motion.span>
              <h3 className="font-bubblegum text-3xl">SnackVenture</h3>
            </div>
            <p className="font-comic text-lg mb-4">
              Your ultimate destination for snack adventures! Join us on a journey of taste and fun.
            </p>
            
            {/* Newsletter */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4">
              <h4 className="font-bubblegum text-xl mb-2">Join the Snack Squad! 🎉</h4>
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="flex-1 px-4 py-2 rounded-full text-gray-900 font-comic"
                  required
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="bg-gradient-to-r from-snack-yellow to-snack-orange px-6 py-2 rounded-full font-bold font-comic text-purple-900"
                >
                  Join!
                </motion.button>
              </form>
              {subscribed && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-2 text-snack-green font-comic"
                >
                  Welcome to the Squad! 🎊
                </motion.p>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bubblegum text-xl mb-4">Quick Links</h4>
            <ul className="space-y-2 font-comic">
              <li><a href="/explorer" className="hover:text-snack-yellow transition-colors">🗺️ Explore Snacks</a></li>
              <li><a href="/quiz" className="hover:text-snack-yellow transition-colors">🎯 Take the Quiz</a></li>
              <li><a href="/blog" className="hover:text-snack-yellow transition-colors">📚 Read Adventures</a></li>
              <li><a href="/about" className="hover:text-snack-yellow transition-colors">🌟 Our Story</a></li>
              <li><a href="/contact" className="hover:text-snack-yellow transition-colors">💌 Contact Us</a></li>
            </ul>
          </div>

          {/* Social & Fun */}
          <div>
            <h4 className="font-bubblegum text-xl mb-4">Follow the Fun!</h4>
            <div className="flex space-x-3 mb-6">
              {socialIcons.map(({ Icon, color, emoji }, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="relative"
                >
                  <Icon className={`text-2xl ${color} transition-colors cursor-pointer`} />
                  <motion.span
                    initial={{ opacity: 0, scale: 0 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-2xl"
                  >
                    {emoji}
                  </motion.span>
                </motion.div>
              ))}
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-3">
              <p className="font-comic text-sm">
                <span className="text-snack-yellow">🏆 Fun Fact:</span><br />
                We've delivered over 1 million smiles!
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="font-comic">
            Made with 💜 and lots of snacks © 2024 SnackVenture
          </p>
          <div className="mt-2 flex justify-center space-x-2">
            {['🍪', '🍿', '🍬', '🥨', '🍩'].map((emoji, index) => (
              <motion.span
                key={index}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, delay: index * 0.2, repeat: Infinity }}
                className="text-2xl"
              >
                {emoji}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
