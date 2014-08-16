'use strict';

define( [
    'jquery',
    'underscore',
    'backbone',
    'router'
], function( $, _, Backbone, AppRouter ) {
    var init = function() {
        var quizRouter = new AppRouter();
        Backbone.history.start();

        $.getJSON( 'js/data/questions.json', function( data ) {
            var allQuestions = data;
            console.log( allQuestions );
        });

        console.log( quizRouter );
    };

    return {
        init: init
    };
} );
