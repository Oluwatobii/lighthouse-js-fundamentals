// const multiplicationTable = function(maxValue) {
//   // Your code here 
//   for (i = 1; i <= maxValue; i++){
//     let answer = '';
//     for (j = 1; j <= maxValue; j++){
//       multiplicationValues = i*j;
//       answer = answer + multiplicationValues + ' ';
//     }
//     console.log(answer)
//   }
//   //return(answer);
// };


///////////////////////////////////////////
////////////        OR      ///////////////
///////////////////////////////////////////


const multiplicationTable = function(maxValue) {
  // Your code here 
  let answer = '';
  for (i = 1; i <= maxValue; i++){
    for (j = 1; j <= maxValue; j++){
      multiplicationValues = i*j;
      answer = answer + multiplicationValues + ' ';
    }
    answer = answer + '\n';
  }
  return(answer);
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));