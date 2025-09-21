import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  emoji: string;
  category: string;
  date: string;
  readTime: string;
}

const Blog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPoll, setSelectedPoll] = useState<string | null>(null);
  const [guessAnswer, setGuessAnswer] = useState<string | null>(null);

  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'The Ultimate Snack Pairing Guide',
      excerpt: 'Discover which snacks go perfectly together for the ultimate taste experience!',
      emoji: '🎯',
      category: 'guides',
      date: 'Dec 15, 2024',
      readTime: '5 min'
    },
    {
      id: '2',
      title: 'Snack History: From Ancient to Modern',
      excerpt: 'Journey through time and explore how snacks evolved throughout history.',
      emoji: '📚',
      category: 'history',
      date: 'Dec 10, 2024',
      readTime: '8 min'
    },
    {
      id: '3',
      title: 'DIY Snack Recipes for Adventure Seekers',
      excerpt: 'Create your own amazing snacks at home with these fun recipes!',
      emoji: '👨‍🍳',
      category: 'recipes',
      date: 'Dec 5, 2024',
      readTime: '6 min'
    },
    {
      id: '4',
      title: 'Top 10 Snacks for Gaming Sessions',
      excerpt: 'Level up your gaming experience with these perfect snack companions.',
      emoji: '🎮',
      category: 'guides',
      date: 'Dec 1, 2024',
      readTime: '4 min'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Posts', emoji: '📝' },
    { id: 'guides', name: 'Guides', emoji: '🗺️' },
    { id: 'recipes', name: 'Recipes', emoji: '🍳' },
    { id: 'history', name: 'History', emoji: '📜' }
  ];

  const pollOptions = [
    { id: 'sweet', label: 'Sweet', emoji: '🍬', votes: 45 },
    { id: 'salty', label: 'Salty', emoji: '🥨', votes: 30 },
    { id: 'spicy', label: 'Spicy', emoji: '🌶️', votes: 15 },
    { id: 'sour', label: 'Sour', emoji: '🍋', votes: 10 }
  ];

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-orange-100 to-yellow-100">
      {/* Header */}
      <section className="py-12 px-4 bg-gradient-to-r from-orange-500 to-yellow-500">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-bubblegum text-5xl md:text-6xl text-white mb-4"
          >
            Snack Adventures 🎮
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-comic text-xl text-white/90"
          >
            Fun stories, challenges, and snack wisdom!
          </motion.p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 mb-8">
              {categories.map(cat => (
                <motion.button
                  key={cat.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-full font-comic ${
                    selectedCategory === cat.id
                      ? 'bg-gradient-to-r from-orange-500 to-yellow-500 text-white'
                      : 'bg-white hover:bg-orange-100'
                  }`}
                >
                  {cat.emoji} {cat.name}
                </motion.button>
              ))}
            </div>

            {/* Blog Posts */}
            <div className="space-y-6">
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="text-5xl"
                      >
                        {post.emoji}
                      </motion.div>
                      <div className="flex-1">
                        <h2 className="font-bubblegum text-2xl text-purple-900 mb-2">
                          {post.title}
                        </h2>
                        <p className="font-comic text-gray-600 mb-3">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center gap-4 text-sm text-gray-500 font-comic">
                          <span>📅 {post.date}</span>
                          <span>⏱️ {post.readTime}</span>
                          <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded-full">
                            {post.category}
                          </span>
                        </div>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="mt-4 bg-gradient-to-r from-orange-400 to-yellow-400 text-white px-6 py-2 rounded-full font-comic font-bold"
                        >
                          Read More →
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Interactive Poll */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <h3 className="font-bubblegum text-xl text-purple-900 mb-4">
                🗳️ Quick Poll
              </h3>
              <p className="font-comic text-gray-600 mb-4">
                What's your favorite snack flavor?
              </p>
              <div className="space-y-3">
                {pollOptions.map(option => (
                  <motion.button
                    key={option.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedPoll(option.id)}
                    className={`w-full p-3 rounded-xl flex items-center justify-between ${
                      selectedPoll === option.id
                        ? 'bg-gradient-to-r from-orange-400 to-yellow-400 text-white'
                        : 'bg-gray-100 hover:bg-gray-200'
                    }`}
                  >
                    <span className="font-comic flex items-center gap-2">
                      <span className="text-2xl">{option.emoji}</span>
                      {option.label}
                    </span>
                    <span className="font-comic">
                      {option.votes}%
                    </span>
                  </motion.button>
                ))}
              </div>
              {selectedPoll && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-4 text-center font-comic text-green-600"
                >
                  Thanks for voting! 🎉
                </motion.p>
              )}
            </motion.div>

            {/* Guess the Flavor Challenge */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl shadow-lg p-6 text-white"
            >
              <h3 className="font-bubblegum text-xl mb-4">
                🎯 Guess the Flavor!
              </h3>
              <div className="bg-white/20 backdrop-blur rounded-xl p-4 mb-4">
                <p className="font-comic mb-2">Hints:</p>
                <ul className="font-comic text-sm space-y-1">
                  <li>• It's crunchy</li>
                  <li>• Has a spicy kick</li>
                  <li>• Orange in color</li>
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {['Cheese', 'BBQ', 'Chili', 'Paprika'].map(flavor => (
                  <motion.button
                    key={flavor}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setGuessAnswer(flavor)}
                    className={`py-2 rounded-lg font-comic ${
                      guessAnswer === flavor
                        ? 'bg-white text-purple-600'
                        : 'bg-white/20 hover:bg-white/30'
                    }`}
                  >
                    {flavor}
                  </motion.button>
                ))}
              </div>
              {guessAnswer && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-4 text-center font-comic"
                >
                  {guessAnswer === 'Chili' ? '🎉 Correct!' : '🤔 Try again!'}
                </motion.p>
              )}
            </motion.div>

            {/* Fun Facts */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-yellow-100 rounded-2xl shadow-lg p-6"
            >
              <h3 className="font-bubblegum text-xl text-purple-900 mb-4">
                💡 Snack Facts
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <span className="text-2xl">🍿</span>
                  <p className="font-comic text-sm text-gray-700">
                    Popcorn is over 5,000 years old!
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-2xl">🥨</span>
                  <p className="font-comic text-sm text-gray-700">
                    Pretzels were invented by monks!
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-2xl">🍪</span>
                  <p className="font-comic text-sm text-gray-700">
                    The cookie was invented by accident!
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
