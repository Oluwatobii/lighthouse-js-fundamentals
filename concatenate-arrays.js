const myConcat = function (myArr1, myArr2){
  const myConcat = [];
  
  for (let i = 0; i < myArr2.length; i++){
    myArr1.push(myArr2[i]);
  }
  return myArr1

}

console.log(myConcat([ 1, 2, 3 ], [ 4, 5, 6 ]), "=?", [ 1, 2, 3, 4, 5, 6 ]);
console.log(myConcat([ 0, 3, 1 ], [ 9, 7, 2 ]), "=?", [ 0, 3, 1, 9, 7, 2 ]);
console.log(myConcat([], [ 9, 7, 2 ]), "=?", [ 9, 7, 2 ]);
console.log(myConcat([ 5, 10 ], []), "=?", [ 5, 10 ]);

/*
const concat = function (myArr1, myArr2){
  const concat = [];
  
  for (let i = 0; i < myArr2.length; i++){
    myArr1.push(myArr2[i]);
  }
  return myArr1

}

console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]), "=?", [ 1, 2, 3, 4, 5, 6 ]);
console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]), "=?", [ 0, 3, 1, 9, 7, 2 ]);
console.log(concat([], [ 9, 7, 2 ]), "=?", [ 9, 7, 2 ]);
console.log(concat([ 5, 10 ], []), "=?", [ 5, 10 ]);
*/