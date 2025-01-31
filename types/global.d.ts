// Módulos de assets
declare module '*.ttf' {
    const value: import('expo-font').FontSource;
    export default value;
  }
  
  declare module '*.json' {
    const value: any;
    export default value;
  }
  
  // Extender tipos de React Native para NativeWind
  declare module 'react-native' {
    interface ViewProps {
      className?: string;
    }
    interface TextProps {
      className?: string;
    }
    interface TouchableOpacityProps {
      className?: string;
    }
    interface TextInputProps {
      className?: string;
    }

    export const View: typeof import('react-native').View;
    export const Text: typeof import('react-native').Text;
  }
  
  // Tipos globales de la aplicación
  declare global {
    type PlayerStats = {
      totalMatches: number;
      winRate: number;
      avgGoals: number;
    };
  
    type NotificationSettings = {
      soundEnabled: boolean;
      vibrationEnabled: boolean;
    };
  }