const { CommonsChunkPlugin, OccurrenceOrderPlugin, UglifyJsPlugin } = require('webpack').optimize;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { NamedModulesPlugin, NoEmitOnErrorsPlugin, DefinePlugin } = require('webpack');
const path = require('path');
const fs = require('fs');
const WebpackHelper = require('./WebpackHelper');

const nodeModules = path.join(process.cwd(), 'node_modules');
const realNodeModules = fs.realpathSync(nodeModules);
const genDirNodeModules = path.join(process.cwd(), 'src', '$$_gendir', 'node_modules');

module.exports = class WebpackDevHelper extends WebpackHelper {
  constructor(environment) {
    super(environment);
  }

  get hostApi() {
    return process.env.hostApi;
  }

  get plugins() {
    const plugins = [
      new NoEmitOnErrorsPlugin(),
      new HtmlWebpackPlugin({
        template: 'src/html/index.html',
        chunksSortMode: (left, right) => {
          let leftIndex = this.entryPoints.indexOf(left.names[0]);
          let rightIndex = this.entryPoints.indexOf(right.names[0]);
          if (leftIndex > rightIndex) {
            return 1;
          } else if (leftIndex < rightIndex) {
            return -1;
          } else {
            return 0;
          }
        },
        fileName: './index.html',
        hash: false,
        compile: false,
        favicon: false,
        cache: false,
        showErrors: true,
        chunks: 'all',
        excludeChunks: [],

        minify: {
          removeComments: this.isProduction,
          collapseWhitespace: this.isProduction,
        },
      }),

      new DefinePlugin({
        __HOST_API__: JSON.stringify(this.hostApi),
      }),

      new CommonsChunkPlugin({
        name: ['manifest'],
        minChunks: null,
      }),

      new CommonsChunkPlugin({
        name: ['vendor'],
        minChunks: module => {
          return (
            module.resource &&
            (module.resource.startsWith(nodeModules) ||
              module.resource.startsWith(genDirNodeModules) ||
              module.resource.startsWith(realNodeModules))
          );
        },
        chunks: ['app'],
      }),

      new CommonsChunkPlugin({
        name: ['app'],
        minChunks: 2,
        async: 'common',
      }),
    ];

    if (this.isProduction) {
      plugins.push(new OccurrenceOrderPlugin());
      plugins.push(new NamedModulesPlugin());
      plugins.push(
        new UglifyJsPlugin({
          sourceMap: true,
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
            warnings: false,
          },
        })
      );
    }

    return plugins;
  }
};
