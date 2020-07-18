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

  it('should multiply numbers', function(){
    calculator.numberClick(3);
    calculator.operatorClick("*");
    calculator.numberClick(5);
    calculator.operatorClick("=");
    assert.strictEqual(15, calculator.runningTotal);
  })

  it('should divide numbers', function(){
    calculator.numberClick(21);
    calculator.operatorClick("/");
    calculator.numberClick(7);
    calculator.operatorClick("=");
    assert.strictEqual(3, calculator.runningTotal);
  })

  it('should concatenate multiple button clocks', function(){
    calculator.numberClick(3);
    calculator.numberClick(5);
    calculator.numberClick(0);
    assert.strictEqual(350, calculator.runningTotal);
  })

});
