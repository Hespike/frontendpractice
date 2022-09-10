/*
Write a JavaScript program to check from three given numbers (non negative integers) that two or all of them have the same rightmost digit.
*/

function rightDigit(num1, num2, num3) {
  return (num1 % 10 === num2 % 10 || num2 % 10 === num3 % 10 || num1 % 10 === num3 % 10);
}

console.log(rightDigit(12, 22, 222));
console.log(rightDigit(300, 100, 0));
console.log(rightDigit(13, 14, 15));
console.log(rightDigit(0, 5, 10));
