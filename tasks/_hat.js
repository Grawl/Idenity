'use strict'
const $ = require('gulp-load-plugins')()
module.exports = error => {
	return $.plumber({
		errorHandler: $.notify.onError("Error: <%= error.message %>")
	})
}
