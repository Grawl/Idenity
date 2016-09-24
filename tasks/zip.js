'use strict'
// globals
const gulp = require('gulp')
const $ = require('gulp-load-plugins')()
// locals
const config = require('../gulp-config.js')
const pkg = require('../package.json')
function createArchive(folder) {
	return gulp.src([
		`${folder}**/*.*`,
		`!${folder}node_modules/**/*`
	])
		.pipe($.vinylZip.zip(`${pkg.name}.zip`))
		.pipe(gulp.dest(`${folder}`))
}
// public tasks
gulp.task(`zip`, () => {
	return createArchive(config.serve)
})
