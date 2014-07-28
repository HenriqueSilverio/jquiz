'use strict';

require( [ '../app/config' ], function() {
    requirejs.config({
        baseUrl: '../app',
        urlArgs: 'now=' + Date.now(),
        paths: {
            unit: '../test/unit'
        }
    });
} );
