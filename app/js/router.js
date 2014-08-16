'use strict';

define([
    'jquery',
    'underscore',
    'backbone',
    'model/quiz',
    'view/quiz'
], function( $, _, Backbone, QuizModel, QuizView ) {
    var AppRouter = Backbone.Router.extend({
        routes: {
            '': 'showHome',
            'result': 'showResults'
        },

        showHome: function() {
            var appModel,
                appView;

            appModel = new QuizModel();

            appView = new QuizView({
                model: appModel
            });

            $('body').html( appView.el );
        },

        showResults: function() {
            $('body').html('Your results!');
        }
    });

    return AppRouter;
});
