'use strict'
// globals
const gulp = require('gulp')
const del = require('del')
const fs = require('fs')
// locals
const config = require('../gulp-config.js')
const pathsToClean = pathPrefix => {
	let list = [
		`${pathPrefix}*.{html,php,xml,js,css,map,zip}`,
		`${pathPrefix}vendor/`,
		`!${pathPrefix}gulpfile.js`
	]
	fs.readFileSync('.gitignore', 'utf8').split('\n').forEach(line => {
		if(/^!/.test(line)) list.push(`!./${line.slice(1)}`)
	})
	return list
}
// public tasks
gulp.task('clean', () => {
	return del(pathsToClean(config.serve))
})
