// Find a duplicate, Space Edition™.

// We have an array of integers, where:

// The integers are in the range 1..n1..n
// The array has a length of n+1n+1
// It follows that our array has at least one integer which appears at least twice. But it may have several duplicates, and each duplicate may appear more than twice.

// Write a function which finds an integer that appears more than once in our array. (If there are multiple duplicates, you only need to find one of them.)

// We're going to run this function on our new, super-hip MacBook Pro With Retina Display™. Thing is, the damn thing came with the RAM soldered right to the motherboard, so we can't upgrade our RAM. So we need to optimize for space!

let nums = [5, 9, 10, 1, 3, 2, 7, 8, 4, 6, 2]  //n = 10, num.length = 11...

let nums = [5, 9, 10, 1, 3, 2, 7, 8, 4, 6, 10];

function findRepeat(numbers) {
  let floor = 1;
  let ceiling = numbers.length - 1;

  while (floor < ceiling) {
    const midPoint = Math.floor(floor + ((ceiling - floor) / 2));
    const lowerFloor = floor;
    const lowerCeiling = midPoint;
    const upperFloor = midPoint + 1;
    const upperCeiling = ceiling;

    const possibilitiesAtOrBelowMidPoint = lowerCeiling - lowerFloor + 1;

    let elementsAtOrBelowMidPoint = 0;
    for(let i = 0; i < numbers.length; i++) {
      if(nums[i] >= lowerFloor && nums[i] <= lowerCeiling) elementsAtOrBelowMidPoint++;
    }

    if(possibilitiesAtOrBelowMidPoint < elementsAtOrBelowMidPoint) {
      floor = lowerFloor;
      ceiling = lowerCeiling;
    } else {
      floor = upperFloor;
      ceiling = upperCeiling;
    }
  }

  return floor;
}

findRepeat(nums)