/*
Write a JavaScript program to check two given integer values and return true if one of the number is 15 or if their sum or difference is 15.
*/

function isFifteen(num1, num2) {
  return num1 === 15 || num2 === 15 || num1 + num2 === 15 || num1 - num2 === 15 || num2 - num1 === 15;
  /*Alternatív módon a Math.abs(num1 - num2) === 15 is egy jó megoldás lenne az utolsó két || helyett.*/
}

console.log(isFifteen(15, 5));
console.log(isFifteen(7, 8));
console.log(isFifteen(22, 7));
console.log(isFifteen(22, 20));
