// Bring in individual Gulp configurations
require('./config/gulp/sass');
require('./config/gulp/javascript');
require('./config/gulp/build');
require('./config/gulp/release');
require('./config/gulp/watch');

var gulp = require('gulp');
var dutil = require('./config/gulp/doc-util');

gulp.task('default', function (done) {

  dutil.logIntroduction();
  done();

});

// Fractal
var fractal = require('./fractalfile.js'); // import the Fractal instance configured in the fractal.js file
var logger = fractal.cli.console;      // make use of Fractal's console object for logging

gulp.task('frontend-fractal:start', function () {
  var server = fractal.web.server({
    sync: true
  });
  server.on('error', err => logger.error(err.message));
  return server.start().then(() => {
    logger.success(`Fractal server is now running at ${server.url}`);
  });
});


gulp.task('frontend-fractal:build', function () {
  var fractalBuildPath = __dirname + '/front-fractal-build';
  fractal.web.set('builder.dest', fractalBuildPath);
  var builder = fractal.web.builder();
  builder.build().then(function () {
    console.log('Fractal static HTML build complete at: ' + fractalBuildPath);
  });
});
