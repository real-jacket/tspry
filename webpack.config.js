const path = require('path')

module.exports = {
	entry: {
		index: './lib/index.tsx',
	},
	devServer: {
		contentBase: './dist',
		hot: true,
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		library: 'tspry',
		libraryTarget: 'umd',
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.jsx'],
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: 'awesome-typescript-loader',
			},
		],
	},
}
