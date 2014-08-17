'use strict';

define([
    'jquery',
    'underscore',
    'backbone',
    '../model/question',
    '../collection/questions',
    'view/question',
    'appTemplates'
], function( $, _, Backbone, QuestionModel, QuestionCollection, QuestionView, Templates ) {
    var QuizView = Backbone.View.extend({
        template: Templates['quiz'],

        events: {
            'click #go-prev': 'onGoPrev',
            'click #go-next': 'onGoNext'
        },

        initialize: function() {
            this.render();
            this.listenTo( this.model, 'change:current', this.render );
        },

        render: function() {
            var currentIndex,
                currentQuestionData,
                currentQuestionView;

            currentIndex        = this.model.get( 'current' );
            currentQuestionData = this.collection.at( currentIndex );
            currentQuestionView = new QuestionView({ model: currentQuestionData });

            console.dir(currentQuestionData.toJSON());

            this.$el.html( this.template() );

            this.$( '#quiz-app' ).html( currentQuestionView.render().el );

            return this;
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
