'use strict';

const AnimalShelter = require ('../lib/fifo-animal-shelter.js');

const testAnimalShelter = new AnimalShelter;

describe('Testing PseudoQueue constructor', () => {

  it('should construct a new AnimalShelter', () => {
    expect(testAnimalShelter).toBeDefined();
  });
});