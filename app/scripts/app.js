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
    'ngTouch',
    'firebase',
    'geolocation',
    'ui.bootstrap'
  ])
  .constant('FIREBASE_URL', 'https://randomrestaurant.firebaseio.com/')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/restaurants.html',
        controller: 'restaurantCtrl'
      })
       .when('/venues/:venueId', {
        templateUrl: 'views/restaurantview.html',
        controller: 'RestaurantViewCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
