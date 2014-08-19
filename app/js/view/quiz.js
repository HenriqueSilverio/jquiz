'use strict';

define([
    'model/question',
    'collection/questions',
    'view/question',
    'model/quiz',
    'appTemplates'
], function( QuestionModel, QuestionCollection, QuestionView, QuizModel, Templates ) {
    var QuizView = Backbone.View.extend({
        template: Templates['quiz'],

        events: {
            'click #go-init': 'onQuizInit',
            'click #go-prev': 'onGoPrev',
            'click #go-next': 'onGoNext'
        },

        initialize: function() {
            this.on( 'questionsLoaded', this.onQuestionsLoaded );
            this.on( 'questionsReady', this.renderQuestion );
        },

        render: function() {
            this.$el.html( this.template( this.model.toJSON() ) );
            return this;
        },

        onQuizInit: function() {
            console.log( 'BAIXANDO AS QUESTOES...' );

            $.getJSON( 'js/data/questions.json', function( data ) {
                this.trigger( 'questionsLoaded', data );
            }.bind(this) );
        },

        onQuestionsLoaded: function( jsonData ) {
            console.log( 'QUESTOES BAIXADOS COM SUCESSO!' );

            var collectionData = [],
                allQuestions   = null;

            $.each( jsonData, function( index, question ) {
                collectionData.push( new QuestionModel( question ) );
            } );

            allQuestions = new QuestionCollection( collectionData );

            this.model.set( 'total', allQuestions.length );
            this.collection = allQuestions;

            this.trigger( 'questionsReady' );

            this.$( '#go-init' ).addClass( 'is-hidden' );

            this.listenTo( this.model, 'change:current', this.renderQuestion );
        },

        renderQuestion: function() {
            var currentIndex,
                currentLabel,
                currentQuestionData,
                currentQuestionView;

            currentIndex        = this.model.get( 'current' );
            currentQuestionData = this.collection.at( currentIndex );
            currentQuestionView = new QuestionView({ model: currentQuestionData });
            currentLabel        = ( currentIndex + 1 ) + ' / ' + this.model.get( 'total' );

            this.$( '.label' ).html( currentLabel );
            this.$( '#go-next' ).removeClass( 'is-hidden' );
            this.$( '#quiz-header' ).html( currentQuestionView.render().el );

            if( currentIndex > 0 ) {
                this.$( '#go-prev' ).removeClass( 'is-hidden' );
            } else {
                this.$( '#go-prev' ).addClass( 'is-hidden' );
            }

            if( currentIndex === this.model.get( 'total' ) - 1 ) {
                this.$( '#go-next' ).html( 'Terminar' );
            } else {
                this.$( '#go-next' ).html( 'Avançar' );
            }
        },

        onGoNext: function() {
            var currentIndex,
                nextIndex,
                theAnswer;

            currentIndex = this.model.get( 'current' );
            nextIndex    = currentIndex + 1;
            theAnswer    = this.$( 'input:checked' ).val();

            this.collection.at( currentIndex ).set({
                'userAnswer': theAnswer
            });

            if( nextIndex < this.model.get( 'total' ) ) {
                this.model.set( 'current', nextIndex );
            } else {
                console.log('TODO: SHOW SCORE');
            }
        },

        onGoPrev: function() {
            var prevIndex = this.model.get( 'current' ) - 1;

            if( prevIndex >= 0 ) {
                this.model.set( 'current', prevIndex );
            }
        }
    });

    return QuizView;
});
