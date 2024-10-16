const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const { series, watch } = gulp;

const paths = {
  scss: 'src/scss/app.scss', 
  css: 'src/css/'     
};

function compileSass() {
  return gulp.src(paths.scss)
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(gulp.dest(paths.css));
}

function watchFiles() {
  watch('src/scss/**/*.scss', compileSass);
}

exports.default = series(compileSass, watchFiles);
