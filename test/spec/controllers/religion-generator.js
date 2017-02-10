'use strict';

describe('Controller: ReligionGeneratorCtrl', function () {

  // load the controller's module
  beforeEach(module('fourthgruntApp'));

  var ReligionGeneratorCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ReligionGeneratorCtrl = $controller('ReligionGeneratorCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ReligionGeneratorCtrl.awesomeThings.length).toBe(3);
  });
});
