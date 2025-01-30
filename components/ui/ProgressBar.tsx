import { View } from 'react-native';

interface ProgressBarProps {
  progress: number; // 0-100
  color?: string;
}

export default function ProgressBar({ progress, color = '#3B82F6' }: ProgressBarProps) {
  return (
    <View className="h-3 bg-gray-700 rounded-full overflow-hidden">
      <View 
        className="h-full rounded-full" 
        style={{ 
          width: `${progress}%`,
          backgroundColor: color
        }}
      />
    </View>
  );
}