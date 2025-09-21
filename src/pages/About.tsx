import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About: React.FC = () => {
  const [ref1, inView1] = useInView({ triggerOnce: true });
  const [ref2, inView2] = useInView({ triggerOnce: true });
  const [ref3, inView3] = useInView({ triggerOnce: true });

  const storyPanels = [
    {
      title: "The Beginning",
      emoji: "🌟",
      content: "Once upon a time, in a kitchen far, far away, a group of snack enthusiasts decided to revolutionize the way people experience treats!",
      color: "from-purple-400 to-pink-400"
    },
    {
      title: "The Mission",
      emoji: "🚀",
      content: "Armed with creativity and a passion for flavor, we embarked on a quest to bring joy to every snack moment!",
      color: "from-pink-400 to-orange-400"
    },
    {
      title: "The Adventure",
      emoji: "🎮",
      content: "Today, we're not just selling snacks - we're creating experiences, memories, and smiles with every bite!",
      color: "from-orange-400 to-yellow-400"
    }
  ];

  const values = [
    { icon: "🌱", title: "Sustainability", description: "Eco-friendly packaging and sourcing" },
    { icon: "✨", title: "Quality", description: "Premium ingredients in every bite" },
    { icon: "🎨", title: "Creativity", description: "Innovative flavors and experiences" },
    { icon: "❤️", title: "Passion", description: "Made with love and dedication" }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-bubblegum text-5xl md:text-6xl text-white mb-6"
          >
            Our Snack Story 📖
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-comic text-xl text-white/90 max-w-2xl mx-auto"
          >
            Join us on an interactive journey through the delicious history of SnackVenture!
          </motion.p>
        </div>
      </section>

      {/* Comic Strip Story */}
      <section ref={ref1} className="py-20 px-4 bg-gradient-to-b from-purple-100 to-pink-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-bubblegum text-4xl text-center text-purple-900 mb-12">
            The Epic Tale 🎭
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {storyPanels.map((panel, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={inView1 ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                <div className={`bg-gradient-to-br ${panel.color} rounded-3xl p-8 shadow-xl transform hover:scale-105 transition-transform`}>
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="text-6xl mb-4 text-center"
                  >
                    {panel.emoji}
                  </motion.div>
                  <h3 className="font-bubblegum text-2xl text-white mb-4 text-center">
                    {panel.title}
                  </h3>
                  <p className="font-comic text-white/90 text-center">
                    {panel.content}
                  </p>
                </div>
                {index < storyPanels.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-4xl z-10">
                    ➡️
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Timeline */}
      <section ref={ref2} className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-bubblegum text-4xl text-center text-purple-900 mb-12">
            Our Journey Through Time ⏰
          </h2>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-400 to-pink-400"></div>
            
            {/* Timeline Events */}
            {[
              { year: "2020", event: "The idea was born", emoji: "💡" },
              { year: "2021", event: "First snack created", emoji: "🍪" },
              { year: "2022", event: "Launched online", emoji: "🌐" },
              { year: "2023", event: "100,000 happy customers", emoji: "🎉" },
              { year: "2024", event: "Global snack domination", emoji: "🌍" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView2 ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.1 }}
                className={`flex items-center mb-12 ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                <div className={`bg-white rounded-2xl shadow-lg p-6 max-w-sm ${
                  index % 2 === 0 ? 'mr-auto ml-0 md:mr-8' : 'ml-auto mr-0 md:ml-8'
                }`}>
                  <div className="flex items-center gap-4">
                    <span className="text-4xl">{item.emoji}</span>
                    <div>
                      <h3 className="font-bubblegum text-xl text-purple-900">{item.year}</h3>
                      <p className="font-comic text-gray-600">{item.event}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section ref={ref3} className="py-20 px-4 bg-gradient-to-b from-orange-100 to-yellow-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-bubblegum text-4xl text-center text-purple-900 mb-12">
            Our Core Values 💎
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView3 ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl shadow-lg p-6 text-center"
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-5xl mb-4"
                >
                  {value.icon}
                </motion.div>
                <h3 className="font-bubblegum text-xl text-purple-900 mb-2">
                  {value.title}
                </h3>
                <p className="font-comic text-gray-600">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-500 to-pink-500">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="bg-white/20 backdrop-blur-md rounded-3xl p-10"
          >
            <h2 className="font-bubblegum text-4xl text-white mb-6">
              Meet the Snack Squad 👥
            </h2>
            <div className="flex justify-center gap-4 mb-6">
              {['👨‍🍳', '👩‍💼', '👨‍💻', '👩‍🎨', '👨‍🔬'].map((emoji, index) => (
                <motion.span
                  key={index}
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 2, delay: index * 0.2, repeat: Infinity }}
                  className="text-6xl"
                >
                  {emoji}
                </motion.span>
              ))}
            </div>
            <p className="font-comic text-xl text-white/90">
              A passionate team of snack enthusiasts, flavor scientists, and adventure creators
              working together to bring you the ultimate snacking experience!
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
