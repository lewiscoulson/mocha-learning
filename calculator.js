var Calculator = function() {
  this.history = []
}

Calculator.prototype.getHistory = function() {
  return this.history;
}

Calculator.prototype.add = function(x, y) {
  var result = x + y;

  this.history.push(result)

  return result;
}

Calculator.prototype.subtract = function(x, y) {
  var result = x - y;

  this.history.push(result)

  return result;
}

module.exports = Calculator;