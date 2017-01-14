function largestOfFour(arr) {
  var results = [];//this empty array will be filled with great numbers
  for (var i = 0; i < arr.length; i++) {
    var largestNumber = 0;
    for (var j = 0; j < arr[i].length; j++) {
      if (arr[i][j] > largestNumber) {
        largestNumber = arr[i][j];
      }
    }
    results[i] = largestNumber;
  }

  return results;
}
