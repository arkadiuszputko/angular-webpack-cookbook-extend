angular-webpack-cookbook-extend
============

## Step 1

Initiate project

```sh
npm init
```

Install webpack
```sh
npm i --save-dave webpack
```

Add the directory structure

    .
    ├── config
    │   └── webpack.config.js
    ├── dist
    │   ├── bundle.js
    │   └── index.html
    ├── node_modules
    ├── src
    │   ├── component.js
    │   └── index.js
    └── package.json

Add build script to package.json

```json
"scripts": {
    "build": "webpack --config config/webpack.config.js"
}
```

webpack.config.js

```js
var path = require('path');

module.exports = {
    entry: path.resolve(__dirname, '../src/index.js'),
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'bundle.js'
    },
};
```

index.js

```js
'use strict';
var component = require('./component.js');

document.body.appendChild(component());
```

component.js

```js
'use strict';

module.exports = function () {
    var element = document.createElement('h1');

    element.innerHTML = 'Hello world';

    return element;
};

```

index.html

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8"/>
</head>
<body>
<script src="bundle.js"></script>
</body>
</html>

```

Run build
```sh
npm run build
```