const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const PATHS = {
	SRC: path.join(__dirname, 'src'),
	DIST: path.join(__dirname, 'dist'),
	PUBLIC: path.join(__dirname, 'public'),
};
module.exports = {
	entry: path.resolve(PATHS.SRC, 'index.js'),
	output: {
		filename: '[name].[fullhash].js',
		path: path.resolve(PATHS.DIST),
		clean: true,
	},
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
					},
				},
			},
			{
				test: /\.s[ac]ss$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: { sourceMap: true },
					},
					'sass-loader',
				],
			},
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, 'style-loader', 'css-loader'],
			},
			{
				test: /\.png|jpe?g|gif|svg/,
				use: {
					loader: 'file-loader',
					options: {
						name: '[path][name].[ext]',
					},
				},
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(PATHS.PUBLIC, 'index.html'),
			inject: 'body',
		}),
		new MiniCssExtractPlugin(),
	],
};
