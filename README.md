angular-webpack-coockbook-extend
============

## Step 2

# Automatic browser refresh

Add script tag

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8"/>
  </head>
  <body>
    <script src="http://localhost:8080/webpack-dev-server.js"></script>
    <script src="bundle.js"></script>
  </body>
</html>
```

Add entry point to config

```js
var path = require('path');

module.exports = {
  entry: ['webpack/hot/dev-server', path.resolve(__dirname, '../app/main.js')],
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: 'bundle.js'
  },
};
```
