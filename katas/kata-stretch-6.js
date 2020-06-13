const repeatNumbers = function(data) {
  // Put your solution here
  let answer = '' 
  for (i = 0; i < data.length; i++){
    let numRep = data[i][0];
    for (j = 1; j < data[i][1]; j++){
      numRep = `${numRep}${data[i][0]}`
    }
    answer = `${answer},${numRep}`
  }
  return answer.slice(2)
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));