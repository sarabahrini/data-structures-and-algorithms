'use strict';

const { Node, BinaryTree, BinarySearchTree } = require('../tree/tree.js');

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

