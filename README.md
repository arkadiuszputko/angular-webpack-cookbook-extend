angular-webpack-coockbook-extend
============

## Step 2

Add webpack dev server

```sh
npm i webpack-dev-server --save-dev
```

Add start script to webpack conf

```json
{
  "scripts": {
    "build": "webpack --config config/webpack.config.js",
    "start": "webpack-dev-server --devtool eval --config config/webpack.config.js --progress --colors --hot --content-base dist"
  }
}
```

Meaning of the start commands:

1. webpack-dev-server - Starts a web service on localhost:8080
2. --devtool eval - Creates source urls for your code. Making you able to pinpoint by filename and line number where any errors are thrown
3. --config config/webpack.config.js - this points webpack to the relative config file
4. --progress - Will show progress of bundling your application
5. --colors - Yay, colors in the terminal!
6. --content-base dist - Points to the output directory configured