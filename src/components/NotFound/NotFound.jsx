import React from 'react';
import { motion } from 'framer-motion';

export const NotFound = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const badgeVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        duration: 1
      }
    }
  };

  const numberVariants = {
    hidden: { scale: 0.5, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        delay: 0.4
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-400 via-sky-500 to-blue-600 flex items-center justify-center pt-24 p-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        className="absolute -top-40 -right-40 w-80 h-80 bg-[#001838]/40 bg-opacity-5 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#001838]/40 bg-opacity-5 rounded-full"
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />

      <motion.div
        className="text-center max-w-2xl mx-auto z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Manchester City Badge */}
        <motion.div className="mb-8" variants={itemVariants}>
          <motion.div
            className="w-32 h-32 mx-auto bg-white rounded-full flex items-center justify-center shadow-2xl mb-6 relative"
            variants={badgeVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="w-24 h-24 bg-gradient-to-br from-sky-400 to-sky-600 rounded-full flex items-center justify-center shadow-inner"
              variants={floatingVariants}
              animate="animate"
            >
              <span className="text-white font-bold text-xl tracking-wider">MCFC</span>
            </motion.div>
            {/* Ring animation around badge */}
            <motion.div
              className="absolute inset-0 rounded-full border-4 border-sky-300"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>

        {/* 404 Error with staggered animation */}
        <motion.div className="mb-8" variants={itemVariants}>
          <motion.div className="flex justify-center items-center space-x-4 mb-4">
            {['4', '0', '4'].map((digit, index) => (
              <motion.span
                key={index}
                className="text-8xl md:text-9xl font-bold text-white drop-shadow-lg"
                variants={numberVariants}
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.2,
                  ease: "easeInOut"
                }}
                whileHover={{ scale: 1.1, color: "#f0f9ff" }}
              >
                {digit}
              </motion.span>
            ))}
          </motion.div>
          
          <motion.div
            className="w-24 h-1 bg-white mx-auto mb-6 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 1, delay: 0.8 }}
          />
        </motion.div>

        {/* Professional Error Message */}
        <motion.div className="mb-12" variants={itemVariants}>
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white mb-6"
            variants={itemVariants}
          >
            Page Not Found
          </motion.h2>
          <motion.div
            className="space-y-3"
            variants={itemVariants}
          >
            <p className="text-lg md:text-xl text-sky-100 font-medium">
              The requested resource could not be located on our servers.
            </p>
            <p className="text-base md:text-lg text-sky-200">
              Please verify the URL or navigate back to continue your experience.
            </p>
          </motion.div>
        </motion.div>

        {/* Professional Action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          variants={itemVariants}
        >
          <motion.button
            onClick={() => window.history.back()}
            className="bg-white text-sky-600 font-semibold py-4 px-8 rounded-lg hover:bg-sky-50 transition-colors duration-300 shadow-lg min-w-[200px] flex items-center justify-center space-x-2"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span>←</span>
            <span>Go Back</span>
          </motion.button>
          
          <motion.button
            onClick={() => window.location.href = '/'}
            className="bg-transparent text-white font-semibold py-4 px-8 rounded-lg border-2 border-white hover:bg-white hover:text-sky-600 transition-colors duration-300 min-w-[200px] flex items-center justify-center space-x-2"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span>🏠</span>
            <span>Home</span>
          </motion.button>
        </motion.div>

        {/* Animated Status Indicator */}
        <motion.div
          className="mt-16 flex justify-center items-center space-x-3"
          variants={itemVariants}
        >
          <motion.div
            className="w-3 h-3 bg-white rounded-full"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
          />
          <motion.div
            className="w-3 h-3 bg-white rounded-full"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
          />
          <motion.div
            className="w-3 h-3 bg-white rounded-full"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
          />
          <span className="text-sky-200 text-sm ml-4 font-medium">
            Error Code: 404
          </span>
        </motion.div>
      </motion.div>
    </div>
  );
};