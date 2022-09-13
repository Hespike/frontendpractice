/*
Write a JavaScript program to convert the letters of a given string in alphabetical order.
*/

function sortIt(str) {

  return str.split("").sort().join("");
}

console.log(sortIt("Example14523"));
console.log(sortIt("ZDASDSADASVAAA"));
