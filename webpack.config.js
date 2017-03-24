//To run in production, put in
//NODE_ENV=production webpack
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const packages = require('./package.json');

const environment = process.env.NODE_ENV.toUpperCase();

const PRODUCTION = environment === 'PRODUCTION';
const DEVELOPMENT = environment === 'DEVELOPMENT';

const colors = {
  reset: '\x1b[0m',
  fg: {
    red: '\x1b[31m'
  }
}

const outputCssFileName = DEVELOPMENT
  ? 'static/css/app.bundle.css'
  : 'static/css/app.bundle.[chunkhash:8].css';

const vendorOutputCssFileName = DEVELOPMENT
  ? 'static/css/vendor.bundle.css'
  : 'static/css/vendor.bundle.[chunkhash:8].css';

const outputFileName = DEVELOPMENT
  ? 'static/js/[name].bundle.js'
  : 'static/js/[name].bundle.[chunkhash:8].min.js';

const outputChunkFilename = DEVELOPMENT
  ? './build/static/js/[name].bundle.chunk.js'
  : './build/static/js/[name].bundle.chunk.[chunkhash:8].min.js';

const flexboxgrid = DEVELOPMENT
  ? '../node_modules/flexboxgrid/dist/flexboxgrid.css'
  : '../node_modules/flexboxgrid/dist/flexboxgrid.min.css'

const vendorPackages = Object.keys(packages.dependencies);

const extractCssPlugin = new ExtractTextPlugin({
  filename: outputCssFileName,
  allChunks: true
})

const vendorExtractCssPlugin = new ExtractTextPlugin({
  filename: vendorOutputCssFileName,
  allChunks: true
})

const plugins = [
  new HtmlWebpackPlugin({
    template: './html/index.html',
    chunksSortMode: 'dependency',
    filename: './templates/index.html',

    minify: {
      removeComments: PRODUCTION,
      collapseWhitespace: PRODUCTION
    }
  }),
  new webpack.optimize.CommonsChunkPlugin({
    names: ['vendor', 'manifest'],
    minChunks: Infinity
  }),
  extractCssPlugin,
  vendorExtractCssPlugin
];

if (PRODUCTION) {

  plugins.push(new webpack.optimize.OccurrenceOrderPlugin());
  plugins.push(new webpack.NamedModulesPlugin())
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
    'app': './js/scripts.js',
    'vendor': vendorPackages,
    'css': './css/style.css',
    'vendorCss': flexboxgrid
  },
  output: {
    path: './build',
    publicPath: '/',
    filename: outputFileName,
    chunkFilename: outputChunkFilename,
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
      },
      {
        test: /\.css?$/,
        exclude: /node_modules/,
        loader: extractCssPlugin.extract({
          loader: 'css-loader',
          options: {
            sourceMap: false,
            minimize: PRODUCTION
          }
        })
      },
      {
        test: /\.css?$/,
        include: /node_modules/,
        loader: vendorExtractCssPlugin.extract({
          loader: 'css-loader',
          options: {
            sourceMap: false,
            minimize: PRODUCTION
          }
        })
      },
    ]
  },
  plugins
};
