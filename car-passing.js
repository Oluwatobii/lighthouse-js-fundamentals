const carPassing = function (cars, newSpeed){

  // this is where i defined the new object for the next car to record 
  var newCar = {
    time: Date.now(), // Date.now() is a method for getting the timestamp at an instant moment
    speed: newSpeed
  }
  // this updates the array of cars with the new car and it's speed and time
  cars.push(newCar);
  return cars;
}

// given information by the question
const cars = [
  {
    time: 111163,
    speed: 40
  },
  {
    time: 15674578433,
    speed: 42
  },
  {
    time: 1567634,
    speed: 35
  }
]

const speed = 38

console.log(carPassing(cars, speed));