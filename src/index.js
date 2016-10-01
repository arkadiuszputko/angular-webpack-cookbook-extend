'use strict';

var angular = require('./angular-wrapper');
var component = require('./component');

var app = {
    template: '<component></component>'
};

angular.module('app', [])
    .component('app', app)
    .component('component', component);
