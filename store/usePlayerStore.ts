import { create } from 'zustand';
import { PlayerState } from '@/types/store';

export const usePlayerStore = create<PlayerState>((set) => ({
  xp: 0,
  level: 1,
  unlockedSkills: [], // Valor inicial
  addXP: (amount: number) => set((state) => {
    const newXP = state.xp + amount;
    const newLevel = Math.floor(newXP / 1000) + 1;
    
    // Desbloquear habilidades al alcanzar ciertos niveles
    const unlockedSkills = [...state.unlockedSkills];
    if (newLevel >= 5 && !unlockedSkills.includes('skill-1')) {
      unlockedSkills.push('skill-1');
    }
    
    return {
      xp: newXP,
      level: newLevel,
      unlockedSkills
    };
  }),
  unlockSkill: (skillId: string) => set((state) => ({
    unlockedSkills: [...state.unlockedSkills, skillId]
  }))
}));