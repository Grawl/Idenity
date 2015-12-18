var gulp=require('gulp');
var browserSync=require('browser-sync');
var path=require('../path.json');
gulp.task('styles', ()=>{
	var hat=require('./_hat.js');
	var sass=require('gulp-sass');
	var postcss=require('gulp-postcss');
	var autoprefixer=require('autoprefixer');
	var short=require('postcss-short');
	var timeMachine=require('postcss-time-machine');
	var processors=[
		autoprefixer(),
		short(),
		timeMachine({
			'corner-radius': false, // because of it's working only with `border`
			'background-position': false, // because it's too unexpected
			'border-spacing': false // because it's too unexpected
		})
	];
	return gulp.src(path.src+path.srcStyles)
		.pipe(hat())
		.pipe(sass({
			sourceMap: true
		}))
		.pipe(postcss(processors))
		.pipe(gulp.dest(path.dist))
		.pipe(browserSync.stream())
});
