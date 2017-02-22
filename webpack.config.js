//To run in production, put in
//NODE_ENV=production webpack
var debug = process.env.NODE_ENV !== 'production';
var path = require('path');
var webpack = require('webpack');

module.exports = {
  context: path.join(__dirname, '/src'),
  devtool: debug ? 'source-map' : null,
  entry: './js-src/scripts.js',
  watch: true,
  module: {
    preLoaders: [{
      test: /\.js?$/,
      loader: 'eslint-loader'
    }],
    loaders: [
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
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};
