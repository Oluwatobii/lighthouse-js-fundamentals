let prompt = require("prompt-sync")();

// code below (replace this example)
let randomNumber = Math.round(Math.random() * 100);
let attempts = 0;
let previous = [];
let answer = prompt('Guess a number between 0-100: '); //The prompt() method displays a dialog box that prompts the user for an input.

while(true){
  console.log(answer)
  if (parseInt(answer) === randomNumber){   //The parseInt() is to convert the string into an integer
    attempts += 1
    console.log('You got it! You took ' + attempts + ' attempts!');
    break;
  }
  else if (previous.includes(answer)){
    answer = prompt('Already guessed. ');
  }
  else if (parseInt(answer) < randomNumber){
    attempts += 1;
    previous.push(answer);
    answer = prompt('Too Low! ');
  }
  else if(parseInt(answer) > randomNumber){
    attempts += 1;
    previous.push(answer);
    answer = prompt('Too High! ');
  }
  else if (answer === 'quit'){
    break;
  }
  else {
    answer = prompt('Not a number! Try again! ')
  } 
}
