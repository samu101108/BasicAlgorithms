function getIndexToIns(arr, num) {
  var newArr = arr;
  newArr.push(num);//putting the second paramemter 'num' inside a 'newArr'
  newArr.sort(function(a,b){return a-b;});//sorting the numbers
  for (var i =0; i < newArr.length; i++){
    if(num == newArr[i]){//if 'num' is equal onde ov the elements of 'newArr' so...
      return newArr.indexOf(num);//retunr the index of the array with the method 'indexOf'
    }
  }
}

getIndexToIns([40, 60], 50);
