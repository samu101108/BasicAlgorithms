function repeatStringNumTimes(str, num) {
  // repeat after me
  if (num>0){
  str = str.repeat(num);
  return str;
  }
  else{
    return "";
  }
}

repeatStringNumTimes("Meow", 3);
