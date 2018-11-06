'use strict';

const { Node, BinaryTree, BinarySearchTree } = require('../tree/tree.js');

const A = new Node('A');
const B = new Node('B');
const C = new Node('C');
const D = new Node('D');
const E = new Node('E');
const F = new Node('F');

A.left = B;
A.right = C;
B.left = D;
C.left = E;
C.right = F;

const emptyTree = new BinaryTree();
const tree = new BinaryTree(A);
const subTree1 = new BinaryTree(C);
const subTree2 = new BinaryTree(E);

describe('Testing BinaryTree preOrder method', () => {
  it('should work for an empty tree', () => {
    expect(emptyTree.preOrder()).toEqual(null);
  });
  it('should work for a tree with 3 levels', () => {
    expect(tree.preOrder()).toEqual([A, B, D, C, E, F]);
  });
  it('should work for a tree with 2 levels', () => {
    expect(subTree1.preOrder()).toEqual([C, E, F]);
  });
  it('should work for a tree with 1 level', () => {
    expect(subTree2.preOrder()).toEqual([E]);
  });
});

describe('Testing BinaryTree inOrder method', () => {
  it('should work for an empty tree', () => {
    expect(emptyTree.inOrder()).toEqual(null);
  });
  it('should work for a tree with 3 levels', () => {
    expect(tree.inOrder()).toEqual([D, B, A, E, C, F]);
  });
  it('should work for a tree with 2 levels', () => {
    expect(subTree1.inOrder()).toEqual([E, C, F]);
  });
  it('should work for a tree with 1 level', () => {
    expect(subTree2.inOrder()).toEqual([E]);
  });
});

describe('Testing BinaryTree postOrder method', () => {
  it('should work for an empty tree', () => {
    expect(emptyTree.postOrder()).toEqual(null);
  });
  it('should work for a tree with 3 levels', () => {
    expect(tree.postOrder()).toEqual([D, B, E, F, C, A]);
  });
  it('should work for a tree with 2 levels', () => {
    expect(subTree1.postOrder()).toEqual([E, F, C]);
  });
  it('should work for a tree with 1 level', () => {
    expect(subTree2.postOrder()).toEqual([E]);
  });
});

const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
const four = new Node(4);
const five = new Node(5);
const six = new Node(6);

const emptySearchTree = new BinarySearchTree();
const searchTree = new BinarySearchTree();

describe('Testing BinarySearchTree add method', () => {
  it('should add a node to the correct position', () => {
    searchTree.add(three);
    expect(searchTree.root).toEqual(three);
  });
  it('should add a node to the correct position', () => {
    searchTree.add(two);
    expect(searchTree.root.left).toEqual(two);
    expect(three.left).toEqual(two);
  });
  it('should add a node to the correct position', () => {
    searchTree.add(one);
    expect(searchTree.root.left.left).toEqual(one);
    expect(two.left).toEqual(one);
  });
  it('should add a node to the correct position', () => {
    searchTree.add(five);
    expect(searchTree.root.right).toEqual(five);
    expect(three.right).toEqual(five);
  });
  it('should add a node to the correct position', () => {
    searchTree.add(four);
    expect(searchTree.root.right.left).toEqual(four);
    expect(five.left).toEqual(four);
  });
  it('should add a node to the correct position', () => {
    searchTree.add(six);
    expect(searchTree.root.right.right).toEqual(six);
    expect(five.right).toEqual(six);
  });
});

describe('Testing BinarySearchTree search method', () => {
  it('should return the correct node', () => {
    expect(searchTree.search(1)).toEqual(one);
  });
  it('should return the correct node', () => {
    expect(searchTree.search(2)).toEqual(two);
  });
  it('should return the correct node', () => {
    expect(searchTree.search(3)).toEqual(three);
  });
  it('should return the correct node', () => {
    expect(searchTree.search(4)).toEqual(four);
  });
  it('should return the correct node', () => {
    expect(searchTree.search(5)).toEqual(five);
  });
  it('should return the correct node', () => {
    expect(searchTree.search(6)).toEqual(six);
  });
  it('should return Node with specified value does not exist', () => {
    expect(searchTree.search(7)).toEqual('Value does not exist');
  });
  it('should return Tree is empty if tree is empty', () => {
    expect(emptySearchTree.search(8)).toEqual('Tree is empty');
  });
});