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

  it('can add', function(){
    calculator.previousTotal = 4;
    calculator.add(1);
    assert.equal(5, calculator.runningTotal);
  })

  it('can subtract', function(){
    calculator.previousTotal = 7;
    calculator.subtract(4);
    assert.equal(3, calculator.runningTotal);
  })

  it('can multiply', function(){
    calculator.previousTotal = 3;
    calculator.multiply(5);
    assert.equal(15, calculator.runningTotal);
  })

  it('can divide', function(){
    calculator.previousTotal = 21;
    calculator.divide(7);
    assert.equal(3, calculator.runningTotal);
  })

  it('can concatenate numbers', function(){
    calculator.numberClick(1) + 
    calculator.numberClick(2) +
    calculator.numberClick(3);
    assert.equal(123, calculator.runningTotal);
  })

});
