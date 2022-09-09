/*
Write a JavaScript program to find the larger number from the two given positive integers, the two numbers are in the range 40..60 inclusive.
*/

function largerInRange(num1, num2) {
  if (num1 >= 40 && num1 <= 60 && num2 >= 40 && num2 <= 60) {
    return Math.max(num1, num2);
  } else {
  return "Not in range, or not enough parameter."
  }
}

console.log(largerInRange(50,55));
console.log(largerInRange(20,55));
console.log(largerInRange(40, 60));
