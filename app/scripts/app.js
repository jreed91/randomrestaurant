'use strict';

/**
 * @ngdoc overview
 * @name RestaurantApp
 * @description
 * # RestaurantApp
 *
 * Main module of the application.
 */
var app = angular
  .module('RestaurantApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/restaurants.html',
        controller: 'restaurantCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
