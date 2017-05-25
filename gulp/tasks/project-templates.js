'use strict';

// Necessary Plugins.
const gulp       = require('gulp');
const plumber    = require('gulp-plumber');
const del        = require('del');
const vinylPaths = require('vinyl-paths');
const paths      = require('../paths');

// Call to create an empty game project template in `src/` folder.
module.exports = gulp.task('template:empty', () => {
  gulp.src('./src/**/*')
    .pipe(vinylPaths(del));
  gulp.src(paths.toolkit.projectTemplates.files.copy)
    .pipe(plumber())
    .pipe(gulp.dest(paths.toolkit.projectTemplates.files.to));
});
