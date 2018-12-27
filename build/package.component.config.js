const path = require('path');
const webpack = require('webpack');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

const Components = require('../components.json');

module.exports = {
	entry: Components,
	output: {
		path: path.resolve(process.cwd(), './lib'),
		publicPath: '/dist/',
		filename: '[name].js',
    chunkFilename: '[id].js',
    libraryTarget: 'commonjs2'
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
		extensions: ['.js', '.vue'],
		alias: {
			main: path.resolve(__dirname, '../src'),
  		packages: path.resolve(__dirname, '../packages')
		},
		modules: ['node_modules']
	},
	module: {
		loaders: [
			{
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          preserveWhitespace: false
        }
      }, 
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			}, 
			{
        test: /\.json$/,
        loader: 'json-loader'
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
        test: /\.html$/,
        loader: 'html-loader?minimize=false'
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
		new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
		new webpack.LoaderOptionsPlugin({
      minimize: true
    })
	]
}