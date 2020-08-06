const base = require('./webpack.config')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = Object.assign({}, base, {
	mode: 'development',
	entry: {
		index: './examples/index.tsx',
	},
	output: {
		path: path.resolve(__dirname, 'doc')
	},
	devServer: {
		contentBase: './examples',
		hot: true,
		open: true,
		historyApiFallback: true
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'tspry ui',
			template: 'index.html',
		}),
	],
})
