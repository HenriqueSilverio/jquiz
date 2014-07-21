'use strict';

define( [
    './model/question',
    './collection/questions'
], function( Question, Questions ) {
    var init = function() {
        var question1 = new Question({
            question: 'How are you?',
            choices: [ '1', '2', '3', '4', ],
            answer: 0
        });

        var Quiz = new Questions( [ question1 ] );

        console.log( Quiz.length );
        console.log( Quiz.at(0).isValid() );
    };

    return {
        init: init
    };
} );
