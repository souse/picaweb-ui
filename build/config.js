const path = require('path');
const nodeExternals = require('webpack-node-externals');
const Components = require('../components.json');

let externals = {};

Object.keys(Components).forEach(function(key) {
  externals[`packages/${key}`] = `picaweb-ui/lib/${key}`;
});

externals = [Object.assign({
  vue: 'vue'
}, externals), nodeExternals()];

exports.externals = externals;

exports.alias = {
	main: path.resolve(__dirname, '../src'),
	packages: path.resolve(__dirname, '../packages'),
	'picaweb-ui': path.resolve(__dirname, '../')
};

exports.vue = {
	root: 'vue',
	commonjs: 'vue',
	commonjs2: 'vue',
	amd: 'vue'
};