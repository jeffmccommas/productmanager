module.exports = function(grunt) {

    grunt.registerTask('watch', [ 'watch' ]);

    grunt.initConfig({
        concat: {
            js: {
                options: {
                    separator: ';'
                },
                src: [
                    '../public/vendor/angular/angular.js'
                ],
                dest: '../public/js/scripts.js'
            }
        },
        uglify: {
            options: {
                mangle: false
            },
            js: {
                files: {
                    'public/js/scripts.js': ['public/js/scripts.js']
                }
            }
        },
        less: {
            style: {
                files: {
                    "public/css/style.css": "less/style.less"
                }
            }
        },
        watch: {
            js: {
                files: ['public/vendor/angular/angular.js'],
                tasks: ['concat:js', 'uglify:js'],
                options: {
                    livereload: true
                }
            },
            css: {
                files: ['less/*.less'],
                tasks: ['less:style'],
                options: {
                    livereload: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');

};
