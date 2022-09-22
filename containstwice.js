/*
Write a JavaScript program to test whether a given array of integers contains 30 and 40 twice. The array length should be 0, 1, or 2
*/

function containsTwice(array) {

  return (array[0] === 30 && array[1] === 30) || (array[0] === 40 && array[1] === 40);
}

console.log(containsTwice([30, 30]));
console.log(containsTwice([40, 40]));
console.log(containsTwice([20, 20]));
