function truncateString(str, num) {

  if (str.length <= num){ return str;} //If the length of the string is smaller
  //than the number in the second parameter it returns the string itself.
  else if (num > 3){return str.slice(0, num-3)+"...";}// If the number in the
  //second parameter is greater than 3, it returns the sliced string minus the 3 last
  //characters, concatenated with the three dots.
  else{return str.slice(0, num)+"...";}//Else the number is less than 3, it will
  //return the string concatenated with the three dots.
}

truncateString("Absolutely Longer", 2);
