module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
	copy: {
	  main: {
		files: [
			{expand: true, src: ['src/img/*.png'], dest: 'build/img/', filter: 'isFile', flatten: true},
			{expand: true, src: ['src/img/*.gif'], dest: 'build/img/', filter: 'isFile', flatten: true},
			{expand: true, src: ['src/font/*'], dest: 'build/font/', filter: 'isFile', flatten: true}
		]
	  },
	},
    jshint: {
      all: ['src/js/*.js']
    },
    uglify: {
      options: {
        banner: '/*! \nWeblib <%= pkg.name %> <%= pkg.version %>\n<%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
      },
      build: {
        src: 'src/js/<%= pkg.name %>.js',
        dest: 'build/js/<%= pkg.name %>.min.js'
      }
    },
	csslint: {
		lax: {
			options: {
				import: false,
				'adjoining-classes' : false
			},
			src: ['src/css/*.css']
		}
	},
	cssmin: {
		minify: {
			expand: true,
			cwd: 'src/css/',
			src: ['*.css','!*.min.css'],
			dest: 'build/css/',
			ext: '.min.css'
		}
	}
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-concat');


  // Default task(s).
  grunt.registerTask('default', ['copy','jshint','uglify','csslint','cssmin']);

};
