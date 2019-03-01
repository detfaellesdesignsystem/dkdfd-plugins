var gulp = require('gulp');
var dutil = require('./doc-util');
var clean = require('gulp-clean');
var runSequence = require( 'run-sequence' );

gulp.task('clean-dist', function (done) {
  dutil.logMessage('clean-dist', 'Removing distribution directories.');

  return gulp.src([ 'dist' ], { read: false }).pipe(clean());

});

gulp.task('copy-dkfds-vendor', function (done) {
  dutil.logMessage('copy-dkfds-vendor', 'Copying all DKFDS component files to dist dir');
  
  var stream = gulp.src('node_modules/dkfds/dist/**/*')
    .pipe(gulp.dest('dist/dkfds'));

  return stream;
});

gulp.task('build', function (done) {

  dutil.logIntroduction();
  dutil.logMessage(
    'build',
    'Creating dist dir.'
  );

  runSequence(
    'clean-dist',
    'copy-dkfds-vendor',
    [
      'sass',
    ],
    done
  );

});
