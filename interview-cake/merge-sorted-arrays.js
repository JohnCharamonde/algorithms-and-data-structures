// In order to win the prize for most cookies sold, my friend Alice and I are going to merge our Girl Scout Cookies orders and enter as one unit.

// Each order is represented by an "order id" (an integer).

// We have our lists of orders sorted numerically already, in arrays. Write a function to merge our arrays of orders into one sorted array.

// For example:

//   const myArray = [3, 4, 6, 10, 11, 15];
// const alicesArray = [1, 5, 8, 12, 14, 19];

// console.log(mergeArrays(myArray, alicesArray));
// logs [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19]


// let mergeArrays = (a, b) => {
//   let c = [];
//   let i = 0;
//   let j = 0;
//   while(c.length < a.length + b.length) {
//     if(a[i] <= b[j] || b[j] === undefined) {
//       c.push(a[i]);
//       i++;
//     } else if(b[j] <= a[i] || a[i] === undefined){
//       c.push(b[j]);
//       j++;
//     }
//   }
//   return c;
// }

// console.log(mergeArrays([1,3,5,10,11,13],[2,4,6,7,8,9,14,15,16,17,18,29,20]));


// slower because of shift O(n)...
let mergeArrays = (a, b) => {
  let c = Array(a.length + b.length);
  let i = 0;
  while(i < c.length) {
    if(a[0] <= b[0] || !b.length) {
      c[i] = a.shift();
    } else {
      c[i] = b.shift();
    }
    i++;
  }
  return c;
}

console.log(mergeArrays([1,3,5,10,11,12,13, 21, 22, 23],[2,4,6,7,8,9,14,15,16,17,18,19,20, 24, 25]));