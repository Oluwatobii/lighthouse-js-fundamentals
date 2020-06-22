/*
 Things to keep track of
 {east and north}
 last movement
 initial movement for left
 initial movement for right
 If north is zero, we cant go down, stick with last movement
 If east is zero, we cant go left, stick with last movement
 [up, left, down, right] Left we go forward, Right we go backward
 */

const blocksAway = function (directions) {
    // Put your solution here
  const orderOfDirections = ['up', 'left', 'down', 'right']; //Creating a natural order of direction
  const initialLeftMovement = 'up';                          //When the first movement starts at left
  const initialRightMovement = 'right';                      //When the first movement starts at right
  const currentDirection = { east: 0, north: 0 };
  let lastMovement;

  const getNextMovement = function (lastMovement, movementDirection) {
    if (movementDirection === 'right') {
      if (!lastMovement) return initialRightMovement;
      let currentIndex = orderOfDirections.indexOf(lastMovement);
      const nextIndex = currentIndex - 1;                             
      return orderOfDirections[nextIndex] || orderOfDirections[3];
    } else {
      if (!lastMovement) return initialLeftMovement;
      let currentIndex = orderOfDirections.indexOf(lastMovement);
      const nextIndex = currentIndex + 1;
      return orderOfDirections[nextIndex] || orderOfDirections[0];
    }
  };

  for (let i = 0; i < directions.length; i += 2) {
    const movementDirection = directions[i];
    const numberOfMovements = directions[i + 1];
    const nextMovement = getNextMovement(lastMovement, movementDirection);
    if (nextMovement === 'up') {
      currentDirection.north += numberOfMovements; // currentDirection.north = currentDirection.north + numberOfMovements
    } else if (nextMovement === 'down') {
      currentDirection.north -= numberOfMovements; // currentDirection.north = currentDirection.north - numberOfMovements
    } else if (nextMovement === 'right') {
      currentDirection.east +=  numberOfMovements; // currentDirection.east = currentDirection.east + numberOfMovements
    } else if (nextMovement === 'left') {
      currentDirection.east -= numberOfMovements; // currentDirection.east = currentDirection.east + numberOfMovements
    }
    lastMovement = nextMovement;
  }
  return currentDirection;
};

console.log(blocksAway(['right', 2, 'left', 3, 'left', 1]));
console.log(blocksAway(['left', 1, 'right', 1, 'left', 1, 'right', 1, 'left', 1, 'right', 1]));
console.log(blocksAway(['left', 3, 'right', 1, 'right', 3, 'right', 1]));

