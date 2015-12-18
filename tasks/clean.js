var gulp=require('gulp');
var del=require('del');
var path=require('../path.json');
var cleanTaskPrefix='clean';
gulp.task(cleanTaskPrefix+':dist', ()=>{
	return del(path.dist+'**/*');
});
gulp.task(cleanTaskPrefix+':src', ()=>{
	return del([
		path.src+path.srcTemplatesDir+'partials/_injections.jade',
		path.src+path.srcStylesDir+'partials/_injections.sass'
	])
});
gulp.task(cleanTaskPrefix+':tmp', ()=>{
	return del(path.tmp);
});