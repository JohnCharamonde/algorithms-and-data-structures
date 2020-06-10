// I like parentheticals (a lot).

// "Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing."

// Write a function that, given a sentence like the one above, along with the position of an opening parenthesis, finds the corresponding closing parenthesis.

// Example: if the example string above is input with the number 10 (position of the first parenthesis), the output should be 79 (position of the last parenthesis).

class Stack {
    constructor() {
        this.items = [];
    }

    push(item) {
        this.items.push(item);
    }

    pop() {
        return this.items.length ? this.items.pop() : null;
    }
}

const parenthesisMatcher = (index, string) => {
    if(string[index] !== '(') {
      return `ERROR! Char at ${index} is not (`
    }
    let openParenthesisStack = new Stack();
    for(let i = 0; i < string.length; i++) {
        if(string[i] === '(') {
            openParenthesisStack.push(i)
            console.log(openParenthesisStack)
        }
        if(string[i] === ')') {
            let potentialMatch = openParenthesisStack.pop();
            if(potentialMatch === null) {
                throw new Error('ERROR! No match found!')
            }
            if(potentialMatch === index) {
                return i;
            }
        }
    }
    throw new Error('ERROR! No match found!');
}



// parenthesisMatcher(11, "Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing.")

let myString = '(12(45(78)0)234(())901234)'
console.log(parenthesisMatcher(0, myString)) // 25
console.log(parenthesisMatcher(3, myString)) // 11
console.log(parenthesisMatcher(6, myString)) // 9
console.log(parenthesisMatcher(15, myString)) // 18
console.log(parenthesisMatcher(16, myString)) //17

let findClosingParenthesis = (string, index) => {
    let openParensCount = 0;
    for(let i = index + 1; i < string.length; i++) {
        if(string[i] === '(') openParensCount++;
        if(string[i] === ')') {
            if(openParensCount === 0) {
                return i
            } else {
                openParensCount--;
            }
        }
    }
    return null;
}
