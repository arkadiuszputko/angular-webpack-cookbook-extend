angular-webpack-coockbook-extend
============

## Step 6

# Angular not proccessed every time

Webpack config changes

```js

var path = require('path');
var nodeModules = path.resolve(__dirname, '../node_modules');
var pathToAngular = path.resolve(nodeModules, 'angular/angular.min.js');

var config = {
  entry: path.resolve(__dirname, '../app/main.js'),
  resolve: {
    alias: {
      'angular': pathToAngular
    }
  },
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: 'bundle.js'
  },
  module: {
    noParse: [pathToAngular]
  }
};

module.exports = config;

```

We do two things in this configuration:

1. Whenever "angular" is required in the code it will fetch the minified Angular JS file instead of going to node_modules

2. Whenever Webpack tries to parse the minified file, we stop it, as it is not necessary
