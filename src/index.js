'use strict';

import './index.css';
import 'angular';

import component from './component';

const app = {
    template: '<component></component>'
};

angular.module('app', [])
    .component('app', app)
    .component('component', component);
