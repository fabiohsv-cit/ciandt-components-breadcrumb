var gulp  = require('gulp');
var umd = require('gulp-umd');

gulp.task('default', ['umd']);

gulp.task('umd', function() {
  return gulp.src('src/breadcrumb.js')
    .pipe(umd({
      exports: function() {
        return "'jedi.breadcrumb'";
      },
      namespace: function() {
        return 'ngJediBreadcrumb';
      },
      dependencies: function() {
        return [{
          name: 'angular'
        }];
      },
    }))
    .pipe(gulp.dest('.'))      
});