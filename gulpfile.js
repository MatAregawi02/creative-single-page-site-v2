//adapted from chatGPT for preprocessing purposes

const gulp = require('gulp');

const sass = require('gulp-sass')(require('sass'));


function compileSass1() {
    return gulp.src('scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
    
        
        .pipe(gulp.dest('css/'));
        
}





function watchFiles() {
    gulp.watch('scss/**/*.scss', compileSass1);
   
}

exports.default = gulp.series(compileSass1, watchFiles);
//dart-sass must be used next time