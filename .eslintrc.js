module.exports = {
  extends: ['eslint:recommended'],
  env: {
    es6: true,
    commonjs: true,
    node: true,
    mocha: true
  },
  parserOptions: {
    sourceType: 'module'
  },
  rules: {
    'no-console': 'off',
  }
};