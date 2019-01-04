const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

let baseWebpackConfig = require('./package.config');
const Components = require('../components.json');

baseWebpackConfig.entry = {};

module.exports = merge(baseWebpackConfig,{
	entry: Components,
	output: {
		filename: '[name].js',
		chunkFilename: '[id].js',
    libraryTarget: 'commonjs2'
	}
});