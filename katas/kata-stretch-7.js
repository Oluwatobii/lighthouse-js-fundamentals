const camelCase = function(input) {
  // Your code here
  newInput = input.trim(); // This removes any white space there might be before or/and after the string
  inputArray = newInput.split(' '); // This converts the string into an array
  newString = '';

  for (i = 1; i < inputArray.length; i++){
    newString += inputArray[i].charAt(0).toUpperCase() + inputArray[i].slice(1); // Takes each item in the array and converts the first word into a capital letter
  }
  let firstWord = inputArray[0].charAt(0).toLowerCase() + inputArray[0].slice(1); // Incase the first word starts with a capital letter
  return `${firstWord}${newString}`; //Combines the string
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));











// const urlEncode = function (text){
//   newString = '';
//   for (let i =0; i<text.length; i++){
//     if (text[i] === ' '){
//       newString += '%20';
//     }
//     else{
//       newString += text[i];
//     }
//   }
//   return newString;
// }

// console.log(urlEncode("Lighthouse Labs"));
// console.log(urlEncode(" Lighthouse Labs "));
// console.log(urlEncode("blue is greener than purple for sure"));