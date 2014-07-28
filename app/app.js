'use strict';

define( [
    'model/question',
    'collection/questions'
], function( Question, Questions ) {
    var init = function() {
        var question = new Question( {
            question: 'How are you?',
            choices: [ '1', '2', '3', '4' ],
            answer: 0
        } );

        var questions = new Questions();

        // console.log( questions.length );

        questions.create( question );

        // console.log( questions.length );

        // console.log( Backbone.LocalStorage );
    };

    return {
        init: init
    };
} );
