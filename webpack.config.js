const path = require('path');
const webpack = require('webpack');

module.exports = {
	context: path.resolve(__dirname),
	entry: [
		// 'react-hot-loader/patch',
		// 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=2000&overlay=true',
		'./index.jsx'
	],
	output: {
		filename: 'index.bundle.js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/dist/'
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				loader: 'babel-loader',
				// exclude: /node_modules/,
				options: {
					plugins: ['transform-runtime'],
					presets: ['es2015', 'react', 'stage-1']
				}
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
		// new webpack.DefinePlugin({
		// 	'process.env': {
		// 		NODE_ENV: JSON.stringify('production')
		// 	}
		// }),
		// new webpack.optimize.UglifyJsPlugin({sourceMap: true})
	],
	devtool: 'source-map',
	resolve: {
		extensions: ['.js', '.jsx']
	}
};
