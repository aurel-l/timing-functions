import includePaths from 'rollup-plugin-includepaths';
import babel from 'rollup-plugin-babel';

export default {
  entry: 'src/index.js',
  format: 'iife',
  dest: 'dist/index.js',
  sourceMap: true,
  moduleName: 'timing-functions',
  plugins: [
    includePaths({
      paths: ['src'],
    }),
    babel({
      env: {
        production: {
          presets: ['babili'],
        },
      },
    }),
  ],
};
