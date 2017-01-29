function mutation(arr) {
//Firs we convert arr[0] and arr[1] to lower case
  mutant = arr[1].toLowerCase();//This is the word to be tested
  //if it is on noMutant
  noMutant = arr[0].toLowerCase();

  for (i=0;i<mutant.length;i++) {
  //do a loop in each index of the word
  //if any letter of 'mutant' is found, it will return less than 0
  //so it will be false
    if(noMutant.indexOf(mutant[i]) < 0)
      return false;
    }
    return true;
}

mutation(["hello", "hey"]);
