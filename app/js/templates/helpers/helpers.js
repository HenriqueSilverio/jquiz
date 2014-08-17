'use strict';

define( [
    'handlebars'
], function( Handlebars ) {
    Handlebars.registerHelper( 'checked', function( str, current, check ) {
        if( current == check ) {
            if( str ) {
                return str;
            }

            return 'checked'
        }
    } );
} );
