'use strict';

define([
    'jquery',
    'underscore',
    'backbone'
], function( $, _, Backbone ) {
    var AppModel = Backbone.Model.extend({
        defaults: {
            score: 0,
            total: 0,
            current: 0
        }
    });

    return AppModel;
});
