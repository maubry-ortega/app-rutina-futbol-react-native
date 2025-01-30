import { View, Text, FlatList } from 'react-native';
import { useAtom } from 'jotai';
import { leaderboardAtom } from '@/atoms/leaderboard';

export default function Leaderboard() {
  const [players] = useAtom(leaderboardAtom);

  return (
    <View className="flex-1 bg-gray-900 p-4">
      <Text className="text-white text-2xl mb-4 font-anime">Top Players</Text>
      
      <FlatList
        data={players}
        renderItem={({ item }) => (
          <View className="bg-gray-800 p-3 rounded-lg mb-2">
            <Text className="text-white">{item.name}</Text>
            <Text className="text-blue-400">XP: {item.xp}</Text>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
}