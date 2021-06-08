const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const mode = 'production';
// const mode = 'development';

module.exports = {
	mode,
	entry: './src/index.js',
	output: {
		// path: path.resolve(__dirname, './build'),
		path: path.resolve(__dirname, '../photo-album-backend/build'), // 直接打包到隔壁後端的專案資料夾
		filename: 'js/index_[contenthash].js',
		publicPath: '/',
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
			{
				test: /\.(png|jpe?g|gif)$/i,
				use: [
					{
						loader: 'file-loader',
						options: {
							outputPath: 'img/',
							name: '[name]_[contenthash].[ext]',
						},
					},
				],
			},
			{
				test: /\.svg$/,
				use: ['@svgr/webpack'],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
			filename: 'index.html',
			inject: true,
			minify: true,
		}),
		new MiniCssExtractPlugin({
			filename: 'css/index_[contenthash].css',
		}),
	],
	optimization: {
		minimize: true,
		minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
	},
	// devtool: mode === 'development' ? 'eval' : false,
	// devtool: mode === 'development' ? 'eval-source-map' : false,
	// devtool: mode === 'development' ? 'inline-source-map' : false,
	// devtool: mode === 'development' ? 'source-map' : false,
	devServer: {
		port: 3000,
		historyApiFallback: true,
	},
};
