// Implement a queue ↴ with 2 stacks. ↴ Your queue should have an enqueue and a dequeue method and it should be "first in first out" (FIFO).

// Optimize for the time cost of mm calls on your queue. These can be any mix of enqueue and dequeue calls.

// Assume you already have a stack implementation and it gives O(1)O(1) time push and pop.

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

class Queue {
  constructor() {
    this.enqueueStack = new Stack();
    this.dequeueStack = new Stack();
  }

  enqueue(item) {
    this.enqueueStack.push(item);
  }

  dequeue() {
    if (!this.dequeueStack.items.length) {
      for (let i = this.enqueueStack.items.length; i > 0; i--) {
        this.dequeueStack.push(this.enqueueStack.pop());
      }
    }
    return this.dequeueStack.pop();
  }
}

let test = new Queue();
test.enqueue(1);
console.log(test);
test.enqueue(2);
console.log(test);
test.enqueue(3);
console.log(test);
test.dequeue();
test.dequeue();
test.dequeue();
test.dequeue();
test.dequeue();
