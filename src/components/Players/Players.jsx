import React, { useEffect, useState } from 'react';
import { Shirt, Flag, Calendar, Ruler, Weight } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { fetchPlayers } from '../../api/players';
import { useTranslation } from 'react-i18next';

export const Players = () => {
    const { t } = useTranslation();
    const [activeFilter, setActiveFilter] = useState('All');
    const [players, setPlayers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadPlayers = async () => {
            const playersData = await fetchPlayers();
            setPlayers(playersData);
            setLoading(false);
        };

        loadPlayers();
    }, []);

    if (loading) return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-gray-50">
            <div className="flex items-center space-x-3 mb-4">
                <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-[#001838]"></div>
                <span className="text-lg font-medium text-gray-700 lg:text-5xl">{t('players.loading')}</span>
            </div>
            <div className="text-sm text-gray-500">{t('players.loadingSubtext')}</div>
        </div>
    );

    // Filter players based on active filter
    const filteredPlayers = players.filter(player => {
        switch (activeFilter) {
            case 'All':
                return true;
            case 'Goalkeepers':
                return player.position === 'Goalkeeper';
            case 'Defenders':
                return ['Defender', 'Defender central', 'Défenseur', 'Défenseur droit', 'Défenseur central'].includes(player.position);
            case 'Midfielders':
                return ['Midfielder', 'Milieu offensif', 'Milieu défensif', 'Milieu central'].includes(player.position);
            case 'Forwards':
                return ['Forward', 'Attaquant', 'Ailier gauche', 'Ailier droit'].includes(player.position);
            default:
                return true;
        }
    });

    return (
        <main className="bg-gray-50 min-h-screen mt-16">
            {/* Hero Section */}
            <section className="relative h-96 bg-gradient-to-br from-sky-900 via-sky-800 to-sky-600 overflow-hidden flex items-center justify-center">
                <div className="text-center z-10 px-4">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
                        {t('players.hero.title')}
                    </h1>
                    <p className="text-xl text-sky-100 max-w-2xl mx-auto leading-relaxed">
                        {t('players.hero.subtitle')}
                    </p>
                </div>

                {/* Decorative elements */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full"></div>
                <div className="absolute bottom-20 right-20 w-24 h-24 bg-white/5 rounded-full"></div>
            </section>

            {/* Featured Players */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t('players.featured.title')}</h2>
                        <div className="w-24 h-1 bg-sky-500 mx-auto rounded-full"></div>
                        <p className="text-gray-600 max-w-2xl mx-auto mt-6 text-lg">
                            {t('players.featured.description')}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {players.filter(player => player.featured).map(player => (
                            <NavLink to={`/detailsPlayer/${player.id}`} key={player.id} className="block">
                                <div className="group bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                                    <div className="relative h-64 bg-gradient-to-b from-sky-900 to-sky-700">
                                        <div className="w-full h-full bg-gradient-to-b from-transparent to-black/30 flex items-center justify-center">
                                            {!player?.imageUrl ? (
                                                <Shirt className="w-16 h-16 text-white/20" />
                                            ) : (
                                                <img src={player?.imageUrl} className='bg-cover w-64' alt={t('players.imageAlt', { name: player.name })} />
                                            )}
                                        </div>
                                        <div className="absolute bottom-4 left-4 bg-white text-sky-900 px-3 py-1 text-lg font-bold rounded-lg shadow-lg">
                                            #{player.jerseyNumber}
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">{player.name}</h3>
                                        <p className="text-sky-700 font-semibold mb-4">{player.position}</p>
                                        <div className="space-y-2">
                                            <div className="flex items-center gap-3 text-gray-600">
                                                <Flag size={16} className="text-sky-600" />
                                                <span className="text-sm">{player.nationality}</span>
                                            </div>
                                            <div className="flex items-center gap-3 text-gray-600">
                                                <Calendar size={16} className="text-sky-600" />
                                                <span className="text-sm">{player?.age} {t('players.age')}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </NavLink>
                        ))}
                    </div>
                </div>
            </section>

            {/* Full Squad */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t('players.squad.title')}</h2>
                        <div className="w-24 h-1 bg-sky-500 mx-auto rounded-full"></div>
                        <p className="text-gray-600 max-w-2xl mx-auto mt-6 text-lg">
                            {t('players.squad.description')}
                        </p>
                    </div>

                    {/* Position Filters */}
                    <div className="flex flex-wrap justify-center gap-3 mb-12">
                        {['All', 'Goalkeepers', 'Defenders', 'Midfielders', 'Forwards'].map((position) => (
                            <button
                                key={position}
                                onClick={() => setActiveFilter(position)}
                                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${activeFilter === position
                                        ? 'bg-sky-600 text-white shadow-lg transform scale-105'
                                        : 'bg-white text-gray-700 border border-gray-200 hover:border-sky-300 hover:text-sky-600 hover:shadow-md'
                                    }`}
                            >
                                {t(`players.filters.${position.toLowerCase()}`)}
                            </button>
                        ))}
                    </div>

                    {/* Player Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {filteredPlayers.map(player => (
                            <NavLink
                                to={`/detailsPlayer/${player.id}`}
                                key={player.id}
                                className="block"
                            >
                                <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full">
                                    <div className="relative h-48 bg-gradient-to-b from-sky-900 to-sky-700">
                                        <div className="w-full h-full bg-gradient-to-b from-transparent to-black/20 flex items-center justify-center">
                                            {!player?.imageUrl ? (
                                                <Shirt className="w-16 h-16 text-white/20" />
                                            ) : (
                                                <img src={player?.imageUrl} className='bg-cover w-48' alt={t('players.imageAlt', { name: player.name })} />
                                            )}
                                        </div>
                                        <div className="absolute top-4 right-4 bg-white text-sky-900 w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shadow-lg">
                                            #{player.jerseyNumber}
                                        </div>
                                    </div>
                                    <div className="p-5">
                                        <h3 className="text-lg font-bold text-gray-900 mb-1">{player.name}</h3>
                                        <p className="text-sky-700 font-semibold mb-4 text-sm">{player.position}</p>
                                        <div className="grid grid-cols-2 gap-3 text-sm">
                                            <div className="flex items-center gap-2 text-gray-600">
                                                <Flag size={14} className="text-sky-600 flex-shrink-0" />
                                                <span className="truncate">{player.nationality}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-gray-600">
                                                <Calendar size={14} className="text-sky-600 flex-shrink-0" />
                                                <span>{player?.age} {t('players.ageShort')}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-gray-600">
                                                <Ruler size={14} className="text-sky-600 flex-shrink-0" />
                                                <span>{player.height}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-gray-600">
                                                <Weight size={14} className="text-sky-600 flex-shrink-0" />
                                                <span>{player.weight}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </NavLink>
                        ))}
                    </div>
                </div>
            </section>

            {/* Squad Stats */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t('players.stats.title')}</h2>
                        <div className="w-24 h-1 bg-sky-500 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-gradient-to-br from-sky-50 to-blue-50 p-8 rounded-2xl shadow-sm border border-sky-100">
                            <h3 className="text-xl font-bold text-sky-900 mb-6 flex items-center gap-2">
                                <Flag className="w-5 h-5" />
                                {t('players.stats.nationalities')}
                            </h3>
                            <div className="space-y-4">
                                {['England', 'Portugal', 'Brazil', 'Spain', 'Belgium', 'Norway'].map((nation, index) => {
                                    const count = players.filter(p => p.nationality === nation).length;
                                    return count > 0 ? (
                                        <div key={nation} className="flex items-center justify-between">
                                            <div className="flex items-center">
                                                <div className="w-8 h-8 rounded-full bg-sky-600 flex items-center justify-center text-xs font-bold text-white">
                                                    {index + 1}
                                                </div>
                                                <span className="ml-3 font-medium text-gray-700">{nation}</span>
                                            </div>
                                            <span className="font-bold text-sky-700">{count}</span>
                                        </div>
                                    ) : null;
                                })}
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-2xl shadow-sm border border-emerald-100">
                            <h3 className="text-xl font-bold text-emerald-900 mb-6 flex items-center gap-2">
                                <Calendar className="w-5 h-5" />
                                {t('players.stats.ageDistribution')}
                            </h3>
                            <div className="space-y-5">
                                {[
                                    { key: 'under25', label: 'Under 25', filter: p => p.age < 25 },
                                    { key: '25to30', label: '25-30', filter: p => p.age >= 25 && p.age <= 30 },
                                    { key: 'over30', label: '30+', filter: p => p.age > 30 }
                                ].map(({ key, label, filter }) => {
                                    const count = players.filter(filter).length;
                                    const percentage = (count / players.length) * 100;

                                    return (
                                        <div key={key}>
                                            <div className="flex justify-between mb-2">
                                                <span className="font-medium text-gray-700">{t(`players.stats.${key}`)}</span>
                                                <span className="font-bold text-emerald-700">{count}</span>
                                            </div>
                                            <div className="w-full bg-gray-200 rounded-full h-3">
                                                <div
                                                    className="bg-gradient-to-r from-emerald-500 to-teal-500 h-3 rounded-full transition-all duration-500"
                                                    style={{ width: `${percentage}%` }}
                                                ></div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-8 rounded-2xl shadow-sm border border-purple-100">
                            <h3 className="text-xl font-bold text-purple-900 mb-6 flex items-center gap-2">
                                <Shirt className="w-5 h-5" />
                                {t('players.stats.positionBreakdown')}
                            </h3>
                            <div className="space-y-5">
                                {['Goalkeeper', 'Defender', 'Midfielder', 'Forward'].map(position => {
                                    const count = players.filter(p =>
                                        position === 'Defender'
                                            ? p.position.includes('Defender')
                                            : p.position.includes(position)
                                    ).length;

                                    const percentage = (count / players.length) * 100;

                                    return (
                                        <div key={position}>
                                            <div className="flex justify-between mb-2">
                                                <span className="font-medium text-gray-700">{t(`players.positions.${position.toLowerCase()}`)}</span>
                                                <span className="font-bold text-purple-700">{count}</span>
                                            </div>
                                            <div className="w-full bg-gray-200 rounded-full h-3">
                                                <div
                                                    className="bg-gradient-to-r from-purple-500 to-indigo-500 h-3 rounded-full transition-all duration-500"
                                                    style={{ width: `${percentage}%` }}
                                                ></div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};