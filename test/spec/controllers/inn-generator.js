'use strict';

describe('Controller: InnGeneratorCtrl', function () {

  // load the controller's module
  beforeEach(module('fourthgruntApp'));

  var InnGeneratorCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    InnGeneratorCtrl = $controller('InnGeneratorCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(InnGeneratorCtrl.awesomeThings.length).toBe(3);
  });
});
