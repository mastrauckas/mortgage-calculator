//To run in production, put in
//NODE_ENV=production webpack
var debug = process.env.NODE_ENV !== 'production';
var path = require('path');
var webpack = require('webpack');

module.exports = {
  context: path.join(__dirname, '/src'),
  devtool: debug ? 'inline-source-map' : false,
  entry: './js-src/scripts.js',
  watch: true,
  module: {
    rules: [
      {
        test: /\.js?$/,
        enforce: 'pre',
        exclude: /node_modules/,
        loader: 'eslint-loader'
      },
      {
        test: /.js?$/,
        exclude: /(node_modules)|(bower_components)/,
        loader: 'babel-loader'
      }
    ]
  },
  output: {
    path: path.join(__dirname, '/src/wwwroot/static/js'),
    publicPath: '/static/js',
    filename: 'scripts.min.js'
  },
  plugins: debug ? [] : [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};
