const path = require('path')
const base = require('./webpack.config')
const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(base, {
	mode: 'production',
	entry: {
		example: './examples/index.tsx',
	},
	output: {
		path: path.resolve(__dirname, 'doc'),
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Tspry - React',
			template: 'index.html',
		}),
	],
})
