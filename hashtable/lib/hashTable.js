'use strict';

//Not sure what this does 
// const util = require('util');

class HashTable {

  constructor(size) {
    this.size = size;
    this.map = new Array(size);
  }

  hash(key) {
    return key.split('').reduce((acc, currentValue) => acc + currentValue.charCodeAt(0), 0) % this.size;
  }

  // A method/function named add that takes in both the key and value. This method should hash the key and add the key and value pair to the table.
  add(key, value) {
    if (!key || !value) { return "invalid argument - must have both key and value"; }
    let index = this.hash(key);
    console.log(index, key, value);

    if (!this.map[index]) { this.map[index] = []; }

    this.map[index].push({ [key]: value });
  }

  // A method/function named GetHash that takes in a key and returns the index in the array the key is stored.

  get(key) {
    if (!key) { return 'Key Required'; }
    return this.hash(key);

  }

  // A method/function named Find that takes in the key and returns the value from key/value pair.

  find(key) {
    let index = this.hash(key);
    if (!this.map[index]) return 'Cannot find ' + key;
    else {
      let found = this.map[index].find(obj => Object.keys(obj).includes(key));
      if (!found) return 'Cannot find ' + key;
      else return found[key];
    }
  }

  contains(key) {
    let index = this.hash(key);
    if (!this.map[index]) return false;
    else {
      return this.map[index].filter(obj => Object.keys(obj).includes(key)).length > 0;
    }
  }

  getHash(key) {
    let index = this.hash(key);
    if (!this.map[index]) return 'Cannot find ' + key;
    else {
      return index;
    }
  }



  serialize() {
    let text = JSON.stringify(this);
    return text;
  }

  static deserialize(text) {
    let parsed = JSON.parse(text);
    let table = new HashTable(parsed.size);
    parsed.map.forEach(bucket => {
      if (bucket !== null) {
        for (let i = 0; i < bucket.length; i++) {
          table.add(Object.keys(bucket[i])[0], Object.values(bucket[i])[0]);
        }
      }
    });

    return table;
  }

}

module.exports = HashTable;



