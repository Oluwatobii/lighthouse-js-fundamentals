const makeCase = function(input, specialCase) {
  // Put your solution here
  newInput = input.trim(); // This removes any white space there might be before or/and after the string
  inputArray = newInput.split(' '); // This converts the string into an array
  newString = '';
  finalString = '';
  finalArray = [];

  for (i = 1; i < inputArray.length; i++){
    if (specialCase === 'camel'){
      newString += inputArray[i].charAt(0).toUpperCase() + inputArray[i].slice(1); // Takes each item in the array and converts the first word into a capital letter
      let firstWord = inputArray[0].charAt(0).toLowerCase() + inputArray[0].slice(1); // Incase the first word starts with a capital letter
      finalString = `${firstWord}${newString}`; 
    }else if (specialCase === 'pascal'){
      newString += inputArray[i].charAt(0).toUpperCase() + inputArray[i].slice(1); 
      let firstWord = inputArray[0].charAt(0).toUpperCase() + inputArray[0].slice(1); 
      finalString = `${firstWord}${newString}`; 
    }else if (specialCase === 'snake'){
      newString += inputArray[i] + '_';
      let firstWord = inputArray[0] + '_';
      draftString = `${firstWord}${newString}`.toUpperCase();
      finalString = draftString.substring(0, draftString.length-1)
    }else if (specialCase === 'kebab'){
      newString += inputArray[i] + '-';
      let firstWord = inputArray[0] + '-';
      draftString = `${firstWord}${newString}`;
      finalString = draftString.substring(0, draftString.length-1)
    }else if (specialCase === 'title'){
      newString += inputArray[i].charAt(0).toUpperCase() + inputArray[i].slice(1) + ' ';
      let firstWord = inputArray[0][0].toUpperCase() + inputArray[0].slice(1) + ' ';
      finalString = `${firstWord}${newString}`;
    }else if (specialCase === 'vowel'){
      vowelArray = input.split('')
      for (j = 0; j < vowelArray.length; j++){
        if (vowelArray[j] === 'a' ||vowelArray[j] === 'e' || vowelArray[j] === 'i' ||vowelArray[j] === 'o' || vowelArray[j] === 'u'){
          finalString += vowelArray[j].toUpperCase()
        }else{
          finalString += vowelArray[j]
        }
      }
      return finalString
    }else if (specialCase === 'consonant') {
      consonantArray = input.split('')
      for (j = 0; j < consonantArray.length; j++){
        if (consonantArray[j] === 'a' || consonantArray[j] === 'e' || consonantArray[j] === 'i' || consonantArray[j] === 'o' || consonantArray[j] === 'u'){
          finalString += consonantArray[j].toLowerCase()
        }else {
          finalString += consonantArray[j].toUpperCase()
        }
      }
      return finalString
    }else if (specialCase[0] === 'upper' && specialCase[1] === 'snake'){
      newString += inputArray[i] + '_';
      let firstWord = inputArray[0] + '_';
      draftString = `${firstWord}${newString}`.toUpperCase();
      finalString = draftString.substring(0, draftString.length-1).toUpperCase()
    }
  } 
  return finalString
}

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));
