'use strict';

import './index.css';
import 'angular';

import component from './component';

const app = {
    template: '<component></component>'
};

export default angular.module('app', [])
    .component('app', app)
    .component('component', component)
    .name;
