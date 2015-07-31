# ng-jedi-breadcrumb
Breadcrumb component written in angularjs.

### Install

* Install the dependency:

   ```shell
   bower install ng-jedi-breadcrumb --save
   ```
* Add breadcrumb.js to your code:

   ```html
   <script src='assets/libs/ng-jedi-breadcrumb/breadcrumb.js'></script>
   ```
   - note that the base directory used was assets/libs, you should change bower_components to assets/libs or move from bower_components to assets/libs with grunt.
* Include module dependency:

   ```javascript
   angular.module('yourApp', ['jedi.breadcrumb']);
   ```
======

### How To Use

1. **Add jd-breadcrumb directive in your html**

   ```html
   <jd-breadcrumb></jd-breadcrumb>
   ```
2. **If necessary, to customize the default template, use the templateUrl attribute to do this**

   ```html
   <jd-breadcrumb templateUrl="app/common/components/breadcrumb/breadcrumb.html"></jd-breadcrumb>
   ```
   - the default template is stored in bower_components/ng-jedi-breadcrumb/breadcrumb.html
3. **Register your route navigation words**
   - On every route change success, this directive updates the variable $rootScope.appContext.breadcrumb, adding to an array with all route navigation words. Theses words should be setted on angular-route component.

   ```javascript
   $routeProvider
      .when('/yourRoute', {
         breadcrumb: ['System', 'Module', 'Feature'],
         templateUrl: 'yourPage.html',
         controller: 'yourController'
      })));
   ```