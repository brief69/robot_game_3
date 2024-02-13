module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        extensions: ['.ios.js', '.android.js', '.js', '.json'],
        alias: {
          "@screens": "./screens",
          "@utils": "./utils",
          "@assets": "./assets",
          "@styles": "./styles",
          "@data": "./data",
        },
      },
    ],
  ],
};
