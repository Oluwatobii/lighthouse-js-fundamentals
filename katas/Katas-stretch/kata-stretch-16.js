const generateBoard = function (whiteQueen, blackQueen) {
  let board = [[0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0]]
  for (i = 0; i < board.length; i++){
    for (j = 0; j < board[i].length; j++){
      if (whiteQueen[0] === i && whiteQueen[1] === j){
        board[i][j] = 1;
      }
    }
  }
  for (i = 0; i < board.length; i++){
    for (j = 0; j < board[i].length; j++){
      if (blackQueen[0] === i && blackQueen[1] === j){
        board[i][j] = 1;
      }
    }
  }
  return board
}

const queenThreat = function (generatedBoard){
  let positions = [];
  for (i = 0; i < generatedBoard.length; i++){
    for (j = 0; j < generatedBoard[i].length; j++){
      if (generatedBoard[i][j] === 1){
        x = i;
        y = j;
        positions.push(x);
        positions.push(y);
      }
    }
  }
  console.log(positions)
  x1 = positions[0];
  y1 = positions[1];
  x2 = positions[2];
  y2 = positions[3];

  let slope = (y2 - y1) / (x2 - x1);
  if (slope === 1 || slope === -1){
    return true;
  }else if (x1 === x2 || y1 === y2){
    return true;
  }else{
    return false
  }
}

///////////////////////////////////////////////////////////////////////////////////
// ALTERNATIVE WAY OF FINDING THE QUEEN THREAT DIRECTLY //
// const queenThreat = function () {
//   if (whiteQueen[0] === blackQueen[0] || whiteQueen[1] === blackQueen[1] || (blackQueen[1] - whiteQueen[1]) / (blackQueen[0] - whiteQueen[0]) === 1 || (blackQueen[1] - whiteQueen[1]) / (blackQueen[0] - whiteQueen[0]) === -1){
//     answer = true
//   } else {
//     answer = false
//   }
//   return answer
// }
///////////////////////////////////////////////////////////////////////////////////

let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));

let whiteQueen1 = [0, 0];
let blackQueen1 = [5, 7];
let generatedBoard1 = generateBoard(whiteQueen1, blackQueen1);
console.log(generatedBoard1);
console.log(queenThreat(generatedBoard1));
