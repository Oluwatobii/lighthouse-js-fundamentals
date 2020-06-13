const instructorWithLongestName = function(instructors) {
  // Put your solution here
  answer = 0;
  x =  0;
  for (i = 0; i < instructors.length; i++){
    y = instructors[i].name.length;
    if (x < y){
      answer = instructors[i];
      x = y;
    }
  }
  return answer;
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));