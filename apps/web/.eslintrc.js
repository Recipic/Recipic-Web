/* eslint-env node */
/** @type {import('eslint').Linter.Config} */
const path = require('path');

module.exports = {
  extends: [
    path.resolve(__dirname, '../../.eslintrc.js'),
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parserOptions: {
    project: path.resolve(__dirname, './tsconfig.json'),
    tsconfigRootDir: __dirname,
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      typescript: {
        project: path.resolve(__dirname, './tsconfig.json'),
      },
    },
  },
  rules: {
    'react/prop-types': 'off',
    'import/no-duplicates': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
  },
  ignorePatterns: ['dist', '.eslintrc.js', 'vite.config.ts'],
};
