// App.tsx
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import { usePlayerStore } from '@/store/usePlayerStore';

export default function App() {
  const [fontsLoaded] = useFonts({
    'AnimeAce': require('@assets/fonts/AnimeAce.ttf'),
  });

  const { level } = usePlayerStore();

  if (!fontsLoaded) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Blue Lock Training</Text>
      <Text style={styles.level}>Nivel Actual: {level}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F172A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'AnimeAce',
    fontSize: 32,
    color: '#FFFFFF',
    marginBottom: 20,
  },
  level: {
    fontSize: 24,
    color: '#3B82F6',
  }
});