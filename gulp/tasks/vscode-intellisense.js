'use strict';

// Necessary Plugins
var gulp    = require('gulp');
var plumber = require('gulp-plumber');
var paths   = require('../paths');

// Call VSCode Intellisense
module.exports = gulp.task('vscode', () => {
  return gulp.src(paths.configTemplates.vscodeIntellisense.files.copy)
    .pipe(plumber())
    .pipe(gulp.dest(paths.configTemplates.vscodeIntellisense.files.to));
});
