const fibonacci = function(num) {
  num = +num;
  if (num < 0) 
    return "OOPS";
  else if (num == 0) 
    return 0;
  
  let a = 0, b = 1;
  for (let i = 1; i < num; i++){
    let temp = a + b;
    a = b;
    b = temp;
  }

  return b;
};

const fibonacciRecursion = function (num) {
  if (num < 0) 
    return "OOPS";
  else if (num == 0) 
    return 0;
  else if (num == 1) 
    return 1;
  return fibonacci(num - 2) + fibonacci(num - 1);
};

// Do not edit below this line
module.exports = fibonacci;
