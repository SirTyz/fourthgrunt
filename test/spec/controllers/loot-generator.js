'use strict';

describe('Controller: LootGeneratorCtrl', function () {

  // load the controller's module
  beforeEach(module('fourthgruntApp'));

  var LootGeneratorCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LootGeneratorCtrl = $controller('LootGeneratorCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(LootGeneratorCtrl.awesomeThings.length).toBe(3);
  });
});
