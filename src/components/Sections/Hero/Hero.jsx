import React from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export const Hero = ({ scrollToAbout }) => {
  return (
    <section id='hero' className='relative'>
      <div className='flex relative justify-center items-center h-screen overflow-hidden'>
        {/* Background image with parallax effect */}
        <motion.img 
          src="./images/HeroImg3.jpg" 
          alt="Manchester City Stadium" 
          className='w-full h-full object-cover'
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        />
        
        {/* Dark overlay gradient */}
        <div className='absolute inset-0 bg-gradient-to-t from-black/80 to-transparent' />
        
        {/* Content */}
        <motion.div 
          className='absolute container mx-auto px-6 text-center text-white z-10'
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <motion.h1 
            className='text-5xl md:text-7xl font-bold mb-6'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Welcome to <span className='text-sky-400'>Man City</span>
          </motion.h1>
          
          <motion.p 
            className='text-xl md:text-2xl max-w-2xl mx-auto mb-8'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 1 }}
          >
            The official home of Manchester City Football Club
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <button 
              onClick={scrollToAbout}
              className='bg-sky-600 hover:bg-sky-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105'
            >
              Explore More
            </button>
          </motion.div>
        </motion.div>
        
        {/* Scroll indicator */}
        <motion.div 
          className='absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 cursor-pointer'
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          onClick={scrollToAbout}
        >
          <ChevronDown className='text-white w-10 h-10' />
        </motion.div>
      </div>
    </section>
  )
}