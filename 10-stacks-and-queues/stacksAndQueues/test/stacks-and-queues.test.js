'use strict';

const Classes = require ('../lib/stacks-and-queues.js');

const Stack = Classes.Stack;
const Queue = Classes.Queue;
const Node = Classes.Node;



describe('Test to see if PUSH method works properly', () => {

  it('should return top to be equal to the last pushed value', () => {

    const stack = new Stack();
    stack.push('a');
    
  
    const actual = stack.push('b');
    const expected = 'b';
    expect(actual.top).toBe(expected);

  });

  it('should return "value undefined" when the value is not entered', () => {

    const stack = new Stack();
    stack.push('a');
    stack.push('b');
  
    const actual = stack.push();
    expect(actual).toBeUndefined();

  });    

  it('should return top as the pushed value when the stack is empty', () => {

    const stack = new Stack();
    
    const actual = stack.push('a');
    const expected = 'a';
    expect(actual.top).toEqual(expected);

  });
});


describe('Test to  to see if POP method works properly', () => {

  it('should remove the last index in array and return the popped value ', () => {

    const stack = new Stack();
    stack.push('a');
    stack.push('b')
    stack.push('c');

    const actual = stack.pop();
    const expected = 'c';
    expect(actual).toBe(expected);
  });

  it('should return top as null if stack is empty after pop', () => {

    const stack = new Stack();
    stack.push('a');
    stack.pop();

    const actual = stack.top;
    console.log(stack.top)
    const expected = null;
    expect(actual).toBe(expected);
  });

  it('should return "array is empty" when trying to pop a value from an empty array', () => {

    const stack = new Stack();

    const actual = stack.pop();
    const expected = "array is empty";
    expect(actual).toBe(expected);
  });

});


describe('Test to see if the PEEK method works properly', () => {

  it('Should return the last pushed value to the Stack',() => {

    const stack = new Stack();    
    stack.push('b');    
    stack.push('a');    
  
    const actual = stack.peek();
    const expected = 'a';
    expect(actual).toBe(expected);
  });

  it('Should return the top value when a value is pushed', () => {

    const stack = new Stack();
    stack.push('a');    
  
    const actual = stack.peek();
    const expected = 'a';
    expect(actual).toBe(expected);

  });

  it('Should return null when a value is popped', () => {

    const stack = new Stack();
    stack.push('a');    
    stack.pop();    
  
    const actual = stack.peek();
    const expected = null;
    expect(actual).toBe(expected);

  });
});



describe('Test to is the enqueue works properly', () => {
  it('should return the index[0] when value is pushed in array or enqueue in Queue ', () => {

    const queue = new Queue();
    queue.enqueue('c');
    queue.enqueue('b');

    const actual = queue.enqueue('a');
    const expected = 'a';
    expect(actual.rear).toBe(expected);

  });


  it('should return "value undefined" when no value is enqueue', () => {

    const queue = new Queue();
    queue.enqueue('c');
    queue.enqueue('b');

    const actual = queue.enqueue();
    const expected = "value undefined";
    expect(actual.rear).toBeUndefined();

  });

  it('should return rear as the enqueue value when the stack is empty', () => {

    const queue = new Queue();
    
    const actual = queue.enqueue('a');
    const expected = 'a';
    expect(actual.rear).toBe(expected);

  });

});


describe('Test to is the dequeue works properly', () => {

  it('should return the dequeued value', () => {

    const queue = new Queue();
    queue.enqueue('c');
    
    const actual = queue.dequeue();
    const expected = 'c';
    expect(actual).toBe(expected);

  });

  it('should return Queue is empty when dequeueing an empty array', () => {

    const queue = new Queue();
  
    const actual = queue.dequeue();
    const expected = "value undefined";
    expect(actual).toBeUndefined();

  });

  it('should return FRONT as the last index remaining in array ', () => {

    const queue = new Queue();
    queue.enqueue('c');
    queue.enqueue('b');
    queue.enqueue('a');
    queue.dequeue();

    const actual = queue.front;
    const expected = 'b';
    expect(actual).toBe(expected);

  });

});

describe('Test to is the peek works properly', () => {
  it('should return null when Queue is empty', () => {

    const queue = new Queue();

    const actual = queue.peek();
    const expected = null;
    expect(actual).toBe(expected);

  });

  it('should return the last remaining index in array after dequeue', () => {

    const queue = new Queue();
    queue.enqueue('d');
    queue.enqueue('c');
    queue.enqueue('b');
    queue.enqueue('a');
    queue.dequeue();
    queue.dequeue();

    const actual = queue.peek();
    const expected = 'b';
    expect(actual).toBe(expected);

  });

  it('should the peek should remain the same when multiple values are being enqueued in the array/Queue' , () => {

    const queue = new Queue();
    queue.enqueue('d');
    queue.enqueue('c');
    queue.enqueue('b');
    queue.enqueue('a');

    const actual = queue.peek();
    // console.log(queue.peek())
    const expected = 'd';
    expect(actual).toBe(expected);




  });
});

