var etsyApp = angular.module('etsyApp', [
  'ngRoute',
  'ngResource',
  'ngAnimate',
  'etsyAppControllers',
  'etsyAppServices'
]);

etsyApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/home-page.html'
      }).
      when('/price', {
        templateUrl: 'partials/price-page.html'
      }).
      when('/quantity', {
        templateUrl: 'partials/quantity-page.html'
      }).
      when('/materials', {
        templateUrl: 'partials/materials-page.html'
      }).
      when('/tags', {
        templateUrl: 'partials/tags-page.html'
      }).
      when('/categories', {
        templateUrl: 'partials/categories-page.html'
      }).
      otherwise({
        redirectTo: '/'
      });
  }
]);
