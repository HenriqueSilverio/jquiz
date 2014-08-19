'use strict';

define([
    'model/quiz',
    'view/quiz'
], function( QuizModel, QuizView ) {
    var AppRouter = Backbone.Router.extend({
        routes: {
            '': 'showHome',
            'result': 'showResults'
        },

        initialize: function() {},

        showHome: function() {
            var appModel,
                appView;

            appModel = new QuizModel({
                current: 0
            });

            appView = new QuizView({
                model: appModel
            });

            $( 'body' ).append( appView.render().el );
        },

        showResults: function() {
            $('body').html('Your results!');
        }
    });

    return AppRouter;
});
