angular-webpack-coockbook-extend
============

## Step 5

# Angular

Install angular

```sh
npm install angular --save
```

Change index.js to be angular module base

```js

import component from './component.js';

angular
  .module('main', [])
  .component('mainComponent', component);

```

Add angular this is tricky couse angular not exports in commonJs way just like that so we need to create wrapper

angular-wrapper.js

```js

(function ()
{
    if (!this.__angular_wrapper_loaded__)
    {
        this.__angular_wrapper_loaded__ = true;
        require("angular");
    }

    module.exports = angular;
})();
```

And import it in index.js, and start our angular app

```js
'use strict';

var angular = require('./angular-wrapper');
var component = require('./component');

var app = {
    template: '<component></component>'
};

angular.module('app', [])
    .component('app', app)
    .component('component', component);
```

Some changes to component
```js
'use strict';
var component = {
    template: '<h1>{{$ctrl.welcome}}</h1>',
    controller: function () {
        this.welcome = "Hello world"
    }
}

module.exports = component;

```

Finally add base <app> to index

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8"/>
</head>
<body ng-app="app">
<script src="http://localhost:8080/webpack-dev-server.js"></script>
<script src="bundle.js"></script>
    <app></app>
</body>
</html>
```
