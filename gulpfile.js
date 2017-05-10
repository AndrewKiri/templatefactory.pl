'use strict';

var gulp = require('gulp'),
  sass = require('gulp-sass'),
  watch = require('gulp-watch'),
  plumber = require('gulp-plumber'),
  sourcemaps = require('gulp-sourcemaps');

gulp.task('default', function() {
  return watch('css/sass/**/*.scss', function () {
    return gulp.src('css/sass/main.scss')
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(plumber.stop())
    .pipe(gulp.dest('./css'));
  })
});

gulp.task('sass', function () {
  return gulp.src('./css/sass/main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./css'));
})