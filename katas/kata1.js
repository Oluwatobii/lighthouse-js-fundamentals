const sumLargestNumbers = function(data) {
  // Put your solution here
  let highestNum1 = Math.max(...data);
  data.splice(data.indexOf(highestNum1), 1);
  let highestNum2 = Math.max(...data);

  return highestNum1 + highestNum2;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
