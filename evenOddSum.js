/*
 Write a JavaScript code to divide a given array of positive integers into two parts. First element goes to first part, second element goes to second part, and third element goes to first part and so on. Now compute the sum of two parts and store into an array of size two.
 */

function evenOddSum(array) {
  let result = [0, 0];

  for (let i = 0; i < array.length; i++) {
    if (i % 2 == 0) {
      result[1] += array[i];
    } else if (i % 2 == 1) {
      result[0] += array[i];
    }
  }
  return result
}

console.log(evenOddSum([1, 3, 6, 2, 5, 10]))
