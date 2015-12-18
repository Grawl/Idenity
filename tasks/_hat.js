module.exports=error =>{
	var plumber=require('gulp-plumber');
	var notify=require('gulp-notify');
	return plumber({
		errorHandler: notify.onError("Error: <%= error.message %>")
	});
};
