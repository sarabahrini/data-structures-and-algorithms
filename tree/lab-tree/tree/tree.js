'use strict';

class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

// class Queue {
//   constructor(){
//     this.front = null;
//     this.rear = null;
//     this.storage = [];
//   }
//     enqueue(node){ 

//     this.storage.unshift(node);
//     this.rear = this.storage[0];
//     if(!this.front){
//       this.front = this.storage[0];
//     } 
//       return this;

//   }

//   dequeue(){ 

//     if(this.storage){
//     this.front = this.storage[this.storage.length-2]
//     return this.storage.pop();
//   } return "value undefined";

// }
// }

//BT=BinaryTree 

class BT {
  constructor(root = null) {
    this.root = root;
  }

  preOrder(node = this.root) {

    const treeArray = [];

    const pTraverse = (node, treeArray) => {
      if (node) {
        treeArray.push(node.value);
      } else {
        return null;
      }
      if (node.left) {
        pTraverse(node.left, treeArray);
      }
      if (node.right) {
        pTraverse(node.right, treeArray);
      }
    }
    pTraverse(node, treeArray);
    return treeArray;
  };

  inOrder(node = this.root) {

    const array = [];

    const inTraverse = (node, array) => {

      if (!node) {
        return;
      }

      inTraverse(node.left, array);
      array.push(node.value);
      inTraverse(node.right, array);

    }
    inTraverse(node, array);
    return array;
  }


  postOrder(node) {
    const array = [];

    const postTraverse = (node, array) => {

      if (!node) {
        return;
      }

      postTraverse(node.left, array);
      postTraverse(node.right, array);
      array.push(node.value);

    }

    postTraverse(node, array);
    return array;
  }

}
//BST= BinarySearchTree
class BST {
  constructor(root=null) {
    this.root = root;
  }

  preOrder(node = null) {
    let arr = [];

    const preTraverse = (node, arr) => {
      if (!node) {
        return;
      }
      arr.push(node.value);
      preTraverse(node.left, arr);
      preTraverse(node.right, arr)
    }

    preTraverse(node, arr);
    return arr
  }


  add(val) {

    if (this.root === null) {
      this.root = new Node(val);
      return;
    }
  

    addRecursive(this.root, val);

    function addRecursive(node, val) {
      if (node === null) {
        node = new Node(val);
        return node;
      }
      if (node.value > val) {
        node.right = addRecursive(node.right, val);
        return node;
      }
      else if (node.value < val) {
        node.left = addRecursive(node.left, val);
        return node;
      }

    }
  
  }

  search(node = null, value) {
    if (node.value === null || value === null) {
      return node;
    }
    if (node.value < value) {
      return this.search(node.left, value);
    }

    else {
      return this.search(node.right, value);
    }

  }
}

module.exports = { Node, BT, BST };


