/*
const smartGarbage = function (trash, bins){
  const keys = Object.keys(bins);
  for (let i of keys){
    if (trash === 'waste') {
      bins.waste += 1;
    } else if (trash === 'recycling') {
      bins.recycling += 1;
    } else if (trash === 'compost') {
      bins.compost += 1;
    }
  }
  return (bins);
}
console.log(smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 }));
*/

const smartGarbage = function (trash, bins){

  const keys = Object.keys(bins); // this lines extracts all the keys from bins into an array
  console.log(keys);

  // this is looping through the array of keys from bins
  for (let i=0; i< keys.length; i++){

    if (trash === keys[i]){ // this is chekcing to see which of the keys matches trash
      bins[trash] = bins[trash] + 1; // once we find such key, we need to update it's corresponding value
    
    }
  }
  return bins;
}

console.log(smartGarbage('recycling', {waste: 4, recycling: 2, compost: 5}));