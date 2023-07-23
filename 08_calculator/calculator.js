const add = function(addend1, addend2) {
  return addend1 + addend2;
};

const subtract = function(minuend, subtrahend) {
	return minuend - subtrahend;
};

const sum = function(addends) {
  return addends.reduce((a, b) => a + b, 0);
};

const multiply = function(...numbers) {
  return numbers.reduce((x, y) => x * y, 1);
};

const power = function(base, exponent) {
  return Math.pow(base, exponent);
};

const factorial = function(num) {
	let result = 1;
  for (let i = num; i > 0; i--){
    result *= i;
  }
  return result;
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
