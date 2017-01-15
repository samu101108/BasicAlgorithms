function confirmEnding(str, target) {
//the two parameters above are the string 'str'(sentence or word) and the substring
//'target'(word, letter or a part of the whole string)
  if(str.substring(str.length-target.length) == target){//checks if the size of
    //the target is equal of size of the substring
    return true;
  }
  else{return false;}

}

confirmEnding("Bastiano", "ano");
