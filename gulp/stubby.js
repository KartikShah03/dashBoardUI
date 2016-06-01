var gulp = require('gulp');
var stubby = require('gulp-stubby-server');
// https://github.com/felixzapata/gulp-stubby-server

gulp.task('stubby', function(cb) {
  var options = {
    files: [
      'mocks/*.{json,yaml,js}'
    ]
  };
  stubby(options, cb);
});
