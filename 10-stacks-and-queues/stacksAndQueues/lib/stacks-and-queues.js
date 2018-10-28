'use strict';

// class Node {
//   constructor (value, next=null){
//       this.value = value;
//       this.next = next;
//   }
// };


class Stack{
  constructor(){
    this.storage = [];
    this.top = null;
  };

  push(value){ 

    if(value){
    this.storage.push(value);
    this.top = value;
    return this;
    } else { return undefined; }
  
  }
    
  pop(){ 
    if(this.storage.length > 1 ){    
      this.top = this.storage[this.storage.length-2];
      return this.storage.pop();
    } else if(this.storage.length === 1 ){
      this.top = null;
      return this.storage.pop();

  } else { return "array is empty" }

}

  peek(){ 
    if(this.storage.length === 0){
      return null;
    } else { return this.top}

  }
  
};


class Queue{
  constructor(){
    this.storage = [];
    this.front = null;
    this.rear = null;
    
  };

  enqueue(value){ 

    this.storage.unshift(value);
    this.rear = this.storage[0];
      return this;
      
  }
    
  dequeue(){ 

    if(this.storage){
    this.front = this.storage[this.storage.length-2]
    return this.storage.pop();
  } return "value undefined";

}

  peek(){ 
this.front = this.storage[this.storage.length-1]
    if(this.storage.length <= 0){
      return null;
    } else { return this.front; }
  }
};

module.exports = {
  Stack: Stack,
  // Node: Node,
  Queue: Queue
};

