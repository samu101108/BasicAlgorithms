
function chunkArrayInGroups(arr, size) {
  // Break it up.
  var count = 0;
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
count = count + size;
    console.log(count);
arr.slice(count);
    console.log(arr);
newArr.push(arr);
    console.log(newArr);

}
  return newArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
