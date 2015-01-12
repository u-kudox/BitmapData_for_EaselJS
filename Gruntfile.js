module.exports = function(grunt) {
	grunt.initConfig({
		pkg : grunt.file.readJSON('package.json'),
		uglify : {
			bitmapdata : {
				options : {
					banner : grunt.file.read('src/License.js'),
				},
				src : ['src/BitmapData.js'],
				dest : 'lib/bitmapdata-<%= pkg.version %>.min.js'
			}
		},
		copy : {
			bitmapdata : {
				files : [{expand:true, cwd:'lib/', src:'bitmapdata-<%= pkg.version %>.min.js', dest:'examples/js/'}]
			}
		},
		watch : {
			bitmapdata : {
				files : ['src/BitmapData.js', 'src/License.js'],
				tasks : ['bitmapdata']
			}
		},
		clean : {
			bitmapdata : {
				src : ['lib/bitmapdata-*.js', 'examples/js/bitmapdata-*.js']
			},
			docs : {
				src : ['build/yuidoc', 'docs']
			}
		},
		yuidoc : {
			docs : {
				name : 'BitmapData for EaselJS API documentation',
				description : '<%= pkg.description %>',
				version : '<%= pkg.version %>',
				url : '<%= pkg.url %>',
				options : {
					paths : 'src',
					outdir : 'build/yuidoc'
				}
			}
		},
		compress : {
			docs : {
				options : {
					archive : 'docs/<%= pkg.name.toLowerCase() %>-<%= pkg.version %>-docs.zip'
				},
				files : [{expand:true, src:'**', cwd:'build/yuidoc'}]
			}
		},
		replace : {
			bitmapdata : {
				src : ['examples/*.html'],
				overwrite : true,
				replacements : [{
					from : /js\/bitmapdata-.+min\.js/,
					to : 'js/bitmapdata-<%= pkg.version %>.min.js'
				}]
			},
			easeljs : {
				src : ['examples/*.html'],
				overwrite : true,
				replacements : [{
					from : /easeljs-.+min\.js/,
					to : 'easeljs-0.8.0.min.js'
				}]
			},
			preloadjs : {
				src : ['examples/*.html'],
				overwrite : true,
				replacements : [{
					from : /preloadjs-.+min\.js/,
					to : 'preloadjs-0.6.0.min.js'
				}]
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-yuidoc');
	grunt.loadNpmTasks('grunt-contrib-compress');
	grunt.loadNpmTasks('grunt-text-replace');

	grunt.registerTask('docs', ['clean:docs', 'yuidoc:docs', 'compress:docs']);
	grunt.registerTask('bitmapdata', ['clean:bitmapdata', 'uglify:bitmapdata', 'copy:bitmapdata']);
};