var child_process = require('child_process');
var gulp = require('gulp');
var gutil = require('gulp-util');
var dutil = require('./doc-util');
var browserify = require('browserify');
var buffer = require('vinyl-buffer');
var source = require('vinyl-source-stream');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');
var eslint = require('gulp-eslint');
var es = require('event-stream');
var task = 'javascript';

gulp.task(task, function (done) {

  dutil.logMessage(task, 'Compiling JavaScript');
  
  var files = [
      'src/components/datatables/example/js/dkfds-datatables-examples.js',
    'src/components/selectwoo/example/js/dkfds-selectwoo-examples.js',
    'src/components/pikaday/example/js/dkfds-pikaday-examples.js'
  ];

  //Create a bundle for each starting file in the list above. 
  var tasks = files.map(function(entry) {
    return browserify({ 
          entries: [entry],
          debug: false //if true, adds sourcemaps at the end of file.
        })
        .ignore('moment') //we use pikaday.js (without moment.js), tell browserify not to look for momentjs. //https://github.com/dbushell/Pikaday#commonjs-module-support
        .transform('babelify', {
          global: true,
          presets: ['es2015'],
        })
        .bundle()
        .pipe(source(entry))
        .pipe(buffer())
        .pipe(rename({
          dirname: '' //flatten folder structure
        }))
        .pipe(gulp.dest('dist/js'))
        .pipe(uglify())
        .on('error', gutil.log)
        .pipe(rename({
          suffix: '.min',
          dirname: '' //flatten folder structure
        }))
        .pipe(gulp.dest('dist/js'))
  });
  // create a merged stream
  return es.merge.apply(null, tasks);
});
