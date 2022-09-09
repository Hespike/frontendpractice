/*  Write a JavaScript program to check whether three given integer values are in the range 50..99 (inclusive). Return true if one or more of them are in the said range. */

function inRangeThree(num1, num2, num3) {
  return (num1 >= 50 && num1 <= 99) || (num2 >= 50 && num2 <= 99) || (num3 >= 50 && num3 <= 99);
}

console.log(inRange(10, 50, 10));
console.log(inRange(100, 200, 5000));
