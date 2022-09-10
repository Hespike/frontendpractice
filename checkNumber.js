/*
Write a JavaScript program to check from three given integers that whether a number is greater than or equal to 20 and less than one of the others.
*/

function checkNumber(num1, num2, num3) {
  return (
    (num1 >= 20 && (num1 < num2 || num1 < num3)) ||
    (num2 >= 20 && (num2 < num1 || num2 < num3)) ||
    (num3 >= 20 && (num3 < num2 || num3 < num1))
  );
}

console.log(checkNumber(19, 19, 19));
console.log(checkNumber(23, 23, 10));
console.log(checkNumber(13, 14, 15));
console.log(checkNumber(23, 45, 10));
