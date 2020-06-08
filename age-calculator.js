const ageCalculator = function (name, yearOfBirth, currentYear){
  const currentAge = currentYear - yearOfBirth;
  return name + " is " + currentAge + " years old.";
}

console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));
console.log(ageCalculator("Suzie", 1983, 2015));
console.log(ageCalculator("Jack", 2003, 2015));
console.log(ageCalculator("Ali", 2015, 2015));
