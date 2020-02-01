
var angularCalculator = require('./page-objects/angular-calculator');
using = require('jasmine-data-provider');
describe('Calculator', function() {
  var objectDataProvider = {
    'should add successfully': { expression: "1+2=", expected: "3"},
    'should subtract successfully': { expression: "5-2=", expected: "3"},
    'should multiply successfully': { expression: "4*4=", expected: "16"},
    'should divide successfully': { expression: "6/2=", expected: "3"},
    'should add floating point': { expression: "2.5+2.5=", expected: "5"},
    'should subtract floating point': { expression: "3.5-2.5=", expected: "1"},
    'should multiply floating point': { expression: "2.5*2.5=", expected: "6.25"},
    'should divide floating point': { expression: "1.2-1.2=", expected: "1"},
    'should throw divide by zero error': { expression: "20/0=", expected: "Cannot divide by zero"},
    'should add zero': { expression: "20+0=", expected: "20"},
    'should subtract zero': { expression: "20-0=", expected: "20"},
    'should subtract zero as float': { expression: "20-0.0=", expected: "20"},
    'should result zero': { expression: "20-0.0=", expected: "20"},
    'should round correctly': { expression: "0+0=", expected: "0"},
    'should handle int max value': { expression: "2147483647+1=", expected: "2147483648"},
    'should handle large numbers': { expression: "999999999*999999999=", expected: "999999998000000001"},
    'should throw error for missing second number': { expression: "2+=", expected: "Error!"}
  };

  var operatorDataProvider = {
    'should throw error when plus clicked first':
      { expression: '+', main:'Error!', sub: 'Enter number before operation'},
    'should throw error when minus clicked first':
      { expression: '-', main:'Error!', sub: 'Enter number before operation'},
    'should throw error when multiply clicked first':
      { expression: '*', main:'Error!', sub: 'Enter number before operation'},
    'should throw error when divide clicked first':
      { expression: '/', main:'Error!', sub: 'Enter number before operation'},
    'should throw error when equals clicked first':
      { expression: '=', main:'Error!', sub: 'Enter First Number'},
  };
  beforeEach(function () {
  angularCalculator.get();
  });

  using(objectDataProvider, function (data, description) {
    it(description, function() {
      angularCalculator.executeExpression(data.expression);
      expect(angularCalculator.getMainDisplayText()).
      toEqual(data.expected)
    });
  });

  using(operatorDataProvider, function (data, description) {
    it(description, function() {
      angularCalculator.executeExpression(data.expression);
      expect(angularCalculator.getMainDisplayText()).
      toEqual(data.main);
      expect(angularCalculator.getSubDisplayText()).
      toEqual(data.sub)
    });
  });

});
