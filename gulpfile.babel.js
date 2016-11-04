// ------------------------------
// Import Dependencies
// ------------------------------
const babel         = require('gulp-babel');
const gulp          = require('gulp');
const gutil         = require('gulp-util');
const nodemon       = require('gulp-nodemon');
const open          = require('gulp-open');
const autoprefixer  = require('autoprefixer');
const cssnano       = require('cssnano');
const less          = require('gulp-less');
const postcss       = require('gulp-postcss');

const webpack       = require('webpack');
const webpackConfig = require('./webpack.config');

// ------------------------------
// serve
// ------------------------------
gulp.task('serve', ['build:jsServer', 'build:jsClient', 'build:styles'], () => {
  nodemon({
    script: 'server/lib/server.js',
    watch: ['server/src', 'client/src'],
    tasks: ['build:jsServer', 'build:jsClient', 'build:styles'],
  }).on('restart', () => {
    gutil.log(gutil.colors.magenta('Server Restarted'));
  });
});

// ------------------------------
// build:jsClient
// ------------------------------
gulp.task('build:jsClient', (callback) => {
  webpack(webpackConfig, (err, stats) => {
    if (err) throw new gutil.PluginError('build:jsClient', err);
    gutil.log('build:jsClient', stats.toString({
      colors: true,
      exclude: 'node_modules',
    }));
    callback();
  });
});

// ------------------------------
// build:styles
// ------------------------------
gulp.task('build:styles', () => {
  const processors = [
    autoprefixer({ browsers: ['last 2 versions', 'ie 10'], cascade: false}),
    cssnano(),
  ];
  return gulp.src(['./client/app/less/app.less'])
    .pipe(less({ compress: true }))
    .pipe(postcss(processors))
    .pipe(gulp.dest('./client/build/less'));
});

// ------------------------------
// build:jsServer
// ------------------------------
gulp.task('build:jsServer', () => {
  return gulp.src(['./server/src/**/*.js'])
    .pipe(babel())
    .pipe(gulp.dest('./server/lib'));
});
