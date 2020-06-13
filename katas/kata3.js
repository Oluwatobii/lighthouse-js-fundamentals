const numberOfVowels = function(data) {
  // Put your solution here
  let answer = [];
  for (i = 0; i < data.length; i++){
    if (data[i] === "a" || data[i] === "e" || data[i] === "i" || data[i] === "o" || data[i] === "u"){
      answer.push(data[i]);
    } 
  }
  return answer.length
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));
