var HtmlWebpackPlugin = require('html-webpack-plugin');
var bourbon = require('node-bourbon').includePaths;
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './index.html',
  filename: 'index.html',
  inject: 'body'
});
const root = process.env.PWD;

module.exports = {
  entry: './src/entry/entry.jsx',
  output: {
    filename: 'index_bundle.js',
    path:  './build'
  },
  externals: {
    'react/addons': true,
    'cheerio': 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true
  },
  module: {
    loaders: [
      {test: /\.jsx?$/, include: root + '/src',loader: 'babel-loader'},
      {test: /\.css$/, include: root + '/src',loader: 'style-loader!css-loader'},
      {test: /\.scss$/, loader: "style!css!sass?includePaths[]=" + bourbon}
    ]
  },
  plugins: [HTMLWebpackPluginConfig]
};
