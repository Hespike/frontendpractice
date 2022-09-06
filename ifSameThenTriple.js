//Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum.

function ifSameThenTriple(num1, num2) {
  if (num1 == num2) {
    return (num1 + num2) * 3;
  }
  return "They are not the same.";
};

console.log(ifSameThenTriple(3, 3));
console.log(ifSameThenTriple(5, 3));
