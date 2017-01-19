function slasher(arr, howMany) {
//splice method require one parameter and there are 2 optional parameters.
//The splice with the first one argument 'howMany' will return the sliced remaining to 'arr'
  return arr.splice(howMany);
}

slasher([1, 2, 3], 2);
