/*
Write a JavaScript program to move last three character to the start of a given string. The string length must be greater or equal to three.
*/

function moveLast(str) {
  if (str.length < 3) {
    return "Nem jó paraméter.";
  } else {
    return str.substring(str.length - 3) + str.slice(0, -3);
  }
}

console.log(moveLast("exampLes"));
console.log(moveLast("1234"));
