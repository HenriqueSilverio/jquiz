'use strict';

define( [
    'jquery',
    'underscore',
    'backbone',
    'appTemplates'
], function( $, _, Backbone, Templates ) {
    var AlertView = Backbone.View.extend({
        template: Templates['alert'],

        events: {
            'click .close': 'onCloseAlert'
        },

        initialize: function() {},

        render: function() {
            var html = this.template( this.model.toJSON() );
            this.$el.html( html );
            return this;
        },

        onCloseAlert: function() {
            this.remove();
            console.log('ALERTA REMOVIDO!');
        }
    });

    return AlertView;
} );
