'use strict';

// Require the module under test
const arrayShift = require('./array_shift');

describe('testing array_shift', () => {
  it('should insert the value to the middle of the array', () => {
    expect(arrayShift([5, 6, 3], 2)).toEqual([5, 6, 2, 3])
  });
  
  it('should insert the value to the middle of the array', () => {
    expect(arrayShift([5, 6, 3, 7], 2)).toEqual([5, 6, 2, 3, 7])
  });

  it('should insert the value to the middle of the array', () => {
    expect(arrayShift(['a', 'b'], 'c')).toEqual(['a', 'c', 'b'])
  });

});