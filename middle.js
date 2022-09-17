/*
Write a JavaScript program to create a new string without the first and last character of a given string.
*/

function middle(str) {

  return str.substring(1, str.length - 1);
}

console.log(middle("example"));
console.log(middle("12345678"));
