
'use strict';

class Node {
  constructor(value, left, right, parent){
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = parent;
  }
}

module.exports = Node;