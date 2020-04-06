/**
 * @param {string[]} strs
 * @return {string[][]}
 */
// var groupAnagrams = function(strs) {
//     let anagrams = [];
//     let keys = {};
//     let index = 0;
//     const allocateAnagram = (str) => {
//       let key = str.split('').sort();
//       if(key in keys) {
//           anagrams[keys[key]].push(str);
//       } else {
//           keys[key] = index;
//           index++;
//           anagrams[keys[key]] = [str];
//       }
//     }
//     strs.forEach(str => { allocateAnagram(str) });
//     return anagrams;
// };

// var groupAnagrams = function(strs) {
//     let anagrams = {};

//     const allocateAnagram = (str) => {
//       let key = [...str].sort();
//       if(key in anagrams) {
//           anagrams[key].push(str);
//       } else {
//           anagrams[key] = [str];
//       }
//     }

//     strs.forEach(str => { allocateAnagram(str) });

//     return Object.values(anagrams);
// };

var groupAnagrams = function(strs) {
  let anagrams = {};

  strs.forEach(str => {
    let key = [...str].sort();
    anagrams[key] ? anagrams[key].push(str) : anagrams[key] = [str];
   });

  return Object.values(anagrams);
};