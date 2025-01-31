import { useCallback } from 'react';
import { View, Text } from 'react-native'; // Importación correcta
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    'AnimeAce-Regular': require('@/assets/fonts/AnimeAce.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <View 
      onLayout={onLayoutRootView} 
      className="flex-1 justify-center items-center bg-gray-900"
    >
      <Text 
        style={{ fontFamily: 'AnimeAce-Regular' }}
        className="text-3xl text-white"
      >
        Blue Lock Training
      </Text>
    </View>
  );
}