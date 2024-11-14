const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const path = require('path'); // Para manipulação de caminhos
const { series, watch } = gulp;

// Caminho base, usando o diretório atual de onde o Gulp está sendo executado
const basePath = process.cwd();  // Obtém o diretório atual de execução do Gulp

// Caminhos relativos, com base no diretório atual de execução
const paths = {
  scss: path.join(basePath, 'public', 'dist', 'frontend', 'scss', '**/*.scss'),  // Caminho para os arquivos SCSS
  css: path.join(basePath, 'public', 'dist', 'css')  // Caminho de destino para o CSS compilado
};

// Função para compilar SCSS
function compileSass() {
  console.log('Compilando SCSS a partir de:', paths.scss); // Log para verificar o caminho
  return gulp.src(paths.scss, { allowEmpty: true })  // Permitir arquivos vazios
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))  // Compilação do SCSS
    .pipe(gulp.dest(paths.css));  // Salvar CSS no diretório correto
}

// Função para monitorar alterações nos arquivos SCSS
function watchFiles() {
  watch(paths.scss, compileSass);  // Monitorar os arquivos SCSS
}

// Exportar a tarefa padrão
exports.default = series(compileSass, watchFiles);
