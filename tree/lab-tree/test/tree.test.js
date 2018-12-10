'use strict';

const { Node } = require('../tree/tree.js');
const { BT } = require('../tree/tree.js');
const { BST } = require('../tree/tree.js');

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
  
    expect(emptyTree.preOrder()).toEqual([]);
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
    expect(emptyTree.inOrder()).toEqual([]);
  })

  it('should return array with inOrder tree nodes when tree has multiple levels', () => {
    let actual = tree.inOrder();
    expect(actual).toEqual(["d", "b", "a", "e", "c", "f"]);
  })
  it('should return array length of 6', () => {
    let actual = tree.inOrder();
    expect(actual.length).toBe(6);
  })

});

})

describe('Test BinaryTree postOrder method', () => {

  it('should return null when the tree is empty or there is no root', () => {
  let actual = emptyTree.postOrder();
  expect(actual).toEqual([]);
  })
  it('should return array with postOrder tree nodes when tree has multiple levels', () => {
    expect(tree.postOrder(A)).toEqual(['d','b','e','f','c','a'])
  })
  it('should return array length of 6', () => {
    expect(tree.postOrder(A).length).toBe(6);
  })

});

const one = new Node (1);
const two = new Node (2);
const three = new Node (3);
const four = new Node (4);
const five = new Node (5);
const six = new Node (6);


const searchTree = new BST();
console.log(searchTree);



describe('Test BinarySearchTree add method', () => {

  it('should make the added node the root of empty tree', () => {
    searchTree.add(1);
    expect(searchTree.root.value).toEqual(1);
  })

  it('should add the node wih the lower value to the left and the node with the higher value to the right', () => {
    searchTree.add(3);
    searchTree.add(2);
    searchTree.add(4);
    expect(searchTree.root.right.value).toEqual(2);
  })
  it('should add the node smaller than root to the left edge of the root', () => {

  })

});


