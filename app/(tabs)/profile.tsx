import { View, Text } from 'react-native';
import { usePlayerStore } from '@/store/usePlayerStore';

export default function Profile() {
  const { level, xp } = usePlayerStore();

  return (
    <View className="flex-1 bg-gray-900 p-4">
      <Text className="text-white text-2xl font-anime">Your Stats</Text>
      <View className="mt-4">
        <Text className="text-white">Level: {level}</Text>
        <Text className="text-white">Total XP: {xp}</Text>
      </View>
    </View>
  );
}