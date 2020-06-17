const talkingCalendar = function(date) {
  // Your code here
  let year = date.slice(0, 4);
  let month = date.slice(5, 7) - 0; // the "- 0" is to remove any 0 in front of the number
  let day = date.slice(8) - 0; // the "- 0" is to remove any 0 in front of the number

  let monthName = [" ", "January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  
  let suffix;

  if (day === 1 || day ===  21 || day === 31){
    suffix = "st"
  } else if (day === 2 || day === 22){
    suffix = "nd"
  }else if (day === 3){
    suffix = "rd"
  }else {
    suffix = "th" 
    }

  let newDate = monthName[month] + " " + day + suffix + ", " + year;

  
  return newDate
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));