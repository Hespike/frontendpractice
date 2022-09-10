/*
Write a JavaScript program to check three given numbers, if the three numbers are same return 30 otherwise return 20 and if two numbers are same return 40.
*/

function numberChecker(num1, num2, num3) {
  if (num1 === num2 && num1 === num3 && num2 === num3) {
    return 30;
  } else if (num1 === num2 || num1 === num3 || num2 === num3) {
    return 40;
  } else {
    return 20;
  }
}

console.log(numberChecker(10, 10, 20));
console.log(numberChecker(10, 10, 10));
console.log(numberChecker(10, 20, 30));
