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
      return treeArray;
    }
    return pTraverse(node, []);
  };

inOrder( node = this.root ){
  const traverse = (node, array) => {
    if(node){
      array.push(node.value);
    } else { 
      return null;
    }
    if(node.right){
      traverse(node.right, array);
    }
    if(node.left){
      traverse(node.left, array)
    }
    return array; 
  }
  return traverse(node,[]);
  }


  //   postOrder(node = this.root) {
  //     if (node === null) return null;

  //     let array = [];

  //     function populateArray(node) {
  //       if (node.left !== null) {
  //         populateArray(node.left);
  //       }
  //       if (node.right !== null) {
  //         populateArray(node.right);
  //       }
  //       array.push(node);
  //     }
  //     populateArray(node);

  //     return array;
  //   }

  //   breadthFirst() {

  //     const queue = new Queue();
  //     const array = [];
  //     if (!this.root) return "Value does not exist";
  //     queue.enqueue(this.root);
  //     let currentNode = queue.front;


  //     while (queue.storage.length > 0) {

  //       if (currentNode.left) { queue.enqueue(currentNode.left); }
  //       if (currentNode.right) { queue.enqueue(currentNode.right); }
  //       currentNode = queue.dequeue();


  //       array.push(currentNode.value);
  //     }
  //     return array;
  //   }
  // }

  // class BinarySearchTree {
  //   constructor() {
  //     this.root = null;
  //   }

  //   add(node) {
  //     if (this.root === null) {
  //       this.root = node;
  //       return;
  //     }

  //     let currentNode = this.root;

  //     while (currentNode !== null) {
  //       if (node.value < currentNode.value) {
  //         if (currentNode.left !== null) {
  //           currentNode = currentNode.left;
  //         } else {
  //           currentNode.left = node;
  //           return;
  //         }
  //       }
  //       if (node.value > currentNode.value) {
  //         if (currentNode.right !== null) {
  //           currentNode = currentNode.right;

  //         } else {
  //           currentNode.right = node;
  //           return;
  //         }
  //       }
  //     }

  //     return;
  //   }


  //   search(value) {

  //     if (this.root === null) {
  //       return 'Tree is empty';
  //     }

  //     let currentNode = this.root;

  //     while (currentNode !== null) {
  //       if (value === currentNode.value) {
  //         return currentNode;

  //       } else if (value < currentNode.value) {
  //         if (currentNode.left === null) {
  //           return "Value does not exist";
  //         } else {
  //           currentNode = currentNode.left;
  //         }
  //       } else if (value > currentNode.value) {
  //         if (currentNode.right === null) {
  //           return "Value does not exist";
  //         } else {
  //           currentNode = currentNode.right;
  //         }
  //       }
  //     }
  //   }

}


module.exports = { Node, BT };
// module.exports = BT;
// module.exports = BinarySearchTree;

