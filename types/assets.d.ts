declare module '*.ttf' {
    import { FontSource } from 'expo-font';
    const value: FontSource;
    export default value;
  }
  
  declare module '*.json' {
    const value: Record<string, any>;
    export default value;
  }
  
  declare module '*.png' {
    import { ImageSourcePropType } from 'react-native';
    const value: ImageSourcePropType;
    export default value;
  }