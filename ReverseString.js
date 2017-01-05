function reverseString(str) {
  reversed = str.split("");
    reversed = reversed.reverse();
      reversed = reversed.join("");
  
  
  return reversed;
}

reverseString("hello");