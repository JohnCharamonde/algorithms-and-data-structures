// My cake shop is so popular, I'm adding some tables and hiring wait staff so folks can have a cute sit-down cake-eating experience.

// I have two registers: one for take-out orders, and the other for the other folks eating inside the cafe. All the customer orders get combined into one list for the kitchen, where they should be handled first-come, first-served.

// Recently, some customers have been complaining that people who placed orders after them are getting their food first. Yikes—that's not good for business!

// To investigate their claims, one afternoon I sat behind the registers with my laptop and recorded:

// The take-out orders as they were entered into the system and given to the kitchen. (takeOutOrders)
// The dine-in orders as they were entered into the system and given to the kitchen. (dineInOrders)
// Each customer order (from either register) as it was finished by the kitchen. (servedOrders)
// Given all three arrays, write a function to check that my service is first-come, first-served. All food should come out in the same order customers requested it.

// We'll represent each customer order as a unique integer.

// As an example,

//   Take Out Orders: [1, 3, 5]
//  Dine In Orders: [2, 4, 6]
//   Served Orders: [1, 2, 4, 6, 5, 3]
// would not be first-come, first-served, since order 3 was requested before order 5 but order 5 was served first.

// But,

//   Take Out Orders: [17, 8, 24]
//  Dine In Orders: [12, 19, 2]
//   Served Orders: [17, 8, 12, 19, 24, 2]
// would be first-come, first-served.

// Note: Order numbers are arbitrary. They do not have to be in increasing order.

// Breakdown
// How can we re-phrase this problem in terms of smaller subproblems?

// Breaking the problem into smaller subproblems will clearly involve reducing the size of at least one of our lists of customer order numbers. So to start, let's try taking the first customer order out of servedOrders.

// What should be true of this customer order number if my service is first-come, first-served?

//FALSE
// let t = [1, 3, 5];
// let d = [2, 4, 6];
// let s = [1, 2, 4, 6, 5, 3];

//TRUE
let t = [17, 8, 24];
let d = [12, 19, 2];
let s = [17, 8, 12, 19, 24, 2];

// let orderChecker = (dineInOrders, takeOutOrders, servedOrders) => {
//   for(let i = 0; i < servedOrders.length; i++) {
//     if(servedOrders[i] === dineInOrders[0]) {
//       dineInOrders.shift();
//     } else if(servedOrders[i] === takeOutOrders[0]) {
//       takeOutOrders.shift();
//     } else {
//       return false;
//     }
//   }
//   return true;
// }

// let orderChecker = (dineInOrders, takeOutOrders, servedOrders) => {
//   let j = 0;
//   let k = 0;
//   for(let i = 0; i < servedOrders.length; i++) {
//     if(servedOrders[i] === dineInOrders[j]) {
//       j++;
//     } else if(servedOrders[i] === takeOutOrders[k]) {
//       k++;
//     } else {
//       return false;
//     }
//   }
//   return true;
// }

// orderChecker(d,t,s)

let orderChecker = (dineInOrders, takeOutOrders, servedOrders) => {
  let j = 0;
  let k = 0;
  let maxJ = dineInOrders.length - 1;
  let maxK = takeOutOrders.length - 1;


  for(let i = 0; i < servedOrders.length; i++) {
    if(j <= maxJ && servedOrders[i] === dineInOrders[j]) {
      j++;
    } else if(k <= maxK && servedOrders[i] === takeOutOrders[k]) {
      k++;
    } else {
      return false;
    }
  }

  if(j !== maxJ + 1 || k !== maxK + 1) return false;

  return true;
}

orderChecker(d,t,s)