export type LeaderboardPlayer = {
    id: string;
    name: string;
    xp: number;
    level: number;
    avatarUrl?: string; // Opcional para futuras mejoras
  };
  
  export type Skill = {
    id: string;
    name: string;
    unlocked: boolean;
    requiredLevel: number; // Nuevo campo útil para gamificación
  };
  
  // Tipo para el sistema de logros
  export type Achievement = {
    id: string;
    title: string;
    description: string;
    icon: string;
    unlocked: boolean;
  };