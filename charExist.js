/*
Write a program to check whether a specified character exists within the 2nd to 4th position in a given string.
*/

function charExist(string, char) {
  if (string.substring(1, 4).includes(char)) {
    return true;
  } else {
    return false;
  }
}

console.log(charExist("Hello", "e"));
console.log(charExist("Example", "k"));
console.log(charExist("String", "s"));
console.log(charExist("String", "t"));
console.log(charExist("String", "r"));
console.log(charExist("String", "i"));
console.log(charExist("String", "n"));
