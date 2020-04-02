/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  let newNs = [];
  let recurse = (num) => {
    if(num === 1) {
      return true;
    }

    let newN = num.toString().split('').reduce((acc, ele) => {
      return acc += parseInt(ele) * parseInt(ele);
    }, 0);
    if(newN in newNs) {
      return false;
    }
    newNs.push(newN);
    return recurse(newN)
  }
  return recurse(n);
};

isHappy(3)

// let arr = [1, 9]

// arr.reduce((acc, ele) => {
//  return acc += ele * ele;
// }, 0)
