/*
Write a JavaScript program to create a new string from a given string taking the last 3 characters and added at both the front and back. The string length must be 3 or more.
*/

function lastCharacters(string) {
  if (string.length >= 3) {
    return string.charAt(string.length-3) + string.charAt(string.length-2) + string.charAt(string.length-1) + string + string.charAt(string.length-3) + string.charAt(string.length-2) + string.charAt(string.length-1)
  } else {
    return "Your string should be at least 3 characters long.";
  }
}

console.log(lastCharacters("Hello"));
console.log(lastCharacters("Example"));
console.log(lastCharacters("Le"));
