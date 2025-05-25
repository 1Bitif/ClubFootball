import React from 'react'
import { motion } from 'framer-motion'

const stats = [
  { title: 'Premier League Titles', value: '9', color: 'bg-blue-600' },
  { title: 'Champions League Titles', value: '1', color: 'bg-sky-500' },
  { title: 'FA Cups', value: '7', color: 'bg-red-600' },
  { title: 'League Cups', value: '8', color: 'bg-amber-500' }
]

export const About = () => {
  return (
    <section id='about' className='py-20 bg-gray-50'>
      <div className='container mx-auto px-6'>
        <motion.div 
          className='text-center mb-16'
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className='text-4xl md:text-5xl font-bold mb-4 text-gray-900'>
            About <span className='text-sky-600'>Manchester City</span>
          </h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            One of England's most successful football clubs with a rich history and passionate fanbase.
          </p>
        </motion.div>
        
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              className={`${stat.color} rounded-xl p-6 text-white shadow-lg`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <h3 className='text-2xl font-bold mb-2'>{stat.value}</h3>
              <p className='text-lg'>{stat.title}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className='mt-20 bg-white rounded-xl shadow-md overflow-hidden'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className='md:flex'>
            <div className='md:w-1/2'>
              <img 
                src="./images/stadium.jpg" 
                alt="Etihad Stadium" 
                className='w-full h-full object-cover'
              />
            </div>
            <div className='p-8 md:w-1/2'>
              <h3 className='text-3xl font-bold mb-4 text-gray-900'>Our Home</h3>
              <p className='text-gray-600 mb-6'>
                The Etihad Stadium has been our home since 2003, with a capacity of 53,400 
                passionate fans creating an incredible atmosphere on match days.
              </p>
              <button className='bg-sky-600 hover:bg-sky-700 text-white px-6 py-2 rounded-full transition-all duration-300'>
                Stadium Tours
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}