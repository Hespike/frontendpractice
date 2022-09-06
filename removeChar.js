/*
Write a JavaScript program to remove a character at the specified position of a given string and return the new string. 
*/

function removeChar(string, charPosition) {
  return string.substring(0, charPosition) + string.substring(charPosition + 1, string.length)
}

console.log(removeChar("Python", 3));
console.log(removeChar("Random", 0));
console.log(removeChar("Example", 11));
