module.exports = {
  plugins: {
    autoprefixer: {},
    'postcss-px-to-viewport': {
      // 视口宽度
      viewportWidth: 750,
      // 视口单位
      viewportUnit: 'vw',
      // 最小转换的像素
      minPixelValue: 1,
      mediaQuery: false,
      unitPrecision: 3
    },
    'postcss-viewport-units': {}
  }
};
