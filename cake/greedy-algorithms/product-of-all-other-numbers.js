// You have an array of integers, and for each index you want to find the product of every integer except the integer at that index.

// Write a function getProductsOfAllIntsExceptAtIndex() that takes an array of integers and returns an array of the products.

// For example, given:

//   [1, 7, 3, 4]

// JavaScript
// your function would return:

//   [84, 12, 28, 21]

// JavaScript
// by calculating:

//   [7 * 3 * 4,  1 * 3 * 4,  1 * 7 * 4,  1 * 7 * 3]

// JavaScript
// Here's the catch: You can't use division in your solution!

//O: array. each element will be product of all the other numbers.  ==> [1, 2, 3] ===> [2 * 3, 1 * 3, 1 * 2] ===> [6, 3, 2]
// I: array. each element is an integer.
//: O(n) time, O(n) space
//: empty array ==> [], array length of 1 i.e. [1] ==> [1] ==> return self, length of 2 ==> [0, 1] ==> [1, 0]

// let getProductsOfAllIntsExceptAtIndex = (arrayOfInts) => {
//   if (arrayOfInts.length < 2) return arrayOfInts;

//   let productsToLeftOfIndex = [1, arrayOfInts[0]];
//   let productsToRightOfIndex = [];
//   let productsOfAllIntsExceptAtIndex = [];
//   let product = arrayOfInts[0];


//   for(let i = 2; i < arrayOfInts.length; i++) {
//     product *= arrayOfInts[i - 1];
//     productsToLeftOfIndex.push(product);
//   }

//   product = arrayOfInts[arrayOfInts.length - 1];
//   productsToRightOfIndex[arrayOfInts.length - 1] = 1;
//   productsToRightOfIndex[arrayOfInts.length - 2] = product;

//   for(let j = arrayOfInts.length - 2; j > 0; j--) {
//     product *= arrayOfInts[j];
//     productsToRightOfIndex[j - 1] = product;
//   }

//   for(let k = 0; k < arrayOfInts.length; k++) {
//     productsOfAllIntsExceptAtIndex[k] = productsToLeftOfIndex[k] * productsToRightOfIndex[k];
//   }

//   return productsOfAllIntsExceptAtIndex;
// }


// moral of the story... push product first, then adjust, then increment
let getProductsOfAllIntsExceptAtIndex = (intArray) => {
  if(intArray.length < 2) return intArray;

  let productsOfAllIntsExceptAtIndex = [];
  let product = 1;

  for(let i = 0; i < intArray.length; i++) {
    productsOfAllIntsExceptAtIndex[i] = product;
    product *= intArray[i];
  }

  product = 1;
  for(let j = intArray.length - 1; j > -1; j--) {
    productsOfAllIntsExceptAtIndex[j] = product;
    product *= intArray[j];
  }

  return productsOfAllIntsExceptAtIndex;
}

getProductsOfAllIntsExceptAtIndex([1, 7, 3, 4])

// Start with a brute force solution, look for repeat work in that solution, and modify it to only do that work once.