'use strict';
function binarySearh (arr, value){
  
  let startIndex = 0;
  let endIndex = arr.length - 1;

    while (startIndex <= endIndex ){
      let midIndex = Math.ceil((startIndex + endIndex)/2);

      if(value === arr[midIndex]){
        return midIndex;
      }else if(value < arr[midIndex]){
      endIndex = midIndex - 1; 

      }else if (value > arr[midIndex]){
        startIndex = midIndex + 1;
      }
    }
return undefined;
  }
 
binarySearh([1,2,3,4,5,6,7,8,9,10], 5);