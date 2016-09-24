'use strict'
const config = require('../gulp-config.js')
const locals = require(`../data.js`)
module.exports = {
	pug: {
		options: {
			basedir: '.',
			pretty: true,
			locals: locals,
			filters: {
				php: block => {
					return '<?' + block + '?>'
				}
			}
		}
	},
	postHTML: {
		plugins: [
			require('posthtml-bem')({
				elemPrefix: '-',
				modPrefix: '_',
				modDlmtr: '-'
			})
		]
	}
}
