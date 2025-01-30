// hooks/useFonts.ts
import * as Font from 'expo-font';

// Exportación por defecto (con "default")
export default function useFonts() {
  return Font.useFonts({
    'AnimeAce': require('@/assets/fonts/AnimeAce.ttf'),
  });
}