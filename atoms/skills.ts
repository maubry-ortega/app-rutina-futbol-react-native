import { atom } from 'jotai';
import { database } from '@/database';
import Challenge from '@/database/models/Challenge';

type Skill = {
  id: string;
  name: string;
  unlocked: boolean;
};

export const skillsAtom = atom<Promise<Skill[]>>(async () => {
  const challenges = await database.get<Challenge>('challenges').query().fetch();
  const completedTypes = new Set(challenges.map(c => c.type));
  
  return [
    { id: '1', name: 'Regate Master', unlocked: completedTypes.has('dribbling') },
    { id: '2', name: 'Disparo Perfecto', unlocked: completedTypes.has('shooting') },
    { id: '3', name: 'Resistencia Élite', unlocked: completedTypes.has('stamina') }
  ];
});