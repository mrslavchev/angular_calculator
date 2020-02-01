


var AngularCalculator = function () {
  this.mainDiplay = element(by.id('main'));
  this.subDisplay = element(by.id('sub'));

  this.elementMap = {
    '1' : element(by.id('1')),
    '2' : element(by.id('2')),
    '3' : element(by.id('3')),
    '4' : element(by.id('4')),
    '5' : element(by.id('5')),
    '6' : element(by.id('6')),
    '7' : element(by.id('7')),
    '8' : element(by.id('8')),
    '9' : element(by.id('9')),
    '0' : element(by.id('0')),
    '+' : element(by.id('addition')),
    '-' : element(by.id('subtraction')),
    '*' : element(by.id('multiplication')),
    '/' : element(by.id('division')),
    '=' : element(by.id('equalTo')),
    '.' : element(by.id('dot')),
  };

  this.get = function() {
    browser.get('http://localhost:3000/');
  };

  this.getMainDisplayText = function () {
    return this.mainDiplay.getText();
  };

  this.getSubDisplayText = function () {
    return this.subDisplay.getText();
  };

  this.executeExpression = function (strExpression) {
    for (var i=0; i<strExpression.length; i++){
      this.elementMap[strExpression[i]].click();
    }
  };
};
module.exports = new AngularCalculator();
