var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var watchify = require('watchify');
var tsify = require('tsify');
var gutil = require('gulp-util');
var paths = {
  pages: ['src/*.html']
};
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var buffer = require('vinyl-buffer');
//动态刷新
var htmlmin = require('gulp-htmlmin');
var rev = require('gulp-rev-append');
var connect = require('gulp-connect');

var watchedBrowserify = watchify(
  browserify({
    basedir: '.',
    debug: true,
    entries: ['src/main.ts'],
    cache: {},
    packageCache: {}
  }).plugin(tsify)
);

gulp.task('copy-html', function() {
  var options = {
    removeComments: true, //清除HTML注释
    collapseWhitespace: true, //压缩HTML
    collapseBooleanAttributes: true, //省略布尔属性的值 <input checked="true"/> ==> <input />
    removeEmptyAttributes: true, //删除所有空格作属性值 <input id="" /> ==> <input />
    removeScriptTypeAttributes: true, //删除<script>的type="text/javascript"
    removeStyleLinkTypeAttributes: true, //删除<style>和<link>的type="text/css"
    minifyJS: true, //压缩页面JS
    minifyCSS: true //压缩页面CSS
  };
  return gulp
    .src(paths.pages)
    .pipe(htmlmin(options))
    .pipe(rev())
    .pipe(gulp.dest('dist'))
    .pipe(connect.reload())
});

gulp.task('connect', function() {
  connect.server({
    root:'./dist',
    livereload: true,
    port: 3000,
    host:'xcp.com',
    https:true
  });
});

function bundle() {
  return (
    watchedBrowserify
      .bundle()
      .pipe(source('index.js'))
      .pipe(buffer())
      .pipe(sourcemaps.init({ loadMaps: true }))
      .pipe(uglify())
      // .pipe(sourcemaps.write('./')) 是否输出map文件
      .pipe(gulp.dest('dist'))
      .pipe(connect.reload())
  );
}

gulp.task('default', gulp.series(gulp.parallel(['connect','copy-html'],bundle)));
watchedBrowserify.on('update', bundle);
watchedBrowserify.on('log', gutil.log);
