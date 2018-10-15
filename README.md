# data-structures-and-algorithms

# Reverse an Array
<!-- Short summary or background information -->
take an array of numbers and return a new array with reversed numbers.

## Challenge
<!-- Description of the challenge -->
Take the array of numbers and iterate through the array indexes and push the reversed array to a new array. 

## Solution
<!-- Embedded whiteboard image -->
function reverseArray(input){
    // console.log(input, 'INPUT')
    let output = [];
    console.log(input.length-1);
    for (let i=input.length-1; i>=0; i--){
     output.push(input[i]);
    }
    return output;
  }
  console.log(reverseArray([1, 2, 3, 4, 5]));

  ![whiteboarding](https://raw.githubusercontent.com/sarabahrini/data-structures-and-algorithms/master/image/Image%20from%20iOS%20(7).jpg)

