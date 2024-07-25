module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-reanimated/plugin',
      [
        require.resolve('babel-plugin-module-resolver'),
        {
          root: ['./'],
          alias: {
            '@assets': './assets',
            '@components': './src/components',
            '@ui': './src/components/common/ui',
            '@config': './src/config',
            '@constants': './src/constants',
            '@data': './src/data',
            '@hooks': './src/hooks',
            '@pages': './src/pages',
            '@routes': './src/routes',
            '@services': './src/services',
            '@theme': './src/theme',
            '@types': './src/types',
            '@utils': './src/utils',
            '@helpers': './src/helpers',
          },
        },
      ],
    ],
  }
}
