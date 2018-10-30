'use strict';

class AnimalShelter {
  constructor() {
    this.shelter = [];
  }

  enqueue(animal) {
    this.shelter.unshift(animal);
  }
  dequeue(pref) {
    if (this.shelter.length === 0) {
      return null;
    } else if (pref === undefined) {
      return this.shelter.pop();
    } else {
      for (let i = this.shelter.length - 1; i >= 0; i--) {
        if (this.shelter[i].anima === pref) {
          this.shelter.splice(i, 1)[0];
        }
      }
    }
  }
};


module.exports = AnimalShelter;