angular-webpack-coockbook-extend
============

## Step 11

# Chunks and linting,

install wanted plugins

```sh
npm install babel-loader babel-core babel-preset-es2015 --save-dev

```

Webpack config changes - adding loaders for sass or less
```js
...
    entry: {
        app: path.resolve(__dirname, '../src/index.js'),
        vendor: ['angular']
    },
...
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({name: 'vendor', filename: 'vendor.js', minChunks: Infinity})
    ]
...

```

# linting

```sh
npm install eslint eslint-loader babel-eslint@6 --save-dev
```

use eslint as a preloader to be sure its there

```js
...
    preLoaders: [
        {
            test: /\.js$/,
            loader: "eslint-loader",
            exclude: /node_modules/
        }
    ]
...
```

add some eslint configs

```sh
npm install --save-dev eslint-config-angular
npm install --save-dev eslint-plugin-angular
```

and .eslintrc file
```json
{
  "parser": "babel-eslint",
  "rules": {
    "strict": 0
  },
  "plugins": ["angular"],
  "extends": "angular"
}
```
