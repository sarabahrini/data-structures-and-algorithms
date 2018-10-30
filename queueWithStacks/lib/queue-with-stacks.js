'use strict';

class Stack {
  constructor() {
    this.storage = [];
    this.top = null;
  }

  push(value) {

    if (value) {
      this.storage.push(value);
      this.top = value;
      return this;
    } else { return undefined; }

  }

  pop() {
    if (this.storage.length > 1) {
      this.top = this.storage[this.storage.length - 2];
      return this.storage.pop();
    } else if (this.storage.length === 1) {
      this.top = null;
      return this.storage.pop();

    } else { return "array is empty" }

  }

  peek() {
    if (this.storage.length === 0) {
      return null;
    } else { return this.top }

  }

}

class PseudoQueue {
  constructor() {

    this.enqueueStack = new Stack;
    this.dequeueStack = new Stack;
  }

  enqueue(value) {
    
    if (this.enqueueStack.peek() === null) {
      this.enqueueStack.push(value);
    } else {
      while (this.dequeueStack.peek() !== null) {
        this.enqueueStack.push(this.dequeueStack.pop().value);
      }
    }
  }

  dequeue() {
    if (this.enqueueStack.peek() === null && this.dequeueStack.peek() === null) {
      return "PseudoQueue is empty";
    } else if (this.enqueueStack.peek() === null) {
      return this.dequeueStack.pop();
    } else {
      while (this.enqueueStack.peek() !== null) {
        this.dequeueStack.push(this.enqueueStack.pop());
      }
      return this.dequeueStack.pop();
    }
  }
}
module.exports = PseudoQueue;

