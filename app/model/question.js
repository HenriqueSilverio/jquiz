'use strict';

define( [
    'jquery',
    'underscore',
    'backbone'
], function( $, _, Backbone ) {
    var Question = Backbone.Model.extend({
        defaults: {
            'question': '',
            'choices': '',
            'answer': ''
        },

        validate: function( attrs ) {
            if(
                typeof attrs.question !== 'string' ||
                attrs.question === ''
            ) {
                return 'Type a valid question.';
            }

            if(
                !$.isArray( attrs.choices ) ||
                attrs.choices.length !== 4
            ) {
                return 'Questions must have 4 choices.';
            }

            if(
                !$.isNumeric( attrs.answer ) ||
                attrs.answer > 3 ||
                attrs.answer < 0
            ) {
                return 'Provide a number between 0 and 3.';
            }
        },

        // initialize: function() {}
    });

    return Question;
} );
