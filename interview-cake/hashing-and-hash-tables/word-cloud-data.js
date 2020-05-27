// You want to build a word cloud, an infographic where the size of a word corresponds to how often it appears in the body of text.

// To do this, you'll need data. Write code that takes a long string and builds its word cloud data in a map ↴ , where the keys are words and the values are the number of times the words occurred.

// We'll use a JavaScript Map instead of an object because it's more explicit—we're mapping words to counts. And it'll be easier and cleaner when we want to iterate over our data.

// Think about capitalized words. For example, look at these sentences:

//   "After beating the eggs, Dana read the next step:"
// "Add milk and eggs, then add flour and sugar."
// What do we want to do with "After", "Dana", and "add"? In this example, your final map should include one "Add" or "add" with a value of 22. Make reasonable (not necessarily perfect) decisions about cases like "After" and "Dana".

// Assume the input will only contain words and standard punctuation.

// You could make a reasonable argument to use regex in your solution. We won't, mainly because performance is difficult to measure and can get pretty bad.

// won't work for contractions...
// let countWords = (string) => {
//   let wordCounts = {};
//   let isCurrentCharALetter;
//   let word = '';

//   let isLetter = (char) => {
//     return 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.indexOf(char) >= 0;
//   }

//   for(let i = 0; i < string.length; i++) {
//     isCurrentCharALetter = isLetter(string[i]);

//     if(isCurrentCharALetter) {
//       word += string[i].toLowerCase();
//     }

//     if (!isCurrentCharALetter || i === string.length - 1) {
//       if(word.length) {
//         wordCounts[word] ? wordCounts[word]++ : wordCounts[word] = 1;
//         word = '';
//       }
//     }
//   }

//   return wordCounts;
// };

let countWords = (string) => {
  let wordCounts = {};
  let isCurrentCharALetter;
  let word = '';
  let start = null;
  let end = null;

  let isLetter = (char) => {
    return 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.indexOf(char) >= 0;
  }

  for(let i = 0; i < string.length; i++) {
    isCurrentCharALetter = isLetter(string[i]);

    if(!start && isCurrentCharALetter) {
      start = i;
      end = i;
    } else if(start && isCurrentCharALetter) {
      end++;
    }

    if(start && (!isCurrentCharALetter || i === string.length - 1)) {
        word = string.slice(start, end + 1).toLowerCase();
        wordCounts[word] ? wordCounts[word]++ : wordCounts[word] = 1;
        start = null;
        end = null;
    }
  }

  return wordCounts;
};

countWords('This is a message that will be hashed to a map... hooray! HoOrAy!!! Yaaaayyy!!!!!! WOOHOO! That is enough... Woohoo. This function does not account for contractions')