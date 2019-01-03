const webpack = require('webpack');
const merge = require('webpack-merge');

const baseWebpackConfig = require('./package.config');
const config = require('./config');

module.exports = merge(baseWebpackConfig, {
  output: {
    filename: 'index.js',
    library: 'PICAWEBUI',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: config.alias
  },
  externals: {
    vue: config.vue
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      uglifyOptions: {
        ie8: false,
        output: {
          comments: false,
          beautify: false,
        },
        mangle: {
          keep_fnames: true
        },
        compress: {
          warnings: false,
          drop_console: true
        }
      }
    })
  ]
});