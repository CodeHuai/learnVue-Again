const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    clean: true,
    filename: "./js/[name].js",
    path: path.resolve(__dirname, './dist')
  },
  resolve: {
    extensions: ['.js', '.vue', '.json']
  },
  module: {
    rules: [
      {test: /\.js$/, loader: "babel-loader"},
      {test: /\.vue$/, loader: 'vue-loader'}
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({template: "index.html"}),
    new VueLoaderPlugin()
  ],
  devServer: {
    hot: true
  }
}
