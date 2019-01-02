const webpack = require('webpack')
const merge = require('webpack-merge')
const config = require('../config')
const baseWebpackConfig = require('./package.config')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const extractScss = new ExtractTextPlugin('/index.css')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = merge(baseWebpackConfig, {
  output: {
    filename: 'index.js',
    library: 'picaweb-ui',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    loaders: [
      {
        test: /\.scss$/i,
        loader: extractScss.extract(['css-loader', 'sass-loader'])
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
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
    }),
    extractScss,
    new OptimizeCSSPlugin({
      cssProcessorOptions: config.build.productionSourceMap ?
        {
          safe: true,
          map: {
            inline: false
          }
        } :
        {
          safe: true
        }
    })
  ]
});