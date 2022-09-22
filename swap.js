/*
Write a JavaScript program to swap the first and last elements of a given array of integers. The array length should be at least 1. 
*/

function swap(array) {
  let firstElement = array[0];
  array[0] = array[array.length - 1];
  array[array.length - 1] = firstElement;
  
  return array;
}

console.log(swap([1, 2, 3, 4]));  
console.log(swap([0, 2, 1]));  
console.log(swap([3]));
