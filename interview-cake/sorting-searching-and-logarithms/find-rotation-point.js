// I want to learn some big words so people think I'm smart.

// I opened up a dictionary to a page in the middle and started flipping through, looking for words I didn't know. I put each word I didn't know at increasing indices in a huge array I created in memory. When I reached the end of the dictionary, I started from the beginning and did the same thing until I reached the page I started at.

// Now I have an array of words that are mostly alphabetical, except they start somewhere in the middle of the alphabet, reach the end, and then start from the beginning of the alphabet. In other words, this is an alphabetically ordered array that has been "rotated." For example:

//   const words = [
//   'ptolemaic',
//   'retrograde',
//   'supplant',
//   'undulate',
//   'xenoepist',
//   'asymptote',  // <-- rotates here!
//   'babka',
//   'banoffee',
//   'engender',
//   'karpatka',
//   'othellolagkage',
// ];

// JavaScript
// Write a function for finding the index of the "rotation point," which is where I started working from the beginning of the dictionary. This array is huge (there are lots of words I don't know) so we want to be efficient here.

function findRotationPoint(words) {
  if(words[0] < words[1] && words[0] < words[words.length - 1]) return 0;
  if(words[words.length - 1] < words[words.length - 2] && words[words.length - 1] < words[0]) return words.length - 1;

  let startingIndex = 0;
  let endingIndex = words.length - 1;

  while(startingIndex + 1 < endingIndex) {
    let middleIndex = Math.floor((endingIndex - startingIndex) / 2);

    if(words[middleIndex] < words[middleIndex + 1] && words[middleIndex] < words[middleIndex - 1]) {
      return middleIndex;
    }

    if(words[middleIndex] > words[middleIndex + 1]) {
      endingIndex = middleIndex;
    } else {
      startingIndex = middleIndex;
    }
  }

  return false;
}

findRotationPoint(words)