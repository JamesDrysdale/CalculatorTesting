var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('should add numbers', function() {
    calculator.numberClick(1);
    calculator.operatorClick("+");
    calculator.numberClick(4);
    calculator.operatorClick("=");
    assert.strictEqual(5, calculator.runningTotal);
  })

  it('should subtract numbers', function(){
    calculator.numberClick(7);
    calculator.operatorClick("-");
    calculator.numberClick(4);
    calculator.operatorClick("=");
    assert.strictEqual(3, calculator.runningTotal);
  })


});
