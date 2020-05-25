// You're working on a secret team solving coded transmissions.

// Your team is scrambling to decipher a recent message, worried it's a plot to break into a major European National Cake Vault. The message has been mostly deciphered, but all the words are backward! Your colleagues have handed off the last step to you.

// Write a function reverseWords() that takes a message as an array of characters and reverses the order of the words in place. ↴

// Why an array of characters instead of a string?

// The goal of this question is to practice manipulating strings in place. Since we're modifying the message, we need a mutable ↴ type like an array, instead of JavaScript's immutable strings.

// For example:

//   const message = [ 'c', 'a', 'k', 'e', ' ',
//                 'p', 'o', 'u', 'n', 'd', ' ',
//                 's', 't', 'e', 'a', 'l' ];

// reverseWords(message);

// console.log(message.join(''));
// // Prints: 'steal pound cake'

// When writing your function, assume the message contains only letters and spaces, and all words are separated by one space.

// const message = [ 'c', 'a', 'k', 'e', ' ',
//                 'p', 'o', 'u', 'n', 'd', ' ',
//                 's', 't', 'e', 'a', 'l' ];

// let reverseWords = (chars) => {


  // let space, word, processed = 0;

    //   word = [''].concat(chars.slice(0, chars.indexOf(' ')))

    // chars = chars.slice(chars.indexOf(' ') + 1, chars.length).concat(word)

    // console.log(chars)


  // while(processed < chars.length) {
  //   word = [''].concat(chars.slice(0, chars.indexOf(' ')))
  //   chars = chars.slice(chars.indexOf(' ') + 1, chars.length).concat(word)
  //   processed += word.length;
  // }

//   return chars;
// }

const message = [ 'c', 'a', 'k', 'e', ' ',
                'p', 'o', 'u', 'n', 'd', ' ',
                's', 't', 'e', 'a', 'l' ];

let reverseWords = (chars) => {
  let left = 0;
  let right = chars.length - 1;
  let temp;

  while(left < right) {
    temp = chars[left];
    chars[left] = chars[right];
    chars[right] = temp;
    left++;
    right--;
  }

  left = 0;
  right = chars.indexOf(' ') - 1;

  let flip = (left, right) => {
    let r = right;
    while(left < right) {
      temp = chars[left];
      chars[left] = chars[right];
      chars[right] = temp;
      left++;
      right--;
    }


    left = r + 2
    for(let i = left + 1; i < chars.length; i++) {
      if(chars[i] === ' ') {
        right = i - 1;
        return flip(left, right);
      } else if(chars[i] === chars[chars.length - 1]) {
        right = chars.length - 1;
        return flip(left, right);
      }
    }
    return;
  }

  flip(left, right)

  return chars;
}


reverseWords(message).join('')