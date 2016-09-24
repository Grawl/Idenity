'use strict'
// globals
const gulp = require('gulp')
const fs = require('fs')
const vinylFTP = require('vinyl-ftp')
const $ = require('gulp-load-plugins')()
// locals
const config = require('../gulp-config.js')
function uploadingWarning(tool, options) {
	return console.log(`You want to upload using ${options.description}.\nPlease, open \`gulp-config.js\`, enable it and fill out all required for this tool fields.`)
}
function uploadFolder(settings) {
	if(settings.info.enable) {
		let src = `${settings.folder}**/*`
		let options = {buffer: false}
		if(settings.prepare) {
			return gulp.src(src, {options})
				.pipe(settings.prepare)
				.pipe(settings.tool)
		}
		else {
			return gulp.src(src, {options})
				.pipe(settings.tool)
		}
	}
	else {
		return uploadingWarning(settings.tool, settings.info)
	}
}
// public tasks
// FTP
gulp.task('upload:ftp', () => {
	const secrets = require('../env.js')
	let options = secrets.ftp.options
	options.log = $.gutil.log
	let ftpConnection = vinylFTP.create(options)
	return uploadFolder({
		folder: config.serve,
		prepare: ftpConnection.newer(secrets.ftp.destServe),
		tool: ftpConnection.dest(secrets.ftp.destServe),
		info: config.upload.ftp
	})
})
// Github Pages
gulp.task('upload:github-pages', () => {
	const secrets = require('../env.js')
	return uploadFolder({
		folder: config.serve,
		tool: $.ghPages(secrets.githubPages.options),
		info: config.upload.githubPages
	})
})
// Surge.sh
gulp.task('upload:surge.sh', () => {
	const secrets = require('../env.js')
	return uploadFolder({
		folder: config.serve,
		tool: $.surge(secrets.surge.options),
		info: config.upload.surge
	})
})
