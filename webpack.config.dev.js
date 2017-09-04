import path from 'path';
import webpack from 'webpack';

export default {
	devtool: 'eval-source-map',
	entry: [
		'webpack-hot-middleware/client',
		path.join(__dirname, '/client/index.js')
	],
	output: {
		path: '/',
		publicPath: '/',
		filename: 'bundle.js'
	},
	plugins: [
		new webpack.NoErrorsPlugin(),
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery'
		})
	],
	module: {
		loaders: [
			{
				test: /\.js$/,
				include: [
					path.join(__dirname, 'client'),
					path.join(__dirname, 'server/shared')
				],
				loaders: [
					'react-hot-loader',
					'babel-loader'
				]
			},
			{
				test: /\.jsx$/,
				include: path.join(__dirname, 'client'),
				loaders: [
					'react-hot-loader',
					'babel-loader'
				]
			},
			{
				test: /\.css$/,
				loaders: 'style-loader!css-loader'
			},
			{
				test: /\.(svg|ttf|woff|woff2|eot)$/,
				loaders: 'url-loader?limit=5000'
			}
		]
	},
	resolve: {
		extensions: ['.js', '.jsx']
	}
}
