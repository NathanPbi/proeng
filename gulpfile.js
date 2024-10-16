const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const { series, watch } = gulp;

const paths = {
  scss: 'dist/scss/app.scss', // Arquivo SCSS principal
  css: 'dist/css/'             // Destino do CSS compilado
};

// Função para compilar SCSS para CSS
function compileSass() {
  return gulp.src(paths.scss) // Usando gulp.src para pegar o arquivo SCSS
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError)) // Compilando o SCSS
    .pipe(gulp.dest(paths.css)); // Salvando o CSS compilado
}

// Função para monitorar alterações
function watchFiles() {
  watch('dist/scss/**/*.scss', compileSass); // Observa mudanças em todos os arquivos SCSS
}

// Tarefa padrão
exports.default = series(compileSass, watchFiles);
