/*
Write a JavaScript program to create a new string from a given string, removing the first and last characters of the string if the first or last character are 'P'.
Return the original string if the condition is not satisfied.
*/

function isP(string) {
  if (string.charAt(0) === "P" || string.charAt(string.length - 1) === "P") {
    return newString = string.slice(1, string.length - 1);
  } else {
    return string;
  }
}

console.log(isP("Peter"));
console.log(isP("Example"));
console.log(isP("HelP"));
