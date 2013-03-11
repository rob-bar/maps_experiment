/*jslint node: true */
'use strict';
module.exports = function (grunt) {
    // load all grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    // configurable paths
    var yeomanConfig = {
        app: 'app'
    };

    grunt.initConfig({
        yeoman: yeomanConfig,
        jsfiles: ['<%= yeoman.app %>/assets/js/*.js'],
        coffeefiles:['<%= yeoman.app %>/assets/coffee/*.coffee'],
        watch: {
            coffee: {
                files: '<%= coffeefiles %>',
                tasks: ['coffee:app']
            },
            compass: {
                files: ['<%= yeoman.app %>/assets/sass/*.{scss,sass}'],
                tasks: ['compass:dist']
            },
            livereload: {
                files: [
                    '<%= yeoman.app %>/*.html',
                    '<%= yeoman.app %>}/assets/css/*.css',
                    '<%= jsfiles %>',
                    '<%= yeoman.app %>/assets/images/*.{png,jpg,jpeg}'
                ],
                tasks: ['livereload']
            }
        },
        coffee: {
            app: {
                expand: true,
                cwd: '<%= yeoman.app %>/assets/coffee',
                src: ['*.coffee'],
                dest: '<%= yeoman.app %>/assets/js/',
                ext: '.js',
                filter: 'isFile'
            }
        },
        compass: {
            dist:{
                options: {
                    require: ['compass-h5bp', 'ceaser-easing'],
                    sassDir: '<%= yeoman.app %>/assets/sass',
                    cssDir: '<%= yeoman.app %>/assets/css',
                    imagesDir: '<%= yeoman.app %>/assets/images',
                    javascriptsDir: '<%= yeoman.app %>/assets/js',
                    fontsDir: '<%= yeoman.app %>/assets/font',
                    importPath: '<%= yeoman.app %>/assets/components',
                    raw: 'preferred_syntax = :sass\n',
                    environment: 'development',
                    relativeAssets: true
                },
                server: {
                    options: {
                        debugInfo: true
                    }
                }
            },
            min: {
                options: {
                    require: ['compass-h5bp', 'ceaser-easing'],
                    sassDir: '<%= yeoman.app %>/assets/sass',
                    cssDir: '<%= yeoman.app %>/assets/css',
                    imagesDir: '<%= yeoman.app %>/assets/images',
                    javascriptsDir: '<%= yeoman.app %>/assets/js',
                    fontsDir: '<%= yeoman.app %>/assets/font',
                    importPath: '<%= yeoman.app %>/assets/components',
                    raw: 'preferred_syntax = :sass\n',
                    outputStyle: 'compressed',
                    environment: 'production',
                    noLineComments: true,
                    relativeAssets: true
                },
                server: {
                    options: {
                        debugInfo: true
                    }
                }
            }
        },
        concat: {
            dist: {
                src: '<%= jsfiles %>',
                dest: '<%= yeoman.app %>/assets/src/main.conc.js'
            }
        },
        uglify: {
            dist: {
                files: {
                    '<%= yeoman.app %>/assets/src/main.min.js': '<%= yeoman.app %>/assets/src/main.conc.js'
                }
            }
        },
        jshint: {
            all: ['Gruntfile.js', '<%= yeoman.app %>/assets/js/*.js']
        },
        bower: {
            rjsConfig: '<%= yeoman.app %>/assets/js/main.js',
            indent: '    '
        }
    });

    grunt.renameTask('regarde', 'watch');

    grunt.registerTask('compilemin', [
        'compass:min',
        'coffee:app',
        'jshint',
        'concat',
        'uglify'
    ]);

    grunt.registerTask('compile', [
        'compass:dist',
        'coffee:app',
        'jshint',
        'concat'
    ]);

    grunt.registerTask('default', ['compile']);
};
