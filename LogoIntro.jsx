import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LogoIntro = ({ onAnimationComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Animation sequence: fade in (1.5s) + hold (1s) + fade out (1s) = 3.5s total
    const timer = setTimeout(() => {
      setIsVisible(false);
      // Call the callback after fade out completes
      setTimeout(() => {
        onAnimationComplete();
      }, 1000); // Wait for fade out animation to complete
    }, 2500); // 1.5s fade in + 1s hold

    return () => clearTimeout(timer);
  }, [onAnimationComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 bg-black z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: [0, 1, 1, 0],
              scale: [0.8, 1, 1, 0.9]
            }}
            transition={{
              duration: 3.5,
              times: [0, 0.43, 0.71, 1], // 1.5s fade in, 1s hold, 1s fade out
              ease: "easeInOut"
            }}
          >
            {/* Logo Image */}
            <img
              src="/logo.png"
              alt="COLD Logo"
              className="w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 object-contain"
            />
            
            {/* Fallback text if logo doesn't load */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white text-4xl md:text-6xl lg:text-8xl font-bold tracking-wider">
                COLD
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LogoIntro;
















