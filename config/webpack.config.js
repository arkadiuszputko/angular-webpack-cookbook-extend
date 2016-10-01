var path = require('path');
var nodeModules = path.resolve(__dirname, '../node_modules');
var pathToAngular = path.resolve(nodeModules, 'angular/angular.min.js');

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
        noParse: [pathToAngular]
    }
};

module.exports = config;
