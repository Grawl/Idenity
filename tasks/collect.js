var gulp=require('gulp');
var path=require('../path.json');
var concat=require('gulp-concat');
var mainBowerFiles=require('gulp-main-bower-files');
var gulpFilter=require('gulp-filter');
var vendorJS='vendor.js';
var mainBowerFilesTaskPrefix='bower';
gulp.task(mainBowerFilesTaskPrefix+':js', ()=>{
    return gulp.src('./bower.json')
        .pipe(mainBowerFiles())
        .pipe(gulpFilter('**/*.js'))
        .pipe(concat(vendorJS))
        .pipe(gulp.dest(path.tmp));
});
var concatTaskPrefix='concat';
gulp.task(concatTaskPrefix+':js', ()=>{
    return gulp.src([
	    path.tmp+vendorJS,
	    path.tmp+'modules/**/*.js',
	    path.tmp+path.distJS
        ])
        .pipe(concat(path.distJS))
        .pipe(gulp.dest(path.dist));
});
gulp.task('copy', ()=>{
    return gulp.src([
        path.src+'media/**/*'
        ])
        .pipe(gulp.dest(path.dist+'media'))
});