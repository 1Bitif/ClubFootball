import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { fetchPlayerById } from '../../api/players';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

// Animation variants (unchanged)
const fadeIn = (direction, type, delay, duration) => ({
  hidden: {
    x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
    y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type,
      delay,
      duration,
      ease: 'easeOut',
    },
  },
});

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const DetailsPlayer = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const [player, setPlayer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadPlayer = async () => {
      try {
        const playerData = await fetchPlayerById(id);
        setPlayer(playerData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    loadPlayer();
  }, [id]);

  if (loading) {
    return (
       <div className="flex flex-col justify-center items-center min-h-screen bg-gray-50">
            <div className="flex items-center space-x-3 mb-4">
                <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-[#001838]"></div>
                <span className="text-lg font-medium text-gray-700 lg:text-5xl">{t('players.loading')}</span>
            </div>
            <div className="text-sm text-gray-500">{t('players.loadingSubtext')}</div>
        </div>
    );
  }

  if (error) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex justify-center items-center  w-full  text-center py-24 h-screen text-red-500 text-xl bg-red-50 rounded-lg mx-4 mt-8 border-2 border-red-200"
      >
        <div className="text-4xl mb-2">⚠️</div>
        <p className="font-semibold">{t('player.errorTitle')}</p>
        <p className="text-sm text-red-400 mt-2">{error}</p>
      </motion.div>
    );
  }

  if (!player) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex justify-center items-center  w-full  h-screen text-center py-16 text-xl bg-sky-50 rounded-lg mx-4 mt-8 border-2 border-sky-200"
      >
        <div className="text-4xl mb-2">😕</div>
        <p className="text-sky-700 font-semibold">{t('player.notFound')}</p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={staggerContainer}
      className="min-h-screen bg-gradient-to-br from-sky-50 to-blue-100 py-8 px-4 pt-28 md:pt-40"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          variants={fadeIn('up', 'spring', 0.1, 0.8)}
          className="flex flex-col md:flex-row items-center justify-between mb-8"
        >
          <div className="flex items-center mb-4 md:mb-0">
            <NavLink to="/players" className="mr-4 bg-[#001838] text-white py-2 px-4 rounded-lg hover:bg-sky-600 transition duration-300">
              {t('player.backButton')}
            </NavLink>
            <div className="w-16 h-16 bg-sky-600 rounded-full flex items-center justify-center mr-4">
              <span className="text-white text-2xl font-bold">{player.jerseyNumber}</span>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-3xl md:text-4xl font-bold text-sky-900">{player.name}</h1>
              <div className="flex items-center">
                <span className="bg-sky-600 text-white text-sm px-3 py-1 rounded-full mr-2">
                  {player.position}
                </span>
                <span className="bg-sky-800 text-white text-sm px-3 py-1 rounded-full">
                  {player.nationality}
                </span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4 text-center">
            <p className="text-sm text-gray-500">{t('player.joined')}</p>
            <p className="text-lg font-semibold text-sky-700">{player.joinDate}</p>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Player Image */}
          <motion.div
            variants={fadeIn('right', 'spring', 0.2, 0.8)}
            className="lg:col-span-1 bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <div className="relative pb-[125%]">
              <img
                src={player.imageUrl || '/default-player.jpg'}
                alt={player.name}
                className="absolute h-full w-full object-cover"
              />
            </div>
            <div className="p-4 bg-sky-700 text-white">
              <h3 className="text-xl font-bold mb-2">{t('player.detailsTitle')}</h3>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <p className="text-sm text-sky-200">{t('player.age')}</p>
                  <p className="font-semibold">{player.age}</p>
                </div>
                <div>
                  <p className="text-sm text-sky-200">{t('player.height')}</p>
                  <p className="font-semibold">{player.height} {t('player.cm')}</p>
                </div>
                <div>
                  <p className="text-sm text-sky-200">{t('player.weight')}</p>
                  <p className="font-semibold">{player.weight} {t('player.kg')}</p>
                </div>
                <div>
                  <p className="text-sm text-sky-200">{t('player.foot')}</p>
                  <p className="font-semibold">{player.preferredFoot}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Player Stats */}
          <motion.div
            variants={fadeIn('up', 'spring', 0.3, 0.8)}
            className="lg:col-span-2 space-y-6"
          >
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white rounded-xl shadow-md p-4">
                <h3 className="text-lg font-semibold text-sky-800 mb-3">{t('player.seasonStats')}</h3>
                <div className="space-y-2">
                  <StatItem label={t('player.appearances')} value={player.stats?.appearances || 0} />
                  <StatItem label={t('player.goals')} value={player.stats?.goals || 0} />
                  <StatItem label={t('player.assists')} value={player.stats?.assists || 0} />
                  <StatItem label={t('player.yellowCards')} value={player.stats?.yellowCards || 0} />
                  <StatItem label={t('player.redCards')} value={player.stats?.redCards || 0} />
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md p-4">
                <h3 className="text-lg font-semibold text-sky-800 mb-3">{t('player.performanceMetrics')}</h3>
                <div className="space-y-2">
                  <ProgressStat label={t('player.passAccuracy')} value={player.stats?.passAccuracy || 0} />
                  <ProgressStat label={t('player.shotAccuracy')} value={player.stats?.shotAccuracy || 0} />
                  <ProgressStat label={t('player.tackleSuccess')} value={player.stats?.tackleSuccess || 0} />
                  <ProgressStat label={t('player.dribbleSuccess')} value={player.stats?.dribbleSuccess || 0} />
                </div>
              </div>
            </div>

            {/* Biography */}
            <motion.div
              variants={fadeIn('up', 'spring', 0.4, 0.8)}
              className="bg-white rounded-xl shadow-md p-6"
            >
              <h3 className="text-xl font-bold text-sky-900 mb-4">{t('player.biography')}</h3>
              <p className="text-gray-700 leading-relaxed">
                {t(player.bio) || t('player.noBio')}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

const StatItem = ({ label, value }) => (
  <div className="flex justify-between items-center">
    <span className="text-gray-600">{label}</span>
    <span className="font-bold text-sky-700">{value}</span>
  </div>
);

const ProgressStat = ({ label, value }) => {
  const { t } = useTranslation();
  return (
    <div className="space-y-1">
      <div className="flex justify-between text-sm">
        <span className="text-gray-600">{label}</span>
        <span className="font-medium text-sky-700">{value}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-2 rounded-full bg-gradient-to-r from-sky-400 to-sky-600"
        />
      </div>
    </div>
  );
};