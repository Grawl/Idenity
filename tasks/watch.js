'use strict'
// globals
const gulp = require('gulp')
// locals
const config = require('../gulp-config.js')
// public tasks
gulp.task('watch', () => {
	function watch(src, tasks) {
		return gulp.watch(src, tasks)
			.on('change', function(event) {
				console.log(`File ${event.path} was ${event.type}, running tasks...`)
			})
	}
	watch([
		config.templatesToWatch,
		`data.json`
	], ['templates'])
	watch(config.stylesToWatch, ['styles'])
	watch(config.scriptsToWatch, ['scripts'])
})
