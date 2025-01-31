import 'react-native';
import type { ReactNode } from 'react';
import type { 
  ViewStyle, 
  TextStyle, 
  ImageStyle, 
  TouchableOpacityProps 
} from 'react-native';

declare module 'react-native' {
  interface ViewProps {
    className?: string;
    children?: ReactNode;
    style?: ViewStyle;
    testID?: string;
  }

  interface TextProps {
    className?: string;
    children?: ReactNode;
    style?: TextStyle;
    testID?: string;
  }

  interface ImageProps {
    className?: string;
    children?: ReactNode;
    style?: ImageStyle;
    testID?: string;
  }

  interface TouchableOpacityProps {
    className?: string;
    testID?: string;
  }
}