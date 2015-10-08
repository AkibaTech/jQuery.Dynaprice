module.exports = function(grunt) {
	grunt.initConfig({
		uglify: {
			minifyJS: {
				files: {
					'jquery.dynaprice.min.js': ['jquery.dynaprice.js']
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.registerTask('default', ['uglify']);
};