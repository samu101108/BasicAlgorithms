
function destroyer(arr) {
//The line bellow will turn all 'arr' into an array
//that can be accessed by its indexes
//e.g.: args[0], args[1], etc.
  var args = Array.prototype.slice.call(arguments);
  for(var i=0; i < arr.length; i++){//the first iteration will go
    //through 'arr'
    for(var j=0; j < args.length; j++){//this second loop will go
      //by 'args' positions
      if(arr[i] === args[j]){//testing if each element of 'arr' is
      //equal to each element of 'args'...
        delete arr[i];//...and if it is equal, delete the equal ones
        // of 'arr'
      }
    }
  }
  return arr.filter(Boolean);//return a filtered result, in this case
  //any element that is not false.
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
