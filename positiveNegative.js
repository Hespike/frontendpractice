/*
Write a JavaScript program to check from two given integers, whether one is positive and another one is negative.
*/

function positiveNegative(num1, num2) {
  return ((num1 >= 0 && num2 < 0) || (num2 >= 0 && num1 < 0));
}

console.log(positiveNegative(10, -20));
console.log(positiveNegative(-10, 20));
console.log(positiveNegative(10, 20));
console.log(positiveNegative(-10, -20));

