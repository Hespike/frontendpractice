/*
Write a JavaScript program to test whether a string end with "Script". The string length must be greater or equal to 6.
*/

function endString(string) {
  if (string.length >= 6) {
    return string.slice(-6) === "Script";
  }
  return "Nem jó paraméter.";
}

console.log(endString("JavaScript"));
console.log(endString("WrongExample"));
