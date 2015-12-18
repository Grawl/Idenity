var gulp=require('gulp');
var path=require('../path.json');
var pkg=require('../package.json');
var zip=require('gulp-zip');
gulp.task('zip', (callback)=>{
	gulp.src(path.dist + '*')
		.pipe(zip(pkg.name + '.zip'))
		.pipe(gulp.dest(path.dist));
	callback();
});
