/*
Write a JavaScript program to compute the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80
*/

function addNumbers(num1, num2) {
  if (num1 + num2 >= 50 && num1 + num2 <= 80) {
    return 65;
  } else {
    return 85;
  }
}

console.log(addNumbers(30,20));
console.log(addNumbers(50,60));
