module.exports = function(grunt) {


    "use strict";

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        browserify: {
            dist: {
                src: 'app/js/app.js',
                dest: 'dist/bundle.js',
                options: {
                    browserifyOptions: {
                        debug: true
                    }
                }
            }
        },
        karma: {
            continuous: {
                configFile: 'karma.conf.js'
            }
        },
        watch: {
            karma: {
                files: ['app/**/*.js', 'test/**/*.js'],
                tasks: 'karma:continuous'
            },
            browserify: {
                files: 'app/**/*.js',
                tasks: 'browserify'
            }
        }
    });

  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-contrib-watch');
};
