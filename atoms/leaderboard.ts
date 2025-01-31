import { atom } from 'jotai';
import { database } from '@/database';
import Player from '@/database/models/Player';

type LeaderboardPlayer = {
  id: string;
  name: string;
  xp: number;
  level: number;
};

// 1. Átomo base con tipado correcto
const leaderboardBaseAtom = atom(
  // Función read
  async (): Promise<LeaderboardPlayer[]> => {
    const players = await database.get<Player>('players').query().fetch();
    return players
      .sort((a, b) => b.xp - a.xp)
      .map((player): LeaderboardPlayer => ({
        id: player.id,
        name: player.name,
        xp: player.xp,
        level: player.level
      }));
  },
  // Función write corregida
  (get, set, update: Promise<LeaderboardPlayer[]>) => {
    set(leaderboardBaseAtom, update);
  }
);

// 2. Átomo de refresh optimizado
export const refreshLeaderboardAtom = atom(
  null,
  (get, set) => {
    const newDataPromise = database.get<Player>('players').query().fetch()
      .then(players => players
        .sort((a, b) => b.xp - a.xp)
        .map((player): LeaderboardPlayer => ({
          id: player.id,
          name: player.name,
          xp: player.xp,
          level: player.level
        }))
      );
    
    set(leaderboardBaseAtom, newDataPromise);
  }
);

// 3. Átomo consumible
export const leaderboardAtom = atom((get) => get(leaderboardBaseAtom));