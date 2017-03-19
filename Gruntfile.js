<<<<<<< HEAD
module.exports = function (grunt) {
  'use strict'
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
	'compile-handlebars': {
			allStatic: {
				files: [{
          src: 'templates/index.handlebars',
          dest: 'src/index.html'
				}],
				templateData: 'src/data/configuration.json',
        helpers: 'handlebar/helpers/*.js',
        globals: [ 'data/translations/en/for_use_drinking-water_messages_en.json'],
        partials: ['templates/partials/**/*.handlebars']
			}
		},    
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      }
    },
    jshint: {
      files: ['gruntfile.js', 'src/js/*.js'],
      options: {
        globals: {
          jQuery: true,
          console: true,
          window: true,
          dw: true,
          L: true
        },
        laxbreak: true
      }
    },
    rev: {
      options: {
        encoding: 'utf8',
        algorithm: 'md5',
        length: 8
      },
      assets: {
        files: [{
          src: ['client/{css,js}/*.{js,css}']
        }]
      }
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint'],
      template: {
        files: ['templates/**/*.handlebars','src/data/configuration.json'],
        tasks: ['template']
      }
    },
    useminPrepare: {
      html: ['client/**/index.html'],
      options: {
        dest: 'client/'
      }
    },
    usemin: {
      html: ['client/**/*.html'],
      css: ['client/**/*.css'],
      options: {
        dirs: ['client/']
      }
    },
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: 'src/',
          dest: 'client/',
          src: ['*.{ico,txt,html}', 'img/{,*/}*.{jpg,png,svg,gif}', 'data/*.{geojson,json}', 'fonts/*', 'css/*', 'js/*', 'lib/*']
       }]
      },
      redirect: {
        files: [{
          expand: true,
          dot: true,
          cwd: 'src/',
          dest: 'client/',
          src: ['redirect.html'],
          rename: function (dest, src) {
            return dest + 'index.html'
          }
        }]
      }
    },
    clean: {
      //html: ['src/*.html'],
      dist: {
        files: [{
          dot: true,
          src: ['client/{css,js,img}']
        }]
      }
    },
    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: 'src/img',
          src: '{,*/}*.{png,jpg,jpeg}',
          dest: 'client/img'
        }]
      }
    },
    jsonmin: {
      dist: {
        options: {
          stripWhitespace: true,
          stripComments: true
        },
        files: [{
          expand: true,
          cwd: 'src/data',
          src: ['**/*.json'],
          dest: 'data',
          ext: '.json'
        }]
      }
    },
 		devserver: {
			options: {
				port: 8091
			}
		},
    connect: {
      server: {
        options: {
          port: 8000,
          base: 'src'
        }
      }
    },   
    'gh-pages': {
      options: {
        base: 'dist'
      },
      src: ['**']
    },
    abideCreate: {
      default: { // Target name.
        options: {
          template: 'lang/templates/LC_MESSAGES/messages.pot', // (default: 'locale/templates/LC_MESSAGES/messages.pot')
          languages: ['en-US', 'en', 'fr', 'es', 'nl', 'de'],
          localeDir: 'lang/locale'
        }
      }
    },
    abideExtract: {
      js: {
        src: 'src/js/**/*.js',
        dest: 'lang/templates/LC_MESSAGES/messages.pot',
        options: {
          language: 'JavaScript'
        }
      },
      html: {
        src: 'src/index.html',
        dest: 'lang/templates/LC_MESSAGES/messages.pot',
        options: {
          keyword: '_',
          language: 'swig'
        }
      }
    },
    statici18n: {
      options: {
        localeDir: 'lang/locale'
      },
      build: {
        files: [{
          expand: true,
          cwd: 'src',
          src: 'index.html',
          dest: 'client'
        }, {
          expand: true,
          cwd: 'src',
          src: 'js/app.js',
          dest: 'client'
        }]
      }
    }
  })

  grunt.loadNpmTasks('grunt-contrib-uglify')
  grunt.loadNpmTasks('grunt-contrib-cssmin')
  grunt.loadNpmTasks('grunt-contrib-imagemin')
  grunt.loadNpmTasks('grunt-contrib-jshint')
  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.loadNpmTasks('grunt-contrib-copy')
  grunt.loadNpmTasks('grunt-contrib-concat')
  grunt.loadNpmTasks('grunt-contrib-clean')
  grunt.loadNpmTasks('grunt-jsonmin')
  grunt.loadNpmTasks('grunt-rev')
  grunt.loadNpmTasks('grunt-usemin')
  grunt.loadNpmTasks('grunt-gh-pages')
  grunt.loadNpmTasks('grunt-i18n-abide')
  grunt.loadNpmTasks('hernanex3-grunt-static-i18n')
  grunt.loadNpmTasks('grunt-angular-gettext');
	grunt.loadNpmTasks('grunt-static-i18n');
  grunt.loadNpmTasks('grunt-compile-handlebars');
	grunt.loadNpmTasks('grunt-devserver');

	grunt.registerTask('build', ['clean:dist', 'i18n', 'useminPrepare', 'imagemin', 'concat', 'cssmin', 'uglify', 'copy:dist', 'copy:redirect', 'rev', 'usemin']);
  grunt.registerTask('template', ['clean:html', 'compile-handlebars']);
  grunt.registerTask('serve', ['template', 'connect', 'watch']);
  grunt.registerTask('dataupdate', ['jsonmin:dist'])

  grunt.registerTask('deploy', ['build', 'gh-pages'])
  grunt.registerTask('default', ['build'])
  grunt.registerTask('i18n', ['statici18n'])
}
