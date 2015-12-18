var gulp=require('gulp');
var browserSync=require('browser-sync');
var path=require('../path.json');
gulp.task('browsersync', ()=>{
	return browserSync.init({
		server: {
			baseDir: path.dist,
			routes: {
				"/bower_components": "bower_components"
			}
		},
		files: [
			path.dist+'**/*',
			path.package
		],
		open: false,
		port: path.port,
		ui: {
			port: path.port + 1
		},
		logPrefix: 'BrowserSync',
		logConnections: true,
		reloadOnRestart: true
	});
});
