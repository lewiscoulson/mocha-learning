var assert = require("chai").assert
var Calculator = require("../calculator");

describe('Calculator', function() {
  var calculator;

  beforeEach(function() {
    calculator = new Calculator()
  })

  describe('add', function() {
    it('should return sum of two numbers', function() {
      assert.equal(2, calculator.add(1, 1))
    })

    it('0 plus 0 should equal 0', function() {
      assert.equal(0, calculator.add(0, 0))
    })

    it('0 plus 1 should equal 1', function() {
      assert.equal(1, calculator.add(0, 1))
    })
  })

  describe('subtract', function() {
    it('2 minus 1 should equal 1', function() {
      assert.equal(1, calculator.subtract(2, 1))
    })

    it('0 minus 0 should equal 0', function() {
      assert.equal(0, calculator.subtract(0, 0))
    })

    it('0 minus 1 should equal -1', function() {
      assert.equal(-1, calculator.subtract(0, 1))
    })
  })

  describe('history', function() {
    it('should save history correctly', function() {
      calculator.add(1, 2)
      calculator.add(1, 3)
      calculator.add(1, 4)

      var history = calculator.getHistory()

      assert.equal(3, history[0])
      assert.equal(4, history[1])
      assert.equal(5, history[2])
    })
  })
})