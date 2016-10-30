const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackShellPlugin = require('webpack-shell-plugin');
const bourbon = require('node-bourbon').includePaths;
const neat = require('bourbon-neat').includePaths;
const root = process.env.PWD;
const path = require('path');;

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './index.html',
    filename: 'index.html',
    inject: 'body'
});
const WebpackShellPluginConfig = new WebpackShellPlugin({
  onBuildStart: ['bash scripts/fetch_styles.sh']
});

module.exports = {

        entry: './src/entry/entry.jsx',
        output: {
            filename: 'index_bundle.js',
            path: './dist'
        },
        externals: {
            'react/addons': true,
            'cheerio': 'window',
            'react/lib/ExecutionEnvironment': true,
            'react/lib/ReactContext': true
        },
        module: {
            loaders: [
                {test: /\.jsx?$/, include: root + '/src', loader: 'babel-loader'},
                {test: /\.css$/, include: root + '/src', loader: 'style-loader!css-loader'},
                {test: /\.scss$/, include: root + '/src', loader: "style!css!sass?includePaths[]=" + bourbon + ',includePaths[]=' + neat},
                {test: /\.(ttf|eot|svg|png|woff(2)?)(\?[a-z0-9=&.]+)?$/, include: root + '/src',loader: 'file-loader'}
            ]
        },
        plugins: [HTMLWebpackPluginConfig, WebpackShellPluginConfig]
};
