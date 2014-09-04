'use strict';

var contribs = require('gulp-contribs');
var path = require('path');

// just local variables to maintain a reference to the setup params
var config = null;
var gulp = null;

/**
 * Adds the contributors generation task to gulp
 *
 * @param {Object} gulpRef the instance of gulp to attach the task to
 * @param {Object} conf The configuration Object
 */
function contribSetup(gulpRef, conf) {
  // maintain a reference to our parameters
  gulp = gulpRef;
  config = conf;

  gulp.task('contrib', false, contribTask);
}

/**
 * Runs the contributors Task and outputs the result to the contributors.md file
 *
 */
function contribTask() {
  var fp = path.resolve(config.root, 'contributors.md');
  return gulp.src(fp)
    .pipe(contribs())
    .pipe(gulp.dest(config.root));
}

module.exports = contribSetup;
