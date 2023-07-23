const findTheOldest = function(people) {
  return people.reduce((prev, current) => {
    if (!prev['yearOfDeath']){
      prev.yearOfDeath = (new Date()).getFullYear();
    }
    if (!current['yearOfDeath']) {
      current.yearOfDeath = (new Date()).getFullYear();
    }

    return (current.yearOfDeath - current.yearOfBirth) >
    (prev.yearOfDeath - prev.yearOfBirth)?
    current: prev;
  });
};

// Do not edit below this line
module.exports = findTheOldest;
