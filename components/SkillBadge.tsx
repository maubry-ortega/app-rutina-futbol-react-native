import { View, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

interface SkillBadgeProps {
  name: string;
  level: number;
  color: string;
  icon: keyof typeof MaterialIcons.glyphMap;
}

export default function SkillBadge({ name, level, color, icon }: SkillBadgeProps) {
  return (
    <View className="flex-row items-center bg-gray-800 p-3 rounded-lg mb-2">
      <MaterialIcons name={icon} size={24} color={color} className="mr-3" />
      <View className="flex-1">
        <Text className="text-white font-bold">{name}</Text>
        <Text className="text-gray-400">Nivel {level}</Text>
      </View>
    </View>
  );
}