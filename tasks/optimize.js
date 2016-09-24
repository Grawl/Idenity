'use strict'
// globals
const gulp = require('gulp')
const runSequence = require('run-sequence').use(gulp)
const $ = require('gulp-load-plugins')()
const postcssPlugins = {
	cssnano: require('cssnano')
}
const posthtmlPlugins = {
	htmlnano: require('htmlnano')
}
// locals
const config = require('../gulp-config.js')
// public tasks
gulp.task('optimize', [':assemble', 'clean:publish'], done => {
	runSequence(
		'optimize:css',
		'optimize:js',
		'optimize:html',
		'optimize:images',
		done
	)
})
gulp.task('optimize:css', () => {
	return gulp.src(`${config.serve}*.css`)
		.pipe($.postcss([
			postcssPlugins.cssnano
		]))
		.pipe(gulp.dest(config.src))
})
gulp.task('optimize:js', () => {
	return gulp.src([
		`${config.serve}*.js`,
		'!gulpfile.js'
	])
		.pipe($.uglify({
			compress: {
				drop_console: true
			}
		}))
		.pipe(gulp.dest(config.src))
})
gulp.task('optimize:html', () => {
	return gulp.src(`${config.serve}*.html`)
		.pipe($.posthtml([
			posthtmlPlugins.htmlnano({
				collapseWhitespace: 'conservative'
			})
		]))
		.pipe(gulp.dest(config.src))
})
gulp.task('optimize:images', () => {
	return gulp.src(`${config.imagesToOptimize}**/*.{${config.imageExtensions}}`)
		.pipe($.imagemin())
		.pipe(gulp.dest(config.src))
})
