var gulp=require('gulp');
var path=require('../path.json');
gulp.task('watch', ()=>{
	function watchFactory(src, tasks){
		return gulp.watch(src, tasks)
			.on('change', function(event){
				console.log('File '+event.path+' was '+event.type+', running tasks...');
			});
	}
	var injectionsDir='tasks/injections/';
	watchFactory([
		path.src+path.srcTemplatesPartials,
		injectionsDir+'_injections.jade'
	], ['inject:templates', 'templates']);
	watchFactory([
		path.src+path.srcStylesPartials,
		injectionsDir+'_injections.sass'
	], ['inject:styles', 'styles']);
	watchFactory([path.src+path.srcScriptsPartials], ['scripts']);
});
