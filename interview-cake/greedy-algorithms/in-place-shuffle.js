// Write a function for doing an in-place ↴ shuffle of an array.

// The shuffle must be "uniform," meaning each item in the original array must have the same probability of ending up in each spot in the final array.

// Assume that you have a function getRandom(floor, ceiling) for getting a random integer that is >= floor and <= ceiling.

// let shuffle = (array) => {
//   if(array.length <= 1) return array;

//   let getRandom = (floor, ceiling) => {
//     return Math.floor(Math.random() * Math.floor(ceiling));
//   }

//   let index1, index2, temp;
//   let movesRemaining = array.length;

//   while(movesRemaining > 0) {
//     index1 = getRandom(0, array.length);
//     index2 = getRandom(0, array.length);
//     temp = array[index1]
//     array[index1] = array[index2];
//     array[index2] = temp;
//     movesRemaining--;
//   }

//   return array;
// }

let shuffle = (array) => {
  if(array.length <= 1) return;

  let getRandom = (floor, ceiling) => {
    return Math.floor(Math.random() * (ceiling - floor + 1) + floor);
  }

  let j;
  for(let i = 0; i < array.length - 1; i++) {
    j = getRandom(i, array.length - 1)
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  return array;
}

shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])