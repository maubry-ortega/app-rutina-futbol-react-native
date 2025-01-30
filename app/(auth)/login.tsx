import { View, TextInput, Pressable, Text } from 'react-native';
import { Link } from 'expo-router';

export default function Login() {
  return (
    <View className="flex-1 justify-center p-4 bg-gray-900">
      <TextInput
        placeholder="Email"
        className="mb-4 p-3 bg-gray-800 text-white rounded-lg"
        placeholderTextColor="#9CA3AF"
      />
      
      <TextInput
        placeholder="Password"
        secureTextEntry
        className="mb-6 p-3 bg-gray-800 text-white rounded-lg"
        placeholderTextColor="#9CA3AF"
      />

      <Pressable className="bg-blue-600 py-3 rounded-lg">
        <Text className="text-white text-center font-bold">Login</Text>
      </Pressable>

      <Link href="/register" className="mt-4 text-blue-400 text-center">
        Create Account
      </Link>
    </View>
  );
}