angular-webpack-coockbook-extend
============

## Step 10

# ES6 babel

install wanted plugins

```sh
npm install babel-loader babel-core babel-preset-es2015 --save-dev

```

Webpack config changes - adding loaders for sass or less
```js

...
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel'
        }]
      }
...

```
