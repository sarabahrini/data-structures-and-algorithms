'use strict';

class BinaryTree{
  constructor(){
    this.root = null;
  }

  preOrder(node=this.root){
    this.logNode(node);
/* 1.log thy self
   2.visit left
   3. visit right
   */ 
  

   //postOrder
  /* 1.visit left 
     2.log thy self
     3. visit right
     */ 

    // return []; //returns array of node in pre-order (required for assignment)
    return; //for the class demo log stuff out
  };


  //below is for class demo
  logNode(node) {
    if (!node) return;

    
/* 1.log thy self
   2.visit left
   3. visit right
   */ 
  
  console.log(node.value);
  console.log(node.left);
  console.log(node.right);
  }

};


module.exports = BinaryTree;



// let nodeOne = new Node (1);
// let BST = new BinaryTree(nodeOne);