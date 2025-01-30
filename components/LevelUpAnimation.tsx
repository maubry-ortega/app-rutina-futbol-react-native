import LottieView from 'lottie-react-native';
import { useEffect, useRef } from 'react';
import { View } from 'react-native';

export default function LevelUpAnimation() {
  const animationRef = useRef<LottieView>(null);

  useEffect(() => {
    animationRef.current?.play();
    return () => animationRef.current?.reset();
  }, []);

  return (
    <View className="items-center justify-center h-64">
      <LottieView
        ref={animationRef}
        source={require('@/assets/animations/level-up.json')}
        autoPlay
        loop={false}
        style={{ width: 250, height: 250 }}
      />
    </View>
  );
}