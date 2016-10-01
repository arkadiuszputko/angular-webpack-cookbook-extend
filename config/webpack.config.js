var path = require('path');
var nodeModules = path.resolve(__dirname, '../node_modules');
var pathToAngular = path.resolve(nodeModules, 'angular/angular.min.js');

var HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
    entry: ['webpack/hot/dev-server', path.resolve(__dirname, '../src/index.js')],
    resolve: {
        alias: {
            'angular': pathToAngular
        }
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'bundle.js'
    },
    module: {
        noParse: [pathToAngular],
        loaders: [
            {
                test: /\.html$/, // Only .html files
                loader: 'html' // Run html loader
            },
            {
                test: /\.css$/, // Only .css files
                loader: 'style!css' // Run both loaders
            },
            {
                test: /\.scss$/,
                loader: 'style!css!sass'
            },
            {
                test: /\.js$/,
                loader: 'babel',
                query: {
                    presets: ['es2015']
                },
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../src/index.html'),
            inject: true
        })
    ]
};

module.exports = config;
