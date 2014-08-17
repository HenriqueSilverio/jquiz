'use strict';

module.exports = function( grunt ) {
    require( 'load-grunt-tasks' )( grunt );

    var configs = {
        paths: {
            app: '../app',
            dist: '../dist',
            templates: '../app/js/templates'
        },

        browserSync: {
            dev: {
                bsFiles: {
                    src: [
                        '../app/*.html',
                        '../app/css/*.css',
                        '../app/js/**/*.js'
                    ]
                },

                options: {
                    watchTask: true,
                    server: {
                        baseDir: '../app'
                    }
                }
            }
        },

        watch: {
            css: {
                files: [ '../app/scss/**/*.scss' ],
                tasks: [ 'compass' ]
            },

            js: {
                files: [
                    '../app/js/**/*.js',
                    '!<%= paths.templates %>/*.js' ],
                tasks: [ 'jshint' ]
            },

            templates: {
                files: [
                    '<%= paths.templates %>/helpers/*.js',
                    '<%= paths.templates %>/*.handlebars'
                ],

                tasks: [ 'handlebars:compile' ]
            }
        },

        compass: {
            compile: {
                options: {
                    sassDir: '../app/scss',
                    cssDir: '../app/css',
                    imagesDir: '../app/img',
                    javascriptsDir: '../app/js',
                    fontsDir: '../app/fonts',
                    outputStyle: 'compressed'
                }
            }
        },

        jshint: {
            options: {
                jshintrc: '.jshintrc',
                ignores: [
                    '../app/js/libs/*.js',
                    '../app/js/templates/templates.js'
                ]
            },

            all: [
                'Gruntfile.js',
                '../app/js/**/*.js'
            ]
        },

        handlebars: {
            compile: {
                options: {
                    amd: [ 'handlebars', 'templates/helpers/helpers' ],

                    processName: function( filePath ) {
                        var pieces = filePath.split( '/' );
                        return pieces[ pieces.length - 1 ].split( '.' )[0];
                    }
                },
                files: {
                    '<%= paths.templates %>/templates.js': '<%= paths.templates %>/*.handlebars'
                }
            }
        }
    };

    grunt.initConfig( configs );

    grunt.registerTask( 'default', [ 'browserSync:dev', 'watch' ] );
};
