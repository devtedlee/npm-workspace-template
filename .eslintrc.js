module.exports = {
  root: true,
  env: { node: true, browser: true, es2021: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
    'plugin:storybook/recommended'
  ],
  ignorePatterns: ['dist', '.eslintrc.js', 'public'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'react', 'react-refresh', 'import'],
  rules: {
    'react-refresh/only-export-components': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'prefer-template': 'error',
    'react/self-closing-comp': 'error',
    'react/no-unknown-property': ['error', { 'ignore': ['css'] }],
    'prettier/prettier': [
      'error',
      {
        printWidth: 80,
        tabWidth: 2,
        singleQuote: true,
        parser: 'typescript',
        endOfLine: 'auto',
      },
    ],
    'import/order': [
      'warn',
      {
        'newlines-between': 'always',
        pathGroupsExcludedImportTypes: ['builtin'],
        distinctGroup: false,
        groups: [
          ['builtin','external'],
          'internal',
          'parent',
          'sibling',
          'index',
          'object',
        ],
        pathGroups: [
          {
            pattern: 'react+(|-dom|-router-dom)',
            group: 'external',
            position: 'before'
          },
          {
            pattern: '@/**',
            group: 'internal',
            position: 'before'
          }
        ],
        alphabetize: {
          order: 'asc', 
          caseInsensitive: true
        }
      }
    ],
    '@typescript-eslint/consistent-type-imports': 'error',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  overrides: [
    {
      files: ['*.[!d].ts', '*.[!d].tsx'],
    },
  ],
};
