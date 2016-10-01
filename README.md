angular-webpack-coockbook-extend
============

## Step 8

# Css

Add css loader

```sh
npm install css-loader style-loader --save-dev
```

Webpack config changes - adding loader

```js

...
    module: {
        loaders: [
              {
                test: /\.css$/, // Only .css files
                loader: 'style!css' // Run both loaders
              }
        ]
    }
...

```
