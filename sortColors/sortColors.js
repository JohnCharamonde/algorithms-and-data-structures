/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */



// var sortColors = function(nums) {
//   for(let i = 0; i < nums.length; i++) {
//     if(nums[i] === 0) {
//       nums.splice(i, 1);
//       nums.unshift(0);
//       i++;
//     } else if(nums[i] === 2) {
//       if(i === nums.length - 1) {
//         return nums;
//       }
//       nums.splice(i, 1);
//       nums.push(2);
//       i--;
//     }
//   }
//   return nums;
// };

// sortColors(
// [2,0,2,1,1,0])





// var sortColors = function(nums) {
//     let n = nums.length;
//     while(n > 0) {
//         for(let i = 0; i < nums.length - 1; i++) {
//             if(nums[i] > nums[i + 1]) {
//                 let temp = nums[i];
//                 nums[i] = nums[i + 1];
//                 nums[i + 1] = temp;
//             }
//         }
//         n -= 1;
//     }
//     return nums;
// };

var sortColors = function(nums) {
  for(let i = 2; i > -1; i--) {
    for(let j = 0; j < nums.length; j++) {
      if(nums[j] === i) {
        nums.splice(j, 1);
        nums.unshift(i)
      }
    }
  }
  return nums;
};

sortColors([2,0,2,1,1,0])