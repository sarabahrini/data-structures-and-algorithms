'use strict';

const { Node } = require('../tree/tree.js');
const { BT } = require('../tree/tree.js');
// const BinarySearchTree = require ('../tree/tree.js');

// new Node (value, root.left, root.right)
const A = new Node('a');
const B = new Node('b');
const C = new Node('c');
const D = new Node('d');
const E = new Node('e');
const F = new Node('f');
A.left = B;
A.right = C;
B.left = D;
C.left = E;
C.right = F;


const emptyTree = new BT();
const tree = new BT(A);
console.log(tree.root);
console.log(tree);

describe('Test validation', () => {
  it('should return null when tree is empty', () => {
    expect(emptyTree.root).toBe(null);
  })
})

describe('Test BinaryTree preOrder method', () => {
  it('should return null when the tree is empty or there is no root', () => {
    
    expect(emptyTree.preOrder()).toBe(null);
  })

  it('should return array with preOrder tree nodes when tree has multiple levels', () => {
    expect(tree.preOrder()).toEqual(['a', 'b', 'd', 'c', 'e', 'f'])
  })

  it('should return array length of 5', () => {
  
    let actual = tree.preOrder().length;
    expect(actual).toBe(6);


  })

describe('Test BinaryTree inOrder method', () => {

  it('should return null when the tree is empty or there is no root', () => {
    expect(emptyTree.inOrder()).toBe(null);
  })
  it('should return array with inOrder tree nodes when tree has multiple levels', () => {
    let actual = tree.inOrder();
    expect(actual).toEqual(["a", "c", "f", "e", "b", "d"]);
  })
  it('should return array length of 5', () => {
    let actual = tree.inOrder();
    expect(actual.length).toBe(6);
  })

});

// describe('Test BinaryTree postOrder method', () => {

//   xit('should return null when the tree is empty or there is no root', () => {})
//   xit('should return array with postOrder tree nodes when tree has multiple levels', () => {})
//   xit('should return array with two index when there is one level , one node on right', () => {})

// });

// const one = new Node (1);
// const two = new Node (2);
// const three = new Node (3);
// const four = new Node (4);
// const five = new Node (5);
// const six = new Node (6);

// describe('Test BinarySearchTree add method', () => {

//   xit('should make the added the root of empty tree', () => {})
//   xit('should add the node when tree has multiple levels to the correct position', () => {})
//   xit('should add the node smaller than root to the left edge of the root', () => {})

// });

// describe('Test BinaryTree search method', () => {

//   xit('should return Tree is empty', () => {})
//   xit('should return value not found', () => {})
//   xit('should return the searched value', () => {})

// });
})
