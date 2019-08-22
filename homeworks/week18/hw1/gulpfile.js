const { src, dest } = require('gulp');
const { series } = require('gulp');
const sass = require('gulp-sass');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const uglifycss = require('gulp-uglifycss');
const { pipeline } = require('readable-stream');


function style() {
  return src('./scss/**/*.scss')
    .pipe(sass())
    .pipe(dest('./styles'));
}

function javaScript() {
  return src('./javaScript/*.js')
    .pipe(babel({
      presets: ['@babel/env'],
    }))
    .pipe(dest('./babel_javaScript'));
}
function compressJs() {
  return pipeline(
    src('./babel_javaScript/*.js'),
    uglify(),
    dest('./uglifyJs'),
  );
}
function compressCss() {
  return src('./styles/**/*.css')
    .pipe(uglifycss({
      maxLineLen: 80,
      uglyComments: true,
    }))
    .pipe(dest('./uglifyCss'));
}
exports.style = style;
exports.javaScript = javaScript;
exports.compressJs = compressJs;
exports.compressCss = compressCss;
exports.compress = series(compressJs, compressCss);
