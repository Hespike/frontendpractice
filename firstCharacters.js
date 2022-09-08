/*
Write a JavaScript program to create a new string from a given string taking the first 3 characters and added at both the front and back. The string length must be 3 or more.
*/

function firstCharacters(string) {
  if (string.length >= 3) {
    return string.charAt(0) + string.charAt(1) + string.charAt(2) + string + string.charAt(0) + string.charAt(1) + string.charAt(2);
  } else {
    return "Your string should be at least 3 characters long.";
  }
}

console.log(firstCharacters("Hello"));
console.log(firstCharacters("Example"));
console.log(firstCharacters("Le"));
