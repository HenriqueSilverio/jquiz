'use strict';

define( [
    'jquery',
    'underscore',
    'backbone',
    'model/question',
    'localstorage'
], function( $, _, Backbone, QuestionModel ) {
    var Questions = Backbone.Collection.extend({
        model: QuestionModel,
        localStorage: new Backbone.LocalStorage( 'jQuizAppQuestions' )
    });

    return Questions;
} );
