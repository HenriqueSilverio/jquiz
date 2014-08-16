'use strict';

define([
    'jquery',
    'underscore',
    'backbone',
    'appTemplates'
], function( $, _, Backbone, Templates ) {
    var questionView = Backbone.View.extend({
        template: Templates['../app/js/templates/question.handlebars'],

        events: {
            'change input[type="radio"]': 'onChangeOption'
        },

        initialize: function() {
            this.render();
        },

        render: function() {
            var html = this.template( this.model.toJSON() );
            this.$el.html( html );
            return this;
        },

        onChangeOption: function(e) {
            console.log( 'Option has been changed!' );
        }
    });

    return questionView;
});