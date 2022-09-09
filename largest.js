/* Write a JavaScript program to find the largest of three given integers.   */

function largest(num1, num2, num3) {
  if (arguments.length < 3) {
    return "Nincs elég argument.";
  }
  if (num1 > num2 && num1 > num3) {
    return num1;
  } else if (num2 > num1 && num2 > num3) {
    return num2;
  } else if (num3 > num1 && num3 > num2) {
    return num3;
  } else {
    return "Nincs egyértelműen meghatározható nagyobb szám."
  }
}

console.log(largest(1, 2, 3));
console.log(largest(-10, 100, 0));
console.log(largest(20, 20, 20));
console.log(largest(20));
