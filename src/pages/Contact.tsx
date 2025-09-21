import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const socialSnacks = [
    { platform: 'Facebook', emoji: '🍕', color: 'from-blue-500 to-blue-600' },
    { platform: 'Instagram', emoji: '🍔', color: 'from-pink-500 to-purple-600' },
    { platform: 'Twitter', emoji: '🍟', color: 'from-blue-400 to-blue-500' },
    { platform: 'TikTok', emoji: '🍿', color: 'from-black to-gray-800' },
    { platform: 'YouTube', emoji: '🍩', color: 'from-red-500 to-red-600' }
  ];

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-blue-100 to-purple-100">
      {/* Header */}
      <section className="py-12 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-bubblegum text-5xl md:text-6xl text-white mb-4"
          >
            Get in Touch! 📧
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-comic text-xl text-white/90"
          >
            We'd love to hear from you! Send us a message or find us on social media.
          </motion.p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-3xl shadow-xl p-8"
          >
            <h2 className="font-bubblegum text-3xl text-purple-900 mb-6">
              Send us a Message 💌
            </h2>
            
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <label className="font-comic text-purple-700 block mb-2">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-purple-200 focus:border-purple-500 focus:outline-none font-comic"
                    placeholder="John Snacker"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <label className="font-comic text-purple-700 block mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-purple-200 focus:border-purple-500 focus:outline-none font-comic"
                    placeholder="snack@lover.com"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <label className="font-comic text-purple-700 block mb-2">Subject</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-purple-200 focus:border-purple-500 focus:outline-none font-comic"
                  >
                    <option value="">Choose a topic...</option>
                    <option value="order">Order Inquiry 📦</option>
                    <option value="feedback">Feedback 💭</option>
                    <option value="partnership">Partnership 🤝</option>
                    <option value="other">Other 🎯</option>
                  </select>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <label className="font-comic text-purple-700 block mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border-2 border-purple-200 focus:border-purple-500 focus:outline-none font-comic resize-none"
                    placeholder="Tell us about your snack adventure..."
                  />
                </motion.div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-4 rounded-full font-comic font-bold text-lg flex items-center justify-center gap-2"
                >
                  <FaPaperPlane /> Send Message
                </motion.button>
              </form>
            ) : (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="text-center py-20"
              >
                <motion.span
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1 }}
                  className="text-8xl block mb-4"
                >
                  🎉
                </motion.span>
                <h3 className="font-bubblegum text-3xl text-purple-900 mb-2">
                  Message Sent!
                </h3>
                <p className="font-comic text-gray-600">
                  We'll get back to you faster than you can finish a bag of chips!
                </p>
              </motion.div>
            )}
          </motion.div>

          {/* Contact Info & Social */}
          <div className="space-y-8">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-3xl shadow-xl p-8"
            >
              <h2 className="font-bubblegum text-3xl text-purple-900 mb-6">
                Find Us Here 📍
              </h2>
              
              <div className="space-y-4">
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 p-4 bg-purple-50 rounded-xl"
                >
                  <FaEnvelope className="text-2xl text-purple-600" />
                  <div>
                    <p className="font-comic font-bold text-purple-900">Email</p>
                    <p className="font-comic text-gray-600">hello@snackventure.com</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 p-4 bg-pink-50 rounded-xl"
                >
                  <FaPhone className="text-2xl text-pink-600" />
                  <div>
                    <p className="font-comic font-bold text-purple-900">Phone</p>
                    <p className="font-comic text-gray-600">1-800-SNACKS</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 p-4 bg-orange-50 rounded-xl"
                >
                  <FaMapMarkerAlt className="text-2xl text-orange-600" />
                  <div>
                    <p className="font-comic font-bold text-purple-900">Location</p>
                    <p className="font-comic text-gray-600">123 Snack Street, Flavor Town</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Social Media */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl shadow-xl p-8 text-white"
            >
              <h2 className="font-bubblegum text-3xl mb-6">
                Follow the Fun! 🎊
              </h2>
              
              <div className="grid grid-cols-2 gap-4">
                {socialSnacks.map((social, index) => (
                  <motion.button
                    key={social.platform}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className={`bg-white/20 backdrop-blur rounded-xl p-4 text-center hover:bg-white/30 transition-all`}
                  >
                    <span className="text-4xl block mb-2">{social.emoji}</span>
                    <span className="font-comic font-bold">{social.platform}</span>
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Fun Animation */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-yellow-100 rounded-3xl shadow-xl p-6 text-center"
            >
              <h3 className="font-bubblegum text-xl text-purple-900 mb-4">
                Office Hours 🕐
              </h3>
              <div className="space-y-2 font-comic text-gray-700">
                <p>Monday - Friday: 9AM - 6PM (Snack Time)</p>
                <p>Saturday: 10AM - 4PM (Weekend Munchies)</p>
                <p>Sunday: Closed (We're snacking at home)</p>
              </div>
              <div className="mt-4 flex justify-center gap-2">
                {['🍪', '🍿', '🍬', '🥨', '🍩'].map((emoji, i) => (
                  <motion.span
                    key={i}
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 1.5, delay: i * 0.2, repeat: Infinity }}
                    className="text-2xl"
                  >
                    {emoji}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
