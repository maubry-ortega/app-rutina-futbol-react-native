module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ['nativewind/babel', { mode: 'transformOnly' }], // Modo transform
      'react-native-reanimated/plugin'
    ]
  };
};