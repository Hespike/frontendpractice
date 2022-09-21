/*
Write a JavaScript program to create a new array taking the middle elements of the two arrays of integer and each length 3. 
 */

function middleTwo(array1, array2) {

  let newArray = [array1[1], array2[1]];

  return newArray;
}

console.log(middleTwo([3, 10, 5], [3, 4, 5]));
