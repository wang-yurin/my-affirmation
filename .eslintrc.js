module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint', 'react-hooks', '@emotion', 'prettier'],
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
  rules: {
    'react/no-unknown-property': [
      'error',
      {
        ignore: ['css'],
      },
    ],
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
  },
};
