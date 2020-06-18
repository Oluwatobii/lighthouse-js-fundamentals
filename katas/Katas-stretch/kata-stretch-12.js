const organizeInstructors = function(instructors) {
  // Put your solution here
  newArrangement = {};
  for (obj of instructors){
    let arrayOutput = [];
    let newKey = obj.course;
    for (secondObj of instructors){
      if (newKey === secondObj.course){
        arrayOutput.push(secondObj.name)
      }
    }
    newArrangement[newKey] = arrayOutput //console.log (obj)
  }
  return newArrangement
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));