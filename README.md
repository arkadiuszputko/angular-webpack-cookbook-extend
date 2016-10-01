angular-webpack-coockbook-extend
============

## Step 9

# Less, sass, images, fonts

install wanted plugins

```sh
npm install less-loader --save-dev
npm install sass-loader node-sass webpack --save-dev
npm install url-loader --save-dev

```

Webpack config changes - adding loaders for sass or less
```js

...
    module: {
        loaders: [
            // LESS
            {
                test: /\.less$/,
                loader: 'style!css!less'
            },

            // SASS
            {
                test: /\.scss$/,
                loader: 'style!css!sass'
            },
            // PNG, JPG
            {
                test: /\.(png|jpg)$/,
                loader: 'url?limit=25000'
            }
        ]
      }
...

```
