/*
Write a JavaScript program to check whether three given numbers are increasing in strict mode or in soft mode.
*/

function softOrStrict(num1, num2, num3) {
  if (num2 > num1 && num3 > num2) {
    return "strict mode";
  } else if (num3 > num2) {
    return "Soft mode";
  } else {
    return "Undefinded";
  }
}

console.log(softOrStrict(12, 15, 20));
console.log(softOrStrict(13, 10, 20));
console.log(softOrStrict(10, 20, 30));
console.log(softOrStrict(41, 20, 10));
