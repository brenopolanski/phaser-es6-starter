'use strict';

// Necessary Plugins
var gulp    = require('gulp');
var plumber = require('gulp-plumber');
var paths   = require('../paths');

// Call VSCode Intellisense for Phaser
module.exports = gulp.task('vscode', () => {
  return gulp.src(paths.toolkit.vscodeIntellisense.files.copy)
    .pipe(plumber())
    .pipe(gulp.dest(paths.toolkit.vscodeIntellisense.files.to));
});
