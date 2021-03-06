'use strict';

/**
 * @ngdoc overview
 * @name fourthgruntApp
 * @description
 * # fourthgruntApp
 *
 * Main module of the application.
 */
angular
  .module('fourthgruntApp', [
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
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/generators', {
        templateUrl: 'views/generators.html',
        controller: 'GeneratorsCtrl',
        controllerAs: 'generators'
      })
      .when('/database', {
        templateUrl: 'views/database.html',
        controller: 'DatabaseCtrl',
        controllerAs: 'database'
      })
      .when('/spell-effects-generator', {
        templateUrl: 'views/spell-effects-generator.html',
        controller: 'SpellEffectsGeneratorCtrl',
        controllerAs: 'spellEffectsGenerator'
      })
      .when('/names-generator', {
        templateUrl: 'views/names-generator.html',
        controller: 'NamesGeneratorCtrl',
        controllerAs: 'namesGenerator'
      })
      .when('/loot-generator', {
        templateUrl: 'views/loot-generator.html',
        controller: 'LootGeneratorCtrl',
        controllerAs: 'lootGenerator'
      })
      .when('/disease-generator', {
        templateUrl: 'views/disease-generator.html',
        controller: 'DiseaseGeneratorCtrl',
        controllerAs: 'diseaseGenerator'
      })
      .when('/religion-generator', {
        templateUrl: 'views/religion-generator.html',
        controller: 'ReligionGeneratorCtrl',
        controllerAs: 'religionGenerator'
      })
      .when('/inn-generator', {
        templateUrl: 'views/inn-generator.html',
        controller: 'InnGeneratorCtrl',
        controllerAs: 'innGenerator'
      })
      .when('/game-generator', {
        templateUrl: 'views/game-generator.html',
        controller: 'GameGeneratorCtrl',
        controllerAs: 'gameGenerator'
      })
      .when('/map', {
        templateUrl: 'views/map.html',
        controller: 'MapCtrl',
        controllerAs: 'map'
      })
      .when('/blog-navigation', {
        templateUrl: 'views/blog-navigation.html',
        controller: 'BlogNavigationCtrl',
        controllerAs: 'blogNavigation'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .controller('HeaderCtrl', function ($scope, $location) {
    $scope.isActive = function (viewLocation) {
      return viewLocation === $location.path();
    };
  });
