import HashMap from './hashTable';
function firstRepeatedWord(str){

  if(typeof str !== 'string') return "Not a string";
  
  let strMap = new HashMap(str.length);
  let word = '';

  for (let i=0; i< str.length; i++){

    if( str[i] === ' ' || str[i] === ',' || str[i] === '.'){
      if(strMap.contains(word)){
        return word;
      } else {
        strMap.add(word,word);
        word = '';
      }

    } else {
      word += str[i].toLowerCase();
      }
  }
  return "No duplicate words"
}