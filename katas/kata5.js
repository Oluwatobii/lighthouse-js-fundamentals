const urlEncode = function (text){
  newString = '';
  for (let i =0; i<text.length; i++){
    if (text[i] === ' '){
      newString += '%20';
    }
    else{
      newString += text[i];
    }
  }
  return newString;
}

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));

// How to use a replace function //

// const urlEncode = function (text){
//   const regex = /\s/gi;

//   text = text.replace(regex, '%20');
//   return text;
// }
// console.log(urlEncode('Lighthouse Labs'));
// console.log(urlEncode("blue is greener than purple for sure"));
// console.log(urlEncode(" Lighthouse Labs "));


