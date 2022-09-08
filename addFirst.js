/*
Write a JavaScript program to create a new string from a given string with the first character of the given string added at the front and back.
*/

function addFirst(string){

return string.charAt(0) + string + string.charAt(0);
}

console.log(addFirst("Hello"));
console.log(addFirst(""));
