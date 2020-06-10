// Implement the push, pop, and getMax methods

class MaxStack {
    constructor() {
      this.items = new Stack();
      this.max = new Stack();
    }
  
    push(item) {
      this.items.push(item);
      if(this.max.peek() === null || this.max.peek() <= item) {
        this.max.push(item);
      }
    }
  
    pop() {
      let item = this.items.pop();
      if(item === this.max.peek()) {
        this.max.pop();
      }
      return item;
    }
  
    getMax() {
      return this.max.peek();
    }
  }
  
  class Stack {
    constructor() {
  
      // Initialize an empty stack
      this.items = [];
    }
  
    // Push a new item onto the stack
    push(item) {
      this.items.push(item);
    }
  
    // Remove and return the last item
    pop() {
  
      // If the stack is empty, return null
      // (It would also be reasonable to throw an exception)
      if (!this.items.length) {
        return null;
      }
      return this.items.pop();
    }
  
    // Return the last item without removing it
    peek() {
      if (!this.items.length) {
        return null;
      }
      return this.items[this.items.length - 1];
    }
  }
  