// metro.config.js
const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

config.transformer.babelTransformerPath = require.resolve('nativewind/metro');

module.exports = config;