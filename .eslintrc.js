const path = require('path');

const rules= {
  'comma-dangle': ['warn', 'only-multiline'],
  'semi': ['warn', 'always', {'omitLastInOneLineBlock': true}],
};

module.exports = {
  extends: ['standard', 'plugin:import/errors', 'plugin:import/warnings'],
  plugins: ['import'],
  rules,
  env: {
    browser: true,
    node: true,
    worker: true,
  },
  settings: {
    'import/resolver': {
      node: {
        paths: [
          path.resolve('src'),
        ],
      }
    }
  }
};
