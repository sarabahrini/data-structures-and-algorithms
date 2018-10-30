'use strict';

const PseudoQueue = require('../lib/queue-with-stacks.js');

const testPseudo = new PseudoQueue;

describe('Testing PseudoQueue constructor', () => {

  it('should construct a new PseudoQueue', () => {
    expect(testPseudo).toBeDefined();
  });

  it('should declare enqueue stack and dequeue stack to be null', () => {
    expect(testPseudo.enqueueStack.top).toBeNull();
    expect(testPseudo.dequeueStack.top).toBeNull();
  });

});

describe('Testing enqueue dequeue methods', () => {

  it('should return peek when a value is enqueue into an empty enqueueStack', () => {

    testPseudo.enqueue('A');
    expect(testPseudo.dequeue()).toBe('A');

  });

  it('should return dequeued value when multiple values are pushed in stack', () => {

    testPseudo.enqueue('A');
    testPseudo.enqueue('B');
    testPseudo.enqueue('C');
    expect(testPseudo.dequeue()).toBe('A');

  });

  it('should return the dequeued value when whe have multiple enqueue dequeue', () => {

    testPseudo.enqueue('A');
    testPseudo.dequeue('A');
    testPseudo.enqueue('B');
    testPseudo.dequeue('B');
    testPseudo.enqueue('C');
    testPseudo.enqueue('D');

    expect(testPseudo.dequeue()).toBe('C');

  });

    it('should return "Pseudo is empty" when an empty PseudoQueue is being dequeued', () => {
      
      expect(testPseudo.dequeue()).toBe("PseudoQueue is empty");

    });

  });


