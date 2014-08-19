'use strict';

define( [
    'router'
], function( AppRouter ) {
    var init = function() {
        var quizRouter = new AppRouter();
        Backbone.history.start();
    };

    return {
        init: init
    };
} );
