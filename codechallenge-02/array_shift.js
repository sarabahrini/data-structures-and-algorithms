'use strict';

module.exports = insertShiftArray;

function insertShiftArray(arr, value){
  let middle = Math.ceil(arr.length/2);
  let newArr = [];
  newArr[middle] = value;
  for (let i = 0; i<= arr.length; i++){
    if(i < middle){
      newArr[i] = arr[i];
    } else if(i > middle){
       newArr[i] = arr[i - 1];
    }
  }
    return newArr;
};



