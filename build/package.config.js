const path = require('path');
const webpack = require('webpack');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

module.exports = {
	entry: {
		'picaweb-ui': './src/components/index.js'
	},
	output: {
		path: path.resolve(__dirname, '../lib'),
		publicPath: '/dist/',
		library: 'picaweb-ui',
		libraryTarget: 'umd',
		umdNamedDefine: true
	},
	externals: {
		vue: {
			root: 'Vue',
			commonjs: 'vue',
			commonjs2: 'vue',
			amd: 'vue'
		}
	},
	resolve: {
		extensions: ['.js', '.vue']
	},
	module: {
		loaders: [
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
					loaders: {
						css: 'vue-style-loader!css-loader',
						sass: 'vue-style-loader!css-loader!sass-loader'
					},
					postLoaders: {
						html: 'babel-loader'
					}
				}
			}, 
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			}, 
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader',
					'autoprefixer-loader'
				]
			}, 
			{
				test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
				loader: 'url-loader?limit=8192'
			}
		]
	},
	plugins: [
		new ProgressBarPlugin(),
		new webpack.optimize.ModuleConcatenationPlugin(),
		new webpack.LoaderOptionsPlugin({
      minimize: true
    })
	]
}