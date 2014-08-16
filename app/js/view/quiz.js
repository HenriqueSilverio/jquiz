'use strict';

define([
    'jquery',
    'underscore',
    'backbone',
    'appTemplates',
], function( $, _, Backbone, Templates ) {
    var QuizView = Backbone.View.extend({
        template: Templates['quiz'],

        initialize: function() {
            this.render();
        },

        render: function() {
            var html = this.template();
            this.$el.html( html );
            return this;
        }
    });

    return QuizView;
});
