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
   - note that directory base used was assets/libs, change bower_components to assets/libs or move from bower_components to assets/libs with grunt.
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
2. **If necessary custom the default template, user templateUrl attribute to do this**

   ```html
   <app-breadcrumb templateUrl="app/common/components/breadcrumb/breadcrumb.html"></app-breadcrumb>
   ```

3. **Registry your route navegation words**
   - *Every route change success this directive update the variable $rootScope.appContext.breadcrumb, adding a array with all route navegation words. Theses words should be setted on angular-route component.

   ```javascript
   $routeProviderReference
      .when('/yourRoute', {
         breadcrumb: ['System', 'Module', 'Feature'],
         templateUrl: 'yourPage.html',
         controller: 'yourController'
      })));
   ```