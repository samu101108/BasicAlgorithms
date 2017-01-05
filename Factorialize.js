function factorialize(num) {
number = num;
var result = [];//An empty arr is initialized
  if (num !==0){ 
    for (var i = 1; i <= num; i++) result.push(i);//o shorter version of adding values to the array
    result = result.reduce(function(a, b){return a * b;});//reduce method to iterate throught array and multiply its values.
  return result;
  }
  return 1; //if factorial 0! is called the result should be 1.
}

var show = factorialize(5);