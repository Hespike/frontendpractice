/*
 Write a JavaScript program to create new string with first 3 characters are in lower case from a given string. If the string length is less than 3 convert all the characters in upper case.
*/

function stringConverter(str) {
  if (str.length < 3) {
    return str.toUpperCase();
  } else {
  return str.substring(0,4).toLowerCase() + str.substring(4, str.length);
  }
}

console.log(stringConverter("Ha"));
console.log(stringConverter("Hello"));
console.log(stringConverter("EXAmplestring"));
