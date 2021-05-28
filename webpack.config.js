const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, './build'),
		filename: 'bundle.js',
	},
	resolve: {
		alias: {
			'@src': path.resolve(__dirname, 'src'),
		},
	},
	// need to provide when using the browserslist plugin
	target: 'web',
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-react', '@babel/preset-env'],
					},
				},
			},
			{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-modules-flow-types-loader',
					'css-loader',
				],
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					MiniCssExtractPlugin.loader,
					'css-modules-flow-types-loader',
					'css-loader',
					'postcss-loader',
					'sass-loader',
				],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Development',
			template: './public/index.html',
			filename: 'index.html',
			inject: true,
			minify: true,
		}),
		new MiniCssExtractPlugin(),
	],
	devtool: 'inline-source-map',
	devServer: {
		// contentBase: path.join(__dirname, 'public'),
		port: 3000,
		// hot: true,
	},
};
