const path = require('path');

module.exports = class WebpackHelper {
  constructor(environment) {
    this.environment = environment;
  }

  get entryPoints() {
    return ['manifest', 'polyfills', 'sw-register', 'styles', 'vendor', 'app'];
  }

  get entries() {
    return {
      polyfills: './src/js/polyfills.js',
      app: './src/js/main.js',
      styles: ['./src/css/styles.css'],
    };
  }

  get output() {
    return {
      path: path.join(process.cwd(), 'build'),
      filename: this.isDevelopment ? 'js/[name].bundle.js' : 'js/[name].bundle.[chunkhash:8].min.js',
      chunkFilename: this.isDevelopment
        ? './build/js/[id].bundle.chunk.js'
        : './build/js/[id].bundle.chunk.[chunkhash:8].min.js',
    };
  }

  get devTools() {
    return this.isDevelopment ? 'inline-source-map' : 'source-map';
  }

  get resolve() {
    return {
      extensions: ['.js'],
    };
  }

  get isProduction() {
    return this.environment === 'PRODUCTION';
  }

  get isDevelopment() {
    return this.environment === 'DEVELOPMENT';
  }

  get rules() {
    return [
      {
        test: /\.js?$/,
        enforce: 'pre',
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /.js?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: 'html-loader',
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|otf|ttf|eot|ico)$/,
        exclude: /node_modules/,
        use: 'file-loader?name=assets/[name].[hash].[ext]',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader?modules'],
        include: /flexboxgrid/,
      },
      {
        test: /\.css?$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader?{"sourceMap":false,"minimize":false}'],
      },
    ];
  }

  get node() {
    return {
      fs: 'empty',
      global: true,
      crypto: 'empty',
      tls: 'empty',
      net: 'empty',
      process: true,
      module: false,
      clearImmediate: false,
      setImmediate: false,
    };
  }

  get webpackDevServer() {
    return {
      port: 4200,
      historyApiFallback: true,
      stats: this.stats,
    };
  }

  get stats() {
    return {
      colors: true,
      hash: false,
      version: true,
      timings: true,
      assets: true,
      chunks: false,
      modules: false,
      reasons: true,
      children: true,
      source: false,
      errors: true,
      errorDetails: true,
      warnings: true,
      publicPath: true,
      cached: false,
      cachedAssets: false,
      chunkModules: false,
      chunkOrigins: false,
      depth: false,
      entrypoints: false,
      performance: false,
      providedExports: false,
      usedExports: false,
      maxModules: 0,
    };
  }
};
