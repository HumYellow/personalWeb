// nodejs 中的path模块
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin')
var CleanWebpackPlugin = require('clean-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var webpack = require('webpack');

module.exports = {
    // 入口文件，path.resolve()方法，可以结合我们给定的两个参数最后生成绝对路径，最终指向的就是我们的index.js文件
    entry: {
        index: path.resolve(__dirname, '../app/main.js'),
        app : [
            'Vue'
        ]
    },
    // 输出配置
    output: {
        // 输出路径是 myProject/output/static
        path: path.resolve(__dirname, '../dist/static'),
        publicPath: 'static/',//index引用路径
        filename: '[name].[hash].js',
        chunkFilename: '[id].[chunkhash].js'
    },
    resolve: {
        extensions: ['', '.js', '.vue'],
        root:"../node_modules",
        alias:{
            'vue$':'vue/dist/vue.min.js'
        }
    },
    module: {
        loaders: [
            // 使用vue-loader 加载 .vue 结尾的文件
            {
                test: /\.vue$/,   
                exclude: /node_modules/,  
                loader: 'vue-loader'    
            },
            {
                test: /\.js$/,
                loader: 'babel?presets=es2015',
                exclude: /node_modules/
            },
            // 加载图片
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'url-loader',
                query: {
                    limit: 10000,
                    name: '[name].[ext]?[hash:7]'
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url',
                query: {
                  limit: 10000,
                  name: 'fonts/[name].[hash:7].[ext]'
                }
            }, 
            //解析.scss文件,对于用 import 或 require 引入的sass文件进行加载，以及<style lang="sass">...</style>声明的内部样式进行加载
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract("style", 'css!sass') //这里用了样式分离出来的插件，如果不想分离出来，可以直接这样写 loader:'style!css!sass'
            }
        ]
    },
    babel: {
        presets: ['es2015', 'stage-0'],  
        plugins: ['transform-runtime']  
    },
    externals: {
       "BMap": "BMap" 
    }, 
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"',
                API_ROOT:'"http://www.wheelyschina.com/wheelyscafe/"'
            }
        }),
        new HtmlWebpackPlugin({
            filename: '../index.html',
            template: path.resolve(__dirname, '../app/app.html'),
            inject: true
        }),
        new ExtractTextPlugin("style.css"),
    ]
}