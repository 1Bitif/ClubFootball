import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Users, Calendar, Shirt, MapPin, Award, Star, Globe, ChevronDown } from 'lucide-react';
import { MapComponent } from '../MapComponent/MapComponent';
import { useTranslation } from 'react-i18next';

export const Club = ({ scrollToAbout, aboutRef }) => {
  
  const {t} = useTranslation()

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
  };

  const slideUp = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0 }
  };

  const scaleUp = {
    hidden: { scale: 0.9, opacity: 0 },
    show: { scale: 1, opacity: 1 }
  };

  // Club statistics data
  const stats = [
    { icon: <Trophy size={28} />, value: '32', label: t('club.stats.majorTrophies') , color: 'from-amber-500 to-orange-600' },
    { icon: <Users size={28} />, value: '450M+', label: t('club.stats.globalFans'), color: 'from-blue-600 to-indigo-700' },
    { icon: <Calendar size={28} />, value: '1894', label: t('club.stats.established'), color: 'from-emerald-500 to-teal-600' },
    { icon: <Award size={28} />, value: '#1', label: t('club.stats.premierLeague'), color: 'from-purple-600 to-violet-700' },
    { icon: <MapPin size={28} />, value: '53,400', label: t('club.stats.stadiumCapacity'), color: 'from-rose-500 to-pink-600' }
  ];

  // Club honors data with enhanced styling
