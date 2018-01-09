/* eslint-env node */
const path = require('path');

const webpack = require('webpack');

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = (env = {}) => ({
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    libraryTarget: 'commonjs2'
  },
  target: 'node',
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new UglifyJsPlugin({
      parallel: 4,
      cache: true,
      sourceMap: true,
    }),
  ],
  devtool: 'source-map',
});
