//This algorithm will return any element that is not  false.
function bouncer(arr) {
//This inner function will check if 'arr' is not false
//and return the ones that are true
  function ifFalse(arr){
    if (arr !== false){
      return arr;
    }
  }
return arr.filter(ifFalse);
//will return a filtered result accordingly
//with ifFalse function
}
bouncer([7, "ate", "", false, 9]);
