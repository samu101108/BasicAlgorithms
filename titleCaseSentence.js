
//This function will use the replace method with regular expression to match the
//begin of a word, number or underline, the same as [A-Za-z0-9_] with '\w',
//and this is on the begin of a line with '\S', the same as
/*
[^ \f\n\r\t\v\u00A0\u1680\u180e\u2000\u2001\u2002\u2003\u2004
\u2005\u2006\u2007\u2008\u2009\u200a\u2028\u2029\u2028\u2029\u202f
\u205f\u3000].
*/
//And the global scope of the string wiht 'g'
//complete expression is: /\w\S*/g


function titleCase(str) {
      return str.replace(/\w\S*/g,
      function(txt){//this functios will take every char at 0 postion
        //and (with .charAt(0)) and put into upper case (with .toUpperCase())
        //after, concatenate the remainder of each string putting it into
        //lower case.
        //.substr(1) takes the remainder and .toLowerCase() changes it
        //to lower case.
        return txt.charAt(0).toUpperCase() +
      txt.substr(1).toLowerCase();});

}

titleCase("JavaScript is a great language for front end");