const honors = [
    {
      title: t('club.honors.premierLeague'),
      count: 9,
      years: ['1937', '1968', '2012', '2014', '2018', '2019', '2021', '2022', '2023'],
      icon: <Trophy className="w-5 h-5" />,
      gradient: 'from-blue-600 to-blue-800'
    },
    {
      title: t('club.honors.championsLeague'),
      count: 1,
      years: ['2023'],
      icon: <Star className="w-5 h-5" />,
      gradient: 'from-purple-600 to-purple-800'
    },
    {
      title: t('club.honors.faCup'),
      count: 7,
      years: ['1904', '1934', '1956', '1969', '2011', '2019', '2023'],
      icon: <Award className="w-5 h-5" />,
      gradient: 'from-emerald-600 to-emerald-800'
    },
    {
      title: t('club.honors.eflCup'),
      count: 8,
      years: ['1970', '1976', '2014', '2016', '2018', '2019', '2020', '2021'],
      icon: <Trophy className="w-5 h-5" />,
      gradient: 'from-amber-600 to-amber-800'
    }
  ];


  const achievements = [
    { label: t('club.achievements.consecutiveTitles'), value: '4', period: '2017-2021' },
    { label: t('club.achievements.domesticTreble'), value: '2019', period: t('club.achievements.firstEnglishClub') },
    { label: t('club.achievements.recordPoints'), value: '100pts', period: '2017-2018' },
    { label: t('club.achievements.uefaRanking'), value: 'Top 3', period: t('club.achievements.europeanElite') }
  ];

  const stadiumStats = [
    { value: '53,400', label: t('club.stadium.seatingCapacity'), color: 'text-blue-600' },
    { value: '2003', label: t('club.stadium.yearOpened'), color: 'text-emerald-600' },
    { value: '330M', label: t('club.stadium.cost'), color: 'text-purple-600' },
    { value: '4★', label: t('club.stadium.uefaRating'), color: 'text-amber-600' }
  ];

  return (
    <motion.main
      initial="hidden"
      animate="show"
      variants={fadeIn}
      transition={{ duration: 0.8 }}
      className="bg-white"
    >
      {/* Hero Section - Enhanced */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 overflow-hidden flex items-center">
        {/* Background image with overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <img
            src="./images/TrebleWinners.webp"
            className="w-full h-full object-cover absolute inset-0 opacity-30"
            alt="Manchester City Treble Winners"
          />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-900/40 to-black/60" />
        </motion.div>

        {/* Animated background elements */}
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <motion.div
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
              opacity: [0.05, 0.1, 0.05]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              x: [0, -100, 0],
              y: [0, -50, 0],
              opacity: [0.05, 0.1, 0.05]
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.05, 0.08, 0.05]
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"
          />
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={slideUp}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8"
            >
              <Globe className="w-5 h-5 text-blue-300" />
              <span className="text-blue-100 font-medium">{t('club.hero.championsBadge')}</span>
            </motion.div>
          </motion.div>

          <motion.h1
            variants={slideUp}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight"
          >
            <span className="bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">
              Manchester City
            </span>
          </motion.h1>

          <motion.div
            variants={slideUp}
            transition={{ delay: 0.4 }}
            className="max-w-4xl mx-auto mb-12"
          >
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed font-light">
              {t('club.hero.description')}
            </p>
          </motion.div>

          <motion.div
            variants={slideUp}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group bg-white text-slate-900 px-10 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-all duration-300 shadow-2xl hover:shadow-white/25"
            >
              <span className="flex items-center gap-2">
                {t('club.buttons.discoverStory')}
                <motion.div
                  whileHover={{ rotate: 180 }}
                  className="w-5 h-5 bg-slate-900 rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300"
                >
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </motion.div>
              </span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white/30 text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
            >
              {t('club.buttons.watchHighlights')}
            </motion.button>
          </motion.div>
        </div>
        {/* Scroll indicator */}
        <motion.div
          className='absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 cursor-pointer'
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          onClick={scrollToAbout}
        >
          <ChevronDown className='text-white w-10 h-10' />
        </motion.div>
      </section>

      {/* Enhanced Statistics Section */}
      <section ref={aboutRef} className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={container}
            className="text-center mb-20"
          >
            <motion.div variants={item} className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full font-medium mb-6">
              <Trophy className="w-4 h-4" />
              {t('club.sections.excellence.subtitle')}
            </motion.div>
            <motion.h2 variants={item} className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t('club.sections.excellence.title')} <span className="text-blue-600">{t('club.sections.excellence.highlight')}</span>
            </motion.h2>
            <motion.p variants={item} className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t('club.sections.excellence.description')}
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={container}
            className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-16"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ y: -10 }}
                className="group relative bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ rotate: 15 }}
                    className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${stat.color} mb-6 shadow-lg`}
                  >
                    <div className="text-white">
                      {stat.icon}
                    </div>
                  </motion.div>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">{stat.value}</h3>
                  <p className="text-gray-600 font-medium">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Additional Achievement Highlights */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={container}
            className="grid md:grid-cols-4 gap-6"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ scale: 1.03 }}
                className="bg-white p-6 rounded-2xl shadow-md border border-gray-100"
              >
                <h4 className="font-bold text-gray-900 mb-2 text-lg">{achievement.label}</h4>
                <div className="text-2xl font-bold text-blue-600 mb-1">{achievement.value}</div>
                <p className="text-sm text-gray-500">{achievement.period}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Premium Honors Section */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={container}
            className="text-center mb-20"
          >
            <motion.div variants={item} className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-400 px-4 py-2 rounded-full font-medium mb-6 border border-amber-500/20">
              <Award className="w-4 h-4" />
              {t('club.sections.honors.subtitle')}
            </motion.div>
            <motion.h2 variants={item} className="text-4xl md:text-5xl font-bold text-white mb-6">
               {t('club.sections.honors.title')} <span className="text-amber-400"> {t('club.sections.honors.highlight')}</span>
            </motion.h2>
            <motion.p variants={item} className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
               {t('club.sections.honors.description')}
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={container}
            className="grid md:grid-cols-2 gap-8"
          >
            {honors.map((honor, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ y: -10 }}
                className="group relative bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-all duration-500"
              >
                <div className="flex items-start justify-between mb-8">
                  <div className="flex items-center gap-4">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      className={`p-4 rounded-2xl bg-gradient-to-r ${honor.gradient} shadow-lg`}
                    >
                      <div className="text-white">
                        {honor.icon}
                      </div>
                    </motion.div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">{honor.title}</h3>
                      <p className="text-gray-400">{t('club.honors.majourCompetition')}</p>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-amber-400 mb-1">{honor.count}</div>
                    <p className="text-gray-400 text-sm">{t('club.honors.title')}</p>
                  </div>
                </div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-white/5 p-4 rounded-xl border border-white/10"
                >
                  <p className="text-gray-300 text-sm font-medium mb-1">{t('club.honors.winningYears')}</p>
                  <div className="flex flex-wrap gap-2">
                    {honor?.years?.map((year, idx) => (
                      <span className="bg-transparent rounded-full px-4 py-2 border border-white/10 text-white">{year}</span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Premium Stadium Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={container}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={item}>
              <motion.div variants={item} className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full font-medium mb-8">
                <MapPin className="w-4 h-4" />
                {t('club.sections.stadium.subtitle')}
              </motion.div>

              <motion.h2 variants={item} className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                 {t('club.sections.stadium.title')}
              </motion.h2>

              <motion.p variants={item} className="text-xl text-gray-600 mb-8 leading-relaxed">
               {t('club.sections.stadium.description')}
              </motion.p>

              <motion.div
                variants={container}
                className="grid grid-cols-2 gap-6 mb-8"
              >
                {stadiumStats.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={item}
                    whileHover={{ y: -5 }}
                    className="bg-white p-6 rounded-2xl shadow-md border border-gray-100"
                  >
                    <div className={`text-3xl font-bold ${item.color} mb-2`}>{item.value}</div>
                    <p className="text-gray-600 font-medium">{item.label}</p>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                variants={container}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.button
                  variants={item}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-slate-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-slate-800 transition-all duration-300 shadow-lg"
                >
                 {t('club.buttons.bookTour')}
                </motion.button>
                <motion.button
                  variants={item}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-slate-200 text-slate-700 px-8 py-4 rounded-full font-semibold hover:bg-slate-50 transition-all duration-300"
                >
                  {t('club.buttons.virtualTour')}
                </motion.button>
              </motion.div>
            </motion.div>

            <motion.div
              variants={item}
              className="relative"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative rounded-3xl overflow-hidden shadow-2xl"
              >
                <div className="aspect-[4/3] bg-gradient-to-br from-slate-100 via-blue-50 to-sky-100 flex items-center justify-center">
                  <div className="text-center">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      className="w-24 h-24 bg-white rounded-2xl shadow-lg flex items-center justify-center mb-6 mx-auto"
                    >
                      <MapPin className="w-12 h-12 text-slate-600" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">Etihad Stadium</h3>
                    <p className="text-slate-600">Manchester, England</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"></div>
              </motion.div>
              {/* <MapComponent  /> */}
              {/* Floating elements */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.8, 1, 0.8]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-6 -right-6 w-12 h-12 bg-blue-500 rounded-2xl shadow-lg opacity-80"
              />
              <motion.div
                animate={{
                  y: [0, 20, 0],
                  opacity: [0.7, 0.9, 0.7]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -bottom-6 -left-6 w-16 h-16 bg-emerald-400 rounded-2xl shadow-lg opacity-70"
              />
            </motion.div>
            {/* <MapComponent /> */}
          </motion.div>
        </div>
      </section>

      {/* Premium Call-to-Action */}
      <section className="py-24 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={container}
          >
            <motion.h2 variants={item} className="text-4xl md:text-5xl font-bold text-white mb-8">
              {t('club.sections.cta.title')} <span className="text-blue-400">{t('club.sections.cta.highlight')}</span>
            </motion.h2>
            <motion.p variants={item} className="text-xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
               {t('club.sections.cta.description')}
            </motion.p>

            <motion.div
              variants={container}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <motion.button
                variants={item}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-white text-slate-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all duration-300 shadow-2xl"
              >
                <span className="flex items-center gap-3">
                 {t('club.buttons.becomeMember')}
                  <motion.div
                    whileHover={{ rotate: 180 }}
                    className="w-6 h-6 bg-slate-900 rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300"
                  >
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </motion.div>
                </span>
              </motion.button>
              <motion.button
                variants={item}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white/30 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
              >
                {t('club.buttons.officialStore')}
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </motion.main>
  )
}