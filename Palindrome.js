function palindrome(str) {
    var s = str;
    
    //removing some punctuarion and characters
    var punctuationless = s.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    //removing extra spaces

    var finalString = punctuationless.replace(/\s{2,}/g," ");
    var split = finalString.split(" ");
    var join = split.join("");
    var lower = join.toLowerCase();

//This inner function is to reverse the string
function reverseString(s) {
  splited = s.split("");
    reversed = splited.reverse();
      joined = reversed.join("");
  reversed = joined;
  
  return reversed;
}
reverseString(lower);

//Here is to check if the reversed string is equals to the original one    
if (lower === reversed){return true}
else {return false}
}

s = palindrome("Roma me tem Amor");
