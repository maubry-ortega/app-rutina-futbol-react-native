import { View, TextInput, Button } from 'react-native';
import { Link } from 'expo-router';

export default function RegisterScreen() {
  return (
    <View className="flex-1 justify-center p-4 bg-gray-900">
      <TextInput 
        placeholder="Nombre" 
        className="mb-4 p-3 bg-gray-800 text-white rounded"
      />
      <TextInput 
        placeholder="Correo" 
        className="mb-4 p-3 bg-gray-800 text-white rounded"
      />
      <TextInput 
        placeholder="Contraseña" 
        secureTextEntry 
        className="mb-4 p-3 bg-gray-800 text-white rounded"
      />
      <Button title="Registrarse" color="#3B82F6" />
      <Link href="/login" className="mt-4 text-blue-500 text-center">
        Ya tengo cuenta
      </Link>
    </View>
  );
}