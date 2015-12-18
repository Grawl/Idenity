var gulp=require('gulp');
var inject=require('gulp-inject');
var bowerFiles=require('main-bower-files');
var injectTaskPrefix='inject';
var path=require('../path.json');
var injectionsSrcDir='./tasks/injections/';
gulp.task(injectTaskPrefix+':templates', ()=>{
	var templatesPartialsSrcDir=path.src+path.srcTemplatesDir+path.srcTemplatesPartialsDir;
	return gulp.src(injectionsSrcDir+'_injections.jade')
		// inject Jade from Bower components
		.pipe(inject(
			gulp.src(bowerFiles(), {read: false}),
			{
				name: 'bower',
				starttag: '//- {{name}}:{{ext}}\n',
				endtag: '//- endinject\n',
				transform: function(filePath){
					return 'include '+filePath+'\n';
				}
			}
		))
		// inject Jade partials
		.pipe(inject(
			gulp.src(['.'+templatesPartialsSrcDir+path.srcTemplatesPartialsInjectDir+'**/*'], {read: false}),
			{
				transform: function(filePath){
					return 'include '+filePath+'\n';
				},
				ignorePath: templatesPartialsSrcDir,
				addRootSlash: false
			}
		))
		.pipe(gulp.dest(templatesPartialsSrcDir));
});
gulp.task(injectTaskPrefix+':styles', ()=>{
	var stylesPartialsSrcDir=path.src+path.srcStylesDir+path.srcStylesPartialsDir;
	return gulp.src(injectionsSrcDir+'_injections.sass')
		// inject Sass from Bower components
		.pipe(inject(
			gulp.src(bowerFiles(), {read: false}),
			{
				name: 'bower',
				starttag: '// {{name}}:{{ext}}\n',
				endtag: '// endinject\n',
				transform: function(filePath){
					return '@import "'+filePath+'"\n';
				},
				relative: true,
				addPrefix: '..'
			}
		))
		// inject Sass partials
		.pipe(inject(
			gulp.src(['.'+stylesPartialsSrcDir+path.srcStylesPartialsInjectDir+'**/*'], {read: false}),
			{
				starttag: '// {{name}}:{{ext}}\n',
				endtag: '// endinject\n',
				transform: function(filePath){
					return '@import '+filePath+'\n';
				},
				ignorePath: stylesPartialsSrcDir,
				addRootSlash: false
			}
		))
		.pipe(gulp.dest(stylesPartialsSrcDir));
});
gulp.task('inject', [
	injectTaskPrefix+':templates',
	injectTaskPrefix+':styles'
]);
