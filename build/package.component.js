const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

const baseWebpackConfig = require('./package.config');
const Components = require('../components.json');

module.exports = merge(baseWebpackConfig,{
	entry: Components,
	output: {
		filename: '[name].js',
    libraryTarget: 'commonjs2'
	}
});