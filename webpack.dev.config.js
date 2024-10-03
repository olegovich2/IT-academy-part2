const { default: merge } = require('webpack-merge');
const webpackConfig = require('./webpack.config');
module.exports = merge(webpackConfig, {
	mode: 'development',
	devServer: {
		port: 3000,
		hot: true,
		open: true,
	},
});
