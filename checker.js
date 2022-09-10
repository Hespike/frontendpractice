/*
Write a JavaScript program to check from two given integers whether one of them is 8 or their sum or difference is 8. 
*/

function checker(num1, num2) {
  return num1 === 8 || num2 === 8 || num1 + num2 === 8 || num1 - num2 === 8;
}

console.log(checker(8, 2));
console.log(checker(10, 12));
console.log(checker(12, 4));
