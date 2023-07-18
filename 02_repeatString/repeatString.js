const repeatString = function(string, multiplier) {
  if (multiplier < 0)
    return 'ERROR';

  let totalString = '';
  for (let i = 0; i < multiplier; i++){
    totalString += string;
  }
  return totalString;
};

// Do not edit below this line
module.exports = repeatString;
