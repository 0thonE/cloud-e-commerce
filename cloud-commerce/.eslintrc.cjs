module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'airbnb',
    'airbnb-typescript',
    'eslint-config-prettier',
  ],
  overrides: [
    {
      files: ['index.js', 'index.ts'],
      rules: {
        'import/prefer-default-export': 'off',
        'no-shadow': 'warn',
      },
    },
    {
      files: ['index.ts', 'index.tsx'],
      rules: {
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': 'error',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['react', 'react-hooks', 'json-format', '@typescript-eslint'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['tsconfig.json', 'tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
  rules: {
    semi: ['error', 'never'],
    'react/react-in-jsx-scope': 'off',
    'react/button-has-type': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/prop-types': 'off',
    'import/no-unresolved': 'off',
    'react/jsx-no-target-blank': 'warn',
    'react/jsx-tag-spacing': 'warn',
    'no-unused-vars': 'warn',
    'key-spacing': 'warn',
    // "import/extensions": [1, 'ignorePackages'],
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'no-param-reassign': [
      'error',
      { props: true, ignorePropertyModificationsForRegex: ['*draft*', '*immer*'] },
    ],
    'react/function-component-definition': [
      'error',
      {
        namedComponents: ['function-declaration', 'function-expression', 'arrow-function'],
      },
    ],
  },
}
