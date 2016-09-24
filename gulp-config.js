const env = require('./env.js')
module.exports = {
	src: "serve/source/",
	templatesToCompile: "serve/*.pug",
	templatesToWatch: [
		"serve/source/templates/**/*.{pug,md,html,php}",
		"serve/*.pug"
	],
	stylesToCompile: "serve/*.{sass,scss}",
	stylesToWatch: [
		"serve/source/styles/**/*.{sass,scss}",
		"serve/*.{sass,scss}"
	],
	stylesFolder: "serve/",
	stylesAssetsFolder: "vendor/", // relative
	scriptsToCompile: "serve/*.es6",
	scriptsToWatch: [
		"serve/source/scripts/**/*.es6",
		"serve/*.es6"
	],
	imagesToOptimize: "serve/images/", // just folder
	serve: "serve/",
	package: "*.{json,js}",
	tasksDir: "tasks/",
	imageExtensions: "svg,jpeg,jpg,png,gif",
	fontExtensions: "svg,ttf,woff,otf,eot",
	browserSync: {
		port: env.browsersync.port,
		server: "serve/",
		open: false,
		reloadOnRestart: true
	},
	upload: {
		ftp: {
			enable: true,
			description: "FTP (docs: https://github.com/morris/vinyl-ftp)"
		},
		githubPages: {
			enable: false,
			description: "Github Pages (http://pages.github.com, docs: https://github.com/shinnn/gulp-gh-pages)"
		},
		surge: {
			enable: false,
			description: "Surge (http://surge.sh, docs: https://github.com/surge-sh/gulp-surge)"
		}
	}
}
