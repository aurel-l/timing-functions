const rules = {
  'comma-dangle': ['warn', 'only-multiline'],
  semi: ['warn', 'always', { omitLastInOneLineBlock: true }],
};

module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'standard',
    'prettier',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: ['import', '@typescript-eslint', 'prettier'],
  rules,
  env: {
    browser: true,
    node: true,
    worker: true,
  },
  settings: {
    'import/resolver': {
      node: {
        paths: [require('path').resolve('src')],
      },
    },
  },
};
