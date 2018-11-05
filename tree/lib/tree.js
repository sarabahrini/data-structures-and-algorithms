'use strict';

class Node {
  constructor(value, left, right, parent){
    this.value = value;
    this.left.value = null;
    this.right = null;
    this.parent = parent;
  }
}

class BinaryTree{
  constructor(){
    this.root = null;
  }
}
let nodeOne = new Node (1);
let BST = new BinaryTree(nodeOne);