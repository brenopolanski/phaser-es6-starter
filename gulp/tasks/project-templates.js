'use strict';

// Necessary Plugins.
const gulp       = require('gulp');
const plumber    = require('gulp-plumber');
const del        = require('del');
const vinylPaths = require('vinyl-paths');
const paths      = require('../paths');

gulp.task('clean:src', () => {
  gulp.src('./src/**/*')
    .pipe(vinylPaths(del));
});

gulp.task('empty', ['clean:src'], () => {
  gulp.src(paths.toolkit.projectTemplates.empty.files.copy)
    .pipe(plumber())
    .pipe(gulp.dest(paths.toolkit.projectTemplates.empty.files.to));
});

// Call to create an empty game project template in `src/` folder.
module.exports = gulp.task('template:empty', ['empty']);
