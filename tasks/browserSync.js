'use strict'
// globals
const gulp = require('gulp')
const browsersync = require('browser-sync')
// locals
const config = require('../gulp-config.js')
// public tasks
gulp.task('browsersync', () => {
	let options = {
		files: [
			`${config.serve}**/*.{html,php,js,${config.imageExtensions},${config.fontExtensions}}`
		],
		logPrefix: 'BrowserSync',
		logConnections: true,
	}
	Object.assign(options, config.browserSync)
	return browsersync.init(options)
})
