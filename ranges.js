/* Write a JavaScript program to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.*/

function ranges(num1, num2) {
  if ((num1 > 40 && num1 < 60 && num2 > 40 && num2 < 60) || (num1 > 70 && num1 < 100 && num2 > 70 && num2 < 100)) {
    return true;
  } else {
    return false;
  }
}

console.log(ranges(50, 52));
console.log(ranges(89, 90));
console.log(ranges(51, 89));
console.log(ranges(51));
