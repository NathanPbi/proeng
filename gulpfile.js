const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const { series, watch } = gulp;

const paths = {
  scss: 'dist/scss/**/*.scss',  // Monitorar todos os arquivos SCSS
  css: 'dist/css/'              // Salvar o CSS compilado aqui
};

function compileSass() {
  return gulp.src(paths.scss, { allowEmpty: true })  // Permitir arquivos vazios
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError)) // Compilar SCSS
    .pipe(gulp.dest(paths.css));  // Salvar CSS
}

function watchFiles() {
  watch(paths.scss, compileSass);  // Monitorar alterações nos arquivos SCSS
}

exports.default = series(compileSass, watchFiles);
