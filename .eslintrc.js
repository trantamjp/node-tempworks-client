module.exports = {
  env: {
    browser: true,
    commonjs: true,
  },
  plugins: ['prettier', '@typescript-eslint'],
  extends: [
    'prettier',
    'eslint:recommended',
    'plugin:eslint-plugin/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  rules: {
    'prettier/prettier': ['warn'],
    '@typescript-eslint/no-unsafe-call': 'error',
    '@typescript-eslint/no-unsafe-assignment': 'error',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: './',
    project: ['./tsconfig.json'],
  },
};
