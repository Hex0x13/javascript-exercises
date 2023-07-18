const palindromes = function (string='') {
  const modifiedString = string.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reversString = modifiedString.split('').reverse().join('');

  return modifiedString === reversString;
};

// Do not edit below this line
module.exports = palindromes;
