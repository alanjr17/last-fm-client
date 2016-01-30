module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean:  {
            dist: ['dist']
        },
        copy: {
            bower_components: {
                cwd: 'bower_components/',
                src: '**',
                dest: 'dist/bower_components',
                expand: true
            }
        },
        jade: {
            views: {
                expand: true,
                cwd: 'app/jade',
                src: 'partials/{,**/}*.jade',
                dest: 'dist/views',
                ext: '.html'
            },
            index: {
                expand: true,
                cwd: 'app',
                src: 'index.jade',
                dest: 'dist',
                ext: '.html'
            }
        },
        less: {
            dist: {
                options: {
                    dumpLineNumbers: 'comments'
                },
                files: {
                    'dist/css/style.css': 'app/less/main.less'
                }
            }
        },
        jshint: {
            grunt: {
                src: 'Gruntfile.js',
            },
            dist: {
                src: 'app/scripts/{,**/}*.js'
            }
        },
        ngAnnotate: {
            options: {
                singleQuotes: true
            },
            dist: {
                files: [{
                    cwd: 'app/scripts/',
                    src: '{,**/}*.js',
                    dest: 'dist/scripts',
                    expand: true
                }]
            }
        },
        injector: {
            bower_dependencies: {
                options: {
                    // ignorePath: 'dist',
                    starttag: '<!-- bower_dependencies:{{ext}} -->',
                    endtag: '<!-- bower_dependencies -->',
                },
                files: {
                    'dist/index.html': ['bower.json'],
                }
            },
            dist: {
                options: {
                    ignorePath: 'dist',
                    starttag: '<!-- local_dependencies:{{ext}} -->',
                    endtag: '<!-- local_dependencies -->',
                },
                files: {
                    'dist/index.html': [
                        'dist/css/style.css',
                        'dist/scripts/app.js',
                        'dist/scripts/{,**/}*.module.js',
                        'dist/scripts/{,**/}*.js'
                    ]
                }
            }
        },
        connect: {
            server: {
                options: {
                    port: 9000,
                    hostname: '*',
                    base: 'dist',
                    open: {
                        target: 'http://localhost:9000/'
                    },
                    livereload: 3100
                }
            }
        },
        watch: {
            options: {
                livereload: 3100
            },
            scripts: {
                files: [ 'app/scripts/{,**/}*.js' ],
                tasks: [ 'jshint:dist' , 'ngAnnotate:dist' ]
            },
            less: {
                files: [ 'app/less/{,**/}*.less' ],
                tasks: [ 'less:dist' ]
            },
            jade: {
                files: [ 'app/index.jade', 'app/jade/{,**/}*.jade'],
                tasks: [ 'jade:views', 'jadeIndex' ]
            }
        }
    });

    grunt.registerTask('jadeIndex', ['jade:index', 'injector']);

    // Default task(s).
    grunt.registerTask('default', ['clean', 'copy', 'jshint', 'jade:views', 'less', 'ngAnnotate', 'jadeIndex', 'connect', 'watch']);

};
