/*
Write a JavaScript program to create a new array taking the first and last elements from a given array of integers and length must be greater or equal to 1.
 */

function firstLast(array) {

  let newArray = [array[0], array[array.length-1]];
//  array.push(array[0], array[array.length - 1]);
  return newArray;
}

console.log(firstLast([3, 10, 5]));
