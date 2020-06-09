// Write an efficient function that checks whether any permutation ↴ of an input string is a palindrome. ↴

// You can assume the input string only contains lowercase letters.

// Examples:

// "civic" should return true
// "ivicc" should return true
// "civil" should return false
// "livci" should return false
// "But 'ivicc' isn't a palindrome!"

// If you had this thought, read the question again carefully. We're asking if any permutation of the string is a palindrome. Spend some extra time ensuring you fully understand the question before starting. Jumping in with a flawed understanding of the problem doesn't look good in an interview.


//THIS WON'T WORK!!! - DOESN'T ACCOUNT FOR FOR PALINDOMES WITH MORE THAN 2 OF THE SAME CHAR (i.e. 'abcccba')
// let isPalindromePossible = (string) => {
//   let charCounts = {};
//   string.forEach(char => {
//     charCounts[char] ? charCounts[char]++ : charCounts = 1;
//   })
//   let oneCount = null;
//   let twoCount = null;
//   for(const val of charCounts) {
//     if(val === 1) oneCount++;
//     if(val === 2) twoCount++
//   }

//   if(twoCount + oneCount === string.length) {
//     return true;
//   }
//   return false;
// }


// NO....
// const isPalindromePossible = (string) => {
//   let charCounts = {odd: 0, even: 0}
//   string.forEach(char => {
//     if(charCounts[char]) {
//       charCounts[char]++
//     }
//   })
//   return charCounts[odd] <= 1 ? true : false;
// }

const isPalindromePossible = (string) => {
  let unmatchedChars = new Set();
  for(let i = 0; i < string.length; i++) {
    if(unmatchedChars.has(string[i])) {
      unmatchedChars.delete(string[i]);
    } else {
      unmatchedChars.add(string[i]);
    }
  }
  return unmatchedChars.size() <= 1;
}