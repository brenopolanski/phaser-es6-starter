'use strict';

// Necessary plugins.
const gulp    = require('gulp');
const ghPages = require('gulp-gh-pages');
const paths   = require('../paths');

// Deploy to GitHub pages.
module.exports = gulp.task('deploy', () => {
  return gulp.src(paths.deploy.pages)
    .pipe(ghPages());
});
