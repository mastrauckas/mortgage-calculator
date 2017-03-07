//To run in production, put in
//NODE_ENV=production webpack
const DEBUG = process.env.NODE_ENV !== 'production';
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const colors = {
  reset: '\x1b[0m',
  fg: {

    red: '\x1b[31m'
  }
}

const outputFileName = DEBUG
  ? 'static/js/[name].bundle.js'
  : 'static/js/[name].bundle.min.[chunkhash:8].js';
const outputChunkFilename = DEBUG
  ? './src/wwwroot/static/js/[name].bundle.chunk.js'
  : './src/wwwroot/static/js/[name].bundle.min.chunk.[chunkhash:8].js';

if (DEBUG) {
  console.log(colors.fg.red, 'Building in Development mode.', colors.reset);
} else {
  console.log(colors.fg.red, 'Building in Production mode.', colors.reset);
}

module.exports = {
  context: path.join(__dirname, '/src'),
  devtool: DEBUG ? 'inline-source-map' : false,
  entry: {
    'app': './js-src/scripts.js',
    'vendor': ['react', 'sugar', 'axios']
  },
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
    path: './src/wwwroot',
    publicPath: '/',
    filename: outputFileName,
    chunkFilename: outputChunkFilename,
  },
  plugins: DEBUG ? [
    new HtmlWebpackPlugin({
      template: 'index.html',
      chunksSortMode: 'dependency'
    }),
  ] : [
      new HtmlWebpackPlugin({
        template: './wwwroot/templates/index-before-scripts.html',
        chunksSortMode: 'dependency',
        filename: './templates/index.html'
      }),
      new webpack.optimize.CommonsChunkPlugin({
        names: ['vendor', 'manifest'],
        minChunks: Infinity
      }),
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.optimize.UglifyJsPlugin({
        sourceMap: false,
        minimize: true,
        beautify: false,
        mangle: { screw_ie8: true, keep_fnames: true },
        dead_code: true,
        unused: true,
        deadCode: true,
        comments: false,
        compress: {
          screw_ie8: true,
          keep_fnames: true,
          drop_debugger: false,
          dead_code: false,
          unused: false,
          warnings: false
        }
      })
    ],
};
