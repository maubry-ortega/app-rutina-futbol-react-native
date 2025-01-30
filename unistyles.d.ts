// unistyles.d.ts
import type { ReactNode } from 'react';
import type { ViewStyle, TextStyle, ImageStyle } from 'react-native';

declare module 'react-native' {
  interface ViewProps {
    className?: string;
    children?: ReactNode;
    style?: ViewStyle;
  }

  interface TextProps {
    className?: string;
    children?: ReactNode;
    style?: TextStyle;
  }

  interface ImageProps {
    className?: string;
    children?: ReactNode;
    style?: ImageStyle;
  }

  // Extiende otros componentes según sea necesario (Pressable, ScrollView, etc.)
}

// unistyles.d.ts
import type { TouchableOpacityProps } from 'react-native';

declare module 'react-native' {
  interface TouchableOpacityProps {
    className?: string;
  }
}