// FIRST ANSWER

// class Stack {
//     constructor() {
//         this.items = [];
//     }

//     push(item) {
//         this.items.push(item)
//     }

//     pop() {
//         return this.items.length ? this.items.pop() : null;
//     }
// }

// function backetValidator(code) {
//     openBracketStack = new Stack();

//     for(let i = 0; i < code.length; i++) {
//         if(code[i] === '{') {
//             openBracketStack.push('{');
//         } else if(code[i] === '[') {
//             openBracketStack.push('[');
//         } else if(code[i] === '(') {
//             openBracketStack.push('(');
//         } else if(code[i] === '}') {
//             if(openBracketStack.pop() !== '{') {
//                 return false;
//             }
//         } else if(code[i] === ']') {
//             if(openBracketStack.pop() !== '[') {
//                 return false;
//             }
//         } else if(code[i] === ')') {
//             if(openBracketStack.pop() !== '(') {
//                 return false;
//             }
//         }
//     }

//     return openBracketStack.items.length === 0 ? true : false;
// }

// SLIGHTLY MORE OPTIMIZED / EASIER TO READ

function isValid(code) {
    let openers = new Set(['{', '[', '(']);
    let closers = new Set(['}', ']', ')']);
    let matches = {
        '{': '}',
        '[': ']',
        '(': ')'
    };
    let nextCloser = [];

    for(let i = 0; i < code.length; i++) {
        if(openers.has(code[i])) {
            nextCloser.push(matches[code[i]]);
        } else if(closers.has(code[i])) {
            if(!nextCloser.length) {
                return false;
            }
            let closer = nextCloser.pop()
            if(closer !== code[i]) {
                return false;
            }
        }
    }

    return nextCloser.length === 0;
}