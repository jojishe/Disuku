export default {
  plugins: {
    "postcss-pxtorem": {
      rootValue: 16,
      propList: ["*"],
      selectorBlackList: [],
      replace: true,
      mediaQuery: false,
      minPixelValue: 0,
    },
  },
};
