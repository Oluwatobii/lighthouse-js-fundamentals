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


