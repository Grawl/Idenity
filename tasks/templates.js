var gulp=require('gulp');
var path=require('../path.json');
gulp.task('templates', ()=>{
	var hat=require('./_hat.js');
	var jade=require('gulp-jade');
	var locals=require('../'+path.src+'data.json');
	locals.package=require('../package.json');
	locals.path=path;
	return gulp.src(path.src+path.srcTemplates)
		.pipe(hat())
		.pipe(jade({
			locals: locals,
			basedir: '.'
		}))
		.pipe(gulp.dest(path.dist))
});
