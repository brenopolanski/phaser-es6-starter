'use strict';

// Necessary Plugins.
const gulp    = require('gulp');
const plumber = require('gulp-plumber');
const del     = require('del');
const paths   = require('../paths');

// Clear the `src/` folder.
gulp.task('clean:src', () => {
  return del(paths.srcRoot);
});

// Call to create an empty game project template in `src/` folder.
gulp.task('empty', ['clean:src'], () => {
  gulp.src(paths.toolkit.projectTemplates.empty.files.copy)
    .pipe(plumber())
    .pipe(gulp.dest(paths.toolkit.projectTemplates.empty.files.to));
});

module.exports = gulp.task('template:empty', ['clean:src', 'empty']);
