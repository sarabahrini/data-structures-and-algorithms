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
  