const path = require('path')
const base = require('./webpack.config')
const { merge } = require('webpack-merge')

module.exports = merge(base, {
	mode: 'production',
	entry: {
		index: './lib/index.tsx',
	},
	output: {
		path: path.resolve(__dirname, 'dist/lib'),
		library: 'tspry',
		libraryTarget: 'umd',
	},
})
