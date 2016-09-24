'use strict'
// globals
const gulp = require('gulp')
const $ = require('gulp-load-plugins')()
const browserSync = require('browser-sync')
// locals
const hat = require('./_hat.js')
const config = require('../gulp-config.js')
const stylesConfig = require('./styles-config.js')
// public tasks
gulp.task('styles', () => {
	return gulp.src(config.stylesToCompile)
		.pipe(hat())
		.pipe($.sourcemaps.init())
		.pipe($.sass(stylesConfig.sass))
		.pipe($.postcss(stylesConfig.postcss))
		.pipe($.sourcemaps.write('.', {sourceRoot: config.stylesFolder}))
		.pipe(gulp.dest(config.serve))
		.pipe(browserSync.stream({
			match: [
				`**/*.{css,${config.imageExtensions},${config.fontExtensions}}`
			]
		}))
})
