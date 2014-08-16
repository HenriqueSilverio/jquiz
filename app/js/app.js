'use strict';

define( [
    'model/question',
    'view/question'
], function( QuestionModel, QuestionView ) {
    var init = function() {
        var question1 = new QuestionModel({
            question: 'Who is Prime Minister of the United Kingdom?',
            choices: [
                "David Cameron",
                "Gordon Brown",
                "Winston Churchill",
                "Tony Blair"
            ],
            answer: 0,
            userAnswer: 2
        });

        var questionView = new QuestionView({ model: question1 });

        $( '#quiz-app' ).append( questionView.render().el );
    };

    return {
        init: init
    };
} );
