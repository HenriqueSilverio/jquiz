'use strict';

requirejs.config({
    paths: {
        jquery      : 'libs/jquery.min',
        underscore  : 'libs/underscore.min',
        handlebars  : 'libs/handlebars.runtime.min',
        backbone    : 'libs/backbone.min',
        localstorage: 'libs/backbone.localStorage.min',
        appTemplates: 'templates/templates'
    },

    shim: {
        handlebars: {
            exports: 'Handlebars'
        }
    }
});
