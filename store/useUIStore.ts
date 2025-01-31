import { create } from 'zustand';

interface UIState {
  darkMode: boolean;
  notificationsEnabled: boolean;
  hapticFeedback: boolean;
  toggleSetting: (setting: keyof Omit<UIState, 'toggleSetting'>) => void;
}

export const useUIStore = create<UIState>((set) => ({
  darkMode: true,
  notificationsEnabled: true,
  hapticFeedback: true,
  toggleSetting: (setting) => set((state) => ({
    ...state,
    [setting]: !state[setting]
  }))
}));