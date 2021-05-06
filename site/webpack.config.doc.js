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
	externals: {
		react: {
			commonjs: 'react',
			commonjs2: 'react',
			amd: 'react',
			root: 'React',
		},
		'react-dom': {
			commonjs: 'react-dom',
			commonjs2: 'react-dom',
			amd: 'react-dom',
			root: 'ReactDOM',
		},
	},
})
