//##############################################################################
// Required
//##############################################################################

var gulp = require('gulp');
var browserSync = require('browser-sync').create();


//##############################################################################
// Tasks
//##############################################################################

gulp.task('browser-sync', function()
  {
    browserSync.init(
      {
        server:
        {
          baseDir: "./"
        }
      });
  }
);

//Every html file is your source for this task, please reload it
gulp.task('html', function()
  {
    gulp.src(['*.html'])
    .pipe(browserSync.reload({stream: true}))
  }
);

//Every js file is your source for this task, please reload it
//Also, this must be later be refactored to work with third-party libraries,
//these must not live-reload as most of the time you are not
gulp.task('code', function()
  {
    gulp.src(['js/*.js'])
    .pipe(browserSync.reload({stream: true}))
  }
);



//##############################################################################
// Watch
//##############################################################################




//##############################################################################
// Default Task
//##############################################################################

//Watch for every html and every js file on the /js folder
gulp.task('default', ['browser-sync','html','code'], function ()
{
  gulp.watch('*.html', ['html']);
  gulp.watch('js/*.js', ['code']);
});
