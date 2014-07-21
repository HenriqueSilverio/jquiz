'use strict';

define( [
    'jquery',
    'underscore',
    'backbone',
    'localstorage',
    '../model/Question'
], function( $, _, Backbone, Question ) {
    var Questions = Backbone.Collection.extend({
        model: Question,
        localstorage: new Backbone.LocalStorage('QuizAppQuestions')
    });

    return Questions;
} );
