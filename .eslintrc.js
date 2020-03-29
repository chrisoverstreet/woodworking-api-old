module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'airbnb-base',
    'prettier'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
    'import',
    'prettier',
  ],
  rules: {
    'prettier/prettier': 2,
    'import/no-unresolved': 'error',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        'ts': 'never',
      }
    ]
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['ts'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      }
    },
  }
};
