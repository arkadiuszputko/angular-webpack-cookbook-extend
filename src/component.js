'use strict';
var component = {
    template: '<h1>{{$ctrl.welcome}}</h1>',
    controller: function () {
        this.welcome = "Hello world"
    }
}

module.exports = component;
