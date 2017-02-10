'use strict';

describe('Controller: SpellEffectsGeneratorCtrl', function () {

  // load the controller's module
  beforeEach(module('fourthgruntApp'));

  var SpellEffectsGeneratorCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SpellEffectsGeneratorCtrl = $controller('SpellEffectsGeneratorCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SpellEffectsGeneratorCtrl.awesomeThings.length).toBe(3);
  });
});
