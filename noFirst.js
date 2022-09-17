/*
Write a JavaScript program to concatenate two strings except their first character.
*/

function noFirst(str1, str2) {

  return str1.substring(1, str1.length) + str2.substring(1, str2.length);
}

console.log(noFirst("example", "another"));
console.log(noFirst("1234", "5678"));
