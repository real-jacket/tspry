const path = require('path')
const base = require('./webpack.config')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = Object.assign({}, base, {
	mode: "production",
	entry: {
		example: './examples/index.tsx',
	},
	output: {
		path: path.resolve(__dirname, 'doc')
	},
	plugins: [new HtmlWebpackPlugin({
		title: 'Tspry - React',
		template: 'index.html'
	})],
})