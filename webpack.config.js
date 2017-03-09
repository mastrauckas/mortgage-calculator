//To run in production, put in
//NODE_ENV=production webpack
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const packages = require('./package.json');

const PRODUCTION = process.env.NODE_ENV === 'production';
const DEVELOPMENT = !PRODUCTION;

const environment = process.env.NODE_ENV.toUpperCase();

const colors = {
  reset: '\x1b[0m',
  fg: {
    red: '\x1b[31m'
  }
}

const outputFileName = DEVELOPMENT
  ? 'static/js/[name].bundle.js'
  : 'static/js/[name].bundle.[chunkhash:8].min.js';
const outputChunkFilename = DEVELOPMENT
  ? './src/wwwroot/static/js/[name].bundle.chunk.js'
  : './src/wwwroot/static/js/[name].bundle.chunk.[chunkhash:8].min.js';

const vendorPackages = Object.keys(packages.dependencies);

const plugins = [
  new HtmlWebpackPlugin({
    template: './wwwroot/templates/index-before-scripts.html',
    chunksSortMode: 'dependency',
    filename: './templates/index.html'
  })
];

if (PRODUCTION) {

  plugins.push(new webpack.optimize.CommonsChunkPlugin({
    names: ['vendor', 'manifest'],
    minChunks: Infinity
  }));

  plugins.push(new webpack.optimize.OccurrenceOrderPlugin());

  plugins.push(new webpack.optimize.UglifyJsPlugin({
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
  }));
}

console.log(colors.fg.red, `Building in ${environment} mode.`, colors.reset);

module.exports = {
  context: path.join(__dirname, '/src'),
  devtool: DEVELOPMENT ? 'inline-source-map' : false,
  entry: {
    'app': './js-src/scripts.js',
    'vendor': vendorPackages
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
  plugins
};
