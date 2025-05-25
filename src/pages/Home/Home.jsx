import React, { useRef } from 'react'
import { Hero } from '../../components/Sections/Hero/Hero'
import { About } from '../../components/Sections/About/About'
import { motion } from 'framer-motion'

export const Home = () => {
  const aboutRef = useRef(null)

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className='overflow-x-hidden'
    >
      <Hero scrollToAbout={scrollToAbout} />
      <div ref={aboutRef}>
        <About />
      </div>
    </motion.main>
  )
}