'use strict';


class HashTable {

  constructor(size) {
    this.size = size;
    this.map = new Array(size);
  }

  hash(key) {
    return key.split('').reduce((acc,cur) => acc + cur.charCodeAt(0), 0) % this.size;
  }

  add(key, value) {
    if (arguments.length !== 2) return 'Bad request';
    let hash = this.hash(key);
    if(!this.map[hash]) this.map[hash] = [];
    this.map[hash].push({[key]:value});
  }

  find(key) {
    let hash = this.hash(key);
    if (!this.map[hash]) return 'Not found';
    else {
      let found = this.map[hash].find(obj => Object.keys(obj).includes(key));
      if (!found) return 'Not found';
      else return found[key];
    }
  }

  contains(key) {
    let hash = this.hash(key);
    if (!this.map[hash]) return false;
    else {
      return this.map[hash].filter(obj => Object.keys(obj).includes(key)).length > 0;
    }
  }

  getHash(key) {
    let hash = this.hash(key);
    if (!this.map[hash]) return 'Cannot find ' + key;
    else {
      return hash;
    }
  }

}

function joinHashmaps(hm1, hm2) {
  if (arguments.length !== 2) {
    return 'Two hashmaps are needed';
  }

  let result = hm1.map.reduce((acc, cur) => {
    for (let i = 0; i < cur.length; i++) {
      acc.push(Object.entries(cur[i]));
    }
    return acc;
  }, []);
  result = result.reduce((acc, cur) => {
    return acc.concat(cur);
  }, []);
  for (let i = 0; i < result.length; i++) {
    console.log(result[i][0]);
    let val = hm2.find(result[i][0]);
    if (val === 'Not found') {
      result[i].push(null);
    } else {
      result[i].push(val);
    }
  }
  return result;
}

module.exports =  HashTable;
module.exports = joinHashmaps;