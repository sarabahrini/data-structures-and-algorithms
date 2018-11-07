'use strict';

const { Node, BinaryTree, BinarySearchTree } = require('../tree/tree.js');

// new Node (value, root.left, root.right)
const A = new Node('a', B, C);
const B = new Node('b', D);
const C = new Node('c', E, F);
const D = new Node('d');
const E = new Node('e');
const F = new Node('f');

// A.left = B;
// A.right = C;
// B.left = D;
// C.left = E;
// C.right = F;

const emptyTree = new BinaryTree();
const tree = new BinaryTree(A);

describe('Test BinaryTree preOrder method', () => {

  it('should return null when the tree is empty or there is no root', () => {})
  it('should return array with preOrder tree nodes when tree has multiple levels', () => {})
  it('should return array with two index when there is only root and one node on the right', () => {})

});

describe('Test BinaryTree inOrder method', () => {

  it('should return null when the tree is empty or there is no root', () => {})
  it('should return array with inOrder tree nodes when tree has multiple levels', () => {})
  it('should return array with two index when there is only root and one node on the right', () => {})

});

describe('Test BinaryTree postOrder method', () => {

  it('should return null when the tree is empty or there is no root', () => {})
  it('should return array with postOrder tree nodes when tree has multiple levels', () => {})
  it('should return array with two index when there is one level , one node on right', () => {})

});

const one = new Node (1);
const two = new Node (2);
const three = new Node (3);
const four = new Node (4);
const five = new Node (5);
const five = new Node (6);

xdescribe('Test BinarySearchTree add method', () => {

  xit('should make the added the root of empty tree', () => {})
  xit('should add the node when tree has multiple levels to the correct position', () => {})
  xit('should add the node smaller than root to the left edge of the root', () => {})

});

xdescribe('Test BinaryTree search method', () => {

  xit('should return Tree is empty', () => {})
  xit('should return value not found', () => {})
  xit('should return the searched value', () => {})

});

