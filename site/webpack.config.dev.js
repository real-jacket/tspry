const base = require('./webpack.config')
const path = require('path')
const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(base, {
  mode: 'development',
  entry: {
    index: path.resolve(__dirname, './index.tsx'),
  },
  output: {
    path: path.resolve(__dirname, '/doc'),
  },
  devServer: {
    contentBase: path.resolve(__dirname, '.'),
    hot: true,
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'tspry ui',
      template: path.resolve(__dirname, './public/index.html'),
    }),
  ],
})
