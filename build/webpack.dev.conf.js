var HtmlWebpackPlugin = require('html-webpack-plugin')
var path = require('path');
var webpack = require('webpack');
// 引入基本配置
var config = require('./webpack.config');
var ExtractTextPlugin = require('extract-text-webpack-plugin')
config.output.publicPath = '/';

config.plugins = [
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: '"production"',
            API_ROOT:'"//localhost:8888/"'
        }
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
        filename: 'app/index.html',
        template: path.resolve(__dirname, '../app/app.html'),
        inject: true
    }),
    new ExtractTextPlugin("style.css")
];

// var devClient = 'webpack-hot-middleware/client';
var devClient = './build/dev-client';
Object.keys(config.entry).forEach(function (name, i) {
    var extras = [devClient]
    config.entry[name] = extras.concat(config.entry[name])
})

module.exports = config;