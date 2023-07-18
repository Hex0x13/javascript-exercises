const add = function(addend1, addend2) {
  return addend1 + addend2;
};

const subtract = function(minuend, subtrahend) {
	return minuend - subtrahend;
};

const sum = function(addends) {
	let result = 0;
  for (const addend of addends){
    result += addend;
  }
  return result;
};

const multiply = function(...numbers) {
  let product = 1;
  for (const num of numbers){
    product *= num;
  }
  return product;
};

const power = function(base, exponent) {
	let result = 1;
  for (let i = 0; i < exponent; i++){
    result *= base;
  }
  return result;
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
