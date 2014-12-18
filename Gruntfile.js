module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
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
	sprite: {
      all: {
        src: 'src/img/icons/*.png',
        destImg: 'build/img/sprite.png',
        destCSS: 'src/css/sprite.css',
		imgPath: '../img/sprite.png',
		algorithm: 'binary-tree',
		cssOpts: {
		    // CSS template allows for overriding of CSS selectors
		    'cssClass': function (item) {
		      return '.i_' + item.name;
		    }
		 }
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
	},
	concat: {
		options: {
		  separator: ';',
		},
		dist: {
		  src: ['src/css/<%= pkg.name %>.min.css','src/css/sprite.min.css'],
		  dest: 'build/css/<%= pkg.name %>.min.css',
		},
	}
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-spritesmith');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-concat');


  // Default task(s).
  grunt.registerTask('default', ['jshint','uglify',/*'sprite',*/'csslint','cssmin'/*,'concat'*/]);

};
