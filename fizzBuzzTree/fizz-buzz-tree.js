'use strict';

function FizzBuzzTree(tree) {
  div(tree.root);
  function div(node) {
    if(!node) return null;
    if(node.value%3===0 && node.value%5===0) node.value = 'FizzBuzz';
    if(node.value%5===0) node.value='Buzz';
    if(node.value%3===0) node.value='Fizz';
    div(node.left);
    div(node.right);
  }
}