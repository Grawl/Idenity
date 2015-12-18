// globals
var gulp=require('gulp');
var requireDir=require('require-dir');
var runSequence=require('run-sequence').use(gulp);
// locals
requireDir('./tasks', {recurse: true});
// tasks
gulp.task('default', ['live']);
// public tasks
gulp.task('_live', (callback)=>{
	return runSequence('assemble', 'watch', 'browsersync', callback);
});
gulp.task('_publish', (callback)=>{
	runSequence('assemble', 'zip', callback)
});
// private tasks
gulp.task('clean', ['clean:dist', 'clean:src', 'clean:tmp']);
gulp.task('assemble', (callback)=>{
	runSequence(
		'clean',
		'inject',
		[
			'templates',
			'styles',
			'scripts'
		],
		'bower:js',
		'concat:js',
		'copy',
		'clean:tmp',
		callback
	);
});
