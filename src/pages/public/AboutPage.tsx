import React from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaUsers, FaLeaf, FaHeart } from 'react-icons/fa';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">About SavoryKitchen</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Premium dining experience with exceptional cuisine since 2020
          </p>
        </motion.div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2020, SavoryKitchen began as a passion project with a simple mission: 
              to create exceptional dining experiences through premium ingredients and expert culinary craftsmanship. 
              What started as a small restaurant has grown into a beloved culinary destination.
            </p>
            <p className="text-gray-600 mb-4">
              We believe that every meal should be a memorable experience. That's why we 
              carefully source the finest ingredients and employ skilled chefs who bring passion 
              and creativity to every dish, ensuring it meets our exacting standards.
            </p>
            <p className="text-gray-600">
              Today, we're proud to serve discerning diners who appreciate quality cuisine, offering everything from 
              gourmet burgers and artisanal pizzas to fresh seafood and premium steaks. Our commitment to culinary excellence and 
              exceptional service remains at the heart of everything we do.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-gray-600 rounded-lg transform rotate-6"></div>
              <img
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600"
                alt="Restaurant Kitchen"
                className="relative rounded-lg shadow-xl"
              />
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-emerald-100 w-20 h-20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <FaAward className="text-3xl text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality First</h3>
              <p className="text-gray-600">
                We never compromise on quality, using only premium ingredients and expert preparation
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <FaUsers className="text-3xl text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Customer Focus</h3>
              <p className="text-gray-600">
                Your satisfaction is our priority, with dedicated support and service
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-20 h-20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <FaLeaf className="text-3xl text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
              <p className="text-gray-600">
                Committed to eco-friendly practices and sustainable ingredient sourcing
              </p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 w-20 h-20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <FaHeart className="text-3xl text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Community Love</h3>
              <p className="text-gray-600">
                Supporting local communities and bringing people together through exceptional food
              </p>
            </div>
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gray-50 rounded-lg p-8"
        >
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Chef Isabella Rodriguez', role: 'Executive Chef & Founder', emoji: '👩‍🍳' },
              { name: 'Marcus Thompson', role: 'Restaurant Manager', emoji: '👨‍💼' },
              { name: 'Sofia Chen', role: 'Guest Experience Director', emoji: '👩‍💻' },
            ].map((member, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="text-6xl mb-4">{member.emoji}</div>
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;
