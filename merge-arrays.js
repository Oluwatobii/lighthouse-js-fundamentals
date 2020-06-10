const mergeArrays = function (myArr1, myArr2){
  const concat = [];
  
  for (let i = 0; i < myArr2.length; i++){
    myArr1.push(myArr2[i]);
  }
  return myArr1.sort()

}

console.log(mergeArrays([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(mergeArrays([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(mergeArrays([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);