module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'comma-dangle': 'off',
    quotes: 'off',
    'arrow-body-style': 0,
    'space-before-function-paren': 0,
  },
};
