const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

const Components = require('../components.json');

let externals = {};

Object.keys(Components).forEach(function(key) {
  externals[`picaweb-ui/packages/${key}`] = `picaweb-ui/lib/${key}`;
});

externals = [Object.assign({
  vue: 'vue'
}, externals), nodeExternals()];

module.exports = {
	entry: Components,
	output: {
		path: path.resolve(process.cwd(), './lib'),
		publicPath: '/dist/',
		filename: '[name].js',
    chunkFilename: '[id].js',
    libraryTarget: 'commonjs2'
	},
	externals,
	resolve: {
		extensions: ['.js', '.vue', '.json'],
		alias: {
			main: path.resolve(__dirname, '../src'),
  		packages: path.resolve(__dirname, '../packages'),
  		'picaweb-ui': path.resolve(__dirname, '../')
		},
		modules: ['node_modules']
	},
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