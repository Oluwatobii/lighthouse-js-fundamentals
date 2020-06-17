const calculateChange = function(total, cash) {
  // Your code here
  let change = cash - total;
  let changesToGive = {};
  
  const changeDenominations = ["twentyDollars", "tenDollars", "fiveDollars", "twoDollars", "oneDollar", "quarter", "dime", "nickel", "penny"];
  const changeValues = [2000, 1000, 500, 200, 100, 25, 10, 5, 1];


  for (i = 0; i < changeValues.length; i++){
    let amount = Math.floor(change/changeValues[i]);
    if (amount > 0){
      changesToGive[changeDenominations[i]] = amount;
      change = change % changeValues[i];
    }
  }
  return changesToGive;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));