var gulp = require('gulp'),
    livereload = require('gulp-livereload'),
    sass = require('gulp-sass'),
    minifycss = require('gulp-minify-css'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    del = require('del'),
    paths = {};

paths = {
  input: {
    vendorcss: 'src/css/vendor/*.css',
    scss: 'src/scss/*.scss',
    css: 'src/css/*.css',
    js: 'src/js/*.js'
  },
  output: {
    tempcss: 'src/css/converted.css',
    css: 'dist/css/',
    js: 'dist/js/'
  }
};

gulp.task('sass', function () {
  // compile paths.input.scss -> paths.output.tmpcss
});

gulp.task('css', function () {
  return gulp.src(path.input.css)
    .pipe(concat('theme.css'))
    .pipe(minifycss())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(paths.output.css));
});

gulp.task('vendorcss', function () {
  return gulp.src(paths.input.vendorcss)
    .pipe(concat('vendor.css'))
    .pipe(minifycss())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(paths.output.css));
});

gulp.task('clean', function (callback) {
  del([paths.output.css, paths.output.js, paths.output.tempcss], callback);
});
