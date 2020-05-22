// Sort Characters By Frequency
// Solution
// Given a string, sort it in decreasing order based on the frequency of characters.

// Example 1:

// Input:
// "tree"

// Output:
// "eert"

// Explanation:
// 'e' appears twice while 'r' and 't' both appear once.
// So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.
// Example 2:

// Input:
// "cccaaa"

// Output:
// "cccaaa"

// Explanation:
// Both 'c' and 'a' appear three times, so "aaaccc" is also a valid answer.
// Note that "cacaca" is incorrect, as the same characters must be together.
// Example 3:

// Input:
// "Aabb"

// Output:
// "bbAa"

// Explanation:
// "bbaA" is also a valid answer, but "Aabb" is incorrect.
// Note that 'A' and 'a' are treated as two different characters.

// /**
//  * @param {string} s
//  * @return {string}
//  */
// var frequencySort = function(s) {
//     let map = {};
//     for(let i = 0; i < s.length; i++) {
//         if(map[s[i]]) {
//           map[s[i]][0] += s[i];
//           map[s[i]][1] = map[s[i]][0].length;
//         } else {
//           map[s[i]] = [s[i], 1]
//         }
//     }

//     let mapArr = [];
//     for(key in map) {
//         mapArr.push(map[key])
//     }
//     mapArr.sort(function(a, b) { return b[1]-a[1] })

//     let output = '';
//     for(let i = 0; i < mapArr.length; i++) {
//       output += mapArr[i][0];
//     }

//     return output;
// };

/**
 * @param {string} s
 * @return {string}
 */
// var frequencySort = function(s) {
//     let map = {};
//     for(let i = 0; i < s.length; i++) {
//         map[s[i]] ? map[s[i]] += s[i] : map[s[i]] = s[i];
//     }

//     let mapArr = [];
//     for(key in map) {
//         mapArr.push(map[key]);
//     }

//     return mapArr.sort((a, b) => { return b.length - a.length }).join('');
// };

var frequencySort = function(s) {
  let map = {};
  for(let i = 0; i < s.length; i++) {
      map[s[i]] ? map[s[i]] += s[i] : map[s[i]] = s[i];
  }

  return Object.values(map).sort((a, b) => { return b.length - a.length }).join('');
};

frequencySort('aabbccc')