import { View, Text, Button } from 'react-native';
import { usePlayerStore } from '@/store/usePlayerStore';
import LevelUpAnimation from '@/components/LevelUpAnimation';

export default function TrainingScreen() {
  const { xp, level, addXP } = usePlayerStore();

  return (
    <View className="flex-1 bg-gray-900 p-4">
      <Text className="text-white text-2xl mb-4 font-anime">
        Level {level} - XP: {xp}
      </Text>
      
      <LevelUpAnimation />
      
      <Button
        title="Complete Drill (+250 XP)"
        onPress={() => addXP(250)}
        color="#3B82F6"
      />
    </View>
  );
}