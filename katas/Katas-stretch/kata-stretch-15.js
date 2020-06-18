const squareCode = function(message) {
  // Put your solution here
  newMessage = message.replace(/\s/g, '')
  num = newMessage.length
  newNum = Math.ceil(Math.sqrt(num))
  arrayMessage = [];
  finalMessage = [];
  for (i = 0; i < newMessage.length; i = i + newNum){
    finalMessage = newMessage.slice(i, ((newNum + i)))
    arrayMessage.push(finalMessage)
  }
  let finalString = '';

  for (let i = 0; i < newNum; i++){
    let subAnswer = '';
    for (let j = 0; j < arrayMessage.length; j++){
      let character = arrayMessage[j].charAt(i);
      subAnswer = `${subAnswer}${character}`;
    }
    finalString += `${subAnswer} `;
  }
  return finalString;
  
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));



///////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////    How The Second part of the Code Works   //////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
/*
arrayMessage  = [
				  'ifmanwas',
				  'meanttos',
				  'tayonthe',
				  'groundgo',
				  'dwouldha',
				  'vegivenu',
				  'sroots'
				]



found the length of the array 
i = 0 , j = 0
arrayMessage[j].charAt(i) = > arrayMessage[0].charAt(0) ==> 'i'
subAnswer = `${subAnswer}${character}` ==> ${''}${'i'}` ==> 'i'
i = 0 , j = 1
arrayMessage[j].charAt(i) = > arrayMessage[1].charAt(0) ==> 'm'
subAnswer = `${subAnswer}${character} ==> ${'i'}${'m'}` ==> 'im'
i = 0 , j = 2
arrayMessage[j].charAt(i) = > arrayMessage[2].charAt(0) ==> 't'
subAnswer = `${subAnswer}${character} ==> ${'im'}${'t'}` ==> 'imt'





i = 1 , j = 0
arrayMessage[j].charAt(i) = > arrayMessage[0].charAt(1) ==> 'f'
subAnswer = `${subAnswer}${character}` ==> ${''}${'f'}` ==> 'f'
i = 1 , j = 1
arrayMessage[j].charAt(i) = > arrayMessage[1].charAt(1) ==> 'e'
subAnswer = `${subAnswer}${character}` ==> ${'f'}${'e'}` ==> 'fe'
i = 1 , j = 2
arrayMessage[j].charAt(i) = > arrayMessage[2].charAt(1) ==> 'a'
subAnswer = `${subAnswer}${character}` ==> ${'fe'}${'a'}` ==> 'fea'
*/
///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
