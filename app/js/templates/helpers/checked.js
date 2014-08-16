'use strict';

define( [
    'handlebars'
], function( Handlebars ) {
    Handlebars.registerHelper( 'checked', function( current, check ) {
        return current === check ? 'checked' : '';
    } );
} );
