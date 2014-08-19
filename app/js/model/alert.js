'use strict';

define( [
   'jquery',
   'underscore',
   'backbone'
], function( $, _, Backbone ) {
    var Alert = Backbone.Model.extend({
        defaults: {
            type: 'info',
            message: ''
        }
    });

    return Alert;
} );
