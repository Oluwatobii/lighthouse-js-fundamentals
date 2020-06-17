const judgeVegetable = function(objList, characteristics){
  var answer = ""; // this variable will hold the answer to print out on console
  var characValue = 0; // this will be use to check which property is best

  var obj;
  for (obj of objList){
    if (obj[characteristics] > characValue){
      characValue = obj[characteristics]; // update the new best redness value
      answer = obj['submitter'];  // update the answer that we want to print on console
    }
  }
  return answer;
}

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]
const metric = 'redness';
console.log(judgeVegetable(vegetables, metric));


/*
const judgeVegetable = function(objList, characteristics){
  let answer = ""; // this variable will hold the answer to print out on console
  let characValue = 0; // this will be use to check which property is best

  // this else block of code checks for when property is redness
  if (characteristics === 'redness'){
    //var obj;

    // this is some form of for loop
    // other examples of for loop are ==> for (let obj in objList)
    //                                ==> for (for obj=0; obj < objList.length, obj++)
    for (obj of objList){
      // console.log(obj);
      // console.log(obj[characteristics]);

      // this is checking the redness Value is greater than the current best 
      // value (characValue)
      if (obj[characteristics] > characValue){
        characValue = obj[characteristics]; // update the new best redness value
        answer = obj['submitter'];  // update the answer that we want to print on console
      }
    }
  }

  // this else block of code checks for when property is plumpness
  else if (characteristics === 'plumpness'){
    //var obj;
    for (obj of objList){
      // console.log(obj);
      // console.log(obj[characteristics]);
      if (obj[characteristics] > characValue){
        characValue = obj[characteristics];
        answer = obj['submitter'];
      }
    }
  }
  return answer;
}

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]
const metric = 'redness';

console.log(judgeVegetable(vegetables, metric));
*/

//========================================================================================================================================================//
/*
const judgeVegetable = function(objList, characteristics){
  var answer = ""; 
  var characValue = 0; 

  if (characteristics === 'redness'){
    var obj;
    for (obj of objList){
      
      if (obj[characteristics] > characValue){
        characValue = obj[characteristics]; 
        answer = obj['submitter'];  
      }
    }
  }

  else if (characteristics === 'plumpness'){
    
    for (obj of objList){
      
      if (obj[characteristics] > characValue){
        characValue = obj[characteristics];
        answer = obj['submitter'];
      }
    }
  }
  return answer;
}

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]
const metric = 'redness';

console.log(judgeVegetable(vegetables, metric));
*/





