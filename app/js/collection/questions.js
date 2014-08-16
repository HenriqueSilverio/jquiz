'use strict';

define( [
    'jquery',
    'underscore',
    'backbone',
    'localstorage',
    'model/Question'
], function( Question ) {
    var Questions = Backbone.Collection.extend({
        model: Question,
        localStorage: new Backbone.LocalStorage( "jQuizAppQuestions" )
    });

    return Questions;
} );
