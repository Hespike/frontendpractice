/* Write a JavaScript program to check whether a given integer is within 20 of 100 or 400. */

function numberChecker(number) {
  return ((Math.abs(100 - number) <= 20) || (Math.abs(400 - number) <= 20));
}

console.log(numberChecker(80));
console.log(numberChecker(30));
console.log(numberChecker(410));
