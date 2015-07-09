# ciandt-components-breadcrumb
Breadcrumb component written in angularjs.

### Install

* Install the dependency:

   ```shell
   bower install ciandt-components-breadcrumb --save
   ```
* Add breadcrumb.js to your code:

   ```html
   <script src='assets/libs/ciandt-components-breadcrumb/breadcrumb.js'></script>
   ```
   - note that the base directory used was assets/libs, you should change bower_components to assets/libs or move from bower_components to assets/libs with grunt.
* Include module dependency:

   ```javascript
   angular.module('yourApp', ['ciandt.components.breadcrumb']);
   ```
======

### How To Use

1. **Add app-breadcrumb directive in your html**

   ```html
   <app-breadcrumb></app-breadcrumb>
   ```
2. **If necessary, to customize the default template, use the templateUrl attribute to do this**

   ```html
   <app-breadcrumb templateUrl="app/common/components/breadcrumb/breadcrumb.html"></app-breadcrumb>
   ```
   - the default template is stored in ciandt-components-breadcrumb/breadcrumb.html
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