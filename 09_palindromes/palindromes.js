const palindromes = function (string='') {
  const filteredString = string.toLowerCase().replace(/[^a-z0-9]/g, '');
  return filteredString === filteredString.split('').reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;
