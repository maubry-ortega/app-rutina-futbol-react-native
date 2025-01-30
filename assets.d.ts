// assets.d.ts
declare module '*.ttf' {
    const value: import('expo-font').FontSource;
    export default value;
}

declare module '*.json' {
    const value: any;
    export default value;
  }