'use strict';

describe('Controller: GeneratorsCtrl', function () {

  // load the controller's module
  beforeEach(module('fourthgruntApp'));

  var GeneratorsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GeneratorsCtrl = $controller('GeneratorsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(GeneratorsCtrl.awesomeThings.length).toBe(3);
  });
});
