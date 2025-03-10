module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ['nativewind/babel', { mode: 'transformOnly' }],
      'react-native-reanimated/plugin',
      [
        'module-resolver',
        {
          alias: {
            '@': './src',
            '@assets': './assets'
          }
        }
      ]
    ]
  };
};