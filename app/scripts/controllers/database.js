'use strict';

/**
 * @ngdoc function
 * @name fourthgruntApp.controller:DatabaseCtrl
 * @description
 * # DatabaseCtrl
 * Controller of the fourthgruntApp
 */
angular.module('fourthgruntApp')
  .controller('DatabaseCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    function databaseSearchCtrl() {
      var jsonData = (function(){
        var jsonData = null;
        $.ajax({
          'async': false,
          'global': false,
          'url': "../json/estariadb.json",
          'dataType': "json",
          'success': function (data) {
            jsonData = data;
          }
        });
        return jsonData;
      })
    }
  });
