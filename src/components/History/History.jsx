import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Calendar, Flag, Star, Award, Clock } from 'lucide-react';
import { Stadium } from '../../assets/Icons';

export const History = () => {
  // Club history milestones
  const milestones = [
    {
      year: 1880,
      title: "Club Foundation",
      description: "Founded as St. Mark's (West Gorton) by Anna Connell and church wardens.",
      icon: <Calendar className="text-blue-500" size={24} />
    },
    {
      year: 1894,
      title: "Becomes Manchester City",
      description: "The club changes its name to Manchester City Football Club.",
      icon: <Flag className="text-emerald-500" size={24} />
    },
    {
      year: 1937,
      title: "First League Title",
      description: "Won the First Division title for the first time in club history.",
      icon: <Trophy className="text-amber-500" size={24} />
    },
    {
      year: 2003,
      title: "Move to Etihad Stadium",
      description: "Relocated to the City of Manchester Stadium (now Etihad Stadium).",
      icon: <Stadium className="text-purple-500" size={24} />
    },
    {
      year: 2008,
      title: "New Ownership",
      description: "Taken over by Abu Dhabi United Group, marking a new era for the club.",
      icon: <Star className="text-indigo-500" size={24} />
    },
    {
      year: 2012,
      title: "Dramatic Premier League Win",
      description: "Won the Premier League in dramatic fashion with Aguero's last-minute goal.",
      icon: <Trophy className="text-rose-500" size={24} />
    },
    {
      year: 2023,
      title: "Treble Winners",
      description: "Won Premier League, FA Cup, and Champions League in a historic season.",
      icon: <Award className="text-yellow-500" size={24} />
    }
  ];

  // Trophy history
  const trophies = [
    { name: "Premier League", count: 9, lastWon: 2023, color: "from-blue-500 to-blue-600" },
    { name: "FA Cup", count: 7, lastWon: 2023, color: "from-emerald-500 to-emerald-600" },
    { name: "League Cup", count: 8, lastWon: 2021, color: "from-purple-500 to-purple-600" },
    { name: "Champions League", count: 1, lastWon: 2023, color: "from-amber-500 to-amber-600" },
    { name: "European Cup Winners' Cup", count: 1, lastWon: 1970, color: "from-rose-500 to-rose-600" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-b from-slate-50 to-white min-h-screen mt-16"
    >
      {/* Hero Section */}
      <section className="relative h-[500px] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-emerald-900/20"></div>
        
        {/* Animated background pattern */}
        <motion.div 
          className="absolute inset-0 opacity-10"
          animate={{ 
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            repeatType: 'reverse',
            ease: 'linear'
          }}
          style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, white 2px, transparent 2px), radial-gradient(circle at 80% 50%, white 2px, transparent 2px)',
            backgroundSize: '100px 100px'
          }}
        />
        
        <div className="relative z-10 h-full flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-full flex items-center justify-center"
            >
              <Clock className="text-white" size={40} />
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              Club History
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Over 140 years of legacy, triumph, and unwavering passion
            </p>
            
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100px' }}
              transition={{ duration: 1, delay: 1 }}
              className="h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto mt-8"
            />
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Historical <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">Milestones</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
              Key moments that shaped our incredible journey
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto rounded-full"></div>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 w-1 h-full bg-gradient-to-b from-blue-200 to-emerald-200 transform -translate-x-1/2 rounded-full"></div>
            
            {/* Timeline items */}
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                >
                  {/* Year indicator on timeline */}
                  <div className=" hidden absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-slate-800 to-slate-900 rounded-full md:flex items-center justify-center shadow-lg border-4 border-white z-10">
                    <span className="text-white font-bold text-sm">{String(milestone.year).slice(-2)}</span>
                  </div>
                  
                  <motion.div 
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ duration: 0.3 }}
                    className={`w-full md:w-5/12 p-8 rounded-2xl shadow-xl bg-white border border-slate-100 ${
                      index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'
                    } hover:shadow-2xl transition-all duration-300`}
                  >
                    <div className="flex items-start space-x-4">
                      <motion.div 
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl flex items-center justify-center"
                      >
                        {milestone.icon}
                      </motion.div>
                      
                      <div className="flex-1">
                        <div className="flex items-center mb-3">
                          <span className="text-3xl font-bold text-slate-800 mr-4">{milestone.year}</span>
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-3">{milestone.title}</h3>
                        <p className="text-slate-600 leading-relaxed">{milestone.description}</p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trophy Cabinet */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Trophy <span className="bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">Cabinet</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
              Our collection of honors and achievements
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-yellow-500 mx-auto rounded-full"></div>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {trophies.map((trophy, index) => (
              <motion.div
                key={trophy.name}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100"
              >
                <div className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-br ${trophy.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Trophy className="text-white" size={32} />
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">{trophy.name}</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
                    <span className="text-slate-600 font-medium">Total Wins</span>
                    <span className="text-3xl font-bold text-slate-900">{trophy.count}</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-slate-50 to-slate-100 rounded-xl">
                    <span className="text-slate-600 font-medium">Last Won</span>
                    <span className="text-xl font-bold text-slate-900">{trophy.lastWon}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Historical Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Historical <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Moments</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
              Capturing the essence of our greatest memories
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                title: "First Title Win (1937)",
                image: "First_Title_Win_1937.png",
                description: "The team celebrating their first league title",
                gradient: "from-blue-500 to-blue-600"
              },
              {
                title: "Maine Road Era",
                image: "Maine_Road_Stadium.jpg",
                description: "The famous Maine Road stadium in its heyday",
                gradient: "from-emerald-500 to-emerald-600"
              },
              {
                title: "Aguero Moment (2012)",
                image: "Aguero_Moment.png",
                description: "The dramatic last-minute title-winning goal",
                gradient: "from-rose-500 to-rose-600"
              },
              {
                title: "Centenary Celebration",
                image: "Centenary.png",
                description: "Celebrating 100 years as Manchester City",
                gradient: "from-purple-500 to-purple-600"
              },
              {
                title: "Etihad Stadium",
                image: "Etihad_Stadium.jpg",
                description: "The modern Etihad Stadium home",
                gradient: "from-indigo-500 to-indigo-600"
              },
              {
                title: "Treble Winners (2023)",
                image: "TrebleWinners.webp",
                description: "Celebrating the historic treble season",
                gradient: "from-amber-500 to-amber-600"
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-white"
              >
                <div className={`h-56 bg-gradient-to-br ${item.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <img
                    src={`./images/${item.image}`}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  
                  {/* Overlay content */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-bold text-lg mb-1 drop-shadow-lg">{item.title}</h3>
                  </div>
                </div>
                
                <div className="p-6 bg-white">
                  <p className="text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Be Part of Our <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">Legacy</span>
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Join millions of fans worldwide and become part of our continuing story
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-emerald-500 text-white font-bold rounded-full hover:from-blue-600 hover:to-emerald-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Explore More History
            </motion.button>
          </motion.div>
        </div>
      </section>
    </motion.main>
  );
};