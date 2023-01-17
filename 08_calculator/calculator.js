const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(a) {
	return a.reduce((acc, n) => acc + n, 0);
};

const multiply = function(a) {
  return a.reduce((acc, n) => acc * n, 1);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(n) {
  total = 1;
	for (; n > 1; n--) total *= n;
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
