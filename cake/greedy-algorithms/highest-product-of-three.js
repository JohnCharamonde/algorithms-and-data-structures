// Given an array of integers, find the highest product you can get from three of the integers.

// The input arrayOfInts will always have at least three integers.

// O: integer (number) ==> product of 3 highest nums...
// I: array of integers(numbers).
// C: 10:45 time limit. O(n) time complexity, O(1) space complexity
// E: arrayOfInts length less than 3 ===> null; should account for negatives


let arrayOfInts = [0, 8, 1, 2, -7, 6, 4, -5, 3, -9]

let maxProductOfThree = (arrayOfInts) => {
  if(arrayOfInts.length < 3) return null;

  let highestProductOfThree = arrayOfInts[0] * arrayOfInts[1] * arrayOfInts[2];
  let highest = Math.max(arrayOfInts[0], arrayOfInts[1]);
  let highestProductOfTwo = arrayOfInts[0] * arrayOfInts[1];
  let lowest = Math.min(arrayOfInts[0], arrayOfInts[1]);
  let lowestProductOfTwo = arrayOfInts[0] * arrayOfInts[1];

  for(let i = 2; i < arrayOfInts.length; i++) {
    let current = arrayOfInts[i];
    highestProductOfThree = Math.max(highestProductOfThree, highestProductOfTwo * current, lowestProductOfTwo * current);
    highestProductOfTwo = Math.max(highestProductOfTwo, highest * current, lowest * current);
    lowestProductOfTwo = Math.min(lowestProductOfTwo, highest * current, lowest * current);
    highest = Math.max(highest, current);
    lowest = Math.min(lowest, current);
  }

  return highestProductOfThree;
}