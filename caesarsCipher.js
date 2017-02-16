function rot13(str){
var cipher = [], text = [];
  for (var i = 0; i < str.length; i++) {
   var char = str.charCodeAt(i); // coverting string to charcode
   //testing from letter 'A' to 'M'
   //and shifting + 13
      if (char >= 65 && char <= 77)
        cipher.push(char + 13);
    //testing from letter 'N' to 'Z'
    //and shifting - 13
      else if (char >= 78 && char <= 90)
        cipher.push(char - 13);
    //Cheking for any non-alpha numeric characters and space
      else if (char == /[.,\/#!$%\^&\*;:{}=\-_`~()]/g)
        cipher.push(char);
      else
        cipher.push(char);
      }

  for (var j = 0; j < cipher.length; j++){
    //converting charcode to String again
    letters = String.fromCharCode(cipher[j]);
    text.push(letters);
  }
  words = text.join("");//turning array into a unique String
  return words;
}
rot13("SERR CVMMN!");
