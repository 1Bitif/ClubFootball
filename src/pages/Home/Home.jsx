import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { Club } from '../../components/Club/Club'

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
      <Club scrollToAbout={scrollToAbout} aboutRef={aboutRef} />
    </motion.main>
  )
}