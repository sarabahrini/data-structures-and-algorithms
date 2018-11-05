'use strict';

const binaryTree = require ('./binaryTree.js');
const node = require ('./node.js');

const apples = new Node('Apples');
const bananas = new Node('Bananas');
const cucumbers = new Node('Cucumbers');

const binaryTree = new Tree (apples);
apples.left = bananas;
apples.right = cucumbers;


binaryTree.preOrder();

