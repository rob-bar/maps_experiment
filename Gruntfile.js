'use strict';
module.exports = function (grunt) {
    // load all grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    // configurable paths
    var yeomanConfig = {
        app: 'app',
    };

    grunt.initConfig({
        yeoman: yeomanConfig,
        jsfiles: ['foo/*.js', 'bar/*.js'],
        watch: {
            coffee: {
                files: ['<%= yeoman.app %>/assets/scripts/*.coffee'],
                tasks: ['coffee:dist']
            },
            coffeeTest: {
                files: ['test/spec/*.coffee'],
                tasks: ['coffee:test']
            },
            compass: {
                files: ['<%= yeoman.app %>/assets/styles/*.{scss,sass}'],
                tasks: ['compass']
            },
            livereload: {
                files: [
                    '<%= yeoman.app %>/*.html',
                    '{.tmp,<%= yeoman.app %>}/assets/styles/*.css',
                    '{.tmp,<%= yeoman.app %>}/assets/scripts/*.js',
                    '<%= yeoman.app %>/images/*.{png,jpg,jpeg}'
                ],
                tasks: ['livereload']
            }
        },
        coffee: {
            dist: {
                files: {
                    '.tmp/assets/scripts/coffee.js': '<%= yeoman.app %>/assets/scripts/*.coffee'
                }
            },
            test: {
                files: [{
                    expand: true,
                    cwd: '.tmp/spec',
                    src: '*.coffee',
                    dest: 'test/spec'
                }]
            }
        },
        compass: {
            options: {
                require: ['compass-h5bp', 'ceaser-easing'],
                sassDir: '<%= yeoman.app %>/assets/styles',
                cssDir: '<%= yeoman.app %>/assets/styles',
                imagesDir: '<%= yeoman.app %>/images',
                javascriptsDir: '<%= yeoman.app %>/assets/scripts',
                fontsDir: '<%= yeoman.app %>/assets/styles/fonts',
                importPath: '<%= yeoman.app %>/assets/components',
                raw: 'preferred_syntax = :sass\n',
                'output-style': 'compressed',
                relativeAssets: true
            },
            server: {
                options: {
                    debugInfo: true
                }
            }
        },
        concat: {
            dist: {
                src: ['assets/js/base.js', 'assets/js/simulator.js'],
                dest: 'assets/js/main.js'
            }
        },
        uglify: {
            dist: {

            },
        },
        jshint: {
            all: ['Gruntfile.js', '<%= yeoman.app %>assets/scripts/*.js']
        },
        bower: {
            rjsConfig: 'app/assets/scripts/main.js',
            indent: '    '
        }
    });

    grunt.renameTask('regarde', 'watch');
    grunt.registerTask('build', [
        // css related stuff
        'compass',
        // js related stuff
        'coffee',
        'jshint',
        'concat',
        'uglify'
    ]);

    grunt.registerTask('default', ['build']);
};
