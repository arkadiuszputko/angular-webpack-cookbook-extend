angular-webpack-coockbook-extend
============

## Step 7

# Html loader

```sh
npm install html-loader --save-dev
```

Webpack config changes

```js

...
    module: {
        noParse: [pathToAngular],
        loaders: [
            {
                test: /\.html$/, // Only .html files
                loader: 'html' // Run html loader
            }
        ]
    }
...

```

Now we can require('*.html') in template e.g. component.js

```js
'use strict';
var component = {
    template: require('./component.html'),
    controller: function () {
        this.welcome = "Hello world"
    }
}

module.exports = component;

```
Add html-webpack-plugin to make it possible to move index.html into source

```sh
npm install html-webpack-plugin --save-dev
```

Move index.html to source ith html-plugin

```js
var HtmlWebpackPlugin = require('html-webpack-plugin');
...
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../src/index.html'),
            inject: true
        })
    ]
```


