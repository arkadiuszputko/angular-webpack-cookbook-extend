const path = require('path');

const nodeModules = path.resolve(__dirname, '../node_modules');
const pathToAngular = path.resolve(nodeModules, 'angular/angular.min.js');

const webpack = require('webpack');

const pkg = require('../package.json');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    entry: [path.resolve(__dirname, '../src/index.js')],
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
        preLoaders: [
            {
                test: /\.js$/,
                loader: "eslint-loader",
                exclude: /node_modules/
            }
        ],
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
