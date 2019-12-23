let gulp = require('gulp');
let rename = require('gulp-rename'); 
let sass = require('gulp-sass');
let autoprefixer = require('gulp-autoprefixer');
let sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();

function css_style(done) {
  gulp.src('./scss/**/*')
    .pipe(sourcemaps.init())
    .pipe(sass({
      errorLogToConsol: true,
      outputStyle: 'compressed',
    }))
    .on('error', console.error.bind(console))
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./css/'))
    .pipe(browserSync.stream())

  done();
}

function watch() {
  gulp.watch('./scss/**/*', css_style);
  gulp.watch('./**/*.html', browserReload);
}

function sync() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
}

function browserReload(done) {
  browserSync.reload();
}

gulp.task('default', gulp.parallel(sync, watch))
gulp.task(sync);
