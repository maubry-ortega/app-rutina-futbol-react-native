import create from 'zustand';

interface PlayerState {
  xp: number;
  level: number;
  addXP: (amount: number) => void;
}

export const usePlayerStore = create<PlayerState>((set) => ({
  xp: 0,
  level: 1,
  addXP: (amount) => set((state) => ({
    xp: state.xp + amount,
    level: Math.floor((state.xp + amount) / 1000) + 1
  }))
}));