module.exports = {
  useEslintrc: false,
  baseConfig: {
    extends: ['eslint:recommended']
  },
  plugins: ['react'],
  parser: 'babel-eslint',
  envs: ['browser', 'node', 'commonjs', 'es6'],
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    'no-undef': 'off',
    'no-console': 'off',
    'no-unused-vars': 'off'
  }
}