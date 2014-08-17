'use strict';

define([
    'jquery',
    'underscore',
    'backbone',
    'model/quiz',
    'view/quiz',
    'model/question',
    'collection/questions'
], function( $, _, Backbone, QuizModel, QuizView, QuestionModel, QuestionCollection ) {
    var AppRouter = Backbone.Router.extend({
        routes: {
            '': 'showHome',
            'result': 'showResults'
        },

        initialize: function() {
            this.on( 'questionsLoaded', this.onQuestionsLoaded );
        },

        showHome: function() {
            $.getJSON( 'js/data/questions.json', function( data ) {
                this.trigger( 'questionsLoaded', data );
            }.bind(this) );
        },

        showResults: function() {
            $('body').html('Your results!');
        },

        onQuestionsLoaded: function( jsonData ) {
            var appModel       = null,
                appView        = null,
                collectionData = [],
                allQuestions   = null;

            $.each( jsonData, function( index, question ) {
                collectionData.push( new QuestionModel( question ) );
            } );

            allQuestions = new QuestionCollection( collectionData );

            appModel = new QuizModel({
                total: allQuestions.length
            });

            appView = new QuizView({
                model: appModel,
                collection: allQuestions
            });

            $( 'body' ).append( appView.render().el );
        }
    });

    return AppRouter;
});
