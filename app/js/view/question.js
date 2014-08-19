'use strict';

define([
    'jquery',
    'underscore',
    'backbone',
    'appTemplates'
], function( $, _, Backbone, Templates ) {
    var questionView = Backbone.View.extend({
        template: Templates['question'],

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
            this.$( '.is-active' ).removeClass( 'is-active' );
            $( e.target ).closest( 'li' ).addClass( 'is-active' );
        }
    });

    return questionView;
});
