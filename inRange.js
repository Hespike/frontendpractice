/* Write a JavaScript program to check whether two given integer values are in the range 50..99 (inclusive). Return true if either of them are in the said range. */

function inRange(num1, num2) {
  return (num1 >= 50 && num1 <= 99) || (num2 >= 50 && num2 <= 99);
}

console.log(inRange(10, 50));
console.log(inRange(100, 200));
