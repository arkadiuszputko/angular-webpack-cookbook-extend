'use strict';
var component = {
    template: require('./component.html'),
    controller: function () {
        this.welcome = "Hello world"
    }
}

module.exports = component;
