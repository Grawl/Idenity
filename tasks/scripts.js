'use strict'
// global
const gulp = require('gulp')
const glob = require('glob')
const browserify = require('browserify')
const exorcist = require('exorcist')
const vinylSourceStream = require('vinyl-source-stream')
const $ = require('gulp-load-plugins')()
const eventStream = require('event-stream')
// local
const config = require('../gulp-config.js')
function removeFileLastExtension(fileName) {
	return fileName.substr(0, fileName.lastIndexOf('.'))
}
// public tasks
gulp.task('scripts', (done) => {
	// some strange code because of gulp team think there is not necessary to have a plugin to just `.pipe(browserify())`, you have to build bicycles instead: https://github.com/gulpjs/plugins/issues/47
	// https://fettblog.eu/gulp-browserify-multiple-bundles/
	return glob(config.scriptsToCompile, (err, files)=> {
		if (err) done(err)
		let tasks = files.map(entry=> {
			// look for Babel in package.json
			return browserify({
				entries: [entry], // path/to/file.ext
				debug: true // enable source maps
			})
				.bundle()
				.on('error', err=> {
					console.log(err.message) // handle error to get watch work if you make an error
					done(err) // stop task to start it again when you save file
				})
				.pipe(exorcist(`${removeFileLastExtension(entry)}.map`)) // output sourcemap into a file
				.pipe(vinylSourceStream(entry))
				.pipe($.rename({
					extname: '' // remove source file extension
				}))
				.pipe(gulp.dest('.')) // put file in source file folder
		})
		eventStream.merge(tasks).on('end', done)
	})
})
