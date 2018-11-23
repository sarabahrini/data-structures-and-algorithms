'use strict';

const HashTable = require('../lib/hashTable.js');

describe('Test hashTable class', () => {

  it('should create a new HashTable', () => {
    const actual = new HashTable(25);
    expect(actual).toBeDefined();
  });

});

describe('Test hashTable add method', () => {

  it('should add a value to the hash table', () => {

    let addHash = new HashTable(25);
    addHash.add('Sara', 'student');
    addHash.add('JB', 'instructor');
    addHash.add('Ashton', 'ta');

    const actual = addHash.map[21];

    expect(actual).toBeDefined();
  });

  it('should require a value to be passed', () => {

    let addHash = new HashTable(15);


    const actual = addHash.add('Sara', null);

    expect(actual).toBe('invalid argument - must have both key and value');
  });

  it('should require a key to be passed', () => {

    let addHash = new HashTable(15);
    addHash.add('Sara', 'student');

    const actual = addHash.add(null, 'student');

    expect(actual).toBe('invalid argument - must have both key and value');
  });

});

describe('Test hashTable find method', () => {

  xit('should return the key and value from the hash table', () => {

    let findHash = new HashTable(26);

    findHash.add('Sara', 'student');
    findHash.add('JB', 'instructor');

    const actual = findHash.find('Sara');

    console.log(actual);

    expect(actual).toBe();
  
  });

  xit('should require a key to be passed', () => {

    let findHash = new HashTable(15);

    const actual = findHash.find();

    expect(actual).toBe('Key Required');
  });

  xit('should return a message if key is not present', () => {

    let findHash = new HashTable(25);

    findHash.add('Sara', 'Student');
    findHash.add('JB', 'instructor');

    const actual = findHash.find('Sohila');

    expect(actual).toBe('Key not Found');
  });

});

describe('Test hashTable contains method', () => {

  xit('should return TRUE if the key exists', () => {


    let findHash = new HashTable(25);
    const key = 'Sara';
    findHash.add(key, 'student');

    const actual = findHash.find(key);

    console.log(actual);

    expect(actual.key).toBeDefined();
  });

  xit('should return FALSE if the key exists', () => {

    let findHash = new HashTable(25);
    const key = 'Sara';
    findHash.add(key, 'student');

    const actual = findHash.find(key);

    console.log(actual);

    expect(actual.key).toBeDefined();
  });

  xit('should return a message if key is not present', () => {

    let addHash = new HashTable(25);
    addHash.add('Sara', 'student');

    const actual = addHash.add(null, 'student');

    expect(actual).toBe('invalid argument - must have both key and value');
  });

});

describe('Test hashTable GerHash method', () => {

  xit('should return the hash of the key', () => {


    let getHash = new HashTable(25);
    const key = 'Sara';

    const actual = getHash.getHash(key);

    console.log(actual);

    expect(actual).toBe(8);
  });


  xit('should require a key to be passed', () => {

    let getHash = new HashTable(25);

    const actual = getHash.getHash();

    expect(actual).toBe('Key Required');
  });

});