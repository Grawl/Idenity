'use strict'
// globals
const gulp = require('gulp')
const $ = require('gulp-load-plugins')()
const fs = require('fs')
// locals
const config = require('../gulp-config.js')
const hat = require('./_hat.js')
const templatesConfig = require('./templates-config.js')
// public tasks
gulp.task('templates', () => {
	let pugOptions = templatesConfig.pug.options
	let dataFile = fs.readFileSync(`data.json`, {encoding: 'utf8'})
	pugOptions.locals.data = JSON.parse(dataFile) // allow updating on watch
	return gulp.src(config.templatesToCompile)
		.pipe(hat())
		.pipe($.pug(pugOptions))
		.pipe($.posthtml(templatesConfig.postHTML.plugins))
		.pipe($.rename({
			extname: ''
		}))
		.pipe(gulp.dest(config.serve))
})
