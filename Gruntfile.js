module.exports = function(grunt) {


    "use strict";

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        browserify: {
            dev: {
                files: {
                    'bundle.js': ['app/js/app.js']
                },
                options: {
                    bundleOptions: {
                        debug: true
                    }
                }
            }
        },
        karma: {
            unit: {
                configFile: 'karma.conf.js'
            },
            continuous: {
                configFile: 'karma.conf.js',
                singleRun: true,
                browsers: ['PhantomJS']
            }
        },
        watch: {
            files: [
                'app/**/*.js', 'test/**/*.js'
            ],
            tasks: 'karma:continuous'
        }
    });

  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-contrib-watch');
};
