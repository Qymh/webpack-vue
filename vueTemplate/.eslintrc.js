module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended',
    'plugin:prettier/recommended'
  ],
  plugins: ['vue'],
  rules: {
    // 可以输入console
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/max-attributes-per-line': 'off',
    'prettier/prettier': ['error', { singleQuote: true }],
    // 不解析html
    'vue/no-parsing-error': 0,
    // 使用单引号
    quotes: [2, 'single']
  }
};
