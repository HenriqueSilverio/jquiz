'use strict';

module.exports = function( grunt ) {
    require( 'load-grunt-tasks' )( grunt );

    var configs = {
        paths: {
            app: '../app',
            dist: '../dist',
            templates: '../app/js/templates'
        },

        handlebars: {
            compile: {
                options: {
                    amd: [ 'handlebars', 'templates/helpers/checked' ]
                },
                files: {
                    '<%= paths.templates %>/templates.js': '<%= paths.templates %>/*.handlebars'
                }
            }
        }
    };

    grunt.initConfig( configs );

    grunt.registerTask( 'default', [ 'handlebars:compile' ] );
};
