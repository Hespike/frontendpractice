/*
Write a JavaScript program to create a new string of 4 copies of the last 3 characters of a given original string. The length of the given string must be 3 and above. 
*/

function copyFour(str) {
  let finalstr = str.substring(str.length - 3);

  if (str.length < 3) {
    return "The string is too short.";
  } else {
    return finalstr.repeat(4);
  }
}

console.log(copyFour("example"));
console.log(copyFour("ab"));
