'use strict';

describe('Controller: GameGeneratorCtrl', function () {

  // load the controller's module
  beforeEach(module('fourthgruntApp'));

  var GameGeneratorCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GameGeneratorCtrl = $controller('GameGeneratorCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(GameGeneratorCtrl.awesomeThings.length).toBe(3);
  });
});
