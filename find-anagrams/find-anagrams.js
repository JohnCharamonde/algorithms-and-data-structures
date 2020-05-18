// Find All Anagrams in a String
// Solution
// Given a string s and a non-empty string p, find all the start indices of p's anagrams in s.

// Strings consists of lowercase English letters only and the length of both strings s and p will not be larger than 20,100.

// The order of output does not matter.

// Example 1:

// Input:
// s: "cbaebabacd" p: "abc"

// Output:
// [0, 6]

// Explanation:
// The substring with start index = 0 is "cba", which is an anagram of "abc".
// The substring with start index = 6 is "bac", which is an anagram of "abc".
// Example 2:

// Input:
// s: "abab" p: "ab"

// Output:
// [0, 1, 2]

// Explanation:
// The substring with start index = 0 is "ab", which is an anagram of "ab".
// The substring with start index = 1 is "ba", which is an anagram of "ab".
// The substring with start index = 2 is "ab", which is an anagram of "ab".

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
  let startsAt = [];

  let check = subStr => {
      let chars = subStr.split('');

      for(let i = 0; i < p.length; i++) {
          let index = chars.indexOf(p[i])
          if(index === -1) {
              return false;
          }
          chars = chars.slice(0, index).concat(chars.slice(index + 1, chars.length))
      }
      return true;
  }


  for(let i = 0; i < s.length - p.length + 1; i++) {
      let substring = s.substring(i, i + p.length)
      if(check(substring)) startsAt.push(i);
  }

