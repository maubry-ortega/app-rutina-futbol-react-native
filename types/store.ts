export interface PlayerState {
    xp: number;
    level: number;
    unlockedSkills: string[]; // Array de skill IDs
    addXP: (amount: number) => void;
    unlockSkill: (skillId: string) => void;
  }
  
  export interface UIState {
    darkMode: boolean;
    notificationsEnabled: boolean;
    hapticFeedback: boolean;
    toggleSetting: (setting: 'darkMode' | 'notificationsEnabled' | 'hapticFeedback') => void;
  }