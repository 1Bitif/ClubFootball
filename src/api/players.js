// src/api/players.js
import { manCityPlayers } from '../data/manCityPlayers';

// Simulate API call with delay
const simulateApiDelay = () => new Promise(resolve => setTimeout(resolve, 300));

export const fetchPlayers = async () => {
  await simulateApiDelay();
  return manCityPlayers;
};

export const fetchPlayerById = async (id) => {
  await simulateApiDelay();
  const player = manCityPlayers.find(p => p.id === parseInt(id));
  if (!player) throw new Error('Player not found');
  return player;
};