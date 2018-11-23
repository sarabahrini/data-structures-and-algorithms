'use strict';

//Not sure what this does 
// const util = require('util');

class HashMap {
 
  constructor(size) {
    this.size = size;
    this.map = new Array(size);
  }
  
  hash(key) {
    return key.split('').reduce( (acc, currentValue) => acc + currentValue.charCodeAt(0), 0) % this.size;
  }

// A method/function named add that takes in both the key and value. This method should hash the key and add the key and value pair to the table.
  add(key,value) {
    if(!key || !value) { 
      return "invalid argument - must have both key and value"; 
    }
  
  }

  // A method/function named GetHash that takes in a key and returns the index in the array the key is stored.

  get(key) {

  }
  
  // A method/function named Find that takes in the key and returns the value from key/value pair.

  find(key) {
  
  }

  update(key, newValue) {
    
  }
  
  delete(key) {
    
  }
  

  // serialize() {
    
  // }
  
  // deserialize() {
    
  // }
  
}



