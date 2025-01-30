import { useCallback } from 'react';
import { View, Text } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

// Configuración de Splash Screen
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  // Carga la fuente anime
  const [fontsLoaded] = useFonts({
    AnimeAce: require('@/assets/fonts/AnimeAce.ttf'),
  });

  // Oculta el splash screen cuando las fuentes estén listas
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <View onLayout={onLayoutRootView} className="flex-1">
      <Text style={{ fontFamily: 'AnimeAce' }} className="text-2xl text-center mt-10">
        Blue Lock Training
      </Text>
    </View>
  );
}