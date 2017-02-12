'use strict';

/**
 * @ngdoc function
 * @name fourthgruntApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the fourthgruntApp
 */
angular.module('fourthgruntApp')
  .controller('MainCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.getClass = function(path){
      return ($location.path().substr(0, path.length) === path) ? 'active' : '';
    }
  });
