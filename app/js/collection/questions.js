'use strict';

define( [
    'model/question',
    'localstorage'
], function( QuestionModel ) {
    var Questions = Backbone.Collection.extend({
        model: QuestionModel,
        localStorage: new Backbone.LocalStorage( 'jQuizAppQuestions' )
    });

    return Questions;
} );
