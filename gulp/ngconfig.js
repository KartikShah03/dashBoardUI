'use strict';
/*
REF: https://www.npmjs.com/package/gulp-ng-config

This task allows us to declare an environment variable when running
`gulp build` or `gulp serve`, and to insert a constant for our
API server's URL based on that variable.

USAGE: supply the environment variable after the command. Use the
double-dash syntax. ex: `gulp serve --production` or `--sit` or `--local`

DEFAULT: `--production` is assumed if no other valid arg is present.
*/

var gulp = require('gulp');
var path = require('path');
var conf = require('./conf');
var gulpNgConfig = require('gulp-ng-config');

gulp.task('ngconfig', function() {
  console.log(argv);
  // default config:
  var argv = require('yargs')
    .usage('This `build` or `serve` task includes an ngConfig task, whose requirements have not been met via arguments. \n LONG USAGE: <command> --environment <"production" or "sit" or "local">.\n SHORT USAGE <command> -e <"production" or "sit" or "local">')
    .epilogue('For more information, see the iJoin client README.')
    // .default('e', 'production') // if we wanted defaults...
    .demand(['e'])
    .alias('e', 'environment')
    .argv;

  var thisConfig = {
    environment: argv.environment,
    wrap: "(function () { \n 'use strict'; \n return <%= module %> \n })();"
  };
  console.log(thisConfig);

  gulp.src('gulp/server-config.json')
    .pipe(gulpNgConfig('Dashboard.apiConfig', thisConfig))
    .pipe(gulp.dest(path.join(conf.paths.src, '/app/prebuild')));

});
