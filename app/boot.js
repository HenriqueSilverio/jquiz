'use strict';

requirejs.config({
    paths: {
        jquery      : 'lib/jquery.min',
        underscore  : 'lib/underscore.min',
        handlebars  : 'lib/handlebars.min',
        backbone    : 'lib/backbone.min',
        localstorage: 'lib/backbone.localStorage.min'
    }
});

require( [ 'app' ], function( App ) {
    App.init();
} );
