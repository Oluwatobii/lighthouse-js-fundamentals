const range = function (start, end, step){
  const some_array = [];

  if (start === undefined || end === undefined || step === undefined){
    return [];
  }
  else if (start > end){
    return [];
  }
  else if (step <= 0){
    return [];
  }
  else{
    for (let i = start; i <= end; i = i + step){
      some_array.push(i);
    } 
      return some_array
  }
}
console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
console.log(range(-5, 2, 0));
console.log(range(5, 2, 3));



