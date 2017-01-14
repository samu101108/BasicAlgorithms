function findLongestWord(str) {

  /*
pass input parameter in the function findLogestWord
steps:
1. break the string into an array
2. loop through the array to compare which of its values is the longgest
3. return the last bigger size found on this array (remember the chalenge require a number as a return value)
*/

  str = str.split(" ");
  //str = str.sort();//
  bigWord = 0;
  for(var i = 0; i < str.length; i++){
    if(str[i].length > bigWord){ // If str[i].length is greater than bigWord
	bigWord = str[i].length; // then to bigWord is assigned new value
     }
  }

  return bigWord;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
