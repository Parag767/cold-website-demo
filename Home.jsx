import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LogoIntro from './LogoIntro';

const Home = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleAnimationComplete = () => {
    setShowIntro(false);
    // Small delay to ensure smooth transition
    setTimeout(() => {
      setShowContent(true);
    }, 100);
  };

  // Prevent scrolling during intro
  useEffect(() => {
    if (showIntro) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showIntro]);

  return (
    <div className="min-h-screen bg-white">
      {/* Logo Intro Animation */}
      {showIntro && (
        <LogoIntro onAnimationComplete={handleAnimationComplete} />
      )}

      {/* Main Homepage Content */}
      <AnimatePresence>
        {showContent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="min-h-screen"
          >
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
              <div className="text-center px-4 sm:px-6 lg:px-8">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-5xl md:text-7xl lg:text-8xl font-bold text-black mb-6 tracking-tight"
                >
                  Welcome to COLD
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-xl md:text-2xl lg:text-3xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
                >
                  Fuel Your Passion. Wear Your Strength.
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <button className="group relative px-8 py-4 bg-black text-white font-semibold text-lg rounded-lg overflow-hidden transition-all duration-300 hover:bg-white hover:text-black border-2 border-black">
                    <span className="relative z-10">Shop Now</span>
                    <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  </button>
                </motion.div>
              </div>
            </section>

            {/* Additional Content Sections */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
              <div className="max-w-7xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="text-center"
                >
                  <h2 className="text-3xl md:text-4xl font-bold text-black mb-8">
                    Premium Gymwear for the Relentless
                  </h2>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Crafted for athletes who demand excellence. Every piece designed to enhance your performance and reflect your dedication to greatness.
                  </p>
                </motion.div>
              </div>
            </section>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Home;














