const path = require('path');
const webpack = require('webpack');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

const config = require('./config');

module.exports = {
	entry: {
		app: ['./packages/index.js']
	},
	output: {
		path: path.resolve(process.cwd(), './lib'),
		publicPath: '/dist/',
		chunkFilename: '[id].js'
	},
	resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: config.alias,
    modules: ['node_modules']
  },
  externals: config.externals,
	module: {
		loaders: [
			{
        test: /\.(jsx?|babel|es6)$/,
        include: process.cwd(),
        loader: 'babel-loader'
      },
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
					preserveWhitespace: false
				}
			},
			{
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      },
			{
				test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
				loader: 'url-loader',
				query: {
          limit: 10000,
          name: path.posix.join('static', '[name].[hash:7].[ext]')
        }
			}
		]
	},
	plugins: [
		new ProgressBarPlugin(),
		// new webpack.optimize.ModuleConcatenationPlugin(),
		new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
		new webpack.LoaderOptionsPlugin({
      minimize: true
    })
	]
}