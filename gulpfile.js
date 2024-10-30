const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const { series, watch } = gulp;

const paths = {
  scss: 'public/dist/frontend/scss/**/*.scss',  // Monitorar SCSS
  css: 'public/dist/css/'                       // Destino do CSS compilado
};

// Função para compilar SCSS em CSS
function compileSass() {
  console.log('Iniciando compilação de SCSS...');
  return gulp.src(paths.scss, { allowEmpty: true })
    .pipe(sass({ outputStyle: 'compressed' })
      .on('error', (err) => {
        console.error('Erro na compilação do Sass:', err.message);
      })
    )
    .pipe(gulp.dest(paths.css))
    .on('end', () => console.log('CSS gerado com sucesso!'))
    .on('error', (err) => console.error('Erro ao gravar o CSS:', err));
}

// Função para monitorar alterações
function watchFiles() {
  console.log('Monitorando alterações nos arquivos SCSS...');
  watch(paths.scss, compileSass);
}

// Definir as tarefas disponíveis
exports.compileSass = compileSass;
exports.default = series(compileSass, watchFiles);
