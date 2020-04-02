/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let indexTracker = {};
  for(let i = 0; i < nums.length; i++) {
    if(indexTracker.hasOwnProperty(nums[i])) {
      delete indexTracker[nums[i]]
    } else {
      indexTracker[nums[i]] = nums[i];
    }
  }
  return Object.keys(indexTracker)[0];
};

singleNumber([1,3,1,-1,3])
