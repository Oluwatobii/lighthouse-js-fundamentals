const urlDecode = function(text) {
  //Put your solution here
  const regex = /%20/gi;
  text = text.replace(regex, ' ');
  inputArray = text.split('&');
  finalObject = {};
  for (i = 0; i < inputArray.length; i++){
    outputArray = inputArray[i].split('=')
    let myKey = outputArray[0];
    let myValue = outputArray[1];
    finalObject[myKey] = myValue
  }
  return finalObject;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);