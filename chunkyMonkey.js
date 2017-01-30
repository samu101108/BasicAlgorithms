
function chunkArrayInGroups(arr, size) {
  var times = arr.length;
  var sliced = [];
  var newOne = [];
  var begin = 0;
  var end = size;
  for(var i = 0; i < times; i++){
    sliced = arr.slice(begin,end); //Method .slice() can take two arguments,
    begin += size;//that are changed with the second argument of the function call
    end += size;  //at each loop iteration it adds the 'size' to the 'begin' and 'end'.
    if(sliced != false){//And if it is not false (I mean empty), it is pushed
    newOne.push(sliced);//to 'newOne' array.
    }
  }
  return newOne;
}

chunkArrayInGroups(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l"], 12);
