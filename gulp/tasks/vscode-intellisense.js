'use strict';

// Necessary Plugins
const gulp       = require('gulp');
const plumber    = require('gulp-plumber');
const path       = require('path');
const pathExists = require('path-exists');
const paths      = require('../paths');

const NODE_DIR = path.resolve(__dirname, '../../node_modules/');

// Call VSCode Intellisense for Phaser
module.exports = gulp.task('vscode', () => {
  pathExists(NODE_DIR).then(exists => {
    if (exists) {
      gulp.src(paths.toolkit.vscodeIntellisense.files.copy.nodeDir)
        .pipe(plumber())
        .pipe(gulp.dest(`${paths.toolkit.vscodeIntellisense.files.to}/defs/`));
      gulp.src(paths.toolkit.vscodeIntellisense.files.copy.jsConfig)
        .pipe(plumber())
        .pipe(gulp.dest(paths.toolkit.vscodeIntellisense.files.to));
    }
    else {
      return gulp.src(paths.toolkit.vscodeIntellisense.files.copy.default)
        .pipe(plumber())
        .pipe(gulp.dest(paths.toolkit.vscodeIntellisense.files.to));
    }
  });
});
