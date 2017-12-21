var gulp = require ('gulp');
var changed = require ('gulp-changed');
var scss = require ('gulp-sass'); 
var scss = require ('gulp-sass');
var browserSync = require('browser-sync').create();

//Vars  Changed
var SRC = './scss/*.scss';
var DEST = 'dist';


//HotReaload
gulp.task('serve', ['sass'], function(){
	browserSync.init({
		server: "./"
	})
});

gulp.watch('./scss/*.scss',['sass']);
gulp.watch('./*html').on('change', browserSync.reload);

//Scss
gulp.task('sass', function() {
 gulp.src('scss/*.scss')
	.pipe(scss())
	.pipe(gulp.dest('css'))
	.pipe(browserSync.stream());;
});


//Changed
gulp.task('changed', function (){
	return gulp.src(SRC)
	.pipe(changed(DEST))
	.pipe(gulp.dest(DEST));
});


gulp.task('watch', function(){
	gulp.watch(SRC, ['sass', 'serve']);
})

gulp.task('default', ['serve']);







//Jshint
gulp.task('jshint', function() {
	gulp.src('./js/all.js') //path to file
	.pipe(jshint())
	.pipe(jshint.reporter('default'));
});

//CompressImage
gulp.task('compress-images', function() {
	return gulp.src('pre-images/*')
	.pipe(imagemin({ optimizationLevel: 7}))
	.pipe(gulp.dest('images'));

});

//Uglify Js
gulp.task('ugly', function() {
	return gulp.src('pre-js/*.js')
	.pipe(uglify())
	.pipe(gulp.dest('js'));

});

//Concat Js
gulp.task('concat', function() {
	return gulp.src(['pre-js/file2.js','pre-js/file1.js'])
	.pipe(concat('all.js'))
	.pipe(gulp.dest('js'));

});


//Minify Css
gulp.task('minify-css', function() {
 gulp.src('./css/*.css')
	.pipe(minifyCSS({keepSpecialComments:1}))
	.pipe(gulp.dest('css'));

});