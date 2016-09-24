'use strict'
// globals
const gulp = require('gulp')
const requireDir = require('require-dir')
const runSequence = require('run-sequence').use(gulp)
// locals
requireDir('./tasks', {recurse: true})
require('gulp-stats')(gulp)
// tasks
gulp.task('default', [':live'])
// public tasks
gulp.task(':live', [':assemble', 'watch', 'browsersync'])
gulp.task(':publish', done=> {
	runSequence(':assemble', 'zip', done)
})
gulp.task(':upload', done=> {
	runSequence(':publish', 'upload:ftp', done)
})
// public tasks (secondary)
gulp.task(':assemble', done=> {
	runSequence(
		'clean',
		[
			'templates',
			'styles',
			'scripts'
		],
		done
	)
})
