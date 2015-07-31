'use strict';

define(['angular'], function () {

    angular.module('ng.jedi.breadcrumb', []).constant('ng.jedi.breadcrumb.BreadcrumbConfig', {
        homeTitle: 'Principal'
    }).directive("appBreadcrumb", ['ng.jedi.breadcrumb.BreadcrumbConfig', function (BreadcrumbConfig) {
        return {
            restrict: 'E',
            link: function (scope) {
                // inicializa breadcrumb como página principal
                if (!scope.$root.appContext) {
                    scope.$root.appContext = {};
                }
                if (!scope.$root.appContext.breadcrumb) {
                    scope.$root.appContext.breadcrumb = [BreadcrumbConfig.homeTitle];
                }
            },
            templateUrl: function (elem, attrs) {
                if (attrs.templateUrl) {
                    return attrs.templateUrl;
                } else {
                    return "assets/libs/ng-jedi-breadcrumb/breadcrumb.html";
                }
            }
        };
    }]).run(['$rootScope', '$location', function ($rootScope, $location) {
        // atualiza breadcrumb após evento de mudança de rota
        $rootScope.$on('$routeChangeSuccess', function (ev, next, last) {
            if (next && next.$$route) {
                // atribui breadcrumb da página que a navegação está direcionando
                if (next.$$route.breadcrumb) {
                    if (!$rootScope.appContext) {
                        $rootScope.appContext = {};
                    }
                    $rootScope.appContext.breadcrumb = next.$$route.breadcrumb;
                }

                // limpa querystring após mudança de rota, pra não ficar com lixo na url durante navegação
                // utilizar injeção de $routeParams para obter parametros do querystring
                $location.$$search = {};
            }
        });
    }]);

});