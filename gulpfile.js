var gulp = require('gulp'),
	sass = require('gulp-sass'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify');
	

gulp.task('sass', function(){
	return gulp.src('scss/*.scss')
	.pipe(sass())
	.pipe(gulp.dest('css'))
});




gulp.task('js', function() {
	return gulp.src('vendors/js/*.js')
	.pipe(concat('all.js'))
	.pipe(uglify())
	.pipe(gulp.dest('vendors'))
});

gulp.task('watch', function() {
	gulp.watch('vendors/js/*.js',['vendors']);
	gulp.watch('./scss/*scss', ['sass']);
});



