import LottieView from 'lottie-react-native';
import { useEffect, useRef } from 'react';

interface SoccerAnimationProps {
  size?: number;
  loop?: boolean;
}

export default function SoccerAnimation({ size = 200, loop = true }: SoccerAnimationProps) {
  const animationRef = useRef<LottieView>(null);

  useEffect(() => {
    animationRef.current?.play();
  }, []);

  return (
    <LottieView
      ref={animationRef}
      source={require('@/assets/animations/ball-control.json')}
      autoPlay
      loop={loop}
      style={{ width: size, height: size }}
    />
  );
}