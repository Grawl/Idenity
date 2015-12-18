var gulp=require('gulp');
var path=require('../path.json');
gulp.task('scripts', ()=>{
	var hat=require('./_hat.js');
	return gulp.src(path.src+path.srcScripts)
		.pipe(hat())
		.pipe(gulp.dest(path.tmp));
});
